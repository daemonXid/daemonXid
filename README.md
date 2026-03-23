# daemonxid.com

Personal website for Wonsub Song (Tony).

The site combines a public web resume, selected project case studies, and a technical blog in Korean and English.

Live: https://daemonxid.com

## Overview

- Dark theme with yellow accent and grid background
- KO / EN bilingual navigation and routes
- Public web resume with reduced personal detail exposure
- Portfolio case studies with media-ready sections
- Technical blog with translation pairing via `translationKey`
- Lightweight installable PWA

## Stack

- Astro
- Tailwind CSS v4
- Bun
- GitHub Pages

## Local Development

```bash
bun install
bun dev
```

## Build

```bash
bun run build
```

Build output is generated in `dist/`.

## Deployment

Deployment is handled by GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Output: `dist/`
- Custom domain: `daemonxid.com`

Domain-related files:

- `public/CNAME`
- `public/.nojekyll`

## Project Structure

```text
src/
├── components/
├── content/blog/
├── layouts/
├── lib/
├── pages/
│   ├── blog/
│   ├── ko/
│   ├── portfolio/
│   └── resume.astro
└── styles/

public/
├── portfolio/
├── favicon.svg
├── manifest.webmanifest
├── og-default.svg
├── pwa-icon.svg
├── sw.js
└── .nojekyll
```

## Routes

```text
/              Home
/resume        Resume
/portfolio     Portfolio
/blog          Blog
/ko            Home (Korean)
/ko/resume     Resume (Korean)
/ko/portfolio  Portfolio (Korean)
/ko/blog       Blog (Korean)
```

## Recommended Posts

- [Why I removed Redis and kept just PostgreSQL](https://daemonxid.com/blog/no-redis)
- [Why I chose HTML, CSS, and HTMX over React for Django](https://daemonxid.com/blog/why-i-did-not-pick-react-for-django-en)
- [Why I prefer vertical slice architecture](https://daemonxid.com/blog/why-i-prefer-vertical-slice)

## Privacy Notes

- Public-facing contact is limited to GitHub and LinkedIn.
- Detailed resume drafts are intentionally kept out of version control.
- Do not add email addresses, phone numbers, resume PDFs, or sensitive personal documents to tracked files.
- Keep public timeline detail at month granularity unless there is a strong reason to be more specific.

## Notes

- Blog posts support KO / EN pairing through `translationKey`.
- Portfolio media can be placed under `public/portfolio/`.
