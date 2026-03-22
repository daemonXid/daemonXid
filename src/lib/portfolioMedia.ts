import { existsSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

export interface PortfolioMediaItem {
  type: 'image' | 'video'
  src: string
  title: string
  caption?: string
  poster?: string
}

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp'])
const VIDEO_EXTENSIONS = new Set(['.mp4'])
const MIN_MEDIA_BYTES = 1024

function toPublicPath(src: string) {
  return path.join(process.cwd(), 'public', src.replace(/^\/+/, '').replace(/\//g, path.sep))
}

function toTitle(fileName: string) {
  return fileName
    .replace(path.extname(fileName), '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function getPortfolioMedia(projectSlug: string, captions: Record<string, string> = {}) {
  const dirPath = path.join(process.cwd(), 'public', 'portfolio', projectSlug)

  if (!existsSync(dirPath)) {
    return [] as PortfolioMediaItem[]
  }

  const files = readdirSync(dirPath)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase()
      if (!IMAGE_EXTENSIONS.has(ext) && !VIDEO_EXTENSIONS.has(ext)) return false
      return statSync(path.join(dirPath, file)).size >= MIN_MEDIA_BYTES
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  return files.map((file) => {
    const ext = path.extname(file).toLowerCase()
    const baseName = file.replace(ext, '')
    const src = `/portfolio/${projectSlug}/${file}`
    const posterPath = `/portfolio/${projectSlug}/${baseName}.png`

    return {
      type: VIDEO_EXTENSIONS.has(ext) ? 'video' : 'image',
      src,
      title: toTitle(file),
      caption: captions[file] ?? captions[baseName],
      poster: VIDEO_EXTENSIONS.has(ext) && existsSync(toPublicPath(posterPath)) ? posterPath : undefined,
    } satisfies PortfolioMediaItem
  })
}
