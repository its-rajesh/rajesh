

---
title: "Learning Distance-dependent Spatial Structure For Multichannel Source Separation" 
date: 2026-03-15
tags: ["distance estimation","source separation","multichannel"]
author: ["Rajesh R", "Rashen Fernando", "Ryan Corey"]
description: "This paper proposed distance based source separation network. Published in ASA, 2026"
summary: "Most source separation methods treat audio as signals to be disentangled, ignoring how the physical world shapes what we hear. This work shows that **distance acts as a global structure**, and learning it explicitly can improve multichannel separation"
cover:
    image: "intro.png"
    alt: "dbss"
    relative: true
editPost:
    URL: "https://pubs.aip.org/asa/poma"
    Text: "POMA 2026"

---

---

##### Download

+ [Paper]()
+ [Code and data]()
+ [Proceedings]()

---

## Learning Distance-Dependent Structure for Source Separation

Most source separation models treat audio as if it were just a collection of signals to be disentangled. But in a real room, what we observe is not just a mixture of sources—it is a mixture that has already been shaped by physics.

Before any model sees the signal, distance has already acted on it.

A source that is far from the microphones is not simply a quieter version of a near source. It is more reverberant, less coherent across channels, and often spectrally altered. A near source, on the other hand, carries stronger direct-path energy and more reliable spatial structure. These changes are not local—they affect the entire signal in a consistent way.

And yet, most multichannel separation systems do not represent this explicitly. They rely on local cues like interchannel phase and level differences, and expect the model to implicitly figure out the rest. 

This work started from a simple question:

> What if distance is not just another cue, but a global variable that organizes the entire observation?

---

## Treating distance as structure

Instead of trying to estimate distance as an output—or ignoring it altogether—we treat it as a latent variable that shapes the signal. The goal is not to predict distance for its own sake, but to learn a representation that captures how distance changes multichannel audio.

To do this, we separate the problem into two stages.

First, we learn a representation. A network takes multichannel audio and produces a compact embedding that reflects distance-dependent structure. During training, we use distance regression and a simple near–far classification task, but these are only used to guide the representation. What matters is that the embedding organizes signals in a way that reflects how distance affects them. In practice, this structure is quite clean—near and far sources separate in the embedding space, with smooth transitions in between. 

Second, we use this embedding to guide separation. Instead of feeding it as another input feature, we use feature-wise linear modulation (FiLM) to condition the separator. This allows the embedding to influence the network internally—reshaping intermediate features at multiple layers based on the global distance context.

The separator is no longer working blindly. It has a sense of whether it is dealing with a near source, a far source, or a mixture of both, and can adjust its behavior accordingly.

---

## Why this helps

Distance affects several acoustic properties at once: overall level, the balance between direct and reverberant energy, and the spatial coherence across microphones. These are tightly coupled effects, not independent features. 

Handcrafted cues like ILD, IPD, or DRR try to capture pieces of this behavior. But they remain local and often unstable in reverberant conditions. What the learned embedding does instead is integrate these effects into a single, consistent representation.

This turns out to matter more than expected.

---

## What we observe

We evaluated this idea in a controlled setting using simulated reverberant mixtures with two sources placed at different distances from the array. The setup allows us to isolate distance-related effects without other confounding factors.

Across different room conditions and array geometries, a consistent pattern emerges. A standard multichannel separator already performs reasonably well. Adding handcrafted spatial features improves it slightly. But conditioning on the learned distance embedding improves it further—by roughly 2 to 3 dB in SI-SDR in near–far scenarios. 

The gains are most noticeable for near sources, where strong direct-path structure can be exploited more effectively. Far sources also benefit, though to a lesser extent, as reverberation limits the reliability of spatial cues.

What is more interesting than the numbers is how the model changes internally. When conditioned on distance, it tends to emphasize coherent, high-DRR features for near sources, and shifts toward more diffuse, robust representations for far sources. This aligns with acoustic intuition, but here it is learned rather than imposed.

---

## A different way to think about separation

This work suggests a shift in perspective.

We often think of separation as a purely signal-level problem: given a mixture, recover its components. But in realistic environments, the mixture already carries structure imposed by the scene. Distance is one of the most dominant factors shaping that structure.

If the model is aware of this structure, even implicitly through an embedding, it can adapt its behavior in a way that simple feature engineering cannot match.

In that sense, the improvement does not come from a more complex separator, but from giving the model the right context.

---

## What’s missing

There are still important gaps. In this work, we use oracle distance embeddings to isolate the effect of conditioning itself. Real systems would need to infer this information directly from mixtures. We also restrict the problem to two sources in a near–far configuration, which is a simplification of more complex scenes.

Extending this to mixture-only inference, multiple sources, and real recordings is the next step.

---

## Closing thought

Distance is usually treated as something to estimate, or something to ignore.

This work takes a different view:

> distance is part of the structure of the signal itself.

And if we model that structure explicitly—even indirectly—it changes how separation works.

---


##### Citation

Rajesh R, R. Fernando, and R. M. Corey, "Learning distance-dependent spatial structure for multichannel source separation," POMA 2026 - Proceedings of Meetings on Acoustics (POMA), Sixth Joint Meeting Acoustical Society of America and Acoustical Society of Japan, Honolulu, Hawaii.

```BibTeX

```

---

##### Related material

+ [PPT]()
