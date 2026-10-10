---
title: "Research"
description: "The broader picture connecting my work in source separation, spatial audio, distributed sensing, and evaluation."
url: "/research/"
---

<div class="research-hero">
  <p class="research-kicker">RESEARCH VISION</p>
  <h1>Understanding sound as a scene, not just a signal.</h1>
  <p class="research-lead">I study how listening systems can <strong>recover, understand, and reason about sound in complex acoustic environments</strong>. My research combines signal processing, acoustics, array processing, and machine learning, with an emphasis on the physical structure of how sound propagates through space.</p>
</div>

<div class="research-question">
  <span>Central question</span>
  <strong>How can a listening system separate what it hears, understand where the sound came from, cooperate across sensors, and determine whether the recovered scene is actually faithful?</strong>
</div>

<div class="research-map" aria-label="Overview of Rajesh Rameshbabu's research">
  <a class="map-node map-scene" href="#01--recovering-sound">
    <span class="map-label">OBSERVE</span>
    <strong>Real acoustic scene</strong>
    <small>sources · rooms · microphones · interference</small>
  </a>

  <div class="map-connector"><span></span></div>

  <div class="map-grid">
    <a class="map-node map-theme map-recover" href="#01--recovering-sound">
      <span class="map-number">01</span>
      <strong>Recover sound</strong>
      <small>separation · bleed reduction · dereverberation · DRC</small>
      <em>Explore →</em>
    </a>
    <a class="map-node map-theme map-space" href="#02--understanding-acoustic-space">
      <span class="map-number">02</span>
      <strong>Understand space</strong>
      <small>distance · direction · spatial structure</small>
      <em>Explore →</em>
    </a>
    <a class="map-node map-theme map-network" href="#03--distributed-listening">
      <span class="map-number">03</span>
      <strong>Listen together</strong>
      <small>sensor networks · compact spatial representations</small>
      <em>Explore →</em>
    </a>
  </div>

  <div class="map-connector"><span></span></div>

  <a class="map-node map-measure" href="#04--measuring-what-matters">
    <span class="map-label">EVALUATE ACROSS ALL THREE</span>
    <strong>Measure what matters</strong>
    <small>fidelity · robustness · perceptual relevance</small>
    <em>Explore →</em>
  </a>
</div>

<div class="research-principle">
  <span>Research principle</span>
  <p>I am most interested in methods that do more than learn input-output mappings: I want models and representations that exploit acoustic structure, remain interpretable where possible, and continue to work when the room, array, or recording conditions change.</p>
</div>

## 01 · Recovering sound

<div class="research-section">
  <p class="research-summary"><strong>Real recordings are mixtures created by acoustic propagation—not merely sums of clean signals.</strong></p>
  <p>I develop methods for recovering desired sources when recordings contain competing speakers or instruments, microphone bleed, reverberation, and other interference. A recurring question in this work is which signal representation exposes the useful structure of the problem most clearly to a learning system. I also study whether source separation is always necessary before downstream processing, including <strong>multi-source dynamic range compression</strong>.</p>
  <div class="research-tags"><span>Source separation</span><span>Bleed reduction</span><span>Learned representations</span><span>Inverse problems</span><span>Dynamic range compression</span></div>

  <div class="work-grid">
    <a class="work-card" href="../projects/project2/"><strong>Interference & Bleed Reduction</strong><small>From optimization and waveform networks to generative models and learnable front ends.</small><span>Project program →</span></a>
    <a class="work-card" href="../projects/drc/"><strong>Multi-Source Dynamic Range Compression</strong><small>When is explicit source separation actually necessary for downstream audio processing?</small><span>Project program →</span></a>
  </div>
</div>

## 02 · Understanding acoustic space

<div class="research-section">
  <p class="research-summary"><strong>A useful listening system should infer not only <em>what</em> is sounding, but also <em>where it is, how far away it is, and how the environment transformed it</em>.</strong></p>
  <p>I study distance, direction, inter-channel structure, acoustic intensity, first-order ambisonics, and other spatial cues. The broader goal is to build spatial representations that improve separation and scene understanding while remaining grounded in array physics and robust across rooms and microphone geometries.</p>
  <div class="research-tags"><span>Distance-aware separation</span><span>Spatial features</span><span>Direction of arrival</span><span>FOA / intensity</span><span>Acoustic vector sensors</span></div>

  <div class="work-grid">
    <a class="work-card" href="../projects/dbss/"><strong>Distance-Based Source Separation</strong><small>Learning and exploiting distance-dependent spatial structure for multichannel separation.</small><span>Project program →</span></a>
  </div>
</div>

## 03 · Distributed listening

<div class="research-section">
  <p class="research-summary"><strong>What is the smallest amount of acoustic information that sensors must exchange to listen cooperatively?</strong></p>
  <p>Distributed arrays can observe the same scene from many locations, but transmitting raw multichannel audio is expensive. I study distributed source separation and compact spatial representations that retain useful scene information while reducing communication bandwidth.</p>
  <div class="research-tags"><span>Acoustic sensor networks</span><span>DANSE</span><span>Low-bandwidth features</span><span>Distributed arrays</span></div>

  <div class="work-grid">
    <a class="work-card" href="../projects/asn/"><strong>Acoustic Sensor Networks</strong><small>Cooperative enhancement, distributed arrays, and compact spatial information sharing.</small><span>Project program →</span></a>
  </div>
</div>

## 04 · Measuring what matters

<div class="research-section">
  <p class="research-summary"><strong>A good system also needs a defensible definition of “better.”</strong></p>
  <p>Evaluation metrics shape both what models learn and what researchers conclude. I am interested in identifying when common separation metrics become insensitive to transformations that alter the target, and in evaluation methods that better distinguish genuine source recovery from undesirable target modification.</p>
  <div class="research-tags"><span>Separation metrics</span><span>Perceptual fidelity</span><span>Robustness</span><span>Target preservation</span></div>
  <div class="work-grid">
    <a class="work-card" href="../projects/"><strong>Evaluation across research programs</strong><small>These questions cut across interference reduction, spatial separation, distributed listening, and downstream processing.</small><span>View projects →</span></a>
  </div>
</div>

<div class="research-connection">
  <span>Why these belong together</span>
  <p><strong>These are different views of the same acoustic scene.</strong> Spatial understanding provides cues for separation; distributed arrays provide richer observations; compact representations determine what information can be communicated or learned; and meaningful evaluation tells us whether the recovered signal remains faithful to the source.</p>
</div>

## Toward scene-aware machine listening

My longer-term goal is to build listening systems that combine these capabilities rather than solving each task independently: systems that develop a useful internal representation of an acoustic scene and can reuse it for separation, localization, distance reasoning, enhancement, dynamic range processing, and other downstream audio tasks.

<p class="research-footer-links"><a href="../projects/">Projects</a><span>·</span><a href="../papers/">Papers</a><span>·</span><a href="../blog/">Blog</a></p>
