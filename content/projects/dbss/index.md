---
title: "Distance-Based Source Separation"
date: 2025-10-10
tags: ["Source separation","Deep learning","Distance Estimation","Spatial Audio","Multichannel Audio"]
author: ["Rajesh R", "Ryan Corey"]
description: "A research program on learning distance-dependent spatial structure for multichannel source separation."
summary: "Estimating source distance from multichannel audio and using learned distance structure to separate sounds by spatial proximity."
cover:
    image: "dbss.png"
    alt: "Distance-Based Source Separation"
    relative: true
editPost:
    URL: ""
    Text: "University of Illinois Chicago"
---

<div class="project-program-page">

<div class="program-page-hero program-distance">
  <span class="program-index">02</span>
  <p class="projects-kicker">DISTANCE-BASED SOURCE SEPARATION</p>
  <h1>Separating what is near from what is far.</h1>
  <p class="projects-lead">Instead of defining sources only by identity—speaker, instrument, or class—I study whether a listening system can organize an acoustic scene by <strong>distance</strong> and use that structure to decide what should be retained or suppressed.</p>
</div>

<div class="program-question-grid">
  <div><span>Problem</span><p>Conventional separators recover sources by identity or learned signal patterns. In many real situations, however, what matters is spatial relevance: for example, hearing the person across the table while suppressing distant conversations.</p></div>
  <div><span>Goal</span><p>Estimate distance directly from multichannel recordings and incorporate distance-dependent acoustic structure into separation so that the system can adaptively recover near or far sources.</p></div>
  <div><span>What I did</span><p>I studied learned distance embeddings, distance-conditioned separation, direct distance estimation from separated sources, and the spatial cues that make distance predictable across reverberant rooms and array geometries.</p></div>
</div>

## Interactive idea

<p>Move the distance threshold in the demo below to hear the concept: the desired output changes according to which sources fall inside the selected spatial region.</p>

<iframe src="/rajesh/projects/dbss/site/index.html" width="100%" height="400" style="border:none; border-radius:14px; box-shadow:0 4px 24px rgba(0,0,0,0.12);" loading="lazy"></iframe>

## Methods developed

<div class="method-timeline">

<div class="method-item"><span>01</span><div><h3>Learned distance representation</h3><p>A multichannel network learns an embedding supervised by distance regression and near/far classification. The embedding is intended to capture global distance-dependent acoustic structure rather than a single handcrafted cue.</p><a href="../../papers/dbsspoma/">Associated POMA paper →</a></div></div>

<div class="method-item"><span>02</span><div><h3>Distance-conditioned source separation</h3><p>The learned distance representation conditions a multichannel separator using feature-wise modulation, allowing the separator to adapt its internal processing to near and far acoustic conditions.</p><small>Distance acts as context for separation, rather than only as an auxiliary prediction target.</small><a href="../../papers/dbsspoma/">Associated POMA paper →</a></div></div>

<div class="method-item"><span>03</span><div><h3>DistanceNet after spatial separation</h3><p>A spatial separator first estimates the individual sources; DistanceNet then predicts a distance for each separated source and uses those estimates to assign near/far outputs.</p><small>This separates the questions “what sources are present?” and “where are they relative to the array?” while allowing the two stages to be analyzed independently.</small></div></div>

<div class="method-item"><span>04</span><div><h3>Spatial-cue and robustness analysis</h3><p>I test which interchannel cues carry distance information and how the pipeline responds to source-level changes, microphone gain mismatch, polarity, and changes in array geometry.</p><small>The goal is to understand what the network has learned physically, not only whether the final metric improves.</small></div></div>

</div>

## Research progression

<div class="progression-strip"><span>Handcrafted spatial cues</span><b>→</b><span>Learned distance embedding</span><b>→</b><span>Conditioned separator</span><b>→</b><span>Separate then estimate distance</span><b>→</b><span>Interpretability & robustness</span></div>

## Associated work

<div class="work-grid">
  <a class="work-card" href="../../papers/dbsspoma/"><strong>POMA / ASA</strong><small>Learning Distance-dependent Spatial Structure for Multichannel Source Separation</small><span>Paper →</span></a>
  <div class="work-card work-card-static"><strong>DistanceNet + SpatialNet</strong><small>Ongoing work on estimating source distance after multichannel spatial separation and analyzing the cues that support it.</small><span>Ongoing research</span></div>
</div>

<p class="program-back"><a href="../">← All research programs</a></p>

</div>
