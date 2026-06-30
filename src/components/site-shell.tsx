"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { contactDetails, navItems, serviceNavItems } from "@/lib/site-data";

type SocialItem = {
  label: string;
  href: string;
  Icon: ({ className }: { className?: string }) => ReactNode;
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.75 9.5V17M7.75 7.25V7.3M11.75 17V12.75C11.75 11.5074 12.7574 10.5 14 10.5C15.2426 10.5 16.25 11.5074 16.25 12.75V17M5.5 4.75H18.5C19.4665 4.75 20.25 5.5335 20.25 6.5V17.5C20.25 18.4665 19.4665 19.25 18.5 19.25H5.5C4.5335 19.25 3.75 18.4665 3.75 17.5V6.5C3.75 5.5335 4.5335 4.75 5.5 4.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18.236 7.134C16.7524 7 12 7 12 7C12 7 7.24763 7 5.76401 7.134C4.96146 7.20647 4.24515 7.66141 3.92476 8.40891C3.5 9.39768 3.5 11.5 3.5 11.5C3.5 11.5 3.5 13.6023 3.92476 14.5911C4.24515 15.3386 4.96146 15.7935 5.76401 15.866C7.24763 16 12 16 12 16C12 16 16.7524 16 18.236 15.866C19.0385 15.7935 19.7549 15.3386 20.0752 14.5911C20.5 13.6023 20.5 11.5 20.5 11.5C20.5 11.5 20.5 9.39768 20.0752 8.40891C19.7549 7.66141 19.0385 7.20647 18.236 7.134Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 9.75L14 11.5L10.25 13.25V9.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16.25 4.75H7.75C6.09315 4.75 4.75 6.09315 4.75 7.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V7.75C19.25 6.09315 17.9069 4.75 16.25 4.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M15.25 8.25H15.26M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialItems: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/smart-qa-mk?trk=public_profile_topcard-current-company",
    Icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@smartqa",
    Icon: YouTubeIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/smartqa.pro",
    Icon: InstagramIcon,
  },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMobileNavOpen(false);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      mainRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-[#1E293B]/65 bg-[#0B1220]/70 backdrop-blur-md">
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

          <nav className="hidden items-center gap-x-6 gap-y-2 text-[0.95rem] lg:flex xl:text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex"
            >
              Book a Consultation
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
                Book a Consultation
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main ref={mainRef} tabIndex={-1} className="relative z-10 flex-1 outline-none">
        {children}
      </main>

      <footer className="border-t border-[#1E293B]/70 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 sm:px-8 sm:pt-16 lg:px-12">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[0.82fr_1.1fr_0.78fr] lg:items-start xl:gap-x-14">
            <div className="max-w-[24rem] space-y-6 lg:-mt-1 lg:pt-0">
              <Link href="/" className="inline-flex items-center self-start" aria-label="SmartQA home">
                <Image
                  src="/smartqa-logo-circle.svg"
                  alt="SmartQA logo"
                  width={768}
                  height={768}
                  className="h-auto w-[76px] shrink-0 sm:w-[84px]"
                />
              </Link>
              <div className="space-y-3.5">
                <div className="text-[0.665rem] font-semibold tracking-[0.16em] text-[#6FAEAA]/66 uppercase">
                  Social utilities
                </div>
                <div className="flex items-center gap-3.5">
                  {socialItems.map(({ label, href, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="footer-utility-link"
                    >
                      <Icon className="h-[0.95rem] w-[0.95rem]" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="text-[0.665rem] font-semibold tracking-[0.16em] text-[#6FAEAA]/66 uppercase">
                  Contact
                </div>
                <Link
                  href={`mailto:${contactDetails.email}`}
                  className="footer-link footer-link-strong text-[0.875rem] font-normal tracking-[0.01em] text-slate-300/76"
                >
                  {contactDetails.email}
                </Link>
              </div>
            </div>
            <div className="grid gap-9 sm:grid-cols-2 lg:gap-10 lg:pt-1.5">
              <div className="space-y-3.5">
                <div className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  Navigation
                </div>
                <div className="space-y-2.5 text-sm text-muted">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link href={item.href} className="footer-link">
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3.5">
                <div className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  Services
                </div>
                <div className="space-y-2.5 text-sm text-muted">
                  {serviceNavItems.map((item) => (
                    <div key={item.href}>
                      <Link href={item.href} className="footer-link">
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:pt-1.5">
              <div className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                Release Confidence
              </div>
              <p className="max-w-[18rem] text-sm leading-6 text-slate-300/78">
                SmartQA helps teams improve release visibility, execution confidence, and QA signal through expert quality engineering support.
              </p>
              <div className="flex flex-col gap-2.5 text-sm font-medium text-sand">
                <Link href="/#how-we-work" className="footer-link footer-link-strong">
                  How We Work
                </Link>
                <Link href="/contact" className="footer-link footer-link-strong">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-[#1E293B]/55 pt-5 text-xs text-slate-400/80 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 SmartQA</div>
            <div>Release confidence through quality engineering</div>
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
      <h2 className="headline-balance mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08] xl:text-[3.35rem]">
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
  sectionClassName,
  contentClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  sectionClassName?: string;
  contentClassName?: string;
}) {
  const heroSectionClassName = sectionClassName
    ? `grain flex items-center border-b border-[#111827] ${sectionClassName}`
    : "grain flex min-h-[calc(100svh-88px)] items-center border-b border-[#111827]";
  const heroContentClassName = contentClassName
    ? `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${contentClassName}`
    : "mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16 xl:py-20";

  return (
    <section className={heroSectionClassName}>
      <div className={heroContentClassName}>
        <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="headline-balance mt-5 max-w-5xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl lg:text-[3.85rem] lg:leading-[1.04] xl:text-[4.25rem]">
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