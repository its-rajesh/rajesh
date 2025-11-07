const ASSET_DIR = "site_assets";
let manifest=null;
const $ = (id)=>document.getElementById(id);

function nearestTau(t, grid){
  let best=grid[0], d=Math.abs(t-best);
  for (const g of grid){ const dd=Math.abs(t-g); if (dd<d){d=dd; best=g;} }
  return best;
}

async function init(){
  try{
    $("status").textContent="loading…";
    const r = await fetch(`${ASSET_DIR}/manifest.json`);
    manifest = await r.json();

    $("specBase").src = `${ASSET_DIR}/${manifest.spec_png}`;

    const taus = manifest.taus;
    $("tau").min = Math.min(...taus);
    $("tau").max = Math.max(...taus);
    $("tau").step = (taus[1]-taus[0]) || 0.5;
    const defTau = taus.includes(2) ? 2 : taus[0];
    $("tau").value = defTau;
    $("tauVal").textContent = defTau.toFixed(2);

    setTau(defTau);
    $("mixAudio").src = `${ASSET_DIR}/${manifest.mixture_wav}`;
    $("status").textContent="";
  }catch(e){
    console.error(e);
    $("status").textContent="error loading assets";
  }
}

function setTau(t){
  const tau = nearestTau(parseFloat(t), manifest.taus);
  $("tauVal").textContent = tau.toFixed(2);
  $("specMask").src = `${ASSET_DIR}/${manifest.mask_prefix}${tau.toFixed(2)}${manifest.mask_suffix}` + `?v=${Date.now()}`;
  $("nearAudio").src = `${ASSET_DIR}/${manifest.near_prefix}${tau.toFixed(2)}${manifest.near_suffix}`;
}

$("tau").addEventListener("input", e => setTau(e.target.value));
window.addEventListener("DOMContentLoaded", init);
