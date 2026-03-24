---
title: "Django Domain Boundaries: Why I Force an interface.py"
excerpt: "If cross-domain imports remain unrestricted, a modular monolith degrades quickly. I use interface.py to keep Django boundaries intentional."
date: 2026-03-24
category: backend
series: daemon-backend
seriesOrder: 6
translationKey: django-interface-py-domain-boundary
tags: ["django", "domain-boundary", "interface", "modular-monolith", "architecture"]
draft: false
lang: en
---

When people talk about modular monoliths, they often stop at folder structure. But the real issue is not how the folders look. It is **how boundaries are enforced**.

That is why I keep an `interface.py` at domain edges in Django.

## Why I Resist Direct Imports

At first, importing another domain’s model or service directly feels efficient. Over time it creates a predictable mess.

- dependency direction becomes unclear
- implementation changes ripple outward
- circular dependencies appear
- data ownership becomes fuzzy

At that point the codebase may still be one repository, but structurally it is drifting toward spaghetti.

## What interface.py Actually Does

`interface.py` is not a grand framework pattern. It simply becomes the **single public entry point** for other domains.

- only exposed functions live there
- input and output contracts become explicit
- internal implementation stays hidden

That gives each domain more freedom internally while preserving a stable agreement at the boundary.

## Why It Matters Even More in Django

Someone might ask whether this is overkill inside one codebase. In my experience it matters more precisely because everything is so easy to import.

Microservices get some boundary enforcement from the network. A Django monolith gets none. One import line can bypass the entire architectural intention. That means discipline must be created in code, not assumed.

## What I Gain from It

Enforcing `interface.py` gives me practical advantages.

- clearer ownership
- cleaner testing boundaries
- easier contracts for AI-assisted work to understand
- more predictable refactoring blast radius

It is not decorative architecture. It is one of the cheapest control points I know for keeping a monolith healthy over time.
