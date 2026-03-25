# Project State: Smart Hotline Next.js Website

**Project:** Smart Hotline Next.js Website
**Core Value:** Bilingual (FR/EN) agency website with geo-aware content, deployed on GitHub Pages
**Started:** 2026-03-22

---

## Current Position

**Current Phase:** Phase 2 - Content & SEO
**Current Plan:** Awaiting user requirements for improvements
**Status:** ACTIVE - Live and functional

**Overall Progress:**
```
[████████████████████████████░░░░░░░░░░░░] 65% (Core features complete, EN translation and SEO remaining)
```

---

## Phase Progress

| Phase | Status | Progress | Blockers |
|-------|--------|----------|----------|
| Phase 1: Core Development | 🟢 Completed | 8/8 | None |
| Phase 2: Content & SEO | 🟡 In Progress | 3/6 | EN translation needed |
| Phase 3: Performance | ⚪ Not Started | 0/4 | Content completion required |
| Phase 4: Features | ⚪ Not Started | 0/5 | Performance optimization required |

---

## Accumulated Context

### Key Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Tailwind v4 CSS-first | No config file, auto-scans all files | 2026-03-23 |
| Static export to GitHub Pages | Free hosting, custom domain support | 2026-03-22 |
| Geo-aware CTA (ipapi.co) | Different contact methods by country | 2026-03-22 |
| basePath: /smart-hotline-last | Match GitHub repo name | 2026-03-25 |

### Known Issues
- EN pages have placeholder content (need full translation)
- Live URL shows /smart-hotline-last/ (correct) but internal references may need verification

### Technical Debt
- Add more testimonials across all pages
- Generate real promotional videos
- Add metadata to emission, support, agents-ia pages
- Performance optimization needed

---

## Session Continuity

**Last Session:** 2026-03-25
**Stopped at:** Restructured French blog page to have exactly 8 sections following light/dark pattern, added humanized content, FAQ, testimonials, stats sections, and implemented 'Lire la suite' pop-ups for blog articles
**Next Action:** Continue with remaining improvements (EN translation, structure standardization for other pages, content humanization, feature additions)

---

## Recently Completed

- ✓ **Deployment Path Fix** — Corrected all paths from smart-hotline-late2 to smart-hotline-last
  - Updated next.config.js basePath and assetPrefix
  - Fixed all hardcoded references in source files
  - Commit: multiple pushes to main
  
- ✓ **Video Section Removal** — Removed video section from French homepage per user request
  - Updated app/fr/page.tsx
  - Rebuilt and deployed

- ✓ **SEO Optimization** — Metadata, sitemap, robots.txt configured
  - OpenGraph, alternates, hreflang
  - SEO keyword strategy completed

---

## Upcoming Work

1. **EN Translation** — Complete English page content
2. **Structure Standardization** — 8 sections with light/dark pattern
3. **Content Humanization** — Avoid AI detection
4. **Feature Additions**
   - Chatbot functionality
   - 'Lire la suite' pop-ups for blog
   - Sliding data boxes
5. **Performance Optimization**

---

## Project Reference

### Core Value Reminder
Professional bilingual website for Smart Hotline Agency, showcasing AI voice receptionist services with geo-aware pricing and contact methods.

### Key Constraints
- Next.js 14.2 + Tailwind v4 (CSS-first, no config)
- Static export only (no server-side)
- basePath: /smart-hotline-last
- CSS must be >30KB after build

### Success Definition
Website is successful when:
- Loads in <3 seconds on mobile
- SEO score >90 on Lighthouse
- Bounce rate <50%
- Contact form submissions >5/week

### Tech Stack
| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 14.2.x | App Router, static export |
| Tailwind | v4.2.x | CSS-first, no config file |
| TypeScript | 5.x | Strict mode |
| Node.js | v20.20.0 | Build environment |

### Deploy Process
```bash
cd /root/projects/smart-hotline-nextjs
rm -rf out && npm run build 2>&1 | tail -5
ls out/_next/static/css/*.css  # Must exist >30KB
touch out/.nojekyll
git add -A && git commit -m "description"
git push --force origin main
gh workflow run "Deploy to GitHub Pages" --repo boubahkarim-png/smart-hotline-last
gh run watch --repo boubahkarim-png/smart-hotline-last
```

### Live URLs
- **French**: https://boubahkarim-png.github.io/smart-hotline-last/fr/
- **English**: https://boubahkarim-png.github.io/smart-hotline-last/en/

---

*State initialized: 2026-03-22*
*Last updated: 2026-03-25*
