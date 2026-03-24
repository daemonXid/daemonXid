---
title: "Pydantic은 검증기가 아니라 계약서다"
excerpt: "나는 Pydantic을 단순한 입력 검증 도구로 보지 않는다. 사람 입력, 도메인 간 통신, AI 출력까지 같은 계약 위에 올리기 위한 구조적 도구로 본다."
date: 2026-03-24
category: ai-systems
series: ai-contracts
seriesOrder: 1
translationKey: pydantic-is-a-contract-not-a-validator
tags: ["pydantic", "pydantic-v2", "contracts", "validation", "pydantic-ai"]
draft: false
lang: ko
---

Pydantic을 이야기할 때 흔히 "검증 라이브러리"라고 부른다. 틀린 말은 아니다. 하지만 그 표현만으로는 충분하지 않다.

내가 Pydantic을 쓰는 이유는 이메일 형식을 검사하려고만이 아니다. 내가 더 중요하게 보는 것은 **계약을 코드에 고정하는 힘**이다.

## 검증보다 계약이 중요한 이유

검증만 생각하면 관심사는 대개 이 정도에서 멈춘다.

- 타입이 맞는가
- 필수 필드가 있는가
- 길이와 범위가 맞는가

하지만 계약까지 생각하면 질문이 달라진다.

- 이 데이터는 어떤 의미를 가지는가
- 이 객체가 생성되면 무엇을 신뢰할 수 있는가
- 다른 도메인이나 에이전트는 이 구조를 어떻게 이해하는가

이 차이가 크다. 검증은 실패를 막는 일이고, 계약은 시스템이 서로를 오해하지 않게 만드는 일이다.

## Pydantic v2가 더 좋은 이유

Pydantic v2에 와서는 이 성격이 더 분명해졌다.

- `field_validator`와 `model_validator`로 책임 위치가 또렷해졌다
- `ConfigDict`, `frozen=True`, `Annotated`, `Field` 조합이 좋아졌다
- 검증 성능이 올라가서 계약을 더 자주 적용해도 부담이 줄었다

즉 v2는 단순 업그레이드가 아니라, Pydantic을 더 강한 계약 계층으로 쓰기 쉽게 만든 버전이다.

## 사람 입력에만 쓰는 도구가 아니다

나는 Pydantic을 세 군데에 쓴다.

- 외부 요청 입력
- 도메인 간 인터페이스
- AI 출력

이 세 곳은 모두 "신뢰하기 전 구조를 강제해야 한다"는 공통점이 있다.

```python
from pydantic import BaseModel, ConfigDict, EmailStr

class UserSummary(BaseModel):
    model_config = ConfigDict(frozen=True)
    id: int
    email: EmailStr
    is_active: bool
```

중요한 건 이 모델이 예쁘냐가 아니다. 이 모델이 있으면 호출하는 쪽과 받는 쪽이 같은 계약을 본다는 점이다.

## PydanticAI와도 자연스럽게 이어진다

이 관점은 `PydanticAI`로 가면 더 선명해진다. 에이전트가 무슨 모델을 쓰든, 내가 믿을 수 있는 것은 결국 **결과 스키마**다.

자연어 응답은 해석이 필요하지만, Pydantic 모델은 통과하거나 실패한다. 이 차이 하나만으로도 파이프라인의 안정성이 크게 달라진다.

## 그래서 나는 이렇게 본다

Pydantic은 단순한 validator가 아니다.

- 입력을 막는 도구이면서
- 경계를 명시하는 도구이고
- 도메인 간 합의를 표현하는 도구이며
- AI 시대에는 결과를 신뢰 가능한 형태로 묶는 도구다

그래서 나는 Pydantic을 검증기로만 부르지 않는다. 내 스택에서 Pydantic은 계약서에 가깝다.
