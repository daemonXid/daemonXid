---
title: "Why I Removed Redis and Kept Just PostgreSQL"
excerpt: "Below a certain scale, Redis often adds more operational complexity than real value. For many products, PostgreSQL plus pgmq is enough."
date: 2026-03-19
category: daemon
translationKey: no-redis
tags: ["PostgreSQL", "pgmq", "architecture", "Redis"]
draft: false
lang: en
---

## The Short Version

I removed Redis from the DAEMON stack because, for products below a certain traffic level, it was solving less than it was costing.

For my current scale, **PostgreSQL with `pgmq` is enough** for queueing and background jobs.

## Why I Removed It

The decision was practical, not ideological.

- one less service to deploy
- one less failure point to debug
- simpler local setup
- less explanation needed for AI-assisted coding and onboarding

If traffic eventually requires a dedicated cache or broker again, Redis can come back. But it should come back because the system needs it, not because the stack feels incomplete without it.

## Why `pgmq` Was Enough

`pgmq` gives me a queue inside PostgreSQL.

```sql
CREATE EXTENSION IF NOT EXISTS pgmq;
```

That lets Taskiq use PostgreSQL as the broker:

```python
from taskiq_pg import PgBroker

broker = PgBroker("postgresql://user:pass@localhost:5432/db")
```

For my current products, that is a better tradeoff than running Redis as a separate moving part.

## The Real Advantage of a Single-Database Strategy

The biggest win is not elegance. It is operational clarity.

When something goes wrong, I want fewer places to inspect.

- one primary datastore
- one queue layer
- one service to reason about

That matters in deployment, debugging, and AI-assisted maintenance.

## When Redis Makes Sense Again

Redis is still a good tool. I would bring it back when the product actually needs:

- very high-volume caching
- strict latency requirements for hot reads
- workload patterns PostgreSQL should not absorb

Until then, **PostgreSQL alone keeps the architecture simpler and more honest**.
