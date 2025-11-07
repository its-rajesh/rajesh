const ASSET_DIR="site_assets"; let manifest=null; const $=id=>document.getElementById(id);
function nearestTau(t,grid){let b=grid[0],d=Math.abs(t-b);for(const g of grid){const dd=Math.abs(t-g);if(dd<d){d=dd;b=g}}return b}
async function init(){
  const r=await fetch(`${ASSET_DIR}/manifest.json`); manifest=await r.json();
  $("specBase").src=`${ASSET_DIR}/${manifest.spec_png}`;
  const taus=manifest.taus; $("tau").min=Math.min(...taus); $("tau").max=Math.max(...taus); $("tau").step=(taus[1]-taus[0])||0.5;
  const def=taus.includes(2)?2:taus[0]; $("tau").value=def; $("tauVal").textContent=def.toFixed(2);
  setTau(def); $("mixAudio").src=`${ASSET_DIR}/${manifest.mixture_wav}`;
}
function setTau(t){
  const tau=nearestTau(parseFloat(t),manifest.taus);
  $("tauVal").textContent=tau.toFixed(2);
  $("specMask").src=`${ASSET_DIR}/${manifest.mask_prefix}${tau.toFixed(2)}${manifest.mask_suffix}`+`?v=${Date.now()}`;
  $("nearAudio").src=`${ASSET_DIR}/${manifest.near_prefix}${tau.toFixed(2)}${manifest.near_suffix}`;
}
$("tau").addEventListener("input",e=>setTau(e.target.value)); window.addEventListener("DOMContentLoaded",init);
