---
title: "SportsIQ 아키텍처 — 스포츠과학과 포즈 추정이 만나는 방식"
excerpt: "왜 처음엔 MediaPipe를 먼저 선택했는지, YOLO는 어디에 붙는지, 그리고 pgvector가 포즈 분석을 어떻게 스포츠과학 도구로 바꾸는지 정리했다."
date: 2026-03-20
category: sports-ai
series: sportsiq
seriesOrder: 1
translationKey: sportsiq-architecture
tags: ["MediaPipe", "YOLO", "biomechanics", "architecture"]
draft: false
lang: ko
---

## 왜 처음엔 YOLO보다 MediaPipe인가

SportsIQ가 비디오에서 뽑아내야 하는 것은 단순한 사람 감지가 아니다.

- 관절 각도
- 좌우 대칭성
- 가동 범위

즉 스포츠과학적으로 의미 있는 biomechanical data다. 이 기준에서는 초기에 `MediaPipe Pose`가 더 자연스럽다.

## MediaPipe의 장점

MediaPipe Pose는 단일 인물 기준으로 빠르고, CPU에서도 꽤 안정적으로 동작한다. 33개의 landmark를 제공하기 때문에, 무릎-엉덩이-발목 각도 같은 데이터를 계산하기 좋다.

스쿼트나 런지처럼 단일 동작을 분석하는 초기 use case에서는 이게 매우 실용적이다.

## YOLO가 필요한 시점

반면 농구처럼 여러 명이 동시에 나오는 환경에서는 MediaPipe만으로는 한계가 생긴다. 사람이 겹치거나 장면이 복잡해지면 tracking이 약해진다.

그래서 장기적으로는:

`YOLO로 검출 및 추적 → MediaPipe로 세부 포즈 추정`

같은 구조가 더 자연스럽다.

## pgvector가 중요한 이유

포즈 추정만으로는 도구가 끝나지 않는다. 세션마다 나온 움직임 패턴을 embedding처럼 저장하고, 이전 세션이나 다른 사용자와 비교할 수 있어야 실제 지식 시스템이 된다.

`pgvector`를 쓰면:

- 세션 간 비교
- 이상 패턴 탐지
- 유사 동작 검색

이 가능해진다.

이 지점부터 SportsIQ는 단순한 포즈 추정기가 아니라, 스포츠과학 지식 플랫폼에 가까워진다.

## 현재 상태

아키텍처 방향은 정의됐고, 구현은 진행 중이다.
