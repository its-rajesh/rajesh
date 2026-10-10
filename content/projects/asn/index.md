---
title: "Acoustic Sensor Networks"
date: 2026-10-10
tags: ["acoustic sensor networks","distributed audio","speech enhancement","spatial audio","source separation"]
author: ["Rajesh R", "Ryan Corey"]
description: "A research program on cooperative listening with distributed microphones under communication constraints."
summary: "How distributed microphones can cooperate for enhancement and source separation while exchanging only the acoustic information that matters."
---

<div class="project-program-page">

<div class="program-page-hero program-asn">
  <span class="program-index">03</span>
  <p class="projects-kicker">ACOUSTIC SENSOR NETWORKS</p>
  <h1>Teaching distributed microphones to listen together.</h1>
  <p class="projects-lead">A network of microphones can observe the same acoustic scene from very different locations. My goal is to exploit those complementary observations without assuming that every node can transmit all of its raw audio or intermediate features.</p>
</div>

<div class="program-question-grid">
  <div><span>Problem</span><p>Local microphones often fail when the desired source is weak, distant, reverberant, or masked by competing sources. Sharing everything across a network helps, but communication bandwidth quickly becomes expensive.</p></div>
  <div><span>Goal</span><p>Determine when cooperation is useful, what information should be exchanged, and how compact that information can become without losing the spatial structure needed for enhancement and separation.</p></div>
  <div><span>What I did</span><p>I studied local versus cooperative node-specific enhancement, graph-conditioned information sharing, and compact spatial representations such as intensity, first-order ambisonics, and direction/diffuseness features.</p></div>
</div>

## Methods and directions

<div class="method-timeline">

<div class="method-item"><span>01</span><div><h3>Local node-specific enhancement</h3><p>Each node processes only its own microphone and retains the talkers local to that node while suppressing competing speech, music, and ambient noise.</p><small>This establishes how far a single node can go without communication.</small><a href="../../papers/asnrest/">Associated IWAENC paper →</a></div></div>

<div class="method-item"><span>02</span><div><h3>Neighborhood cooperation</h3><p>Nodes exchange information only with nearby sensors so the system can use spatial context while keeping the communication graph sparse.</p><small>The question is whether local neighborhoods provide most of the cooperative benefit at lower bandwidth.</small><a href="../../papers/asnrest/">Associated IWAENC paper →</a></div></div>

<div class="method-item"><span>03</span><div><h3>Full-network cooperation</h3><p>All nodes contribute information to each node-specific enhancement problem. This provides the strongest reference point for how much cooperation can help under difficult acoustic conditions.</p><small>Cross-node information becomes increasingly useful as SNR decreases and interference/reverberation increase.</small><a href="../../papers/asnrest/">Associated IWAENC paper →</a></div></div>

<div class="method-item"><span>04</span><div><h3>Low-bandwidth spatial representations</h3><p>I compare compact representations that can be shared instead of full spectral features, including active intensity, strengthened WXYZ / FOA features, and energy-direction-diffuseness representations.</p><small>The aim is to preserve scene geometry and useful directional structure while sharply reducing communication cost.</small></div></div>

</div>

## Research progression

<div class="progression-strip"><span>Local processing</span><b>→</b><span>Nearby cooperation</span><b>→</b><span>Full network</span><b>→</b><span>Bandwidth/performance tradeoff</span><b>→</b><span>Compact spatial features</span></div>

## Associated work

<div class="work-grid">
  <a class="work-card" href="../../papers/asnrest/"><strong>IWAENC 2026</strong><small>Cooperative Node-Specific Speech Enhancement in Resource-Constrained Acoustic Sensor Networks</small><span>Paper, demo & code →</span></a>
  <div class="work-card work-card-static"><strong>Compact spatial feature sharing</strong><small>Ongoing work comparing physically meaningful low-bandwidth spatial representations for distributed separation.</small><span>Ongoing research</span></div>
</div>

<p class="program-back"><a href="../">← All research programs</a></p>

</div>
