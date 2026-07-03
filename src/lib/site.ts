/**
 * Central site configuration for SAIFbio.
 *
 * taxStatus "approved" states SAIFbio is a recognized 501(c)(3) and shows the
 * EIN; "pending" switches the donation/about/footer copy to application-
 * pending language. IRS approval confirmed 2026-07.
 */

export const site = {
  name: "SAIFbio",
  legalName: "SAIFbio Inc.",
  url: "https://saifbio.org",

  tagline: "A global immune system against catastrophic biological threats.",
  description:
    "SAIFbio is a nonprofit working to prevent, detect, and defend against engineered pandemics — mobilizing philanthropy, science, and policy before the next biological catastrophe.",

  // Public contact addresses (footer + donate-form fallback)
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
