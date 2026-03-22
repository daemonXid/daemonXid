export type SiteLang = 'en' | 'ko'

export function detectLang(pathname: string): SiteLang {
  return pathname === '/ko' || pathname.startsWith('/ko/') ? 'ko' : 'en'
}

export function stripLangPrefix(pathname: string): string {
  if (pathname === '/ko') return '/'
  if (pathname.startsWith('/ko/')) return pathname.slice(3)
  return pathname
}

export function withLang(pathname: string, lang: SiteLang): string {
  const normalized = stripLangPrefix(pathname)
  if (lang === 'ko') {
    return normalized === '/' ? '/ko' : `/ko${normalized}`
  }
  return normalized
}
