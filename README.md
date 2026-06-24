# HBF Proposal

A value-led rollout proposal for **Harbor Freight** — the SOP platform delivered in Phase 1,
the growth path through Observations, Training and Certifications, and the methodology,
implementation plan, procedure breakdown, and recap behind it.

Static multi-page site, Tailwind via CDN. No build step.

## View locally

```bash
python3 -m http.server 8753 -d .
# → http://localhost:8753/hbf-proposal/index.html
```

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Project overview — status, the platform, where it grows |
| `methodology.html` | Capture → Transfer → Continuous Coaching |
| `implementation.html` | Implementation plan |
| `procedures.html` | Procedure breakdown (one SOP → many procedures) |
| `recap.html` | Post-demo recap & next steps |
| `deployment.html` | Deployment phases (shown as a not-yet-live nav tab) |
| `design-system.html` | **Living design system** — tokens, components, and the conventions below |

## Consistency system — read before adding a page

Everything shared lives in two files. Link both and a new page inherits the look automatically;
never re-implement any of this per page.

- **`assets/css/system.css`** — tokens + every shared component. Single source of truth.
- **`assets/js/reveal.js`** — scroll reveal + nav scroll-shadow. Loaded last on every page.

The four rules that keep the site from drifting (all demonstrated on `design-system.html`):

1. **Nav** — identical markup on every page: `<nav class="site-nav"> › .nav-inner › brand + .nav-tabs`.
   Each tab is an `<a>` except the current page (`<span class="cur">`) and any not-yet-live page
   (`<span class="dis">`). Same items, same order everywhere — only `.cur` moves.
2. **Motion** — one convention: add `class="reveal"`; `reveal.js` adds `.in` on scroll. No per-page
   `IntersectionObserver`.
3. **Type** — two faces only: **DM Sans** (display + body) and **JetBrains Mono** (`.mono-label`).
   No Inter, no `font-sans`. Load only those two; keep Tailwind `sans` and `display` both on DM Sans.
4. **Section header** — eyebrow (dot + tracked label) on the left; the right side is an *optional*
   contextual stamp (a date or label like "As of Jun 18" / "From today's demo"), **never a progress
   counter** like `01 / 04`. Omit it when there's nothing meaningful to say.

`hbf-demo/` is a separate 2-page sandbox that mirrors the same `system.css` + `reveal.js` (kept in sync).

## Content

Page data lives in the JS objects at the bottom of each page (e.g. `index.html`: `CAPABILITIES`,
`GROWTH`, `REQUIREMENTS`; shared `assets/js/features.js`, `assets/js/status.js`).
