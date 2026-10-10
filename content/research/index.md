---
title: "Research"
description: "The broader picture connecting my work in source separation, spatial audio, distributed sensing, and evaluation."
url: "/research/"
---

<div class="research-hero">
  <p class="research-kicker">THE BROADER PICTURE</p>
  <h1>Understanding sound as a scene, not just a signal.</h1>
  <p class="research-lead">I study how machines can <strong>recover, understand, and reason about sound in complex acoustic environments</strong>. My work combines audio signal processing, acoustics, array processing, and machine learning, with an emphasis on exploiting the physical structure of how sound propagates through space.</p>
</div>

<div class="research-question">
  <span>Central question</span>
  <strong>How can listening systems separate what they hear, understand where it came from, cooperate across sensors, and know when the reconstruction is actually faithful?</strong>
</div>

<div class="research-map" aria-label="Research overview">
  <div class="map-node map-scene">
    <span class="map-label">REAL ACOUSTIC SCENE</span>
    <strong>Sources + room + microphones</strong>
  </div>
  <div class="map-arrow">↓</div>
  <div class="map-grid">
    <div class="map-node">
      <span class="map-number">01</span>
      <strong>Recover sound</strong>
      <small>Separation · interference reduction · dereverberation</small>
    </div>
    <div class="map-node">
      <span class="map-number">02</span>
      <strong>Understand space</strong>
      <small>Distance · direction · spatial structure</small>
    </div>
    <div class="map-node">
      <span class="map-number">03</span>
      <strong>Listen together</strong>
      <small>Sensor networks · compact spatial representations</small>
    </div>
  </div>
  <div class="map-arrow">↓</div>
  <div class="map-node map-measure">
    <span class="map-label">ACROSS ALL OF THEM</span>
    <strong>Measure what matters</strong>
    <small>Evaluation · perceptual fidelity · robustness</small>
  </div>
</div>

## Recovering sound

<div class="research-section">
  <p class="research-summary"><strong>Real recordings are mixtures created by acoustic propagation—not merely sums of clean signals.</strong></p>
  <p>I work on methods that recover desired sources when recordings contain interference, bleed, reverberation, or competing speakers and instruments. A recurring theme is to ask which signal representation makes the structure of the problem easiest for a model to exploit, rather than treating the neural network as a black box.</p>
  <div class="research-tags"><span>Source separation</span><span>Bleed reduction</span><span>Learned representations</span><span>Inverse problems</span></div>
  <p class="research-link"><a href="../projects/">Explore related projects →</a> &nbsp; <a href="../papers/">Selected papers →</a></p>
</div>

## Understanding acoustic space

<div class="research-section">
  <p class="research-summary"><strong>I want listening systems to infer not only <em>what</em> is sounding, but also <em>where it is, how far away it is, and how the environment transformed it</em>.</strong></p>
  <p>This direction studies distance, direction, inter-channel structure, acoustic intensity, first-order ambisonics, and other spatial cues. I am particularly interested in spatial representations that help separation systems generalize across rooms and microphone geometries while remaining physically interpretable.</p>
  <div class="research-tags"><span>Distance-aware separation</span><span>Spatial features</span><span>DoA</span><span>FOA / intensity</span><span>Acoustic vector sensors</span></div>
</div>

## Distributed listening

<div class="research-section">
  <p class="research-summary"><strong>What is the smallest amount of acoustic information that sensors must exchange in order to listen cooperatively?</strong></p>
  <p>Distributed microphone arrays can observe an acoustic scene from many locations, but sharing raw multichannel audio is expensive. I study distributed source separation and compact spatial features that preserve useful scene information while reducing communication bandwidth.</p>
  <div class="research-tags"><span>Acoustic sensor networks</span><span>DANSE</span><span>Low-bandwidth features</span><span>Distributed arrays</span></div>
</div>

## Measuring what matters

<div class="research-section">
  <p class="research-summary"><strong>A good system needs a good definition of “better.”</strong></p>
  <p>Evaluation metrics shape what models learn and what researchers conclude. I am interested in when familiar separation metrics become invariant to transformations that are perceptually or physically undesirable, and in evaluation methods that distinguish genuine source recovery from target alteration.</p>
  <div class="research-tags"><span>Separation metrics</span><span>Perceptual fidelity</span><span>Robustness</span><span>Target preservation</span></div>
</div>

<div class="research-connection">
  <p><strong>These directions are not separate problems.</strong> Spatial understanding can provide cues for separation; distributed arrays provide richer observations of the same scene; compact representations determine what information can be shared or learned; and meaningful evaluation tells us whether the recovered signal is genuinely faithful.</p>
</div>

## The direction I am moving toward

I am increasingly interested in listening systems that combine these capabilities rather than solving each task independently: systems that form a useful internal representation of an acoustic scene and can use it for separation, localization, distance reasoning, enhancement, and other downstream tasks.

<p class="research-footer-links"><a href="../projects/">Projects</a> · <a href="../papers/">Papers</a> · <a href="../blog/">Research notes</a></p>
