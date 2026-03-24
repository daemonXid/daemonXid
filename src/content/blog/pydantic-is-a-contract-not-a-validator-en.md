---
title: "Pydantic Is Not Just a Validator. It Is a Contract."
excerpt: "I do not use Pydantic only to validate user input. I use it to lock contracts across requests, domain boundaries, and AI outputs."
date: 2026-03-24
category: ai-systems
series: ai-contracts
seriesOrder: 1
translationKey: pydantic-is-a-contract-not-a-validator
tags: ["pydantic", "pydantic-v2", "contracts", "validation", "pydantic-ai"]
draft: false
lang: en
---

Pydantic is often described as a validation library. That is true, but incomplete.

I do not reach for Pydantic only to reject bad emails or wrong types. What matters more to me is that it **turns agreements into executable code**.

## Why Contract Thinking Matters

If you think only in terms of validation, the questions stay narrow.

- is the type correct
- is the field present
- does the value fit the constraint

Contract thinking asks something larger.

- what does this data mean
- what can I trust once this object exists
- how do other domains or agents understand the same structure

Validation prevents bad input. Contracts prevent misunderstanding between system boundaries.

## Why Pydantic v2 Pushes This Further

Pydantic v2 makes this style easier to adopt.

- `field_validator` and `model_validator` make responsibility clearer
- `ConfigDict`, `frozen=True`, `Field`, and `Annotated` support a more declarative model
- better performance makes validation cheap enough to apply more aggressively

So v2 is not just a syntax refresh. It makes Pydantic stronger as a contract layer.

## It Is Not Only for User Input

In my stack I use Pydantic in three places.

- request input
- domain interfaces
- AI output

All three have the same requirement: do not trust them until the structure is explicit.

```python
from pydantic import BaseModel, ConfigDict, EmailStr

class UserSummary(BaseModel):
    model_config = ConfigDict(frozen=True)
    id: int
    email: EmailStr
    is_active: bool
```

The value here is not aesthetics. The value is that both sides of the boundary can rely on the same contract.

## PydanticAI Makes the Point Even Stronger

This becomes even more obvious with `PydanticAI`. Whatever model sits behind the agent, the part I can truly trust is the **result schema**.

Natural language needs interpretation. A Pydantic result either validates or fails. That difference alone changes how dependable the rest of the pipeline can be.

## My Actual View

Pydantic is not just a validator.

- it rejects bad data
- it makes boundaries explicit
- it expresses agreements between modules
- it gives AI outputs a reliable shape

That is why I do not treat it as a small helper. In my stack, Pydantic behaves much more like a contract than a validator.
