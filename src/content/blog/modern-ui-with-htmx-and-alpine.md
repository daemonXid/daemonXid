---
title: "React를 쓰지 않고도 충분히 현대적인 UI를 만드는 방법: HTMX + Alpine"
excerpt: "현대적인 UI가 곧 SPA를 뜻하는 것은 아니다. HTMX와 Alpine.js만으로도 서버 중심 구조를 유지하면서 꽤 좋은 상호작용을 만들 수 있다."
date: 2026-03-24
category: frontend
series: daemon-ui
seriesOrder: 2
translationKey: modern-ui-with-htmx-and-alpine
tags: ["htmx", "alpinejs", "frontend", "django", "ui"]
draft: false
lang: ko
---

"현대적인 UI"라고 하면 곧바로 React나 다른 SPA 프레임워크를 떠올리는 경우가 많다. 하지만 내가 보기엔 현대성의 기준은 도구 이름이 아니라 **사용 경험**이다.

사용자가 원하는 것은 대개 이렇다.

- 빠른 반응
- 자연스러운 부분 갱신
- 로딩 상태 피드백
- 깔끔한 전환

이 중 상당수는 HTMX와 Alpine.js만으로도 충분히 만들 수 있다.

## HTMX가 맡는 것

HTMX는 서버와 브라우저 사이의 상호작용을 단순하게 만든다.

- 부분 HTML 교체
- 폼 전송
- polling
- out-of-band 업데이트

즉 "전체 앱을 프론트 상태로 옮기지 않고도" 인터랙션을 만들 수 있다.

## Alpine.js가 맡는 것

Alpine.js는 작은 프론트 상태를 관리하기에 딱 맞는다.

- 토글
- 모달
- 탭
- 임시 클라이언트 상태

내가 좋아하는 점은 로컬 상태를 위해 거대한 프레임워크를 올리지 않아도 된다는 것이다.

## 이 조합의 장점

HTMX와 Alpine을 같이 쓰면 다음 균형이 나온다.

- 서버는 데이터와 주요 상태를 책임진다
- 브라우저는 가벼운 상호작용만 맡는다
- HTML이 여전히 시스템의 중심이다

이 구조는 특히 Django 같은 서버 중심 프레임워크와 잘 맞는다. 템플릿, 라우팅, 폼, 권한 흐름이 하나의 축 안에 남기 때문이다.

내 기준에서 현대적인 UI는 클라이언트 앱의 크기가 아니라, **사용자가 느끼는 마찰이 적은가**로 판단해야 한다. 그 기준에서는 HTMX + Alpine도 충분히 현대적이다.
