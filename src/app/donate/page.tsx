import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
    body: "For wire or ACH transfers, email us and we'll send banking instructions and confirm receipt for your records.",
  },
  {
    title: "Donor-advised fund",
    body: `Recommend a grant to ${site.legalName} through your DAF using our legal name${
      site.taxStatus === "approved" ? ` and EIN ${site.ein}` : ""
    }. We're happy to coordinate with your sponsor.`,
  },
  {
    title: "Stock or crypto",
    body: "Gifts of appreciated securities or cryptocurrency can be especially tax-efficient. Email us to arrange a transfer and valuation.",
  },
];

export default function DonatePage() {
  return (
    <div>
      <PageHeader
        title="Support our work"
        intro="Every contribution helps SAIFbio close the gap between what threat actors can do and what our defenses can stop. Here's how to give."
      />

      {/* Reach out form */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Start your gift
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Tell us a little about how you&rsquo;d like to give and we&rsquo;ll
            reach out to walk you through the details — no commitment required.
          </p>
          <div className="mt-8">
            <DonationInquiryForm />
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ways to give
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {waysToGive.map((way) => (
              <Card key={way.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{way.title}</CardTitle>
                  <CardDescription className="mt-2 text-[0.95rem] leading-relaxed">
                    {way.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <a href={`mailto:${site.giveEmail}`} className="btn btn-primary">
              Email us to give
            </a>
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
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">EIN</span>
                  <span className="text-right font-medium">{site.ein}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-right font-medium">501(c)(3)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t py-16 text-center sm:py-20">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Questions about giving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We&rsquo;re glad to talk through the best way to support SAIFbio,
            arrange a transfer, or answer questions about our work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${site.giveEmail}`} className="btn btn-primary">
              {site.giveEmail}
            </a>
            <a href={`mailto:${site.contactEmail}`} className="btn btn-outline">
              General inquiries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
