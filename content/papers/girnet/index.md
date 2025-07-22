---
title: "Graph-Based Interference Reduction for Multitrack Music Recordings" 
date: 2024-08-10
tags: ["Graph Attention Networks", "interference reduction","music source separation","multi-track recordings","Live data"]
author: ["Rajesh R","Padmanabhan Rajan"]
description: "A graph-based neural network for interference reduction in live multitrack music recordings. Published in xxxx, 2025"
summary: "This paper presents GIRNet, a neural architecture that learns relationships between audio channels to suppress interference in multitrack music recordings. It accepts direct raw waveforms and generates interference reduced outputs. The network also shows promising generalizability to diverse acoustic environments and instrument sources or genre. Experiments show improved SDR and faster processing compared to existing methods, with promising real-world listening results."
cover:
    image: "dfUNetGE.png"
    alt: "GIRNET"
    relative: true
editPost:
    URL: ""
    Text: "xxxx 2025"

---


<p style="text-align: center;">
  <a href="">Paper</a> | 
  <a href="https://github.com/its-rajesh/GIRNet">Code and Data</a> |
  <a href="">Web</a>
</p>

---
##### ARCHITECTURE

![](dfUNetGE.png)


---

### Abstract

<div style="text-align: justify;">
In live concerts, the microphone that is intended to capture individual sources often ends up picking up neighbouring sources due to the lack of acoustic shielding. This phenomenon can result in interference between the captured audio streams. The process of eliminating the sound of these unintended sources from the primary source is known as interference reduction. In this paper, we present a learning-based framework, the Graph Interference Reduction Network (GIRNet), designed to mitigate interference in live recordings. Diverging from the conventional approach of treating interference as noise, our method focuses on estimating the relationships among various audio sources, thereby facilitating effective interference reduction. Experimental results demonstrate the superior performance of our proposed model compared to existing methods, as evidenced by improvements in Signal-to-Distortion Ratio (SDR). Moreover, our model exhibits promising generalizability to out-of-domain classes through post processing techniques. The outcomes of listening tests underscore the model’s efficacy in the context of live recordings.
</div>

---

### Live Recordings Demo

This recording was captured in a live concert scenario with three microphones from the Saraga dataset (Indian Art Music). The model was trained on simulated MUSDB18HQ western pop data and evaluated on this unseen condition.

#### EXAMPLE 1

| Live Recordings | GIRNet Cleaned |
|-----------------|----------------|
| <audio controls><source src="/rajesh/audios/girnet/ex1/bvocal.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex1/mvocal.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex1/bviolin.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex1/mviolin.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex1/bmridangam.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex1/mmridangam.wav" type="audio/wav"></audio> |

#### EXAMPLE 2

| Live Recordings | GIRNet Cleaned |
|-----------------|----------------|
| <audio controls><source src="/rajesh/audios/girnet/ex2/bvocal.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex2/mvocal.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex2/bviolin.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex2/mviolin.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex2/bmridangam.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex2/mmridangam.wav" type="audio/wav"></audio> |

#### EXAMPLE 3

| Live Recordings | GIRNet Cleaned |
|-----------------|----------------|
| <audio controls><source src="/rajesh/audios/girnet/ex3/bvocal.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex3/mvocal.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex3/bviolin.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex3/mviolin.wav" type="audio/wav"></audio> |
| <audio controls><source src="/rajesh/audios/girnet/ex3/bmridangam.wav" type="audio/wav"></audio> | <audio controls><source src="/rajesh/audios/girnet/ex3/mmridangam.wav" type="audio/wav"></audio> |

---
