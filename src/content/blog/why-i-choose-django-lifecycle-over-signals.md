---
title: "signals를 버리고 django-lifecycle을 택한 이유"
excerpt: "signals는 편리해 보이지만 로직의 위치를 흐리게 만들기 쉽다. 상태 변화가 중요한 시스템일수록 django-lifecycle 쪽이 읽기 쉽고 통제 가능했다."
date: 2026-03-23
category: backend
series: daemon-backend
seriesOrder: 5
translationKey: why-i-choose-django-lifecycle-over-signals
tags: ["django", "django-lifecycle", "signals", "models", "architecture"]
draft: false
lang: ko
---

Django에서 상태 변화에 반응하는 코드를 쓰다 보면 자연스럽게 `signals.py`가 등장한다. 작은 프로젝트에서는 꽤 편해 보인다. 저장 후 메일을 보내고, 생성 후 로그를 남기고, 상태 변경 후 후처리를 붙이는 식이다.

문제는 signals가 편리한 만큼, **로직의 위치를 흐리게 만들기 쉽다**는 점이다.

## signals에서 자주 생기는 문제

signals를 쓰면 코드가 "잘 동작하는 것처럼" 보인다. 하지만 시간이 지나면 대개 이런 문제가 생긴다.

- 모델을 저장했는데 어디서 부수효과가 터지는지 바로 안 보인다
- 같은 이벤트에 여러 핸들러가 붙으며 추적이 어려워진다
- 테스트가 간접적이 된다
- 도메인 규칙이 파일 곳곳으로 흩어진다

결국 `save()` 하나가 실제로 무슨 일을 하는지 읽기 어렵다.

## django-lifecycle이 더 나았던 이유

`django-lifecycle`은 상태 변화 로직을 모델 가까이에 둔다. 핵심은 마법이 아니라 **가시성**이다.

- 어떤 필드 변화에 반응하는지 선언적이다
- 로직이 모델 근처에 있다
- 상태 전이 규칙을 읽기 쉽다
- signals보다 추적 비용이 낮다

내가 원하는 것은 "어딘가에서 자동으로 일어나는 일"이 아니라, **이 모델이 언제 어떤 이유로 무엇을 하는지 코드에서 바로 보이는 구조**다.

## 상태 전이가 중요한 시스템일수록 차이가 커진다

주문, 결제, 승인, 발송 같은 흐름은 대부분 상태 전이의 연속이다. 이런 영역에서는 로직의 은닉이 곧 버그 원인이 된다.

그래서 나는 이벤트가 아니라 **엔티티의 생명주기**를 중심으로 생각하는 편을 선호한다.

signals는 가능하면 줄이고, 상태 변화 규칙은 모델 가까이에서 읽히게 만든다. 그 기준에서 django-lifecycle이 더 잘 맞았다.
