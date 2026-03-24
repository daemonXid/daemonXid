---
title: "PostgreSQL-First Architecture: You Can Go Far Without Redis"
excerpt: "Instead of starting with multiple data stores, I prefer going deep on PostgreSQL first. In many products that creates a stronger balance between development speed and operational calm."
date: 2026-03-23
category: backend
series: daemon-backend
seriesOrder: 4
translationKey: postgres-first-architecture
tags: ["postgresql", "redis", "pgmq", "architecture", "operations"]
draft: false
lang: en
---

When I start a product, I try to keep the data layer simple for as long as possible. My default for that is **PostgreSQL-first**.

This does not mean I believe PostgreSQL should do everything forever. It means I do not introduce specialist infrastructure before the product has truly earned it.

## Why Start with One Database

Early projects often drift toward this shape:

- Redis for cache
- Redis again for queues
- another store for search
- another store for vectors

Each tool sounds justified on its own. Together they create a much noisier system.

- more failure points
- more monitoring surfaces
- more backup policy
- more local setup friction

Keeping PostgreSQL as the center avoids a lot of that early complexity.

## It Usually Goes Further Than People Expect

PostgreSQL is not just a relational database in the narrow sense. In practice it can cover a surprising amount of product infrastructure.

- transactional storage
- JSONB-backed flexible records
- full-text search
- vector extensions
- queue extensions
- analytics-friendly queries

That often means you do not need to split infrastructure as early as people assume.

## This Is Not an Anti-Redis Argument

Redis is good. It is just introduced too early in many systems.

My bar is simple.

- has the bottleneck been measured
- is PostgreSQL clearly inadequate
- is the extra operational complexity worth it

Until those questions are answered, I stay with PostgreSQL.

## Why I Prefer This Shape

The real value is architectural, not emotional.

- local development stays calmer
- production matches development more closely
- data flow is easier to reason about
- operational debugging stays more contained

In early systems, the goal is rarely maximum theoretical performance. The goal is to go as far as possible with the least structural noise. That is why PostgreSQL-first stays my default.
