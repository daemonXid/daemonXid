# daemonxid.com

Personal portfolio site for Wonsub Song (Tony) — backend engineer building AI-integrated products.

Live: [daemonxid.com](https://daemonxid.com)

---

## What's Here

- **Home** — Engineering narrative, selected projects, recent writing
- **Resume** — Experience, architecture work (DAEMON-ONE), skills, education (EN + KO)
- **Portfolio** — Case studies: Almaeng, LawNGood, SportsIQ
- **Blog** — Technical notes in Korean and English: architecture decisions, Django patterns, deployment, AI integration

---

## Tech Stack

Built with [Astro](https://astro.build) — static site generator, no client-side framework.

| Layer | Choice |
|---|---|
| Framework | Astro (MPA, static output) |
| Styling | Tailwind CSS v4 |
| Fonts | Inter + JetBrains Mono |
| Deployment | GitHub Pages via GitHub Actions |
| Package manager | Bun |

---

## Local Dev

```bash
bun install
bun dev
```

Build:

```bash
bun run build
```

---

## Structure

```
src/
  components/     # Nav, Footer, SocialLinks, ProjectCard, SkillBadge
  content/blog/   # Markdown blog posts (KO + EN)
  layouts/        # Base.astro, BlogPost.astro
  lib/            # i18n, siteMeta, blogMeta helpers
  pages/          # EN pages
  pages/ko/       # KO pages (mirrored)
  styles/         # global.css
```

---

## Content Languages

All main pages exist in both English (`/`) and Korean (`/ko/`). Language toggle is in the nav.
