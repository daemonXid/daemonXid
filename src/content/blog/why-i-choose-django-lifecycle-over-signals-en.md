---
title: "Why I Choose django-lifecycle Over Django Signals"
excerpt: "Signals look convenient, but they often make business rules harder to see. In state-heavy systems, django-lifecycle has been easier for me to read and control."
date: 2026-03-23
category: backend
series: daemon-backend
seriesOrder: 5
translationKey: why-i-choose-django-lifecycle-over-signals
tags: ["django", "django-lifecycle", "signals", "models", "architecture"]
draft: false
lang: en
---

In Django projects, `signals.py` tends to appear quickly. It feels convenient. Save a model, trigger an email. Create an object, write an audit log. Change a status, run side effects.

The problem is that convenience often comes with **weaker visibility**.

## What Goes Wrong with Signals

Signals can keep working long after they stop being clear.

- saving a model no longer tells you what side effects will happen
- multiple handlers attach to the same event over time
- tests become more indirect
- domain rules drift into scattered event listeners

Eventually `save()` becomes harder to reason about than it should be.

## Why django-lifecycle Fits Me Better

`django-lifecycle` keeps lifecycle rules close to the model. The key benefit is not magic. It is readability.

- field-change conditions are declared explicitly
- the logic stays near the entity
- state transition rules are easier to scan
- tracing behavior costs less than with scattered signals

What I want is not “something happens somewhere automatically.” I want code that makes it obvious when and why a model performs a side effect.

## The Difference Grows in State-Heavy Systems

Orders, approvals, payouts, deliveries, memberships. These are all state machines in disguise.

In those systems, hidden rules become bugs quickly. That is why I prefer thinking in terms of **entity lifecycle** instead of loosely attached events.

So I try to minimize signals and keep transition rules close to the model. In that shape, django-lifecycle has been the better fit.
