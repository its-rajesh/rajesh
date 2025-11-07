// ===== Configuration & helpers =====
const ASSET_DIR = "site_assets"; // where meta.json and audio live

let meta = null;
let fft = null;
const HOP = 256;

// Audio decoding buffers
let mixtureBuffer = null;   // AudioBuffer, mixture mic-0
let cleanBuffers = [];      // [AudioBuffer]
let cleanDistances = [];    // [meters]

// Spectrogram caches (magnitude)
let S_mix = null;           // [F][T] Float32
let S_src = [];             // per-source [F][T]

// UI elements
const $ = (id) => document.getElementById(id);
const canvas = $("spec");
const ctx = canvas.getContext("2d");

// Hann window / FFT helpers
function hann(N) {
  const w = new Float32Array(N);
  for (let i=0;i<N;i++) w[i] = 0.5*(1-Math.cos((2*Math.PI*i)/(N-1)));
  return w;
}
function stftMag(x, nfft, hop) {
  if (!fft || fft.size !== nfft) fft = new FFT(nfft);
  const F = nfft/2 + 1;
  const frames = Math.floor((x.length - nfft) / hop) + 1;
  const W = hann(nfft);

  const S = Array.from({length: F}, () => new Float32Array(frames));
  const inp = fft.createComplexArray();
  const out = fft.createComplexArray();
  for (let t=0;t<frames;t++){
    const start = t*hop;
    for (let i=0;i<nfft;i++){
      const s = x[start+i] ?? 0;
      inp[2*i]   = s * W[i];
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
function renderSpec(S, mask=null) {
  const F = S.length, T = S[0].length;
  const W = canvas.width, H = canvas.height;
  // dB normalize
  let minDb = +Infinity, maxDb = -Infinity;
  for (let f=0;f<F;f++) for (let t=0;t<T;t++) {
    const v = 20*Math.log10(S[f][t]);
    if (v<minDb) minDb=v; if (v>maxDb) maxDb=v;
  }
  const scale = (v) => (v-minDb) / Math.max(1e-6, (maxDb-minDb));

  const img = ctx.createImageData(W,H);
  for (let y=0;y<H;y++){
    const f = Math.floor(((H-1-y)/(H-1))*(F-1));
    for (let x=0;x<W;x++){
      const t = Math.floor((x/(W-1))*(T-1));
      const db = 20*Math.log10(S[f][t]);
      const g = Math.floor(255*scale(db));
      const idx = (y*W + x)*4;
      img.data[idx  ] = g;
      img.data[idx+1] = g;
      img.data[idx+2] = g;
      img.data[idx+3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  if (mask){
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = "#00ff00";
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

async function fetchJSON(p){ const r=await fetch(p); if(!r.ok) throw new Error(p); return r.json(); }
async function fetchArrayBuffer(p){ const r=await fetch(p); if(!r.ok) throw new Error(p); return r.arrayBuffer(); }

async function decodeAudioToMono(ab) {
  const ac = new (window.AudioContext||window.webkitAudioContext)();
  const buf = await ac.decodeAudioData(ab);
  const chs = buf.numberOfChannels;
  const L = buf.length;
  const data = new Float32Array(L);
  for (let c=0;c<chs;c++){
    const ch = buf.getChannelData(c);
    for (let i=0;i<L;i++) data[i] += ch[i] / chs;
  }
  // return mono as AudioBuffer (1 ch)
  const out = ac.createBuffer(1, L, buf.sampleRate);
  out.copyToChannel(data, 0);
  return out;
}

// Build mask at a given tau using per-source STFT mags on mic-0
function buildMaskAtTau(S_src, distances, tau) {
  const S = S_src.length;
  const F = S_src[0].length;
  const T = S_src[0][0].length;
  const M = Array.from({length:F},()=>new Float32Array(T));
  for (let f=0;f<F;f++){
    for (let t=0;t<T;t++){
      let best = 0, bestv = -1;
      for (let s=0;s<S;s++){
        const v = S_src[s][f][t];
        if (v > bestv){ bestv = v; best = s; }
      }
      M[f][t] = (distances[best] <= tau) ? 1 : 0;
    }
  }
  return M;
}

// Sum clean sources ≤ tau and return a Blob WAV for <audio> src
async function buildNearAudioBlob(cleanBuffers, distances, tau) {
  if (!cleanBuffers.length) return null;
  const sr = cleanBuffers[0].sampleRate;
  const L  = Math.max(...cleanBuffers.map(b=>b.length));
  const mix = new Float32Array(L);
  let any = false;
  for (let i=0;i<cleanBuffers.length;i++){
    if (distances[i] <= tau){
      const ch = cleanBuffers[i].getChannelData(0);
      for (let n=0;n<L;n++) mix[n] += (ch[n] || 0);
      any = true;
    }
  }
  if (!any) return null;
  // normalize
  let m=1e-12; for (let i=0;i<L;i++) m = Math.max(m, Math.abs(mix[i]));
  const g = 0.95 / m; if (g<1) for (let i=0;i<L;i++) mix[i]*=g;
  return encodeWavPCM16(mix, sr);
}
function encodeWavPCM16(samples, sampleRate){
  const numChannels=1, bytesPerSample=2;
  const blockAlign = numChannels*bytesPerSample;
  const byteRate   = sampleRate*blockAlign;
  const dataSize   = samples.length*bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  let off=0;
  const ws = s=>{ for(let i=0;i<s.length;i++) view.setUint8(off++, s.charCodeAt(i)); }
  const u32=v=>{ view.setUint32(off, v, true); off+=4; }
  const u16=v=>{ view.setUint16(off, v, true); off+=2; }
  ws("RIFF"); u32(36+dataSize); ws("WAVE"); ws("fmt "); u32(16);
  u16(1); u16(numChannels); u32(sampleRate); u32(byteRate); u16(blockAlign); u16(16);
  ws("data"); u32(dataSize);
  for (let i=0;i<samples.length;i++){
    let s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(off, s<0 ? s*0x8000 : s*0x7fff, true); off+=2;
  }
  return new Blob([buffer], {type:"audio/wav"});
}

// ===== Main load workflow =====
$("loadBtn").addEventListener("click", async ()=>{
  $("status").textContent = "loading…";
  try {
    // 1) meta.json
    meta = await fetchJSON(`${ASSET_DIR}/meta.json`);
    $("files").innerHTML = `
      <div>Mixture: ${meta.mixture_files.map(m=>`<code>${m}</code>`).join(", ")}</div>
      <div>Sources: ${meta.sources.map(s=>`<code>${s.file}</code> (d=${s.distance_m}m)`).join(", ")}</div>
    `;
    // 2) load audios
    const mixAB  = await fetchArrayBuffer(`${ASSET_DIR}/${meta.mixture_files[0]}`); // mic-0
    mixtureBuffer = await decodeAudioToMono(mixAB);
    const srcPromises = meta.sources.map(s => fetchArrayBuffer(`${ASSET_DIR}/${s.file}`));
    const srcABs = await Promise.all(srcPromises);
    cleanBuffers = await Promise.all(srcABs.map(decodeAudioToMono));
    cleanDistances = meta.sources.map(s => s.distance_m);

    // Set slider defaults
    const tauMin = meta.ui?.tau_min ?? 0;
    const tauMax = meta.ui?.tau_max ?? 6;
    const tauDef = meta.ui?.tau_default ?? 2;
    $("tau").min = tauMin;
    $("tau").max = tauMax;
    $("tau").value = tauDef;
    $("tauVal").textContent = parseFloat($("tau").value).toFixed(2);

    // 3) STFTs (mixture + per-source on mic-0)
    const NFFT = meta.nfft || 1024;
    const HOP  = meta.hop  || 256;
    const mixMono = mixtureBuffer.getChannelData(0);
    S_mix = stftMag(mixMono, NFFT, HOP);

    S_src = [];
    for (let i=0;i<cleanBuffers.length;i++){
      S_src.push(stftMag(cleanBuffers[i].getChannelData(0), NFFT, HOP));
    }

    // 4) Initial render + audio
    const tau = parseFloat($("tau").value);
    const M = buildMaskAtTau(S_src, cleanDistances, tau);
    renderSpec(S_mix, M);

    // mixture audio
    const mixBlob = encodeWavPCM16(mixMono, mixtureBuffer.sampleRate);
    $("mixAudio").src = URL.createObjectURL(mixBlob);

    const nearBlob = await buildNearAudioBlob(cleanBuffers, cleanDistances, tau);
    $("nearAudio").src = nearBlob ? URL.createObjectURL(nearBlob) : "";

    $("status").textContent = "ready ✔";
  } catch (e){
    console.error(e);
    $("status").textContent = "error (open console)";
  }
});

// Slider interaction
$("tau").addEventListener("input", async (e)=>{
  const tau = parseFloat(e.target.value);
  $("tauVal").textContent = tau.toFixed(2);
  if (!S_mix || !S_src.length) return;
  const M = buildMaskAtTau(S_src, cleanDistances, tau);
  renderSpec(S_mix, M);
  const nearBlob = await buildNearAudioBlob(cleanBuffers, cleanDistances, tau);
  $("nearAudio").src = nearBlob ? URL.createObjectURL(nearBlob) : "";
});
