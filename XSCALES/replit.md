# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### XSCALES - Site Institucional (`artifacts/xscales-site`)
- **URL**: `/` (preview path root)
- **Framework**: React + Vite + TypeScript + Tailwind CSS v4
- **Routing**: Wouter (`wouter`) — NOT react-router-dom
- **Animations**: Framer Motion (`motion`, `useInView`)
- **Forms**: react-hook-form + @hookform/resolvers/zod
- **Design system**: Dark premium with `#C6B912` (gold) as signature brand color
- **Font**: Plus Jakarta Sans (Google Fonts, loaded as first import in `index.css`)
- **Language**: Portuguese (Brazil)

#### Routes (21 total):
- `/` — Home
- `/solucoes` — Soluções
- `/mercados` — Mercados (grid de todos os mercados)
- `/mercados/brasil`, `/mercados/mexico`, `/mercados/colombia`, `/mercados/peru`, `/mercados/chile`, `/mercados/argentina`, `/mercados/outros-mercados` — Páginas individuais de mercado (usam `MarketPage.tsx` template)
- `/desenvolvedores`, `/parceiros`, `/sobre`, `/midia`, `/seguranca`, `/compliance`, `/contato`, `/privacidade`, `/termos`, `/ouvidoria` — Páginas institucionais
- `*` — 404 NotFound

#### Architecture:
```
src/
  data/         — navigation.ts, solutions.ts, markets.ts, blog.ts, company.ts, footer.ts
  components/
    layout/     — Header.tsx, Footer.tsx
    common/     — PageHero.tsx, SectionHeader.tsx
    cards/      — SolutionCard.tsx, MarketCard.tsx, BlogCard.tsx, MetricCard.tsx
  pages/        — All 21 page components + MarketPage.tsx template
  App.tsx       — Routing with all 21 routes
  index.css     — Design system, CSS custom properties, utilities
```

#### Photo card system (site-wide):
Photo cards are the standard for all visual blocks: full-bleed background image + dark gradient overlay + badge at top + title/description at bottom. Pattern applied to:
- **ValuePropositionSection** (Home) — 4 tall cards (440px): vp-integration, vp-coverage, vp-compliance, vp-growth
- **SecuritySection** (Home) — 2×2 grid (230px): vp-compliance, theme-monitoring, theme-governance, vp-growth
- **DevelopersSection** (Home) — 2×2 grid inside dark card (210px): theme-api, vp-integration, theme-sandbox, theme-support
- **SolutionCard** component — Photo header strip (160px) + card body with title/description/link
- **BlogCard** component — Photo header (180px) matched to category (6 category images)
- **Desenvolvedores.tsx** — 3×2 photo cards (320px) replacing all icon blocks
- **Sobre.tsx** — Alternating photo panels (320px) replacing dark icon boxes

All images in `public/images/`. Badge colors: gold = primary/security, teal = developers/technical

#### Key Design Tokens:
- `#050816` — bg-main
- `#0B1020` — bg-surface
- `#10182B` — bg-elevated
- `#FFC500` — primary gold (CTAs, icons, hover states, main brand)
- `#009FAD` — secondary teal (alternate icons, badges, metric highlights)
- `rgba(255,255,255,0.08)` — border-subtle
- `rgba(248,250,252,0.72)` — text-secondary

#### Teal color usage (`#009FAD`) — based on XlentBrasil pattern:
- CSS variables: `--xscales-teal`, `--xscales-teal-20/15/12/10/08`
- Utility classes: `text-teal-xscales`, `bg-teal-12/10/08`, `border-teal-20/15`
- Gradient text: `gradient-text-teal-gold` (teal→gold), `gradient-text-gold-teal` (gold→teal)
- Gradient dividers: `divider-teal-gold` (gradient bar teal→gold)
- Buttons: `btn-teal` (solid teal, like xlentbrasil's ENTRAR), `btn-teal-outline` (teal outline)
- Icon containers: `icon-container-teal`, `icon-container-sm-teal`, `badge-teal`, `glow-teal`, `glow-circle-teal`
- `card-hover` border+shadow now uses teal on hover
- Applied in Header: "Acessar plataforma" teal button (like xlentbrasil's ENTRAR)
- Applied in SectionHeader: gradient teal→gold divider bar under all section headings
- Applied in Home:
  - Hero: "escalar sem fronteiras" uses gradient text teal→gold + teal hero glow
  - Hero CTA: secondary button is now teal outline (like xlentbrasil's CADASTRE-SE)
  - Metrics bar: values alternate gold/teal
  - Developers section: badge-teal + gradient heading text + solid teal CTA + all teal icons
  - CTA section: dual glow (teal left, gold right) + teal border

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
