---
title: "PostgreSQL-first 아키텍처: Redis 없이도 꽤 멀리 갈 수 있다"
excerpt: "처음부터 DB를 여러 개 깔기보다 PostgreSQL 하나를 깊게 쓰는 편이 운영과 개발 모두에서 더 강한 경우가 많다. 내가 PostgreSQL-first를 기본값으로 두는 이유를 정리했다."
date: 2026-03-23
category: backend
series: daemon-backend
seriesOrder: 4
translationKey: postgres-first-architecture
tags: ["postgresql", "redis", "pgmq", "architecture", "operations"]
draft: false
lang: ko
---

나는 새로운 제품을 시작할 때 가능한 한 늦게까지 데이터 계층을 단순하게 유지하려고 한다. 그 기본값이 바로 **PostgreSQL-first**다.

이 말은 PostgreSQL만 사랑한다는 뜻이 아니다. 더 정확히는, 문제의 규모가 아직 작을 때는 **전문 저장소를 성급하게 늘리지 않는다**는 뜻이다.

## 왜 PostgreSQL 하나로 시작하나

초기 제품에서 흔한 유혹은 이렇다.

- 캐시는 Redis
- 큐도 Redis
- 검색은 별도 엔진
- 벡터는 또 다른 저장소

이렇게 쌓으면 각 도구는 명분이 있어 보인다. 하지만 실제로는 운영 포인트가 급격히 늘어난다.

- 장애 지점 증가
- 백업 정책 증가
- 모니터링 포인트 증가
- 로컬 개발 복잡도 증가

반대로 PostgreSQL 하나로 오래 버티면 훨씬 많은 것이 단순해진다.

## 생각보다 멀리 간다

PostgreSQL은 단순한 RDBMS가 아니다. 실제 제품에서는 꽤 많은 역할을 흡수할 수 있다.

- 기본 트랜잭션 저장
- JSONB 기반 유연한 데이터
- 전문 검색
- 벡터 확장
- 큐 확장
- 분석용 쿼리

즉 "나중에 필요할 것 같은 저장소"를 처음부터 늘리지 않아도 되는 경우가 많다.

## Redis를 무시하자는 얘기는 아니다

Redis는 좋은 도구다. 다만 자주 너무 빨리 들어온다.

내 기준은 단순하다.

- 진짜 병목이 확인됐는가
- PostgreSQL로는 명확히 불가능한가
- 운영 복잡도 증가를 감수할 만큼 이익이 큰가

이 세 가지에 답하기 전까지는 PostgreSQL 하나로 버틴다.

## PostgreSQL-first가 주는 이점

내가 이 방식을 좋아하는 이유는 기능이 아니라 구조 때문이다.

- 개발 환경이 단순하다
- 로컬과 운영의 차이가 줄어든다
- 데이터 흐름을 한곳에서 보기 쉽다
- 문제 원인을 추적하기 쉽다

결국 초기 아키텍처에서 중요한 것은 "최고 성능의 가능성"보다 **가장 적은 복잡도로 가장 멀리 가는 것**이다.

그래서 나는 PostgreSQL-first를 기본값으로 둔다.
