---
title: "Distance Based Source Separation" 
date: 2025-10-10
tags: ["Source separation","Multi-track recordings","Deep learning", "Distance Estimation", "Music Source Separation"]
author: ["Rajesh R", "Ryan Corey"]
description: "This research focus on the direction of distance based source separation"
summary: "Exploring how multichannel recordings can be used to estimate source distance and separate sounds based on spatial proximity rather than source type."
cover:
    image: "dbss.png"
    alt: "DBSS"
    relative: true
editPost:
    URL: ""
    Text: "University of Illinois Chicago"

---

---

## Distance-Based Source Separation


In source separation, even defining what a “source” is can be surprisingly tricky. Some define it as broad categories like speech and music, while others think of it as individual instruments, voices, or background noises. But rather than obsessing over the definition itself, I prefer to approach the problem from a more human and practical perspective: what do we actually want to hear?

Imagine sitting in a busy restaurant: surrounded by chatter, clinking plates, and background music; yet all you really want is to clearly hear the person sitting across from you. This simple scenario captures the motivation: to separate sounds based on distance. Instead of fixed labels like “music” or “noise,” I aim to classify sources as near or far, where “near” and “far” are themselves relative and adaptive.

My broader goal is to develop a system that can accurately estimate distance from multichannel recordings and use that information to cleanly separate sources according to spatial proximity. In other words, a model that not only hears what is being said, but also understands where it’s coming from.

---

### Interactive Demo

A system like this would be ideal: one that estimates clean sources relative to their distance. You can listen to the multichannel mixture, view the STFT mask, and hear the separated source corresponding to the chosen distance.
> 💡 Tip: try moving τ = 1 m, 2 m, 4 m to hear the progressive separation.

<iframe
  src="/rajesh/projects/dbss/site/index.html"
  width="100%"
  height="400"
  style="border:none; border-radius:12px; box-shadow:0 4px 24px rgba(0,0,0,0.25);"
  loading="lazy"
></iframe>


---

### Approaches

- **Feature Conditioning for Distance-Based Separation**  
  Currently exploring how different feature-conditioning strategies influence distance-based source separation. The aim is to identify which spatial or acoustic cues best help the model distinguish sources by distance.

- **Multichannel Distance Estimator Network**  
  Developed a network that takes multichannel audio as input and predicts the source distance, classifies it as *near* or *far*, and generates a continuous *distance embedding* representing spatial information.  
  Simulated experiments show excellent initial results. Detailed evaluations will be added soon!

- **Distance-Conditioned Source Separation**  
  Using the learned distance embedding as a conditioning input to the source separation model, enabling adaptive separation of sources based on their estimated spatial distance.
  
---


