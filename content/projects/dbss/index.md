---
title: "Distance Based Source Separation" 
date: 2025-01-01
tags: ["Source separation","Multi-track recordings","Deep learning", "Distance Estimation", "Music Source Separation"]
author: ["Rajesh R", "Ryan M. Corey"]
description: "This research focus on the direction of distance based source separation"
summary: "Current state-of-the-art models, such as Facebook’s Hybrid Transformer Demucs and Band-split RNN, demonstrate strong performance on Western music but struggle with Indian classical music and out-of-domain instrument separation. This performance gap underscores the need for further research into developing source-agnostic and universally robust music source separation models."
cover:
    image: "cover.png"
    alt: "Trends"
    relative: true
editPost:
    URL: ""
    Text: "Indian Institute of Technology Mandi"

---

---

## 🎧 Distance-Based Source Separation

This project explores **distance-aware source separation** using multichannel arrays.  
The goal is to learn a *distance mask* that separates near and far sources directly from spatial cues.

Key ideas:
- Multichannel recordings simulated with varying source distances (1 m, 2.5 m, 4 m)
- Time–frequency features such as IPD, ILD, ITD, and coherence
- Distance-conditioned masks that can be “dragged” across thresholds

---

### 🧪 Interactive Demo

The demo below lets you **adjust the distance threshold** (τ) interactively.  
When you move the slider:
- The **green overlay** shows the STFT regions dominated by sources within τ meters.
- The **bottom audio player** plays the “distance-selected” (near) mixture.
- Everything runs locally in your browser — no uploads.

> 💡 Tip: try τ = 1 m, 2 m, 4 m to hear the progressive separation.

<iframe
  src="/projects/dbss/site/index.html"
  width="100%"
  height="860"
  style="border:none; border-radius:12px; box-shadow:0 4px 24px rgba(0,0,0,0.25);"
  loading="lazy"
></iframe>

<iframe
  src="{{< relURL "projects/dbss/site/index.html" >}}"
  width="100%"
  height="860"
  style="border:none; border-radius:12px; box-shadow:0 4px 24px rgba(0,0,0,0.25);"
  loading="lazy"
></iframe>


---

### 📖 How It Works

- **Simulation:** Each source is placed at a different distance/azimuth around a 4-mic array.
- **Acoustic Model:** Signals are delayed, attenuated, and lightly low-passed to mimic air absorption.
- **Visualization:** The STFT of mic-0 is shown, with an *ideal* distance mask overlay.
- **Audio:** The “distance-selected” audio is simply the sum of the original clean sources whose distance ≤ τ.

All code is open-source and runs entirely client-side.

---

### 📂 Resources

- [GitHub Repository](https://github.com/its-rajesh/rajesh)  
- [Paper / Project Overview](#) (coming soon)


---


