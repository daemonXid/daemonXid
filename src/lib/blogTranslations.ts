import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>
type SiteLang = 'en' | 'ko'

export function getBlogPath(post: BlogPost): string {
  return post.data.lang === 'ko' ? `/ko/blog/${post.id}` : `/blog/${post.id}`
}

export function findTranslatedPost(posts: BlogPost[], currentPost: BlogPost, targetLang: SiteLang): BlogPost | undefined {
  return posts.find(
    post =>
      post.data.translationKey === currentPost.data.translationKey &&
      post.data.lang === targetLang,
  )
}

export function selectPostsForLang(posts: BlogPost[], lang: SiteLang): BlogPost[] {
  const grouped = new Map<string, BlogPost[]>()

  for (const post of posts) {
    const key = post.data.translationKey
    const bucket = grouped.get(key) ?? []
    bucket.push(post)
    grouped.set(key, bucket)
  }

  return Array.from(grouped.values())
    .map(group => group.find(post => post.data.lang === lang) ?? group[0])
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}
