---
title: "Learning Distance-dependent Spatial Structure For Multichannel Source Separation"
date: 2026-03-15
tags: ["distance estimation", "source separation", "multichannel"]
author: ["Rajesh R", "Rashen Fernando", "Ryan Corey"]
description: "Winner of the POMA Student Paper Competition (ASA 2026). A distance-aware multichannel source separation framework based on learned spatial structure."
summary: "Winner of the POMA Student Paper Competition (ASA 2026). This work shows that distance acts as a global structure in multichannel audio and that learning it explicitly can improve source separation."
cover:
    image: "intro.png"
    alt: "Distance-Based Source Separation"
    relative: true
editPost:
    URL: "https://pubs.aip.org/asa/poma"
    Text: "POMA 2026"
---

> 🏆 **Winner of the POMA Student Paper Competition (ASA 2026)**

This paper was selected as a winner of the **POMA Student Paper Competition** at the **189th Meeting of the Acoustical Society of America (ASA)** in Honolulu, Hawaii. The award recognizes outstanding student contributions published in *Proceedings of Meetings on Acoustics (POMA)*.

---

##### Download

+ [Paper](https://pubs.aip.org/asa/poma/article/60/1/055004/3396022/Learning-distance-dependent-spatial-structure-for)
+ [Code and Data]()
+ [Proceedings](https://pubs.aip.org/asa/poma/article/60/1/055004/3396022/Learning-distance-dependent-spatial-structure-for)

---

Most source separation models treat audio as if it were simply a collection of signals to be disentangled. In reality, what reaches a microphone has already been shaped by the physical world. Sound propagates through space, interacts with surfaces, and arrives at different microphones with patterns that depend strongly on geometry.

Among these factors, distance plays a particularly important role.

A source that is far from the microphones is not merely a quieter version of a near source. It is generally more reverberant, exhibits lower spatial coherence, and often undergoes noticeable spectral changes. A near source, in contrast, contains stronger direct-path energy and more reliable spatial structure. These effects are global: they influence the entire observation rather than isolated time-frequency regions.

Yet most multichannel source separation systems do not model distance explicitly. They typically rely on local spatial cues such as interchannel phase and level differences and expect the network to discover the underlying structure on its own.

This work started from a simple question:

> What if distance is not just another cue, but a latent variable that organizes the entire observation?

---

## Treating Distance as Structure

Instead of estimating distance as a standalone output or ignoring it altogether, we treat distance as a latent representation that influences how multichannel audio is observed.

The framework consists of two stages.

First, a distance representation network learns an embedding from multichannel audio. During training, distance regression and a near–far classification objective guide the learning process. These tasks are not the final goal; rather, they encourage the embedding to capture distance-dependent acoustic structure.

The resulting embedding space exhibits meaningful organization. Sources with similar distances tend to cluster together, while near and far sources become clearly separated with smooth transitions between them.

Second, the learned embedding is used to condition a source separation network. Rather than appending the embedding to the input, we employ Feature-wise Linear Modulation (FiLM) layers that modulate intermediate representations throughout the separator. This allows the model to adapt its internal processing according to the estimated distance context.

As a result, the separator no longer operates without context. It can adjust its behavior depending on whether the dominant source is near, far, or part of a mixed spatial configuration.

---

## Why Distance Matters

Distance simultaneously affects several acoustic properties:

- Overall signal level
- Direct-to-reverberant ratio (DRR)
- Spatial coherence across microphones
- Spectral coloration caused by propagation

Traditional handcrafted features such as ILD, IPD, and DRR attempt to capture individual aspects of this behavior. While useful, they often provide only partial information and can become unreliable in reverberant environments.

The learned embedding instead integrates these effects into a single representation that reflects the overall acoustic structure associated with distance.

This turns out to be more powerful than relying solely on handcrafted spatial cues.

---

## Experimental Evaluation

We evaluated the proposed framework using simulated reverberant environments containing two simultaneously active sources positioned at different distances from a microphone array.

The experimental design intentionally isolates distance-related effects so that the contribution of distance-aware conditioning can be studied directly.

Across multiple room configurations and source placements, a consistent trend emerges:

1. A baseline multichannel separator provides reasonable performance.
2. Adding handcrafted spatial features yields modest gains.
3. Conditioning the separator with the learned distance embedding produces additional improvements, typically around **2–3 dB SI-SDR** in near–far scenarios.

The largest improvements occur for near sources, where strong direct-path information provides reliable spatial structure. Far sources also benefit, although the gains are generally smaller due to increased reverberation.

Beyond numerical improvements, analysis of the learned representations suggests that the network adapts its internal processing strategy according to distance. For near sources, the model emphasizes coherent, high-DRR components. For far sources, it shifts toward representations that are more robust to diffuse reverberation.

These behaviors emerge naturally from the learning process rather than being manually engineered.

---

## A Different Perspective on Source Separation

Source separation is often framed as a signal processing problem: given a mixture, recover its constituent sources.

However, realistic acoustic mixtures already contain information about the physical scene in which they were recorded. Distance is one of the strongest factors shaping that scene structure.

By explicitly modeling distance-dependent structure, even through a learned latent representation, the separator gains access to contextual information that would otherwise remain implicit.

In this view, performance improvements arise not from increasing model complexity, but from providing the network with a more meaningful representation of the acoustic environment.

---

## Current Limitations

Several challenges remain.

In this study, oracle distance labels are used during training to investigate the effect of distance-aware conditioning in isolation. Practical systems must ultimately infer this information directly from mixtures.

The experiments also focus on two-source near–far configurations. Extending the framework to multiple simultaneous sources, more complex geometries, and real-world recordings remains an important direction for future work.

---

## Closing Thoughts

Distance is often treated as either a nuisance parameter or a quantity to estimate separately.

This work explores a different perspective:

> Distance is part of the structure of the signal itself.

When that structure is learned and incorporated into the separation process, the network gains a richer understanding of the acoustic scene and can separate sources more effectively.

---

## 🏆 Award Recognition

This work was recognized as a **winner of the POMA Student Paper Competition (ASA 2026)**. The paper was selected for its contribution toward incorporating distance-dependent spatial structure into multichannel source separation and highlights the growing importance of geometry-aware learning in audio signal processing.

---

##### Citation

Rajesh R, R. Fernando, and R. M. Corey,

*"Learning Distance-dependent Spatial Structure for Multichannel Source Separation,"*

Proceedings of Meetings on Acoustics (POMA), Sixth Joint Meeting of the Acoustical Society of America and the Acoustical Society of Japan, Honolulu, Hawaii, 2026.

🏆 **Winner, POMA Student Paper Competition (ASA 2026)**

```BibTeX
@inproceedings{rajesh2026dbss,
  title={Learning Distance-dependent Spatial Structure for Multichannel Source Separation},
  author={Rajesh R and Rashen Fernando and Ryan M. Corey},
  booktitle={Proceedings of Meetings on Acoustics (POMA)},
  year={2026},
  organization={Acoustical Society of America},
  note={Winner, POMA Student Paper Competition}
}
```

##### Related material

+ [PPT]()
