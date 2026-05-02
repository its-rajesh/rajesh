
---
title: "Bleed No More: Generative Interference Reduction for Musical Recordings" 
date: 2026-04-02
tags: ["interference reduction","music source separation","multi-track recordings","Live data", "Generative models"]
author: ["Rajesh R", "Rashen Fernando", "Padmanabhan Rajan", "Ryan Corey"]
description: "This paper proposed the conditional generative neural network for interference reduction. Published in ICASSP, 2026"
summary: "This paper introduces conditional generative neural network for interference reduction in multi-track recordings. Instead of training with multichannel input, the proposed network accepts single channel with dominant source and generates the bleed free version."
cover:
    image: "paper1.png"
    alt: "cGANIR"
    relative: true
editPost:
    URL: "https://2026.ieeeicassp.org/"
    Text: "ICASSP 2026"

---

---

##### Download

+ [Paper](paper.pdf)
+ [Code and data](https://github.com/listeningtech/cGANIR/)
+ [Xplore](https://ieeexplore.ieee.org/abstract/document/11460429)
+ [Audio Examples](https://listeningtech.github.io/cGANIR/)
  
---

##### Abstract

Live multitrack recordings often contain microphone bleed, where unintended sources contaminate close-mic tracks. We cast interference reduction as conditional generation of the target signal from its contaminated observation. Our method, cWGAN-IR, uses a conditional adversarial model with a U-Net generator and a patch-based critic trained on time-frequency magnitude spectrograms. Trained on MUSDB18HQ with simulated bleed and evaluated under both simulated and re-recorded room conditions, the approach yields consistent gains in scale-invariant signal-to-distortion ratio (SI-SDR) and signal-to-interference ratio (SIR) over classical interference reduction baselines for vocal, bass, and drums. The model shows encouraging transfer to Indian classical multitracks (Sanidha) and to live Saraga recordings in a qualitative setting, suggesting robustness to instrument and style mismatch. Taken together, the results suggest that conditional generative modeling is a viable approach for multitrack interference reduction in realistic acoustic conditions. 

---

##### Figure: t-UNet Architecture

![](paper1.png)

---

##### Citation

Rajesh R, R. Fernando, P. Rajan and R. M. Corey, "Bleed No More: Generative Interference Reduction for Musical Recordings," ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), Barcelona, Spain, 2026.

```BibTeX
@INPROCEEDINGS{11460429,
  author={R, Rajesh and Fernando, Rashen and Rajan, Padmanabhan and Corey, Ryan M.},
  booktitle={ICASSP 2026 - 2026 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)}, 
  title={Bleed No More: Generative Interference Reduction for Musical Recordings}, 
  year={2026},
  pages={15437-15441},
  doi={10.1109/ICASSP55912.2026.11460429}}

```

---

##### Related material

+ [Presentation slides](presentation1.pdf)
