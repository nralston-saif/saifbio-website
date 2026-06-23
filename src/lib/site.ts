/**
 * Central site configuration for SAIFbio.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * TODO — fill in before launch. These are placeholders:
 *   - ein            : the IRS Employer Identification Number
 *   - mailingAddress : the legal mailing address for check donations
 *   - giveEmail / contactEmail : confirm the addresses you want public
 *   - taxStatus      : currently "approved" (states SAIFbio is a recognized
 *                      501(c)(3)). If the IRS application is still pending,
 *                      switch this to "pending" and the donation copy updates.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "SAIFbio",
  legalName: "SAIFbio Inc.",
  url: "https://saifbio.org",

  tagline: "A global immune system against catastrophic biological threats.",
  description:
    "SAIFbio is a nonprofit working to prevent, detect, and defend against engineered pandemics — mobilizing philanthropy, science, and policy before the next biological catastrophe.",

  // Contact — TODO: confirm public addresses
  contactEmail: "info@saif.vc",
  giveEmail: "give@saif.vc",

  // External links
  actionPlanUrl: "https://bioactionplan.org",
  saifUrl: "https://saif.vc",

  // 501(c)(3) — "approved" | "pending"
  taxStatus: "approved" as "approved" | "pending",
  ein: "42-2661289",

  // Mailing address for check donations (from SAIFbio org records)
  mailingAddress: {
    org: "SAIFbio Inc.",
    line1: "455 Market Street, Suite 1940, PMB 885745",
    line2: "San Francisco, CA 94105",
  },
} as const;

export const pillars = [
  {
    key: "prevent",
    name: "Prevent",
    color: "var(--color-prevent)",
    summary:
      "Keep dangerous capabilities out of the wrong hands — synthesis screening, know-your-customer for benchtop DNA, AI safeguards on biological design tools, and stronger research governance.",
  },
  {
    key: "detect",
    name: "Detect",
    color: "var(--color-detect)",
    summary:
      "See an outbreak before it spreads — global early-warning surveillance, metagenomic monitoring, and the disruption of threats while they are still containable.",
  },
  {
    key: "defend",
    name: "Defend",
    color: "var(--color-defend)",
    summary:
      "Be ready to respond — a protected workforce and PPE, safer built environments, rapid medical countermeasures, and the coordination to deploy them in time.",
  },
] as const;
