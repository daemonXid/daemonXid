---
title: "SportsIQ Architecture — Sports Science Meets Pose Estimation"
excerpt: "Why MediaPipe was chosen first, where YOLO fits later, and how pgvector turns pose analysis into a usable sports-science system."
date: 2026-03-20
category: sports-ai
series: sportsiq
seriesOrder: 1
translationKey: sportsiq-architecture
tags: ["MediaPipe", "YOLO", "biomechanics", "architecture"]
draft: false
lang: en
---

## Why MediaPipe over YOLO for Pose Estimation (Initially)

Kinetiq needs to extract meaningful biomechanical data from video — joint angles, symmetry scores,
range of motion. The choice of pose estimation library determines what data you get and how fast.

### MediaPipe: Fast, Accurate, Zero Setup

MediaPipe Pose gives 33 3D landmarks per person at 30+ FPS on CPU. No GPU required for single-person analysis.
The z-coordinate (depth estimate) is a bonus — crude, but useful for calculating approximate joint angles
in 3D space.

**Why this matters for Sports Science:** A squat analysis needs hip, knee, and ankle angles simultaneously.
MediaPipe provides all three landmarks at consistent frame rate, making real-time feedback possible.

### YOLO: Multi-Person, Team Contexts

For team sport analysis (basketball, football), you need to track multiple athletes simultaneously.
MediaPipe degrades when people overlap. YOLO + pose estimation handles this better.

The planned architecture: YOLO for detection and tracking → MediaPipe for detailed per-athlete keypoint extraction.

## pgvector for Movement Memory

Each session generates a movement embedding — a compressed representation of the athlete's movement pattern.
Storing these in PostgreSQL via pgvector enables:

- Session-to-session comparison (is the athlete improving?)
- Anomaly detection (this movement pattern is unusual for this athlete)
- Population comparison (how does this squat compare to 1000 other squat recordings?)

This is the part that turns a pose estimation tool into an actual sports science instrument.

## Status

Architecture defined. Implementation starting.
