---
title: "Interference Reduction or Music Bleeding Removal" 
date: 2025-05-27
tags: ["interference reduction","music source separation","multi-track recordings","Live data"]
author: ["Rajesh R"]
description: "This project aims to reduce the bleeding effects in the recorded microphone recordings"
summary: "This paper introduces two neural networks for interference reduction in multi-track recordings: a convolutional autoencoder using time-frequency inputs (interference treated as noise) and a truncated U-Net operating in the time domain (interference reduction based on relationship among multi-track data). Experiments show that both models improve music source separation, with the truncated U-Net delivering superior performance and audio quality."
cover:
    image: "paper1.png"
    alt: "IRMR"
    relative: true
editPost:
    URL: "https://www.waspaa.com/waspaa23/"
    Text: "WASPAA 2023"

---

---

##### Download

+ [Paper](paper1.pdf)
+ [Code and data](https://github.com/its-rajesh/IRMR)
+ [Xplore](https://ieeexplore.ieee.org/document/10248133)
  
---

##### Abstract

Multi-track recordings are sometimes created by simultaneously capturing several sources with several microphones. This scenario can result in the interference of undesired source(s) in the various tracks. Interference reduction aims to recover the source(s) associated with a particular track. In this paper, we present two neural networks for interference reduction. The first network uses a convolutional autoencoder-based architecture and uses time-frequency representation as input. The second network uses a truncated U-net architecture and directly estimates the interference from the time-domain multi-track representation. Our experiments indicate the effectiveness of the proposed methods, with the truncated U-net showing superior performance. Also, the audio outputs produced by the proposed methods have improved quality, resulting in better music source separation performance. 

---

##### Figure: t-UNet Architecture

![](paper1.png)

---

<section class="timeline">

{{< phase
      icon="/img/idea.svg"
      abbr="Idea"
      title="Research Problem Defined"
      date="Jan 2024" >}}

Framed the task as **interference‑reduction** with perfect‑reconstruction
constraints. Literature survey on learnable filterbanks.

{{< /phase >}}

{{< phase
      icon="/img/code.svg"
      abbr="MVP"
      title="Initial Prototype"
      date="Apr 2024" >}}

- Built Wave‑U‑Net baseline  
- Implemented DWT layer with **impulse‑initialised** filters  
- Early SI‑SDR ≈ ‑44 dB (stagnant)

{{< /phase >}}

{{< phase
      icon="/img/graph.svg"
      abbr="Tuning"
      title="GAN Loss + Curriculum"
      date="Aug 2024" >}}

Introduced WGAN‑GP objective and **curriculum on hop sizes** → eliminated
high‑frequency artefacts. **+7 dB SI‑SDR improvement**.

{{< /phase >}}

{{< phase
      icon="/img/paper.svg"
      abbr="Paper"
      title="Paper Submission"
      date="Feb 2025" >}}

Submitted to **INTERSPEECH 2025**.  
ArXiv preprint available  
[[PDF]](/files/wavenet_dwt_preprint.pdf) ·
[[Code]](https://github.com/its‑rajesh/waveunet‑dwt)

{{< /phase >}}

{{< phase
      icon="/img/rocket.svg"
      abbr="Now"
      title="Ongoing Work"
      date="Present" >}}

- Multi‑channel extension with GAT bottleneck  
- Real‑time TensorRT inference


{{< /phase >}}

</section>


---

##### Related material

+ [Presentation slides](presentation1.pdf)
