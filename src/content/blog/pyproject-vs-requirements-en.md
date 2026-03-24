---
title: "pyproject.toml vs requirements.txt — Declaration Is Not the Same as Installation"
excerpt: "A pyproject.toml describes the project itself. A requirements.txt usually describes an install target. Treating them as the same causes confusion."
date: 2026-03-11
category: daemon
series: tooling
seriesOrder: 2
translationKey: pyproject-vs-requirements
tags: ["python", "pyproject", "requirements", "uv", "packaging"]
draft: false
lang: en
---

## The Short Version

`pyproject.toml` and `requirements.txt` are not interchangeable.

- `pyproject.toml` is the project declaration
- `requirements.txt` is closer to an installation list

Confusing the two creates packaging and workflow problems.

## What `pyproject.toml` Represents

`pyproject.toml` is where project metadata and dependency intent belong.

It describes:

- the project itself
- dependency groups
- build system configuration
- tooling configuration

That makes it the natural source of truth for modern Python projects.

## What `requirements.txt` Represents

`requirements.txt` is still useful, but it serves a different purpose.

It is usually an install-oriented artifact:

- pinned dependencies for deployment
- reproducible environment snapshots
- compatibility with tooling that still expects requirements files

It is not a full project model.

## My Practical Rule

I treat `pyproject.toml` as the source of truth.

If I need a `requirements.txt`, I generate or maintain it for a specific operational reason, not as the primary project definition.
