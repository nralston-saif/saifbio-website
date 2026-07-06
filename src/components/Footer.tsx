import Link from "next/link";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/Wordmark";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t bg-stone-200/70">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark className="text-2xl" />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {site.legalName} is a nonprofit working to prevent, detect, and
              defend against catastrophic biological threats.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-foreground">
                  Donate
                </Link>
              </li>
              <li>
                <a
                  href={site.actionPlanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Action Plan ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="hover:text-foreground"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href={site.saifUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Safe AI Fund ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {year} {site.legalName}.
            {site.taxStatus === "approved" && (
              <> A registered 501(c)(3) nonprofit · EIN {site.ein}.</>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
