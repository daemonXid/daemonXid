---
title: "Why I Chose HTML, CSS, and HTMX Over React for Django"
excerpt: "I did not avoid React out of ignorance or dislike. In the architecture I chose around Django, modular monoliths, and vertical slices, HTMX felt more natural."
date: 2026-03-21
category: frontend
series: daemon-ui
seriesOrder: 1
translationKey: django-react-vs-htmx
tags: ["django", "react", "htmx", "architecture", "frontend"]
draft: false
lang: en
---

## The Short Version

I did not avoid React because I dislike it. I chose **HTML, CSS, and HTMX first because they fit more naturally with the architecture I was actually building around Django, a modular monolith, and vertical slices**.

That does not mean I have rejected React completely. In the Korean software industry, React is close to the default frontend standard, and I am fully aware of that. In team projects, I can still use it. I am still thinking carefully about where that boundary should be.

## Why React Did Not Feel Natural for My Django Products

React is a strong tool. But with Django, it often turns one product into **two systems living next to each other**.

That usually means:

- Django shrinks into an API server
- auth, routing, forms, and client state become separate frontend concerns
- one feature change touches both Python code and a frontend app
- a relatively small product pays the cost of separation very early

This is not a criticism of React itself. It is about product size, structure, and tradeoffs.

## What Fit Better with a Modular Monolith

My default architecture is a modular monolith:

- one deployment unit
- strong internal module boundaries
- high cohesion around features

In that kind of system, I want the frontend to stay closer to the backend where it makes sense.

Once React enters the system, the frontend often starts behaving like an independent application. That weakens one of the practical advantages of the modular monolith: **keeping the product cohesive as a single system**.

Django templates plus HTMX kept things more local.

## Why HTMX Fit Better with Vertical Slice

Vertical Slice pushes me to keep as much feature logic together as possible.

For a single feature, I prefer to keep:

- query logic
- schema
- service
- view
- template partial

close together.

HTMX works very naturally with this. The server returns HTML fragments, and those fragments can stay close to the backend slice that owns the feature.

React usually pulls the system toward:

- a separate component tree
- separate client state patterns
- API-contract-heavy communication
- a dedicated frontend build chain

That can be the right answer in larger frontend-heavy products. In my case, it often felt like I was growing a second architecture before the product needed it.

## Why HTML, CSS, and HTMX Became the Natural Choice

When I say I "had to" choose HTML, CSS, and HTMX, I do not mean I was technically forced. I mean that once I applied my own priorities consistently, that path made the most sense.

My priorities were:

- move quickly
- keep Django admin, ORM, forms, and server-side strengths
- keep feature-level change localized
- reduce code sprawl in AI-assisted development
- keep deployment and product structure simple

Under those conditions, HTMX fit better than React.

## But I Have Not Abandoned React

This part matters.

I do not see React as a technology I should never touch.

In Korea, React is effectively the mainstream frontend standard. If I care about teamwork, collaboration, and the broader hiring market, it would be unrealistic to ignore that entirely.

So my current position is practical:

- for solo products and Django-centered systems, I prefer HTMX first
- for team environments where frontend separation is already natural, React is still a valid choice
- I am still thinking through where I want to draw that line long term

This is not ideology. It is a contextual decision.

## My Current Position

My rule is fairly clear right now.

If the product is:

- Django-based
- built by a solo developer or a small team
- optimized for fast iteration and high cohesion

then I still look at HTMX first.

If the environment has:

- a clearly separated frontend team
- complex client-side state
- React-centered collaboration as the default

then React becomes much more natural.

## Closing

I am not anti-React. I am closer to this position:

**for the products and architecture I have chosen so far, HTMX felt more natural inside Django.**

At the same time, I fully recognize the practical weight React carries in the Korean development ecosystem and in team collaboration.

The real question is not loyalty to a framework. It is whether the tool fits the product and the team context.
