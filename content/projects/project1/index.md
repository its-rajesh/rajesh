---
title: "Music Source Separation" 
date: 2023-01-01
tags: ["Music source separation","Multi-track recordings","Deep learning"]
author: ["Rajesh R", "Padmanabhan Rajan"]
description: "This research focus on the direction of universal music source separation"
summary: "Current state-of-the-art models, such as Facebook’s Hybrid Transformer Demucs and Band-split RNN, demonstrate strong performance on Western music but struggle with Indian classical music and out-of-domain instrument separation. This performance gap underscores the need for further research into developing source-agnostic and universally robust music source separation models."
cover:
    image: "paper1.png"
    alt: "IRMR"
    relative: true
editPost:
    #URL: "https://www.waspaa.com/waspaa23/"
    Text: "Indian Institute of Technology Mandi"

---

---
### Source Separation for Carnatic Music

Indian classical [Carnatic music](https://en.wikipedia.org/wiki/Carnatic_music) comprises diverse sources such as mridangam, violin, ghatam, and multiple vocal lines (typically two or three). These sources, particularly in combination with the complex vocal styles, are significantly out-of-domain for existing state-of-the-art music source separation (MSS) systems. Consequently, developing specialized source separation models for Carnatic music can substantially enhance the performance of various downstream music information retrieval (MIR) tasks in the Indian music context.

To address this, a dedicated MSS model for Carnatic music has been developed using the Saraga dataset.

##### Approaches
1. Fine-tuning several state-of-the-art MSS architectures, including [Hybrid Transformer Demucs](https://arxiv.org/abs/2211.08553), [Wave-U-Net](https://arxiv.org/abs/1806.03185), and TF U-Net.
2. Designing a diffusion-based neural model tailored to the characteristics of Carnatic music.


---

##### Materials

+ [Codes and Results](https://github.com/its-rajesh/Wave-U-Net)
  
---


