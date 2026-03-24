import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>

const seriesOgMap = {
  'daemon-core': '/og/blog/daemon-core.svg',
  'daemon-backend': '/og/blog/daemon-backend.svg',
  'daemon-ui': '/og/blog/daemon-ui.svg',
  'ai-contracts': '/og/blog/ai-contracts.svg',
  'deployment-patterns': '/og/blog/deployment-patterns.svg',
  tooling: '/og/blog/tooling.svg',
  sportsiq: '/og/blog/sportsiq.svg',
} as const

const categoryOgMap = {
  daemon: '/og/blog/daemon-core.svg',
  backend: '/og/blog/daemon-backend.svg',
  frontend: '/og/blog/daemon-ui.svg',
  'ai-systems': '/og/blog/ai-contracts.svg',
  deployment: '/og/blog/deployment-patterns.svg',
  'sports-ai': '/og/blog/sportsiq.svg',
  retrospective: '/og-default.svg',
} as const

export function getBlogOgImage(post: BlogPost | BlogPost['data']): string {
  const data = 'data' in post ? post.data : post
  if (data.series) return seriesOgMap[data.series]
  return categoryOgMap[data.category]
}

export const seriesIntro = {
  en: [
    {
      key: 'daemon-core',
      title: 'DAEMON Core',
      copy: 'Core architectural preferences: modular monoliths, vertical slices, and why Django still fits my way of building.',
    },
    {
      key: 'daemon-backend',
      title: 'DAEMON Backend',
      copy: 'Backend contracts, PostgreSQL-first decisions, lifecycle rules, domain boundaries, and pragmatic performance choices.',
    },
    {
      key: 'daemon-ui',
      title: 'DAEMON UI',
      copy: 'Server-centered frontend work with HTMX and Alpine, without defaulting to SPA complexity.',
    },
    {
      key: 'ai-contracts',
      title: 'AI Contracts',
      copy: 'Why I trust schemas more than fluent model output, and how Pydantic and PydanticAI keep AI systems structured.',
    },
    {
      key: 'deployment-patterns',
      title: 'Deployment Patterns',
      copy: 'Release flow, image build discipline, and deployment structures that keep operations calm.',
    },
    {
      key: 'tooling',
      title: 'Tooling',
      copy: 'Project command surfaces, Python packaging defaults, and tool choices that shape daily development speed.',
    },
    {
      key: 'sportsiq',
      title: 'SportsIQ',
      copy: 'Sports-domain AI architecture notes around pose estimation, biomechanics, and product direction.',
    },
  ],
  ko: [
    {
      key: 'daemon-core',
      title: 'DAEMON Core',
      copy: '모듈러 모놀리스, Vertical Slice, 그리고 내가 Django를 계속 중심에 두는 이유를 다룹니다.',
    },
    {
      key: 'daemon-backend',
      title: 'DAEMON Backend',
      copy: '계약 중심 백엔드, PostgreSQL-first, lifecycle 규칙, 도메인 경계, 실용적 성능 선택을 정리합니다.',
    },
    {
      key: 'daemon-ui',
      title: 'DAEMON UI',
      copy: 'SPA를 기본값으로 두지 않고 HTMX와 Alpine으로 서버 중심 UI를 만드는 방식을 다룹니다.',
    },
    {
      key: 'ai-contracts',
      title: 'AI Contracts',
      copy: '왜 나는 자연어보다 스키마를 더 믿는지, 그리고 Pydantic과 PydanticAI를 어떻게 쓰는지 설명합니다.',
    },
    {
      key: 'deployment-patterns',
      title: 'Deployment Patterns',
      copy: '릴리스 흐름, 이미지 빌드 기준, 운영을 덜 흔들리게 만드는 배포 구조를 다룹니다.',
    },
    {
      key: 'tooling',
      title: 'Tooling',
      copy: '프로젝트 명령 인터페이스, Python 패키징 기본값, 개발 속도를 좌우하는 도구 선택을 다룹니다.',
    },
    {
      key: 'sportsiq',
      title: 'SportsIQ',
      copy: '스포츠 도메인 AI, 포즈 추정, biomechanics, 제품 방향성을 기록한 시리즈입니다.',
    },
  ],
} as const
