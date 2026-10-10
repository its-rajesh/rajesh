---
title: "Multi-Source Dynamic Range Compression"
date: 2026-10-10
tags: ["dynamic range compression","source separation","audio processing","music processing"]
author: ["Rajesh R", "Ryan Corey"]
description: "A research program asking when explicit source separation is necessary for downstream multi-source audio processing."
summary: "Using dynamic range compression as a case study to compare mixture-domain processing with source-aware and separation-based processing."
---

<div class="project-program-page">

<div class="program-page-hero program-drc">
  <span class="program-index">04</span>
  <p class="projects-kicker">MULTI-SOURCE DYNAMIC RANGE COMPRESSION</p>
  <h1>Is source separation always necessary before audio processing?</h1>
  <p class="projects-lead">Many modern audio pipelines separate a mixture into sources, process each source independently, and then remix them. This project asks whether that expensive intermediate separation step is always justified.</p>
</div>

<div class="program-question-grid">
  <div><span>Problem</span><p>Source-wise processing is conceptually attractive, but separation can introduce artifacts, computation, latency, and errors that may outweigh its downstream benefit.</p></div>
  <div><span>Goal</span><p>Use dynamic range compression as a controlled test case to determine when direct mixture processing is sufficient and when source-aware or explicitly separated processing provides a real advantage.</p></div>
  <div><span>What I did</span><p>I compare alternative processing pipelines that differ in how much source information they expose to the compressor, then evaluate the trade-off between separation quality, downstream behavior, and final audio quality.</p></div>
</div>

## Processing strategies

<div class="method-timeline">

<div class="method-item"><span>01</span><div><h3>Mixture-domain DRC</h3><p>Apply compression directly to the observed mixture without attempting to recover the individual sources.</p><small>This is the simplest and lowest-complexity baseline.</small></div></div>

<div class="method-item"><span>02</span><div><h3>Source-aware processing</h3><p>Use information about the constituent sources to guide compression without necessarily requiring perfect reconstruction of every source.</p><small>This tests whether useful source structure can help even when full separation is unnecessary.</small></div></div>

<div class="method-item"><span>03</span><div><h3>Separate → compress → remix</h3><p>Explicitly separate the mixture, apply compression independently to the estimated sources, and combine the processed outputs.</p><small>This provides the strongest source-wise control, but also inherits separation errors and additional computation.</small></div></div>

<div class="method-item"><span>04</span><div><h3>Task-based comparison</h3><p>Evaluate the full pipelines according to the quality of the final compressed mixture rather than judging the separator in isolation.</p><small>The broader question is whether source separation should be treated as a means to an end rather than an obligatory intermediate task.</small></div></div>

</div>

## Research progression

<div class="progression-strip"><span>Mixture-only processing</span><b>↔</b><span>Source-aware processing</span><b>↔</b><span>Explicit separation</span><b>→</b><span>Evaluate the downstream task</span></div>

## Associated work

<div class="work-grid">
  <a class="work-card" href="../../papers/drc/"><strong>Is Source Separation Necessary for Multi-Source Dynamic Range Compression?</strong><small>Ongoing work comparing mixture-domain, source-aware, and separation-based DRC pipelines.</small><span>Manuscript page →</span></a>
</div>

<p class="program-back"><a href="../">← All research programs</a></p>

</div>
