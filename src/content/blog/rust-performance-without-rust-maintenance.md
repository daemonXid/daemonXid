---
title: "Rust를 배우지 않고 Rust 성능 가져오기: granian, orjson, pydantic v2"
excerpt: "직접 Rust를 쓰지 않아도 Rust로 만들어진 좋은 Python 생태계 부품을 조합하면 꽤 큰 성능 이점을 가져올 수 있다. 내가 선호하는 방식은 직접 구현보다 레버리지다."
date: 2026-03-24
category: backend
series: daemon-backend
seriesOrder: 8
translationKey: rust-performance-without-rust-maintenance
tags: ["rust", "python", "granian", "orjson", "pydantic-v2"]
draft: false
lang: ko
---

나는 Rust를 싫어하지 않는다. 오히려 좋아한다. 다만 제품을 만드는 입장에서 항상 원하는 것은 "언어를 더 늘리는 것"이 아니라, **좋은 성능을 더 적은 유지보수로 가져오는 것**이다.

그래서 내가 자주 택하는 전략은 직접 Rust를 쓰는 것이 아니라, Rust로 이미 잘 만들어진 Python 생태계 부품을 가져오는 것이다.

## 왜 직접 Rust를 덜 택하나

직접 Rust를 붙이면 분명 강력하다. 하지만 비용도 따라온다.

- 빌드 체인 관리
- 언어 경계 디버깅
- 팀 전체의 러닝 커브
- 배포 복잡도 증가

이 비용이 항상 정당화되지는 않는다.

## 내가 선호하는 레버리지 방식

내가 좋아하는 건 이런 조합이다.

- `granian`: 서버 레벨 성능
- `orjson`: 직렬화 성능
- `pydantic v2`: 빠른 검증 계층

이 방식의 장점은 명확하다. Python 코드베이스를 유지하면서도, 병목이 자주 생기는 지점에서 이미 검증된 고성능 구현을 가져올 수 있다.

## 왜 이게 실용적인가

대부분의 팀은 "Rust를 잘 쓰는 팀"보다 "Python으로 제품을 빨리 만드는 팀"에 가깝다. 그럴수록 언어를 늘리기 전에 **레버리지 가능한 부품이 있는지 먼저 보는 편이 낫다**.

즉 내 전략은 이렇다.

- 먼저 Python으로 빠르게 만든다
- 핫패스는 측정한다
- 이미 잘 만들어진 Rust 기반 라이브러리로 흡수 가능한 부분은 흡수한다
- 그래도 모자랄 때만 직접 Rust를 고려한다

이 순서가 훨씬 덜 후회된다.

결국 내가 원하는 것은 Rust 자체가 아니라, **Rust가 주는 성능을 합리적인 유지보수 비용 안에서 가져오는 것**이다.
