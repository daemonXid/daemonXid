export const categoryOrder = [
  'daemon',
  'backend',
  'frontend',
  'ai-systems',
  'deployment',
  'sports-ai',
  'retrospective',
] as const

export const categoryLabels = {
  en: {
    daemon: 'DAEMON',
    backend: 'Backend',
    frontend: 'Frontend',
    'ai-systems': 'AI Systems',
    deployment: 'Deployment',
    'sports-ai': 'Sports AI',
    retrospective: 'Retrospective',
  },
  ko: {
    daemon: 'DAEMON',
    backend: '백엔드',
    frontend: '프론트엔드',
    'ai-systems': 'AI 시스템',
    deployment: '배포',
    'sports-ai': '스포츠 AI',
    retrospective: '회고',
  },
} as const

export const seriesLabels = {
  en: {
    'daemon-core': 'DAEMON Core',
    'daemon-backend': 'DAEMON Backend',
    'daemon-ui': 'DAEMON UI',
    'ai-contracts': 'AI Contracts',
    'deployment-patterns': 'Deployment Patterns',
    tooling: 'Tooling',
    sportsiq: 'SportsIQ',
  },
  ko: {
    'daemon-core': 'DAEMON Core',
    'daemon-backend': 'DAEMON Backend',
    'daemon-ui': 'DAEMON UI',
    'ai-contracts': 'AI Contracts',
    'deployment-patterns': 'Deployment Patterns',
    tooling: 'Tooling',
    sportsiq: 'SportsIQ',
  },
} as const

export type BlogLang = keyof typeof categoryLabels
export type BlogCategory = keyof typeof categoryLabels.en
export type BlogSeries = keyof typeof seriesLabels.en

export function getCategoryLabel(lang: BlogLang, category: BlogCategory): string {
  return categoryLabels[lang][category]
}

export function getSeriesLabel(lang: BlogLang, series: BlogSeries, order?: number): string {
  const label = seriesLabels[lang][series]
  return order ? `${label} ${String(order).padStart(2, '0')}` : label
}
