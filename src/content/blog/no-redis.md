---
title: "PostgreSQL 하나로 Redis를 버린 이유"
excerpt: "100만 트래픽 미만에서는 Redis보다 PostgreSQL 하나로 단순한 아키텍처를 유지하는 편이 더 낫다고 판단한 이유를 정리했습니다."
date: 2026-03-19
category: backend
series: daemon-backend
seriesOrder: 3
translationKey: no-redis
tags: ["PostgreSQL", "pgmq", "architecture", "Redis"]
draft: false
lang: ko
---

## 왜 Redis를 제거했나

DAEMON v5.8부터 기술 스택에서 Redis를 빼버렸다.

이유는 단순하다: **100만 트래픽 미만에서 Redis는 필요 없다.**

PostgreSQL에 `pgmq` 익스텐션 하나 추가하면 Redis가 하던 일 대부분을 대체할 수 있다.
초당 수십만 건의 캐시 읽기가 필요한 수준이 되면 그때 다시 Redis를 고려하면 된다.
그 수준까지 트래픽이 오는 것 자체가 먼저 풀어야 할 문제다.

## pgmq가 뭔데 ? 

PostgreSQL Message Queue. PostgreSQL 안에서 돌아가는 큐 시스템이다.

```sql
-- 익스텐션 설치 한 줄
CREATE EXTENSION IF NOT EXISTS pgmq;
```

Taskiq의 broker를 Redis 대신 pgmq로 설정하면 끝이다.

```python
from taskiq_pg import PgBroker

broker = PgBroker("postgresql://user:pass@localhost:5432/db")
```

## 단일 DB 전략의 실제 장점

**장애 대응이 단순해진다.**
Redis가 죽었나, PostgreSQL이 죽었나, 아니면 둘 다인가 — 이런 고민이 사라진다.
DB 하나면 로그 볼 곳도 하나다.

**AI 에이전트 협업이 쉬워진다.**
Claude한테 "이 코드 고쳐줘" 할 때 "PostgreSQL만 있으면 돼"라고 말하면 즉시 테스트 환경 구성 가능하다.
Redis, Celery, Redis Sentinel 설정까지 설명해야 하는 상황과 비교하면 차원이 다르다.

**Coolify 배포가 단순해진다.**
`docker-compose.yml`에 서비스 하나 줄어든다는 게 생각보다 크다.

## 언제 다시 분리할 것인가

```
초당 수십만 건 캐시 읽기 발생 → Redis 도입
수십억 벡터 밀리초 검색 필요 → Pinecone 도입
그 전까지 → PostgreSQL 하나로 충분
```

아직 그 수준의 트래픽이 없다면, Redis를 추가하는 건 과잉 설계다.
