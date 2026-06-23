# SAIFbio Website

Public marketing website for **SAIFbio Inc.**, a nonprofit working to prevent,
detect, and defend against catastrophic biological threats. SAIFbio is operated
by the partners of [SAIF Ventures](https://saif.vc) and helps steward the
[Bio Action Plan](https://bioactionplan.org).

## Pages

| Route      | Purpose                                                        |
| ---------- | ------------------------------------------------------------- |
| `/`        | Landing — mission, why now, the three pillars, support CTA     |
| `/about`   | About — mission, what we do, pillars, governance / 501(c)(3)   |
| `/team`    | Team — Geoffrey, Nick, and Michael Ralston                     |
| `/donate`  | Donate — ways to give, tax-exempt details, contact            |
| (header)   | "Action Plan" links out to bioactionplan.org                  |

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (shadcn-neutral tokens in `src/app/globals.css`)
- Fonts: **Inter** (body/headlines) + **Montserrat** (wordmark)
- No database — all content is static (in `src/lib/` and the page files)

The visual language is a clean sibling of [saif.vc](https://saif.vc): warm
off-white paper, near-black ink, white cards, generous whitespace, monochrome
with a restrained nod to the three pillar colors (forest / ochre / slate).

## Before launch — fill in placeholders

All editable values live in **`src/lib/site.ts`**:

- `contactEmail` / `giveEmail` — currently `info@saif.vc` / `give@saif.vc`;
  confirm the public addresses.
- `taxStatus` — currently `"approved"` (states SAIFbio is a recognized
  501(c)(3) and shows the EIN). Switch to `"pending"` if the IRS application is
  not yet approved; donation/about/footer copy updates automatically.
- `ein` (`42-2661289`) and `mailingAddress` are filled from SAIFbio's records.

Team bios and photos live in `src/lib/team.ts`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Built to deploy on Vercel (same as saif-website). Import the repo, no env vars
required.
