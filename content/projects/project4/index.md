---
title: "Removing music from speech" 
date: 2022-05-15
tags: ["speech enhancement","noise reduction","classification"]
author: ["Rajesh R"]
description: "This work proposed the simple CNN to extract only the speech component from AIR data"
summary: "A deep convolutional neural network-based architecture is trained to completely remove the
music in a given music+speech audio for a other NLP task"
cover:
    image: "MusicSpeechClassifier.jpg"
    alt: "SpeechvsMusic"
    relative: true
editPost:
    URL: "https://github.com/its-rajesh/Music-Speech-Separation/"
    Text: "Git"

---

---

##### Download

+ [Technical details](paper1.pdf)
+ [Code and data](https://github.com/its-rajesh/Music-Speech-Separation/)
+ [Pretrained model]()
  
---

##### Abstract

We propose a deep convolutional neural network architecture for classifying and isolating music and speech components in mixed audio recordings. The system processes short audio chunks using short-time Fourier transform (STFT) to generate spectrogram representations, which are then fed into a series of convolutional and dense layers. Trained to differentiate between music and speech, the model is optimized to completely remove the music component, enabling improved performance in downstream natural language processing (NLP) tasks that require clean speech signals. The framework demonstrates strong potential for preprocessing audio in noisy, music-rich environments.


---

##### Figure: t-UNet Architecture

![](MusicSpeechClassifier.png)

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
