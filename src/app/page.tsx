import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { site, pillars } from "@/lib/site";
import { Pill } from "@/components/Pill";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <a
              href={site.actionPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Advancing the bio action plan
            </a>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            SAIFbio is a nonprofit mobilizing philanthropy, science, and policy
            to prevent, detect, and defend against catastrophic biological
            threats.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pillars.map((p) => (
              <Pill
                key={p.key}
                label={p.name}
                description={p.summary}
                dotColor={p.color}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/donate" className="btn btn-primary">
              Support our work
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* Why now */}
      <section className="border-t py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why now
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            AI is making biotechnology more powerful, more accessible, and more
            dangerous. The cost of synthesizing dangerous pathogens falls every
            year, while our surveillance, stockpiles, and safeguards remain
            largely where they were after COVID-19. We have the defensive
            technologies — what we don&rsquo;t have is time.
          </p>
        </div>
      </section>

      {/* The Action Plan */}
      <section className="border-t py-20">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-card p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Bio Action Plan
                </h2>
                <p className="mt-4 text-muted-foreground">
                  SAIFbio helps steward the Bio Action Plan — a coordinated,
                  five-year, $2.5B strategy of priorities and milestones for
                  philanthropy, industry, and government.
                </p>
              </div>
              <a
                href={site.actionPlanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shrink-0"
              >
                Explore the plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="border-t py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Help build the world&rsquo;s defenses
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            SAIFbio is a {site.taxStatus === "approved" ? "501(c)(3) " : ""}
            nonprofit. Your support funds the work of preventing the next
            pandemic.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/donate" className="btn btn-primary">
              Donate
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn about us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
