---
title: "Interference & Bleed Reduction"
date: 2025-05-27
tags: ["interference reduction","music source separation","multi-track recordings","Live data"]
author: ["Rajesh R", "Padmanabhan Rajan", "Ryan Corey"]
description: "A research program on reducing microphone bleed and interference in live multitrack recordings."
summary: "From optimization and waveform models to graph networks, conditional generative models, and learnable front ends for live multitrack interference reduction."
cover:
    image: "cover.png"
    alt: "Bleeding"
    relative: true
editPost:
    URL: ""
    Text: "Indian Institute of Technology Mandi and University of Illinois Chicago"
---

<div class="project-program-page">

<div class="program-page-hero program-ir">
  <span class="program-index">01</span>
  <p class="projects-kicker">INTERFERENCE & BLEED REDUCTION</p>
  <h1>Recovering clean sources from live multitrack recordings.</h1>
  <p class="projects-lead">Live recordings are rich sources of musical data, but each microphone often contains substantial bleed from nearby performers. My goal is to recover the intended source on each track while preserving its timbre and musical content.</p>
</div>

<div class="program-question-grid">
  <div><span>Problem</span><p>Simultaneous live recording produces microphone bleed, crosstalk, reverberation, and other interference. Those contaminated tracks are poor supervision for downstream source-separation systems.</p></div>
  <div><span>Goal</span><p>Build practical interference-reduction systems that exploit relationships among the available microphone recordings and generalize from simulated mixtures to real live music.</p></div>
  <div><span>What I did</span><p>I developed a progression of signal-processing and learning-based approaches, moving from source-specific TF models to multichannel waveform models, graph-based relational models, conditional generative models, and learnable front ends.</p></div>
</div>

## Methods developed

<div class="method-timeline">

<div class="method-item"><span>01</span><div><h3>Convolutional Autoencoder (CAE)</h3><p>Treats bleed as additive noise in the STFT-magnitude domain. Separate models are trained for individual stems.</p><small>Strength: simple and fast. Limitation: source-specific models and input-phase reconstruction.</small><a href="../../papers/paper1/">Associated paper →</a></div></div>

<div class="method-item"><span>02</span><div><h3>Learning-free optimization</h3><p>Explicitly models the multitrack recording with an interference matrix and iteratively estimates both the cleaned sources and bleed strengths.</p><small>Strength: interpretable and very strong in ideal linear mixtures. Limitation: iterative and restricted to instantaneous mixing assumptions.</small><a href="../../papers/paper2/">MS thesis →</a></div></div>

<div class="method-item"><span>03</span><div><h3>Truncated U-Net (t-UNet)</h3><p>Replaces iterative optimization with a waveform neural network that learns relationships among microphone recordings and predicts interference-reduced outputs.</p><small>Strength: substantially faster inference and better SDR than the earlier CAE/KAMIR baselines in the simulated setting.</small><a href="../../papers/paper1/">Associated paper →</a></div></div>

<div class="method-item"><span>04</span><div><h3>GIRNet</h3><p>Extends the waveform approach to reverberant and nonlinear conditions using graph attention. Microphone/source tracks are modeled as graph nodes and their dependencies guide the separator.</p><small>Strength: stronger cross-source relational modeling and promising out-of-domain behavior on live recordings.</small><a href="../../papers/girnet/">Associated paper →</a></div></div>

<div class="method-item"><span>05</span><div><h3>cGANIR</h3><p>A conditional generative model that takes a single contaminated track and generates a bleed-reduced version, avoiding the need for multichannel inference at test time.</p><small>Published at ICASSP 2026.</small><a href="../../papers/cganir/">Associated paper →</a></div></div>

<div class="method-item"><span>06</span><div><h3>Learnable wavelet front end (LDWT)</h3><p>Uses an end-to-end learnable discrete wavelet transform front end with a subband separator so the representation itself can adapt to the bleed-reduction task while maintaining reconstruction regularity.</p><small>Ongoing journal work.</small></div></div>

</div>

## Research progression

<div class="progression-strip"><span>STFT magnitude</span><b>→</b><span>Explicit mixing model</span><b>→</b><span>Waveform learning</span><b>→</b><span>Graph relationships</span><b>→</b><span>Generative single-channel inference</span><b>→</b><span>Learnable representation</span></div>

## Key associated work

<div class="work-grid">
  <a class="work-card" href="../../papers/paper2/"><strong>MS Thesis</strong><small>Interference Reduction in Microphone Recordings for Music Source Separation</small><span>Thesis →</span></a>
  <a class="work-card" href="../../papers/paper1/"><strong>WASPAA 2023</strong><small>Neural Networks for Interference Reduction in Multi-Track Recordings</small><span>Paper →</span></a>
  <a class="work-card" href="../../papers/girnet/"><strong>GIRNet</strong><small>Graph-Based Interference Reduction for Multitrack Music Recordings</small><span>Paper →</span></a>
  <a class="work-card" href="../../papers/cganir/"><strong>ICASSP 2026</strong><small>Bleed No More: Generative Interference Reduction for Musical Recordings</small><span>Paper →</span></a>
</div>

<p class="program-back"><a href="../">← All research programs</a></p>

</div>
