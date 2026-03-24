---
title: "PydanticAI로 멀티에이전트를 붙일 때 중요한 건 모델이 아니라 결과 스키마다"
excerpt: "에이전트 시스템에서 모델 선택은 중요하지만, 운영 안정성을 가르는 것은 결과 스키마다. 나는 좋은 프롬프트보다 검증 가능한 결과 계약을 더 믿는다."
date: 2026-03-24
category: ai-systems
series: ai-contracts
seriesOrder: 3
translationKey: pydanticai-result-schema-over-model
tags: ["pydantic-ai", "agents", "schema", "llm", "architecture"]
draft: false
lang: ko
---

멀티에이전트 시스템을 이야기하면 보통 관심이 모델 선택으로 먼저 간다. 어떤 모델을 오케스트레이터에 쓰고, 어떤 모델을 리서치 에이전트에 붙일지부터 고민한다.

물론 중요하다. 하지만 운영 기준에서 더 중요한 것은 따로 있다.

**결과를 어떤 스키마로 강제할 것인가.**

## 왜 모델보다 스키마가 더 중요한가

모델은 바뀔 수 있다.

- 비용 때문에 교체할 수 있다
- 속도 때문에 분리할 수 있다
- 제공자 문제로 스위칭할 수 있다

하지만 에이전트 파이프라인을 안정적으로 유지하려면, 바뀌지 않아야 하는 것이 있다. 바로 결과 계약이다.

오케스트레이터가 받는 리서치 결과, 리뷰 에이전트가 반환하는 구조, 후속 파이프라인이 소비하는 필드가 계속 흔들리면 시스템 전체가 불안정해진다.

## PydanticAI에서 내가 보는 핵심

`PydanticAI`의 좋은 점은 단순히 "에이전트를 쉽게 만든다"가 아니다. 더 중요한 건 에이전트 출력에 **형태를 강제할 수 있다**는 점이다.

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

이때 핵심은 모델 이름이 아니다. `ResearchResult`가 실패와 성공의 기준점을 제공한다는 점이다.

## 멀티에이전트에서 더 중요해진다

에이전트가 하나일 때도 구조는 중요하지만, 여러 에이전트가 연결되면 계약의 가치가 훨씬 커진다.

- 에이전트 간 책임 분리가 쉬워진다
- 실패 지점을 추적하기 쉬워진다
- 재시도 정책을 세우기 쉬워진다
- 대체 모델을 붙여도 파이프라인을 유지하기 쉽다

즉 좋은 에이전트 시스템은 "좋은 모델을 쓰는 시스템"이 아니라, **좋은 계약 위에서 모델을 교체할 수 있는 시스템**에 가깝다.

그래서 나는 멀티에이전트 설계에서 모델보다 결과 스키마를 먼저 본다.
