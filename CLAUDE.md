# SAIFbio Website

Public marketing site for **SAIFbio Inc.** — a nonprofit (operated by the SAIF
Ventures partners) working to prevent, detect, and defend against catastrophic
biological threats. Sister site to the Bio Action Plan (bioactionplan.org) and
SAIF Ventures (saif.vc). Static, no database.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind CSS v4 — shadcn-neutral tokens via `@theme inline` + oklch `:root`
  in `src/app/globals.css`. Fonts: **Inter** (sans, `--font-inter`, the body
  font) + **Montserrat** (wordmark only).

## Design language — clean sibling of saif.vc

Deliberately matches the parent **saif.vc** site: clean, minimal, spacious,
highly readable. The earlier serif/"field-manual" direction was rejected by the
user as too busy and hard to read (2026-06) — keep it simple.

- **Inter** for everything (readable bold headlines, gray muted body). The
  wordmark is `S`**`AI`**`Fbio` in Montserrat (`<Wordmark>`), mirroring SAIF's
  `S`**`AI`**`F` mark, with "bio" in `text-muted-foreground`.
- Palette: warm off-white `--background` (oklch 0.965), near-black `--primary`,
  white `--card`, gray `--muted-foreground`, stone-200 footer. Essentially
  **monochrome** like saif.vc.
- The three pillar colors (forest/ochre/slate, in `@theme`) appear **only** as
  small dots on the pillar pills/cards — the one restrained nod to "bio".
- Centered hero: bold headline + muted subtitle + 3 hover pills
  (`<Pill>`, Prevent/Detect/Defend) + primary/outline buttons + chevron, like
  SAIF's offer-pill hero. Sections are simple, generously spaced, `border-t`
  separated. shadcn `Card` for grids. No scroll animations.
- Buttons: `.btn` + `.btn-primary` (near-black) / `.btn-outline`. Light mode
  only, no emojis.

## Key components

`Header` (sticky, SAIF-style nav + Donate) · `Footer` (stone-200, nav columns,
EIN/501c3 line) · `Wordmark` (Montserrat) · `Pill` (hover popover) ·
`PageHeader` (simple title + intro) · `ui/card` (shadcn Card).

## Content lives in code (no CMS)

- `src/lib/site.ts` — **all editable org config**: name, EIN, tax status,
  mailing address, contact emails, external links, and the three pillars.
  Placeholders (EIN `XX-XXXXXXX`, mailing address) must be filled before launch.
- `src/lib/team.ts` — team members (bios + photo URLs from the SAIF CDN).
- Page copy is inline in each `src/app/*/page.tsx`.

## Tax status toggle

`site.taxStatus` is `"approved" | "pending"`. It switches the 501(c)(3) language
on `/donate`, `/about`, and the footer between "recognized 501(c)(3)" (shows EIN,
tax-deductible) and "application pending". The `saif-bio` gift-acknowledgment
letter template currently uses **pending** language — verify the real IRS status
before launch.

## Routes

`/` landing · `/about` · `/team` · `/donate` · header "Action Plan" → external
bioactionplan.org. `sitemap.ts` lists the four internal routes.

## Commands

```bash
npm run dev      # localhost:3000
npm run build
```
