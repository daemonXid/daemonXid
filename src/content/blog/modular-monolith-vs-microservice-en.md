---
title: "Modular Monolith vs Microservice — Why I Start with the Monolith"
excerpt: "Microservices can look scalable, but in early products they often import operational complexity before the product earns it."
date: 2026-03-15
category: daemon
translationKey: modular-monolith-vs-microservice
tags: ["architecture", "modular-monolith", "microservices", "deployment"]
draft: false
lang: en
---

## The Short Version

I default to a **modular monolith** first.

Microservices are an expansion strategy, not a starting strategy.

## Why Teams Reach for Microservices Too Early

Microservices sound attractive:

- they look scalable
- they feel modern
- they resemble what larger companies use

But early-stage products usually have different problems:

- small teams
- unstable domain boundaries
- rapidly changing features
- limited operational bandwidth

In that environment, microservices often import complexity before they solve a real scaling problem.

## The Real Cost of Microservices

Splitting services does not only split code. It multiplies operations:

- inter-service communication
- multiple deployment pipelines
- more secrets and environment management
- distributed logs and failures
- API contract coordination

That is often too much overhead for an early product.

## Why I Prefer a Modular Monolith First

A modular monolith keeps:

- one deployment unit
- one runtime boundary
- simpler operational reasoning

while still enforcing strong internal module boundaries.

That gives me a better place to learn where real service boundaries should eventually exist.

## My Rule

Start with a modular monolith.  
Keep module boundaries explicit.  
Split only when the need becomes operationally and product-wise obvious.
