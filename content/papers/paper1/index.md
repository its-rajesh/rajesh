---
title: "Neural Networks for Interference Reduction in Multi-Track Recordings" 
date: 2023-09-15
tags: ["interference reduction","music source separation","multi-track recordings","Live data"]
author: ["Rajesh R","Padmanabhan Rajan"]
description: "This paper proposed the two neural networks for interference reduction. Published in WASPAA, 2023"
summary: "This paper introduces two neural networks for interference reduction in multi-track recordings: a convolutional autoencoder using time-frequency inputs (interference treated as noise) and a truncated U-Net operating in the time domain (interference reduction based on relationship among multi-track data). Experiments show that both models improve music source separation, with the truncated U-Net delivering superior performance and audio quality."
cover:
    image: "paper1.png"
    alt: "IRMR"
    relative: true
editPost:
    URL: "[https://github.com/pmichaillat/hugo-website](https://github.com/its-rajesh/IRMR/)"
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

##### Citation

Rajesh R and P. Rajan, "Neural Networks for Interference Reduction in Multi-Track Recordings," 2023 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA), New Paltz, NY, USA, 2023, pp. 1-5.

```BibTeX
@INPROCEEDINGS{10248133,
  author={R, Rajesh and Rajan, Padmanabhan},
  booktitle={2023 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)}, 
  title={Neural Networks for Interference Reduction in Multi-Track Recordings}, 
  year={2023},
  volume={},
  number={},
  pages={1-5}}
```

---

##### Related material

+ [Presentation slides](presentation1.pdf)
