---
title: "Why I Choose Django + Pydantic + HTMX Over FastAPI"
excerpt: "FastAPI is not a bad tool. But when I optimize for full product flow, admin surfaces, server rendering, and architectural cohesion, Django + Pydantic + HTMX fits better."
date: 2026-03-22
category: backend
series: daemon-backend
seriesOrder: 2
translationKey: django-pydantic-htmx-over-fastapi
tags: ["django", "fastapi", "pydantic", "htmx", "architecture"]
draft: false
lang: en
---

## The Short Version

I do not avoid FastAPI because it is weak. I avoid making it my default because **Django closes the loop around the kind of product work I actually do**.

## What FastAPI Does Well

FastAPI is good at what it is built for.

- JSON APIs
- clean type-hint-driven request handling
- fast iteration on focused services

If I only needed a clean API, FastAPI would stay on the table much more often.

## What I Usually Need

Most of the time I am not building an API in isolation. I am building a product, which usually means:

- authentication and sessions
- admin surfaces
- forms and server-rendered pages
- background jobs
- ORM and migrations
- templates and partial page updates
- domain-oriented feature slices

In that context Django is not just a legacy framework. It is a framework with a strong default shape for real product work.

## Why Pydantic Still Matters

Using Django does not remove the need for Pydantic. In my stack it makes Pydantic more valuable.

- request and response contracts become explicit
- domain-to-domain interfaces become clearer
- AI outputs can be validated like any other input
- constraints live in code instead of loose conventions

Django gives me product structure. Pydantic gives me contracts.

## Why HTMX Stays in the Stack

The frontend choice makes the difference even clearer.

React and SPA architectures are powerful, but they are not always the most natural fit for a Django-centric product. Quite often I want:

- the server to remain the main source of state
- partial page updates instead of a separate frontend app
- templates close to the business flow
- fast iteration without frontend platform overhead

That is where HTMX fits. It does not eliminate frontend work. It keeps interactivity while avoiding a lot of unnecessary frontend architecture.

## The Stack I Actually Want

In practice I use each layer for a clear role:

- Django for the product skeleton
- Pydantic for contracts and validation
- HTMX for interactive UI without SPA overhead

FastAPI remains a strong tool. It just is not the best default for the architecture I want most often. For my work, **Django + Pydantic + HTMX creates a tighter and calmer system**.
