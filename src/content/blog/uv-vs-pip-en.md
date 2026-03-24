---
title: "uv vs pip — Why pip Is No Longer My Default"
excerpt: "pip installs packages, but uv manages more of the project lifecycle with better speed and ergonomics. My default has shifted."
date: 2026-03-10
category: daemon
series: tooling
seriesOrder: 1
translationKey: uv-vs-pip
tags: ["python", "uv", "pip", "packaging", "tooling"]
draft: false
lang: en
---

## The Short Version

`pip` is still useful, but it is no longer my default starting point for new Python projects.

My default is now `uv`.

## Why

The difference is not only speed, even though speed matters.

`pip` mainly focuses on package installation.  
`uv` covers more of the project lifecycle:

- dependency resolution
- virtual environment handling
- package installation
- workflow consistency

That makes it a stronger default for modern Python projects.

## What Changed for Me

I want fewer tools, fewer setup steps, and a clearer project entrypoint.

`uv` gives me that with better performance and a cleaner developer experience. It reduces friction without forcing me to build a fragmented packaging workflow around multiple commands.

## My Practical Rule

For existing environments that already rely on `pip`, I work with them.

For new projects, I start with `uv` unless there is a specific compatibility reason not to.
