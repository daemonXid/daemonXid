import { existsSync, openSync, readSync, closeSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

type ResumeLang = 'en' | 'ko'

const PUBLIC_DIR = join(process.cwd(), 'public')

function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function isValidPdf(file: string) {
  const filePath = join(PUBLIC_DIR, file)
  const fd = openSync(filePath, 'r')
  try {
    const buffer = Buffer.alloc(5)
    readSync(fd, buffer, 0, 5, 0)
    return buffer.toString('ascii') === '%PDF-'
  } finally {
    closeSync(fd)
  }
}

function pickResumeFile(lang: ResumeLang) {
  if (!existsSync(PUBLIC_DIR)) return null

  const files = readdirSync(PUBLIC_DIR)
    .filter((file) => file.toLowerCase().endsWith('.pdf'))
    .filter((file) => isValidPdf(file))

  if (!files.length) return null

  const exact = files.find((file) => normalize(file) === `resume${lang}pdf`)
  if (exact) return `/${exact}`

  const resumeWithLang = files.find((file) => {
    const value = normalize(file)
    return value.includes('resume') && value.includes(lang)
  })
  if (resumeWithLang) return `/${resumeWithLang}`

  const langOnly = files.find((file) => {
    const value = normalize(file)
    return value.includes(lang) && !value.includes('resume')
  })
  if (langOnly) return `/${langOnly}`

  return null
}

export function getResumeDownloads() {
  return {
    ko: pickResumeFile('ko'),
    en: pickResumeFile('en'),
  }
}
