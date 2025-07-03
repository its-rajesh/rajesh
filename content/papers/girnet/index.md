---
title: "Neural Interference Reduction with cGANs"
date: 2025-07-03
type: "docs"
slug: "cganir"
layout: "paper"
description: "Distance-based neural interference reduction using conditional."
menu:
  papers:
    parent: "Papers"
    weight: 10
---

# Neural Interference Reduction with 

**Rajesh R.**
* 2025*

[📄 Paper PDF](https://arxiv.org/abs/xxxx.xxxxx)  
[🔊 Audio Samples](https://its-rajesh.github.io/cGANIR/)  
[💻 GitHub Code](https://github.com/its-rajesh/cGANIR)

---

## Abstract

We propose a conditional GAN-based model for multichannel interference reduction...

---

## Real data audio demo

This example was recorded with an iPhone in a room of size approximately 4m by 5m, with near speaker approximately 0.5m from the microphone and the far speaker approximately 2m from the microphone. The example was processed by a model trained as described in the paper with training data source presence probability of 0.5.


<!-- Top row: Mixture and Near Estimate -->
<div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: space-between; margin-top: 1.5rem;">
  <div style="flex: 1; min-width: 280px;">
    <strong>Mixture</strong><br>
    <audio controls style="width: 100%;">
      <source src="/papers/cganir-waspaa2025/audio/mixture.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div style="flex: 1; min-width: 280px;">
    <strong>Near estimate</strong><br>
    <audio controls style="width: 100%;">
      <source src="/papers/cganir-waspaa2025/audio/near_estimate.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>
</div>

<!-- Bottom row: Far Estimate, centered -->
<div style="margin-top: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
  <strong>Far estimate</strong><br>
  <audio controls style="width: 100%;">
    <source src="/papers/cganir-waspaa2025/audio/far_estimate.wav" type="audio/wav">
    Your browser does not support the audio element.
  </audio>
</div>


## Method Overview

Include an image:

```markdown
![Architecture](images/model_architecture.png)
