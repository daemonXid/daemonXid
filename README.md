# daemonxid.com

Wonsub Song (Tony)의 개인 사이트입니다.  
이력서, 포트폴리오, 기술 블로그를 한 곳에서 관리합니다.

**Live:** https://daemonxid.com

## Overview

- Dark theme + yellow accent + grid background
- KO / EN bilingual navigation
- Web resume + PDF download
- Portfolio detail pages with media-ready sections
- Technical blog with language-aware routing

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

GitHub Pages deployment is handled by GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Output: `dist/`
- Custom domain: `daemonxid.com`
- Domain files:
  - `CNAME`
  - `public/CNAME`
  - `public/.nojekyll`

If the domain does not open immediately after deployment, the usual causes are:

- GitHub Pages source is not set to `GitHub Actions`
- DNS records have not fully propagated yet
- HTTPS certificate issuance is still pending in GitHub Pages settings

## Resume PDFs

Resume download links are served from `public/`.

Examples:

```text
public/
├── resume_en.pdf
├── jobkorea_ko.pdf
```

The site also includes resolver logic so resume file handling is less tightly coupled to one exact filename.

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
├── og-default.svg
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

## Notes

- `docs/resume-versions/` contains tailored resume variants for different application contexts.
- Blog posts support KO / EN pairing through `translationKey`.
- Portfolio media can be placed under `public/portfolio/`.
