---
title: "Rust Performance Without Rust Maintenance: granian, orjson, and Pydantic v2"
excerpt: "I do not always need to write Rust directly. In many cases I can capture a lot of the performance upside by leaning on strong Rust-backed Python components."
date: 2026-03-24
category: backend
series: daemon-backend
seriesOrder: 8
translationKey: rust-performance-without-rust-maintenance
tags: ["rust", "python", "granian", "orjson", "pydantic-v2"]
draft: false
lang: en
---

I do not dislike Rust. Quite the opposite. But when building products, my default goal is not “add another language.” My goal is **get better performance with the least additional maintenance**.

That is why I often prefer using Rust-backed Python components instead of writing Rust myself.

## Why I Do Not Jump to Direct Rust First

Writing Rust directly can be powerful. It also brings extra cost.

- toolchain management
- cross-language debugging
- team learning overhead
- more deployment complexity

Sometimes that tradeoff is worth it. Often it is not.

## The Leverage Pattern I Prefer

I like this kind of stack:

- `granian` for server-level performance
- `orjson` for serialization speed
- `pydantic v2` for fast validation

The value is straightforward. I keep the codebase in Python while pulling in high-performance implementations where bottlenecks often appear.

## Why This Feels Practical

Most teams are better described as “teams shipping products in Python” than “teams maintaining a mixed Python and Rust platform.” That makes leverage the smarter default.

My sequence is usually this:

- build quickly in Python first
- measure actual hot paths
- absorb what can be absorbed through proven Rust-backed libraries
- only consider direct Rust when that still is not enough

That order creates less regret.

What I am after is not Rust for its own sake. I want the upside of Rust-level performance while keeping maintenance inside a reasonable budget.
