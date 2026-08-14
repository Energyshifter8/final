# Project: [Your Name] — Portfolio Site

## Who this is for
[Temuulen], a [your role, e.g. "freelance product designer & front-end developer"]
based in [UB]. Site should feel confident, playful, and craft-obsessed —
a portfolio that IS the pitch.

## Stack
- Next.js (App Router), TypeScript, strict mode
- Tailwind CSS
- shadcn/ui for accessible primitives only (button, sheet, navigation-menu, separator, badge)
  — most visual identity is custom, not default shadcn styling
- Biome for linting + formatting (no ESLint, no Prettier)
- GSAP + ScrollTrigger via @gsap/react's useGSAP hook, for scroll-triggered reveals
- Lenis for smooth scroll (added in the motion-polish level)
- lucide-react for icons
- Content lives in typed arrays under /content, never hardcoded in JSX

## Conventions
- Components are Server Components by default; only mark "use client" where
  state, effects, or GSAP are actually needed
- All animation respects `prefers-reduced-motion: reduce`
- Mobile-first Tailwind; test at 375px, 768px, 1280px
- No `any`; prefer explicit types in /types
- Run `npx biome check --write .` before considering a level "done"

## Sections (in build order)
Header -> Hero -> Work -> Work case study route -> Services -> About
(bio, roster, scoreboard, awards marquee) -> Contact/Footer -> motion polish

## Do not
- Do not hardcode project/service/client data inline in components
- Do not add animation libraries beyond GSAP + Lenis without asking
- Do not skip alt text, focus states, or semantic headings for speed