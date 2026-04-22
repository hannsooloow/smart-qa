"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { contactDetails, navItems, serviceNavItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-[#1E293B] bg-[#0B1220]/78 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center" onClick={closeMobileNav}>
            <Image
              src="/smartqa-logo-circle.svg"
              alt="SmartQA logo"
              width={768}
              height={768}
              priority
              className="h-auto w-[84px] sm:w-[92px]"
            />
          </Link>

          <nav className="hidden items-center gap-x-7 gap-y-2 text-base lg:flex xl:text-lg">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold transition sm:inline-flex"
            >
              Let's Talk
            </Link>
            <button
              type="button"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#334155] text-sand transition hover:bg-[#1E293B] lg:hidden"
              onClick={() => setMobileNavOpen((current) => !current)}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div className="border-t border-[#1E293B] lg:hidden">
            <nav
              id="mobile-nav"
              className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-base sm:px-8"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="site-nav-link rounded-2xl px-4 py-3"
                  onClick={closeMobileNav}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition sm:hidden"
                onClick={closeMobileNav}
              >
                Let's Talk
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 flex-1">{children}</main>

      <footer className="border-t border-[#1E293B] bg-[#0B1220]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-12">
          <div className="max-w-md space-y-4">
            <Image
              src="/smartqa-logo-circle.svg"
              alt="SmartQA logo"
              width={768}
              height={768}
              className="h-auto w-[148px]"
            />
            <p className="text-sm leading-8 text-muted">
              Automation QA, consulting, and SmartQA Autopilot for teams that
              need a higher-confidence release process.
            </p>
            <div className="text-sm text-muted">
              <div>{contactDetails.email}</div>
              <div>{contactDetails.location}</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Navigation
            </div>
            <div className="mt-4 space-y-3 text-sm text-muted">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="site-nav-link">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Services
            </div>
            <div className="mt-4 space-y-3 text-sm text-muted">
              {serviceNavItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="site-nav-link">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="headline-balance mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="copy-balance mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="grain border-b border-[#111827]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-32">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="headline-balance mt-5 max-w-5xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4.5rem] lg:leading-[1.02]">
          {title}
        </h1>
        <p className="copy-balance mt-7 max-w-3xl text-base leading-7 text-muted sm:text-[1.15rem] sm:leading-8">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}