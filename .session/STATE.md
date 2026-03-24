# STATE: smart-hotline-nextjs
_Last updated: 2026-03-24_

## Current State
ACTIVE PROJECT. Next.js 14.2 website for Smart Hotline Agency deployed on GitHub Pages.

**LIVE SITE:** https://boubahkarim-png.github.io/smart-hotline-last/fr/

**TECH STACK:**
- Next.js 14.2 + TypeScript + Tailwind v4 (CSS-first)
- Static export to GitHub Pages
- Geo-aware content (ipapi.co)

**FEATURES COMPLETE:**
- French/English pages with full navigation
- Geo-aware CTA (phone for CA/US, WhatsApp for others)
- Tawk.to chat integration
- Pricing page with currency detection
- Service pages: reception, emission, agents-ia, support, crm
- SEO metadata optimized

**CURRENT WORK:**
- Video generation for promotional content
- Need 3 video samples with real people talking/moving

## Decisions Made
- 2026-03-22: Project created from smart-hotline-web
- 2026-03-23: Tailwind v4 CSS-first approach (no config file)
- 2026-03-24: Tawk.to chat added to layouts
- 2026-03-24: Video prompts created in /public/videos/samples/

## Current Blockers
- Video generation requires browser interaction (no display on VPS)
- Free AI video tools (Hailuo, Kling, Luma) need manual use
- No API keys for video generation services

## Next Steps
1. Generate 3 promotional videos with real people
2. Add videos to homepage
3. Push to live (awaiting user approval)

## Session History
- 2026-03-24: Video sample prompts created and pushed to GitHub
- 2026-03-24: .session/STATE.md created (was missing)
