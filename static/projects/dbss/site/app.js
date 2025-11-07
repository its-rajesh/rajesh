// ===== Config =====
const ASSET_DIR = "site_assets";  // relative to this index.html

let meta = null;
let fft = null;
let mixtureBuffer = null;    // decoded mono buffer (mic-0)
let cleanBuffers = [];       // decoded mono buffers
let cleanDistances = [];     // meters
let S_mix = null;            // [F][T]
let S_src = [];              // per-source [F][T]

// UI
const $ = (id) => document.getElementById(id);
const canvas = $("spec");
const ctx = canvas.getContext("2d");

// ===== Utils =====
async function fetchJSON(path){ const r=await fetch(path); if(!r.ok) throw new Error(`fetch ${path}`); return r.json(); }
async function fetchArrayBuffer(path){ const r=await fetch(path); if(!r.ok) throw new Error(`fetch ${path}`); return r.arrayBuffer(); }

// Use OfflineAudioContext so decoding works without a user gesture
async function decodeToMono(ab, targetSr){
  const tmp = new OfflineAudioContext(1, 1, targetSr || 48000); // trivial length; just for decode
  const buf = await tmp.decodeAudioData(ab.slice(0));
  // mixdown to mono
  const chs = buf.numberOfChannels;
  const L = buf.length;
  const sr = buf.sampleRate;
  const mono = new Float32Array(L);
  for (let c=0;c<chs;c++){
    const ch = buf.getChannelData(c);
    for (let i=0;i<L;i++) mono[i] += ch[i] / chs;
  }
  // resample if needed using OfflineAudioContext
  const desired = targetSr || sr;
  if (sr !== desired){
    const ctx2 = new OfflineAudioContext(1, Math.ceil(L*desired/sr), desired);
    const src = ctx2.createBufferSource();
    const out = ctx2.createBuffer(1, L, sr);
    out.copyToChannel(mono, 0);
    src.buffer = out;
    src.connect(ctx2.destination);
    src.start();
    const rendered = await ctx2.startRendering();
    return rendered;
  } else {
    const out = new OfflineAudioContext(1, L, sr).createBuffer(1, L, sr);
    out.copyToChannel(mono, 0);
    return out;
  }
}

function hann(N){
  const w = new Float32Array(N);
  for (let i=0;i<N;i++) w[i] = 0.5*(1 - Math.cos((2*Math.PI*i)/(N-1)));
  return w;
}

function stftMag(x, nfft, hop){
  if (!fft || fft.size !== nfft) fft = new FFT(nfft);
  const F = nfft/2 + 1;
  const frames = Math.max(0, Math.floor((x.length - nfft) / hop) + 1);
  const W = hann(nfft);
  const S = Array.from({length:F},()=>new Float32Array(frames));
  const inp = fft.createComplexArray();
  const out = fft.createComplexArray();
  for (let t=0;t<frames;t++){
    const start = t*hop;
    for (let i=0;i<nfft;i++){
      const s = x[start+i] || 0;
      inp[2*i] = s * W[i];
      inp[2*i+1] = 0;
    }
    fft.transform(out, inp);
    for (let k=0;k<F;k++){
      const re = out[2*k], im = out[2*k+1];
      S[k][t] = Math.sqrt(re*re + im*im) + 1e-12;
    }
  }
  return S;
}

function renderSpec(S, mask=null){
  const F = S.length, T = S[0].length;
  const W = canvas.width, H = canvas.height;
  // dB map
  let minDb=+Infinity, maxDb=-Infinity;
  for (let f=0;f<F;f++) for (let t=0;t<T;t++){
    const v = 20*Math.log10(S[f][t]);
    if (v<minDb) minDb=v; if (v>maxDb) maxDb=v;
  }
  const scale = (v)=> (v-minDb)/Math.max(1e-6, (maxDb-minDb));
  const img = ctx.createImageData(W,H);
  for (let y=0;y<H;y++){
    const f = Math.floor(((H-1-y)/(H-1))*(F-1));
    for (let x=0;x<W;x++){
      const t = Math.floor((x/(W-1))*(T-1));
      const g = Math.floor(255*scale(20*Math.log10(S[f][t])));
      const idx = (y*W + x)*4;
      img.data[idx]=g; img.data[idx+1]=g; img.data[idx+2]=g; img.data[idx+3]=255;
    }
  }
  ctx.putImageData(img, 0, 0);

  if (mask){
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = "#00aa00";
    for (let y=0;y<H;y++){
      const f = Math.floor(((H-1-y)/(H-1))*(F-1));
      for (let x=0;x<W;x++){
        const t = Math.floor((x/(W-1))*(T-1));
        if (mask[f][t] > 0.5) ctx.fillRect(x,y,1,1);
      }
    }
    ctx.restore();
  }
}

function buildMaskAtTau(S_src, distances, tau){
  const S = S_src.length;
  const F = S_src[0].length;
  const T = S_src[0][0].length;
  const M = Array.from({length:F},()=>new Float32Array(T));
  for (let f=0;f<F;f++){
    for (let t=0;t<T;t++){
      let best=0, bestv=-1;
      for (let s=0;s<S;s++){
        const v = S_src[s][f][t];
        if (v>bestv){ bestv=v; best=s; }
      }
      M[f][t] = (distances[best] <= tau) ? 1 : 0;
    }
  }
  return M;
}

function encodeWavPCM16(samples, sampleRate){
  const numChannels=1, bytesPerSample=2;
  const blockAlign=numChannels*bytesPerSample;
  const byteRate=sampleRate*blockAlign;
  const dataSize=samples.length*bytesPerSample;
  const buf = new ArrayBuffer(44+dataSize);
  const v = new DataView(buf);
  let o=0;
  const ws=s=>{ for(let i=0;i<s.length;i++) v.setUint8(o++, s.charCodeAt(i)); }
  const u32=x=>{ v.setUint32(o, x, true); o+=4; }
  const u16=x=>{ v.setUint16(o, x, true); o+=2; }
  ws("RIFF"); u32(36+dataSize); ws("WAVE"); ws("fmt "); u32(16);
  u16(1); u16(numChannels); u32(sampleRate); u32(byteRate); u16(blockAlign); u16(16);
  ws("data"); u32(dataSize);
  for (let i=0;i<samples.length;i++){
    let s = Math.max(-1, Math.min(1, samples[i]));
    v.setInt16(o, s<0 ? s*0x8000 : s*0x7fff, true); o+=2;
  }
  return new Blob([buf], {type:"audio/wav"});
}

async function buildNearAudioBlob(cleanBuffers, distances, tau){
  if (!cleanBuffers.length) return null;
  const sr = cleanBuffers[0].sampleRate;
  const L = Math.max(...cleanBuffers.map(b=>b.length));
  const y = new Float32Array(L);
  let any=false;
  for (let i=0;i<cleanBuffers.length;i++){
    if (distances[i] <= tau){
      const ch = cleanBuffers[i].getChannelData(0);
      for (let n=0;n<L;n++) y[n] += (ch[n]||0);
      any=true;
    }
  }
  if (!any) return null;
  // normalize
  let m=1e-12; for (let i=0;i<L;i++) m = Math.max(m, Math.abs(y[i]));
  const g = 0.95/m; if (g<1) for (let i=0;i<L;i++) y[i]*=g;
  return encodeWavPCM16(y, sr);
}

// ===== Init (auto) =====
async function init(){
  try{
    $("status").textContent = "loading assets…";

    // meta.json
    meta = await fetchJSON(`${ASSET_DIR}/meta.json`);
    const NFFT = meta.nfft || 1024;
    const HOP  = meta.hop  || 256;

    // decode mixture mic-0
    const mixAB = await fetchArrayBuffer(`${ASSET_DIR}/${meta.mixture_files[0]}`);
    mixtureBuffer = await decodeToMono(mixAB, meta.fs || 48000);

    // decode cleans
    const srcABs = await Promise.all(meta.sources.map(s => fetchArrayBuffer(`${ASSET_DIR}/${s.file}`)));
    cleanBuffers = await Promise.all(srcABs.map(ab => decodeToMono(ab, meta.fs || 48000)));
    cleanDistances = meta.sources.map(s => s.distance_m);

    // STFTs
    const mixMono = mixtureBuffer.getChannelData(0);
    S_mix = stftMag(mixMono, NFFT, HOP);
    S_src = [];
    for (let i=0;i<cleanBuffers.length;i++){
      S_src.push(stftMag(cleanBuffers[i].getChannelData(0), NFFT, HOP));
    }

    // initial render/audio
    const tauMin = meta.ui?.tau_min ?? 0;
    const tauMax = meta.ui?.tau_max ?? 6;
    const tauDef = meta.ui?.tau_default ?? 2;
    $("tau").min = tauMin; $("tau").max = tauMax; $("tau").value = tauDef;
    $("tauVal").textContent = parseFloat($("tau").value).toFixed(2);

    const M = buildMaskAtTau(S_src, cleanDistances, tauDef);
    renderSpec(S_mix, M);

    // mixture player: we can point directly to the file
    $("mixAudio").src = `${ASSET_DIR}/${meta.mixture_files[0]}`;

    // near audio blob
    const nearBlob = await buildNearAudioBlob(cleanBuffers, cleanDistances, tauDef);
    $("nearAudio").src = nearBlob ? URL.createObjectURL(nearBlob) : "";

    $("status").textContent = "ready ✓";
  } catch (e){
    console.error(e);
    $("status").textContent = "error (open console)";
  }
}

$("tau").addEventListener("input", async (e)=>{
  const tau = parseFloat(e.target.value);
  $("tauVal").textContent = tau.toFixed(2);
  if (!S_mix || !S_src.length) return;
  const M = buildMaskAtTau(S_src, cleanDistances, tau);
  renderSpec(S_mix, M);
  const nearBlob = await buildNearAudioBlob(cleanBuffers, cleanDistances, tau);
  $("nearAudio").src = nearBlob ? URL.createObjectURL(nearBlob) : "";
});

window.addEventListener("DOMContentLoaded", init);
