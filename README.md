# HBF Proposal

A value-led rollout proposal for **Harbor Freight** — the SOP platform delivered in Phase 1, the growth path through Observations, Training and Certifications, and an appendix mapping every discovery requirement to where it lands.

Single self-contained static page (`index.html`, Tailwind via CDN). No build step.

## View locally

```bash
python3 -m http.server 8091 -d .
# → http://localhost:8091
```

## Structure

- **The platform (Phase 1)** — capabilities described as outcomes
- **Where it grows (Phases 2–4)** — Observations → Training → Certifications, the closed loop
- **Your requirements, addressed** — every discovery requirement, its priority, phase, and build status

All content lives in the data objects at the bottom of `index.html` (`CAPABILITIES`, `GROWTH`, `REQUIREMENTS`).
