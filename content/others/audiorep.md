---

# When Does Audio Become Separable?

## A Representation-Centric Look at Overlap and Oracle Limits

*Rajesh Rameshbabu*
*Audio Signal Processing, UIC*

---

## Motivation

Audio source separation is often justified by a simple idea:

> *If sources are sparse or weakly overlapping in some representation, we can separate them.*

This intuition underlies classical time–frequency masking, harmonic–percussive separation, and many modern deep-learning systems that operate on spectrograms or learned feature spaces.

But there is a subtle, largely unexamined question hiding underneath:

> **Does reduced overlap in a representation actually imply better separability?**

Or put differently:

* Is sparsity the real reason separation works?
* Or is something else — structure, resolution, reconstruction — doing the heavy lifting?

This post explores that question through a **controlled, oracle-based experiment**, isolating representation effects from learning.

---

## Experimental Setup (High-level)

### Data

We use real musical stems (MUSDB-style), each containing:

* vocals
* bass
* drums
* other instruments

We form mixtures using:

* within-track pairs (e.g., vocal–drums),
* cross-track same-stem pairs (drums–drums),
* cross-track mixed-stem pairs (vocal–bass, etc.).

In total, **102 unique source pairs** are evaluated.

### Mixture model

Each source is:

1. Convolved with a different room impulse response
2. Mixed at 0 dB SIR
3. Corrupted with mild additive noise (30 dB SNR)

So this is **convolutive + noise mixing**, not a toy instantaneous model.

---

## What we compare: representations

For each mixture, we compute **oracle ideal ratio masks** in different domains and measure the **best possible separation** that domain can support.

We evaluate:

* Time domain (sample-wise masking)
* STFT (single resolution)
* **Multi-resolution STFT (MRSTFT)**

  * best resolution per example
  * naive ensemble (averaged waveform)
* Constant-Q Transform (CQT)
* Discrete Wavelet Transform (DWT)
* Wavelet Packet Transform (WPT)
* Scattering transform (overlap only; non-invertible)

This gives us a clean question:

> *If a representation were perfect, how well could it separate the sources?*

---

## Metric 1: Which domain is “best”?

### 🔹 Figure 1 — Best domain wins

*(Embed: `best_domain_hist.png`)*

This plot counts how often each representation achieves the **highest oracle SI-SDR** across all mixtures.

**Key observation:**

* **MRSTFT (best resolution)** wins **67 out of 102** mixtures
* Single-resolution STFT wins far fewer
* Other representations rarely win at all

**Takeaway:**
No single resolution works best everywhere — but **adapting resolution to the signal consistently wins**.

---

## Metric 2: Overlap vs separability (the myth-breaker)

### 🔹 Figure 2 — Overlap vs Oracle SI-SDR

*(Embed: `scatter_overlap_vs_oracle.png`)*

This figure plots:

* x-axis: representation-domain overlap (Jaccard index)
* y-axis: oracle SI-SDR

If sparsity were the full story, we would expect:

> lower overlap ⇒ higher separability

That is **not what we see**.

**Examples:**

* Time-domain masking shows *low overlap* but *poor separation*
* CQT can show *higher overlap* but *better separation*
* MRSTFT achieves the *highest oracle SI-SDR* at moderate overlap

**Takeaway:**
👉 **Low overlap is neither necessary nor sufficient for good separation.**

This single plot falsifies the “sparsity alone explains separation” intuition.

---

## Metric 3: Distribution-level evidence

### 🔹 Figure 3 — Oracle SI-SDR distribution by domain

*(Embed: `box_oracle_by_domain.png`)*

This boxplot shows oracle SI-SDR distributions across domains.

**What stands out:**

* MRSTFT has the **highest median** and **best upper tail**
* Single STFT is competitive but weaker
* Time domain and fixed wavelets lag far behind

**Takeaway:**
MRSTFT doesn’t just win occasionally — it provides the **strongest and most consistent upper bound**.

---

## Metric 4: How efficiently does a domain use overlap?

We define a simple efficiency score:

[
\text{Efficiency} = \frac{\text{Oracle SI-SDR}}{\text{Overlap} + \epsilon}
]

### 🔹 Figure 4 — Representation efficiency

*(Embed: `efficiency_by_domain.png`)*

This reveals something subtle:

* Time domain appears sparse but is **inefficient**
* STFT and MRSTFT convert overlap into separation effectively
* Fixed wavelets waste overlap without delivering performance

**Takeaway:**
👉 It’s not about *having* low overlap — it’s about *using* overlap well.

---

## Metric 5: Does this depend on source type?

### 🔹 Figure 5 — Pair-type × domain heatmap

*(Embed: `heatmap_pairtype_domain_median_sisdr.png`)*

This heatmap shows median oracle SI-SDR for:

* vocal–drums
* vocal–bass
* drums–bass
* same-stem and cross-track mixtures

**Observation:**

* Absolute difficulty varies by pair type
* **MRSTFT remains consistently strong across all categories**

**Takeaway:**
The results are **not an artifact of a specific instrument pair**.

---

## What did we actually learn?

This experiment teaches several important lessons:

1. **Physical overlap is unavoidable** in audio mixtures
2. **Apparent sparsity does not guarantee separability**
   (time domain is the clearest counterexample)
3. **Representation structure matters more than overlap magnitude**
4. **Resolution alignment dominates representation choice**
5. **Naive fusion (averaging) is worse than adaptive selection**
6. Fixed bases (e.g., wavelets) need learning or conditioning to compete

The central conclusion is:

> **Separation works not because sources are sparse, but because the representation preserves source structure while allowing interference to be attenuated without breaking reconstruction.**

---

## Why this matters for learning-based systems

These findings directly motivate:

* multi-resolution losses (e.g., MRSTFT losses),
* adaptive receptive fields,
* learned filterbanks,
* attention or gating across scales.

In other words:

> *Don’t hard-code sparsity in one domain.*
> *Let the model discover where overlap breaks.*

---

## Closing thoughts

This was not a separation algorithm paper.

It was a **representation study**.

By stripping away learning and looking at oracle limits, we get a clearer picture of *why* certain representations work — and why others don’t.

If you’re building the next generation of audio models, this is the level at which representation choice should be questioned.

---
