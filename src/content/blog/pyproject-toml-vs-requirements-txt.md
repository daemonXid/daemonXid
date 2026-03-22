---
title: "pyproject.toml vs requirements.txt — 선언과 설치를 같은 것으로 보면 안 된다"
excerpt: "pyproject.toml은 프로젝트 선언이고 requirements.txt는 설치 스크립트에 가깝다. 둘은 역할부터 다르다."
date: 2026-03-11
category: daemon
translationKey: pyproject-vs-requirements
tags: ["python", "pyproject", "requirements", "uv", "packaging"]
draft: false
lang: ko
---

## 한 줄 요약

`pyproject.toml`은 프로젝트 선언 파일이고, `requirements.txt`는 설치 명령 목록에 가깝다. 둘은 이름만 다른 것이 아니라 **역할이 다르다.**

## 왜 헷갈리는가

Python 생태계에서는 오랫동안 `requirements.txt`가 너무 많이 쓰였다. 그래서 많은 팀이 이 파일을 의존성 관리의 중심처럼 느낀다.

하지만 modern Python 기준에서 소스 오브 트루스는 보통 이렇게 나뉜다.

- `pyproject.toml` = 프로젝트 의도와 메타데이터
- `uv.lock` 같은 lock 파일 = 재현성

이 구조가 더 명확하다.

## pyproject.toml의 장점

- 공식 표준 흐름에 가깝다
- 프로젝트 메타데이터와 의존성 선언을 함께 둔다
- 도구 설정까지 한 파일에 모을 수 있다
- `uv` 같은 현대 도구와 자연스럽게 연결된다

즉 프로젝트 자체를 설명하는 파일로 쓰기 좋다.

## requirements.txt의 장점과 한계

장점도 있다.

- 단순하다
- `pip install -r requirements.txt`가 직관적이다
- 레거시 팀과 도구 호환성이 높다

하지만 한계도 분명하다.

- 직접 의존성과 간접 의존성이 섞인다
- 프로젝트 의도와 설치 결과가 뒤엉킨다
- 도구 설정을 담지 못한다

## 내 기준

내가 `uv`와 modern Python workflow를 쓰는 프로젝트에서는 기본적으로:

- `pyproject.toml`로 선언
- lock 파일로 재현성 보장

을 택한다.

그리고 꼭 필요한 경우에만 export해서 `requirements.txt`를 만든다.

즉 `requirements.txt`는 중심 파일이 아니라 **호환을 위한 파생 산출물**에 가깝다.

## 결론

질문은 "어느 것이 더 유명한가"가 아니다.

질문은 "내 프로젝트의 진짜 선언 파일이 무엇인가"다.

내 기준에서 modern Python 프로젝트의 진실의 원천은 `pyproject.toml`이고, `requirements.txt`는 필요할 때 만들어 쓰는 호환용 포맷이다.
