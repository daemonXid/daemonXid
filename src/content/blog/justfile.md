---
title: "Justfile — 왜 나는 프로젝트 표준 명령어를 따로 만든다"
excerpt: "Justfile은 단순한 명령어 단축키가 아니라, 팀과 프로젝트의 표준 실행 인터페이스를 만드는 도구다."
date: 2026-03-13
category: daemon
translationKey: justfile-standard-commands
tags: ["justfile", "developer-experience", "workflow", "tooling"]
draft: false
lang: ko
---

## 한 줄 요약

`Justfile`은 프로젝트 전용 명령어 단축키 모음이다. 하지만 내게는 단순한 편의 도구가 아니라, **프로젝트가 어떤 방식으로 실행되고 관리되는지 정하는 표준 인터페이스**다.

## 왜 필요한가

프로젝트가 커질수록 명령어는 길어지고, 사람마다 실행 방식이 달라진다.

```bash
uv run python manage.py runserver --settings=config.settings.dev
uv run pytest domains --cov=domains -x -v
docker compose -f docker/docker-compose.dev.yml up -d db redis
```

이런 명령어를 모두가 외우고, 모두가 같은 방식으로 실행하길 기대하는 건 비현실적이다.

그래서 나는 `justfile`을 둔다.

## Makefile과 다른 점

`make`는 원래 빌드 시스템이다. 태스크 러너로도 쓸 수는 있지만, 목적이 완전히 맞지는 않는다.

`just`는 처음부터 **명령 실행 인터페이스**에 더 가깝다.

- 문법이 단순하다
- Windows 포함 사용성이 낫다
- "프로젝트 명령어 계약서"로 쓰기 좋다

내가 원하는 건 C 빌드 최적화가 아니라, 팀과 AI가 **같은 명령 인터페이스**를 공유하는 것이다.

## 내 기준에서 Justfile의 진짜 가치

### 1. 프로젝트 표준화

모든 프로젝트에서 같은 명령을 유지할 수 있다.

- `just dev`
- `just test`
- `just check`
- `just deploy`

프로젝트 내부 구현이 달라도, 외부 인터페이스는 통일된다.

### 2. 온보딩 속도

신규 팀원이나 미래의 나 자신에게 문서보다 빠른 진입점을 제공한다.

`just --list`만 보면 프로젝트의 기본 동작이 드러난다.

### 3. AI-assisted coding에 유리함

AI에게도 명령어 표준이 중요하다.

"이 프로젝트에서는 `just test`를 돌리면 된다"는 규칙이 있으면, 도구 사용과 검증 흐름이 훨씬 일관돼진다.

## DAEMON에서의 의미

DAEMON 계열 프로젝트에서 `justfile`은 단순한 스크립트 모음이 아니다.

- 개발 명령어 표준화
- 테스트 진입점 통일
- 배포 인터페이스 통일
- 환경별 세부 명령 추상화

즉 개발 경험을 표준화하는 작은 계층이다.

## 결론

`Justfile`은 화려한 기술이 아니다. 하지만 프로젝트가 오래 갈수록 이런 작은 표준화 도구가 큰 차이를 만든다.

내 기준에서 `justfile`은 **명령어를 줄이는 도구가 아니라, 프로젝트 실행 규칙을 명시하는 도구**다.
