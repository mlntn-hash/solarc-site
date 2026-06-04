# SolArc — Solar Panel Installer Landing Page

A modern, single-page landing site for **SolArc**, a Ukrainian solar panel installation company.

## Features

- **Zero build tools** — single `index.html` with all CSS and JS inline
- **Google Fonts** — DM Serif Display (headings) + DM Sans (body), loaded via CDN
- **Animated SVG logo** — sun with rotating rays (CSS `rotate` keyframe)
- **9 sections**: Nav · Hero · Stats · Services · How It Works · Why Us · Testimonials · CTA · Footer
- **Inline bar chart** — production vs consumption (Mar–Aug), pure SVG
- **CTA form** — phone validation with 3-second teal success state
- **Responsive** — mobile breakpoint at 768px; stacked layout, hero illustration hidden

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS (custom properties, grid, flexbox, animations) |
| Scripts | Vanilla JS (smooth scroll, nav opacity, form validation) |
| Fonts | Google Fonts CDN |
| Hosting | GitHub Pages |

## Brand

| Token | Value |
|-------|-------|
| Background | `#0D1F2D` deep navy |
| Accent | `#E8A020` amber |
| Secondary | `#2BB5A0` teal |
| Text | `#F5F0E8` warm white |

## Local preview

Just open `index.html` in any modern browser — no server needed.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial landing page"
gh repo create solarc-landing --public --source=. --remote=origin --push
gh api repos/{username}/solarc-landing/pages -X POST \
  -f source[branch]=main -f source[path]=/
```

Live URL: `https://{username}.github.io/solarc-landing/`

---

© 2024 SolArc. All rights reserved.
