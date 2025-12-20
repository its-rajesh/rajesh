---
title: "When Does Audio Become Separable? A Representation Study"
date: 2025-12-19
tags: ["audio", "source separation", "representations"]
draft: false
---



## Best domain wins
![Best domain wins](best_domain_hist.png)

## Overlap vs oracle SI-SDR
![Overlap vs oracle](scatter_overlap_vs_oracle.png)

...


# When Does Audio Become Separable?

## A Representation-Centric Study of Overlap and Oracle Limits

**Rajesh Rameshbabu**
*Audio Signal Processing, University of Illinois Chicago*

---

## Motivation

Audio source separation is often justified by a simple and intuitive idea:

> *If sources are sparse or weakly overlapping in some representation, they can be separated.*

This assumption underlies classical time–frequency masking, harmonic–percussive separation, and many modern deep-learning systems that operate on spectrograms or learned feature spaces.

But a deeper question remains largely unexplored:

> **Does reduced overlap in a representation actually imply better separability?**

Or more fundamentally:

* Is sparsity the real reason separation works?
* Or do structure, resolution, and invertibility play a larger role?

In this post, we examine these questions through a **controlled oracle experiment**, isolating representation effects from learning, architectures, and optimization.

---

## Experimental Setup

### Data and mixtures

We use real musical stems in a MUSDB-style format, each track containing:

* vocals
* bass
* drums
* other instruments

From these, we construct mixtures using:

* within-track pairs (e.g., vocal–drums),
* cross-track same-instrument pairs (e.g., drums–drums),
* cross-track mixed-instrument pairs (e.g., vocal–bass).

In total, **102 unique source pairs** are evaluated.

Each mixture follows a **convolutive acoustic model**:

* each source is convolved with a distinct room impulse response,
* sources are mixed at 0 dB SIR,
* mild additive noise is added (≈30 dB SNR).

This ensures the analysis reflects **realistic recording conditions**, not instantaneous toy mixtures.

---

## Representations Evaluated

For each mixture, we compute oracle ideal ratio masks in the following representations:

* **Time domain** (sample-wise magnitude masking)
* **STFT** (single resolution)
* **Multi-resolution STFT (MRSTFT)**

  * best-performing resolution per example
  * naive ensemble (averaged waveform)
* **Constant-Q Transform (CQT)**
* **Discrete Wavelet Transform (DWT)**
* **Wavelet Packet Transform (WPT)**
* **Scattering Transform** (overlap analysis only; non-invertible)

All invertible representations are reconstructed using their standard inverse operators.

---

## Metrics

Two complementary metrics are used.

### 1. Representation-domain overlap

Overlap is quantified using the **Jaccard index** between high-energy coefficient sets of the two sources in a given representation.

This measures how often both sources are simultaneously active in the same representation bins.

### 2. Oracle SI-SDR

Using oracle ideal ratio masks, we compute the **scale-invariant signal-to-distortion ratio (SI-SDR)** of the reconstructed target source.

Because the masks are oracle, this SI-SDR represents an **upper bound** on how well that representation could support separation.

---

## Which representation is “best”?

### Best-domain wins

![Best domain wins](best_domain_hist.png)

The figure above counts how often each representation achieves the **highest oracle SI-SDR** across all mixtures.

**Key observation:**

* **MRSTFT (best resolution)** dominates, winning **67 out of 102** cases.
* Single-resolution STFT performs well but is clearly inferior.
* Other representations rarely achieve the top oracle performance.

**Takeaway:**
No single resolution works universally — but **adapting resolution to the signal consistently wins**.

---

## Does lower overlap imply better separation?

### Overlap vs oracle separability

![Overlap vs oracle SI-SDR](scatter_overlap_vs_oracle.png)

This plot directly tests the sparsity intuition by showing oracle SI-SDR versus representation-domain overlap.

If sparsity were sufficient, we would expect:

> lower overlap ⇒ higher separability

This is **not observed**.

Examples:

* Time-domain masking exhibits *low overlap* but *poor separation*.
* CQT shows *higher overlap* yet outperforms time-domain masking.
* MRSTFT achieves the **highest oracle SI-SDR** at moderate overlap levels.

**Key result:**
👉 **Low overlap is neither necessary nor sufficient for good separation.**

This single figure falsifies the notion that sparsity alone explains separation performance.

---

## Distribution-level evidence

### Oracle SI-SDR distributions

![Oracle SI-SDR distribution](box_oracle_by_domain.png)

The boxplot above shows oracle SI-SDR distributions across representations.

Observations:

* MRSTFT has the **highest median** and **strongest upper tail**.
* Single-resolution STFT is competitive but less consistent.
* Time-domain and fixed wavelet bases lag significantly.

**Takeaway:**
MRSTFT does not merely win occasionally — it provides the **strongest and most reliable upper bound**.

---

## How efficiently does a representation use overlap?

We define a simple efficiency score:

[
\text{Efficiency} = \frac{\text{Oracle SI-SDR}}{\text{Overlap} + \epsilon}
]

### Representation efficiency

![Representation efficiency](efficiency_by_domain.png)

This reveals a subtle but important insight:

* Time-domain representations appear sparse but are **inefficient**.
* STFT and MRSTFT convert overlap into separation far more effectively.
* Fixed wavelet bases consume overlap without delivering comparable gains.

**Takeaway:**
It is not about *having* low overlap — it is about *using* overlap effectively.

---

## Does this depend on instrument type?

### Pair-type × domain analysis

![Pair-type heatmap](heatmap_pairtype_domain_median_sisdr.png)

This heatmap shows median oracle SI-SDR across:

* vocal–drums
* vocal–bass
* drums–bass
* same-instrument mixtures

While absolute difficulty varies by pair type, **MRSTFT remains consistently strong across all categories**.

**Takeaway:**
The conclusions are **not an artifact of a specific instrument pairing**.

---

## What did we learn?

This study leads to several important conclusions:

1. **Physical overlap is unavoidable** in real audio mixtures.
2. **Sparsity alone does not guarantee separability.**
3. **Representation structure matters more than overlap magnitude.**
4. **Resolution alignment dominates representation choice.**
5. **Adaptive selection outperforms naive fusion.**
6. Fixed bases require learning or conditioning to compete.

In short:

> **Separation works not because sources are sparse, but because the representation preserves source structure while allowing interference to be attenuated without breaking reconstruction.**

---

## Implications for learning-based systems

These results directly motivate:

* multi-resolution losses (e.g., MRSTFT losses),
* adaptive receptive fields,
* learned filterbanks,
* attention or gating across scales.

Rather than enforcing sparsity in a fixed domain, modern models should be designed to **discover where overlap breaks and structure survives**.

---

## Closing thoughts

This was not a separation-algorithm paper.

It was a **representation study**.

By stripping away learning and examining oracle limits, we gain a clearer understanding of *why* certain representations work — and why others fail.

If you are building the next generation of audio models, this is the level at which representation choices deserve scrutiny.

---

