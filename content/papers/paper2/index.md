---
title: "Interference Reduction in Microphone Recordings for Music Source Separation" 
date: 2024-04-10
tags: ["Interference Reduction","Music Source Separation","Neural Networks","Literature","MS Thesis"]
author: ["Rajesh R"]
description: "This thesis proposed the various inteference reduction for music source separation. Submitted for the degree of MS by Research, 2024." 
summary: "MS by Research thesis submitted at Indian Institute of Technology, Mandi 2024" 

editPost:
    URL: "https://library.iitmandi.ac.in/page/thesis"
    Text: "Indian Institute of Technology Mandi"

---

---

##### Download

+ [Thesis](S21005_RajeshR_MSThesis.pdf)

---

##### Abstract

Music Source Separation (MSS) is fundamental to various music information retrieval tasks, including pitch estimation, genre detection, and instrument classification. Its primary function is to extract distinct instrument sounds, or sources, from musical audio. However, the MSS problem remains less explored in the context of various other genres, such as Indian classical music, compared to the detailed studies in Western pop music. The objective here is to con- struct a dedicated model proficient at effectively isolating specific musical sources within a given composition, irrespective of the genre.
To achieve this, obtaining a high-quality dataset is essential but challenging. For example, as a test case, live concert recordings from Indian classical performances form a valuable data source but frequently suffer from issues of acoustic bleeding and interference due to a lack of acoustic shielding. Thus, the primary objective of this thesis is to develop an interference reduction system for microphone recordings.
To address the interference reduction issue, we introduce several interference reduction tech- niques to enhance the dataset’s suitability for training MSS models. These techniques include a learning-free optimization approach and learning-based convolutional autoencoders (CAEs), truncated Unet (t-UNet), and graph-based interference reduction network (GIRNet). A dedi- cated CAE was used for each source, treating interference as noise. However, CAEs work in the time-frequency domain, accepting short-time Fourier transform (STFT) magnitude input and outputting an estimated clean STFT magnitude source. The t-UNet and the GIRNet, in turn, work with the raw waveform, learning the relationships among the various sources and using that information to reduce interference.
The proposed techniques have reduced interference and improved source-to-distortion ratios. Subsequently, we utilized the Wave-U-Net MSS model to effectively separate the stems in a Carnatic music dataset as a test case.

---

##### Citation

Rajesh R, 2024. "Interference Reduction in Microphone Recordings for Music Source Separation." MS by Research Thesis, Indian Institute of Technology Mandi.

```BibTeX
@phdthesis{rajesh2024,
author={R, Rajesh},
title={Interference Reduction in Microphone Recordings for Music Source Separation},
school={Indian Institute of Technology Mandi},
year={2024}}
```

---

##### Related material

+ [Open Seminar Slides](OpenSeminar_compressed.pdf)
+ [Synopsis Seminar Slides](Synopsis_compressed.pdf)
