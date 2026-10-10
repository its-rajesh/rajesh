---
title: "Room Impulse Response Interpolation using a Time-Warping Neural Network"
date: 2026-08-20
tags: ["room impulse response","interpolation","time warping","spatial audio","acoustics"]
author: ["Rashen Fernando", "Rajesh Rameshbabu", "Kanad Sarkar", "Manan Mittal", "Andrew C. Singer", "Ryan M. Corey"]
description: "A POMA paper on neural room impulse response interpolation in a time-warping domain."
summary: "A neural framework that predicts spatially smooth time-warping functions to interpolate room impulse responses at unseen microphone positions."
editPost:
    URL: "https://pubs.aip.org/asa/poma"
    Text: "Proceedings of Meetings on Acoustics"
---

##### Links

+ [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QOwRUvMAAAAJ&citation_for_view=QOwRUvMAAAAJ:Y0pCki6q_DkC)
+ [DOI](https://doi.org/10.1121/2.0002312)

---

##### Abstract

Interpolating room impulse responses (RIRs) at unmeasured locations is difficult because small spatial displacements can produce abrupt changes in early-reflection arrival times. Direct interpolation in the waveform or frequency domain can therefore blur or average physically meaningful reflections.

This work instead represents local spatial variation in a time-warping domain derived from Dynamic Time Warping (DTW). A neural network maps microphone coordinates to a centered time-warping signal that describes how a fixed reference RIR should be temporally deformed to match the RIR at a target location. The predicted warping function is then applied to reconstruct the target RIR.

The central observation is that time-warping representations vary more smoothly with geometry than raw RIR waveforms, making them easier to learn from sparse spatial measurements. The proposed method improves early-reflection reconstruction compared with direct waveform interpolation while retaining a physically interpretable representation of reflection timing.

---

##### Citation

R. Fernando, R. Rameshbabu, K. Sarkar, M. Mittal, A. C. Singer, and R. M. Corey, "Room impulse response interpolation using a time-warping neural network," Proceedings of Meetings on Acoustics, vol. 60, 030004, 2026. https://doi.org/10.1121/2.0002312
