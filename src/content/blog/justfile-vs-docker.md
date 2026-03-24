---
title: "Justfile vs Docker — 비교 대상이 아니라 같이 쓰는 도구"
excerpt: "Justfile은 명령 인터페이스이고 Docker는 실행 환경이다. 둘은 경쟁 관계가 아니라 서로 다른 레이어를 담당한다."
date: 2026-03-12
category: deployment
series: deployment-patterns
seriesOrder: 1
translationKey: justfile-vs-docker
tags: ["justfile", "docker", "developer-experience", "deployment"]
draft: false
lang: ko
---

## 한 줄 요약

`Justfile`과 `Docker`는 비교 대상이 아니다. 하나는 **명령 인터페이스**, 다른 하나는 **실행 환경**이다. 좋은 개발 환경에서는 둘을 함께 쓴다.

## 서로 해결하는 문제가 다르다

`Justfile`이 해결하는 질문은 이것이다.

- 이 프로젝트에서 무엇을 어떻게 실행할까?

`Docker`가 해결하는 질문은 이것이다.

- 이 프로젝트를 어떤 환경에서 동일하게 실행할까?

즉,

- Justfile = 인터페이스
- Docker = 환경

이다.

## 왜 같이 쓰는가

실전 프로젝트에서는 보통 둘 다 필요하다.

예를 들어 DAEMON 스타일에서는 이렇게 간다.

- Django 앱은 로컬에서 직접 실행
- PostgreSQL, Redis 같은 인프라는 Docker로 실행
- 그 모든 명령을 `just dev`, `just test` 같은 형태로 감싼다

이 구조의 장점은 빠르다.

- 앱 reload와 디버깅은 로컬이 편하다
- 인프라는 컨테이너가 편하다
- 명령 인터페이스는 just가 정리해준다

## Docker만으로는 안 되는 것

Docker는 환경을 패키징하지만, 프로젝트 명령어를 좋은 인터페이스로 만들어주지는 않는다.

`docker compose up -d db redis`
`docker compose down -v`
`docker build -t ...`

이런 명령은 여전히 길고 맥락을 요구한다.

## Justfile만으로는 안 되는 것

반대로 Justfile은 환경을 보장하지 못한다.

로컬에 뭐가 깔려 있는지, OS가 어떤지, 라이브러리 버전이 맞는지는 Justfile이 해결하지 않는다.

이 부분은 Docker나 컨테이너 기반 환경 정의가 필요하다.

## 결론

둘 중 하나를 고르는 문제가 아니다.

- Docker는 환경을 표준화한다
- Justfile은 명령을 표준화한다

프로젝트가 커질수록 둘 다 필요하다. 내 기준에서 가장 자연스러운 구조는 **Justfile이 Docker를 실행하는 구조**다.
