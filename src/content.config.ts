import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum(['daemon', 'backend', 'frontend', 'ai-systems', 'deployment', 'sports-ai', 'retrospective']),
    series: z.enum(['daemon-core', 'daemon-backend', 'daemon-ui', 'ai-contracts', 'deployment-patterns', 'tooling', 'sportsiq']).optional(),
    seriesOrder: z.number().int().positive().optional(),
    ogImage: z.string().optional(),
    translationKey: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    lang: z.enum(['ko', 'en']).default('ko'),
  }),
})

export const collections = { blog }
