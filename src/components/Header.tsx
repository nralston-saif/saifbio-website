"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/Wordmark";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Action Plan", href: site.actionPlanUrl, external: true },
  {
    name: "Ecosystem",
    href: "https://bioactionplan.org/ecosystem?from=saifbio",
    external: true,
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="SAIFbio home" className="flex items-center">
          <Wordmark className="text-3xl" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/donate"
          className="hidden h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Donate
        </Link>

        <button
          className="p-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 text-base font-medium text-muted-foreground"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "py-1 text-base font-medium",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/donate"
              className="mt-1 inline-flex h-10 w-fit items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
