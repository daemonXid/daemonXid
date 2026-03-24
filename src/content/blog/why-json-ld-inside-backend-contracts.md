---
title: "JSON-LD를 백엔드 내부 계약에까지 끌어오는 이유"
excerpt: "JSON-LD를 SEO 태그 정도로만 보면 반만 본 셈이다. 나는 도메인 간 데이터의 의미를 더 분명하게 만들기 위해 백엔드 계약에도 JSON-LD 관점을 가져온다."
date: 2026-03-24
category: backend
series: daemon-backend
seriesOrder: 7
translationKey: why-json-ld-inside-backend-contracts
tags: ["json-ld", "schema", "semantic-web", "backend", "architecture"]
draft: false
lang: ko
---

많은 사람이 JSON-LD를 웹페이지의 구조화 데이터나 SEO용 스크립트 태그 정도로만 생각한다. 물론 그것도 맞다. 하지만 내 관심은 거기서 멈추지 않는다.

나는 JSON-LD의 핵심을 **데이터에 의미적 맥락을 붙이는 방식**으로 본다. 그리고 그 생각은 백엔드 내부 계약에도 꽤 잘 맞는다.

## 왜 plain JSON만으로는 부족하다고 느끼나

plain JSON은 단순하다. 빠르고 유연하다. 하지만 의미는 결국 사람이 문서나 관습으로 보충해야 한다.

예를 들어 이런 구조가 있다고 하자.

```json
{ "name": "Protein Bar", "price": 4500 }
```

이 데이터가 상품인지, 메뉴인지, 장바구니 항목인지, 세금 포함 가격인지 구조만 보고는 충분히 알기 어렵다.

## JSON-LD 관점이 주는 것

JSON-LD는 데이터를 더 장황하게 만들 수 있지만, 대신 **무엇을 표현하는지**를 더 분명하게 만든다.

- 데이터 타입이 드러난다
- 필드 의미가 문맥과 연결된다
- AI가 구조를 더 안정적으로 해석할 수 있다
- 시스템 간 상호운용성을 높이기 쉽다

내가 모든 내부 로직에 JSON-LD를 강제하는 것은 아니다. 다만 도메인 간 계약이나 외부 노출 데이터처럼 의미가 중요한 경계에서는 이 관점이 꽤 유용하다.

## 결국 의도는 같다

내가 `Pydantic`, `interface.py`, JSON-LD를 함께 좋아하는 이유는 모두 같다. 데이터가 단순히 "통과"하는 것이 아니라, **무슨 의미로 통과하는지**를 더 분명하게 만들기 위해서다.

요약하면 이렇다.

- plain JSON은 구조를 준다
- Pydantic은 제약을 준다
- JSON-LD는 의미적 맥락을 더한다

이 세 가지가 합쳐지면 경계가 훨씬 덜 애매해진다. 그래서 나는 JSON-LD를 프론트 SEO 영역에만 두지 않고, 백엔드 계약 사고에도 끌어온다.
