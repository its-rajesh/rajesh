---
title: ""
date: 2025-07-10
layout: single
description: "GIRNet: Graph-Based Interference Reduction for multitrack music recordings"
---

# GIRNet: Graph-Based Interference Reduction

<div style="display: flex; justify-content: center; gap: 4em; text-align: center; flex-wrap: wrap; margin-bottom: 1em;">
  <div>
    <a href="https://its-rajesh.github.io">Rajesh R.</a><br>
    <span>University of Illinois Chicago</span>
  </div>
  <div>
    <a href="https://faculty.iitmandi.ac.in/~padman/">Padmanabhan Rajan</a><br>
    <span>Indian Institute of Technology Mandi</span>
  </div>
</div>

<p style="text-align: center;">
  <a href="https://github.com/its-rajesh/girnet">GitHub</a> | 
  <a href="/papers/girnet/girnet.pdf">PDF</a>
</p>

<div style="text-align: center;">
  <img src="/papers/girnet/dfUNetGE.png" alt="GIRNet Architecture" style="max-width: 90%; height: auto;">
</div>

### Abstract

<div style="text-align: justify;">
In live concerts, the microphone that is intended to capture individual sources often ends up picking up neighbouring sources due to the lack of acoustic shielding. This phenomenon can result in interference between the captured audio streams. The process of eliminating the sound of these unintended sources from the primary source is known as interference reduction.

In this paper, we present a learning-based framework, the Graph Interference Reduction Network (GIRNet), designed to mitigate interference in live recordings. Diverging from the conventional approach of treating interference as noise, our method focuses on estimating the relationships among various audio sources, thereby facilitating effective interference reduction.

Experimental results demonstrate the superior performance of our proposed model compared to existing methods, as evidenced by improvements in Signal-to-Distortion Ratio (SDR). Moreover, our model exhibits promising generalizability to out-of-domain classes through post-processing techniques. The outcomes of listening tests underscore the model’s efficacy in the context of live recordings.
</div>

---

### Real Data Audio Demo

This recording was captured in a live concert scenario with three microphones. The model was trained on semi-realistic data and evaluated on this unseen condition.

| Mixture | GIRNet Output |
|--------|----------------|
| <audio controls><source src="/papers/girnet/audio/mixture.wav" type="audio/wav"></audio> | <audio controls><source src="/papers/girnet/audio/girnet_output.wav" type="audio/wav"></audio> |

---

### Synthetic Examples

- [Demo with 3 synthetic sources](/papers/girnet/synthetic-demo/)
- [Evaluation on Saraga Indian Art Music](/papers/girnet/saraga-eval/)

---

### Code & Resources

- [GitHub Repository](https://github.com/its-rajesh/girnet)
- [Paper PDF](/papers/girnet/girnet.pdf)
- [Author Website](https://its-rajesh.github.io)

---

_Last updated: July 2025_

© 2025 Rajesh Rameshbabu
