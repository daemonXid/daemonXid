---
title: "With PydanticAI, the Real Priority Is the Result Schema, Not the Model"
excerpt: "Model choice matters in multi-agent systems, but result schema matters more for stability. I trust explicit output contracts more than model charisma."
date: 2026-03-24
category: ai-systems
series: ai-contracts
seriesOrder: 3
translationKey: pydanticai-result-schema-over-model
tags: ["pydantic-ai", "agents", "schema", "llm", "architecture"]
draft: false
lang: en
---

When people discuss multi-agent systems, the conversation usually starts with model choice. Which model should orchestrate. Which one should research. Which one should review.

That matters. But in real operation, another question matters more.

**What result schema will each agent be forced to satisfy?**

## Why the Schema Outlasts the Model

Models change.

- a cheaper option appears
- a faster option becomes available
- a provider issue forces a switch

If the pipeline is stable, what should remain steady is not the exact model name. It is the contract between components.

If the research agent, the reviewer, and the orchestrator all drift in output shape, the system becomes fragile very quickly.

## What I Find Valuable in PydanticAI

What makes `PydanticAI` interesting to me is not simply that it makes agents easier to create. It is that it allows outputs to be **forced through a defined structure**.

```python
from pydantic import BaseModel
from pydantic_ai import Agent

class ResearchResult(BaseModel):
    topic: str
    findings: list[str]
    sources: list[str]

research_agent = Agent(
    model="openai:gpt-5",
    result_type=ResearchResult,
)
```

The important part is not the model string. The important part is that `ResearchResult` gives the pipeline a stable definition of success and failure.

## This Matters Even More with Multiple Agents

Structure matters with one agent. It matters much more with several.

- responsibility boundaries become clearer
- failure points are easier to trace
- retry strategy becomes easier to define
- model substitution becomes safer

A good multi-agent system is not just a system using good models. It is a system where models can change while the contracts stay stable.

That is why, when I design around PydanticAI, I care more about the result schema than the model itself.
