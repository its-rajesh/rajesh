---
title: "Is Source Separation Necessary for Multi-Source Dynamic Range Compression?"
date: 2026-10-10
tags: ["dynamic range compression","source separation","audio processing","music processing"]
author: ["Rajesh R", "Ryan Corey"]
description: "Ongoing research on whether explicit source separation is necessary before multi-source dynamic range compression."
summary: "A task-oriented comparison of mixture-domain, source-aware, and separation-based dynamic range compression pipelines."
---

> **Ongoing research manuscript**

## Motivation

Many audio-processing systems follow a familiar pipeline: separate a mixture into sources, process the estimated sources independently, and then remix them. This provides direct control over each source, but it also adds computation, latency, and separation artifacts.

This work asks a simpler question:

> **Is explicit source separation actually necessary for multi-source dynamic range compression?**

## What we compare

We study processing strategies that expose different amounts of source information to the compressor:

- **Mixture-domain DRC** — compress the observed mixture directly.
- **Source-aware processing** — use source information to guide compression without requiring perfect reconstruction of every source.
- **Separate → compress → remix** — explicitly estimate the sources, compress them independently, and reconstruct the final mixture.

The central evaluation is downstream: the separator is useful only insofar as it improves the final compressed audio.

## Broader question

Dynamic range compression is the test case, but the broader research question is whether source separation should be viewed as an obligatory intermediate stage or as one possible representation for solving a downstream audio task.

---

[Project overview →](../../projects/drc/)
