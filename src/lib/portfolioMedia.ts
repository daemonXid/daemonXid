import { existsSync } from 'node:fs'
import path from 'node:path'

export interface PortfolioMediaItem {
  type: 'image' | 'video'
  src: string
  title: string
  caption?: string
  poster?: string
}

function toPublicPath(src: string) {
  return path.join(process.cwd(), 'public', src.replace(/^\/+/, '').replace(/\//g, path.sep))
}

export function getExistingPortfolioMedia(items: PortfolioMediaItem[]) {
  return items.filter((item) => existsSync(toPublicPath(item.src)))
}
