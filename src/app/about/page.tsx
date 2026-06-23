import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { site, pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SAIFbio is a nonprofit working to prevent, detect, and defend against catastrophic biological threats amplified by advances in AI and biotechnology.",
};

const whatWeDo = [
  {
    title: "Fund the gaps",
    body: "We direct philanthropic capital to the highest-leverage, most-neglected work across biosecurity — the startups, nonprofits, and programs that would not otherwise exist.",
  },
  {
    title: "Steward the plan",
    body: "We help maintain the Bio Action Plan: a public, five-year roadmap with concrete milestones and metrics, and we track progress against it openly.",
  },
  {
    title: "Convene the field",
    body: "We bring together funders, researchers, founders, and policymakers so effort is coordinated rather than duplicated.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About SAIFbio"
        intro="SAIFbio is a nonprofit founded by the partners of SAIF Ventures to confront one of the most consequential risks of the coming decade: an engineered pandemic."
      />

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our mission
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              We exist to build a global immune system — the surveillance,
              safeguards, and countermeasures the world needs to stop the next
              biological catastrophe before it begins.
            </p>
            <p>
              The same advances that make modern biology a source of cures also
              make it a source of risk. As AI accelerates what a single actor can
              design and synthesize, the gap between offense and defense widens.
              SAIFbio works to close that gap — funding, coordinating, and
              championing the people and programs that keep us safe.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t py-16 sm:py-20">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What we do
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-2 text-[0.95rem] leading-relaxed">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-t py-16 sm:py-20">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Prevent, Detect, Defend
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We organize our work around three lines of defense — the same
            architecture as the Bio Action Plan we help steward.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.key}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: pillar.color }}
                      aria-hidden
                    />
                    <CardTitle className="text-lg">{pillar.name}</CardTitle>
                  </div>
                  <CardDescription className="mt-2 text-[0.95rem] leading-relaxed">
                    {pillar.summary}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={site.actionPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              See the full plan at bioactionplan.org ↗
            </a>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="border-t py-16 sm:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Governance
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              {site.legalName} is a nonprofit organization
              {site.taxStatus === "approved" ? (
                <>
                  {" "}
                  recognized by the IRS as a tax-exempt public charity under
                  Section 501(c)(3) of the Internal Revenue Code (EIN {site.ein}).
                  Contributions are tax-deductible to the full extent allowed by
                  law.
                </>
              ) : (
                <>
                  {" "}
                  whose application for recognition of tax-exempt status under
                  Section 501(c)(3) of the Internal Revenue Code is pending.
                </>
              )}
            </p>
            <p>
              SAIFbio is operated by the partners of SAIF Ventures and maintains
              books and governance separate from the venture fund. Geoffrey
              Ralston serves as President.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/team" className="btn btn-outline">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
