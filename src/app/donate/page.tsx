import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DonationInquiryForm } from "@/components/DonationInquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SAIFbio's work to prevent, detect, and defend against catastrophic biological threats. Ways to give and tax-exempt details.",
};

const waysToGive = [
  {
    title: "By check",
    body: (
      <>
        Make checks payable to <strong>{site.legalName}</strong> and mail to:
        <span className="mt-3 block whitespace-pre-line rounded-md bg-secondary px-4 py-3 text-[0.9rem] not-italic text-foreground">
          {`${site.mailingAddress.org}\n${site.mailingAddress.line1}\n${site.mailingAddress.line2}`}
        </span>
      </>
    ),
  },
  {
    title: "Wire or ACH",
    body: (
      <>
        For wire or ACH transfers,{" "}
        <a
          href="#donation-inquiry"
          className="font-medium text-foreground underline underline-offset-4"
        >
          send us a note
        </a>{" "}
        and we&rsquo;ll reply with banking instructions and confirm receipt for
        your records.
      </>
    ),
  },
  {
    title: "Donor-advised fund",
    body: `Recommend a grant to ${site.legalName} through your DAF using our legal name${
      site.taxStatus === "approved" ? ` and EIN ${site.ein}` : ""
    }. We're happy to coordinate with your sponsor.`,
  },
  {
    title: "Stock or crypto",
    body: (
      <>
        Gifts of appreciated securities or cryptocurrency can be especially
        tax-efficient.{" "}
        <a
          href="#donation-inquiry"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Send us a note
        </a>{" "}
        to arrange a transfer and valuation.
      </>
    ),
  },
];

export default function DonatePage() {
  return (
    <div>
      {/* Ways to give (primary) + optional contact form */}
      <section className="py-10 sm:py-12">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            {/* Ways to give — the main, self-serve path */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ways to give
              </h2>
              <p className="mt-3 text-muted-foreground">
                Give directly using whichever option works best for you.
              </p>
              <div className="mt-6 space-y-3">
                {waysToGive.map((way) => (
                  <Card key={way.title} className="gap-2 py-4">
                    <CardHeader>
                      <CardTitle className="text-base">{way.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {way.body}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Optional — talk to us about a donation */}
            <div id="donation-inquiry" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Talk to us about a donation
              </h2>
              <p className="mt-3 text-muted-foreground">
                Optional — use any option on the left, or leave your details and
                we&rsquo;ll reach out.
              </p>
              <div className="mt-6">
                <DonationInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax info */}
      <section className="border-t py-16 sm:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Tax information
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-muted-foreground">
              {site.taxStatus === "approved" ? (
                <p>
                  {site.legalName} is recognized by the Internal Revenue Service
                  as a tax-exempt organization described in Section 501(c)(3) of
                  the Internal Revenue Code, and a public charity described in
                  Section 509(a)(1). Your contribution is tax-deductible as a
                  charitable contribution to the full extent allowed by law.
                </p>
              ) : (
                <p>
                  {site.legalName}&rsquo;s application with the IRS for
                  recognition of tax-exempt status under Section 501(c)(3) of the
                  Internal Revenue Code is pending. If approved, contributions
                  will be tax-deductible to the full extent allowed by law.
                </p>
              )}
              <p>
                We provide a written acknowledgement for every gift. IRS
                regulations require us to state that no goods or services are
                provided in consideration for your contribution.
              </p>
            </div>
            <Card>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Legal name</span>
                  <span className="text-right font-medium">{site.legalName}</span>
                </div>
                {site.taxStatus === "approved" && (
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">EIN</span>
                    <span className="text-right font-medium">{site.ein}</span>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-right font-medium">
                    {site.taxStatus === "approved"
                      ? "501(c)(3)"
                      : "501(c)(3) pending"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
