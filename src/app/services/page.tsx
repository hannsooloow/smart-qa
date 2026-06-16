import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Explore SmartQA services across automation engineering, release assurance, release readiness, advisory, risk analysis, and release intelligence.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Quality engineering services built for release confidence."
        description="SmartQA delivers expert QA execution, sharper release signal, and platform-enabled delivery support for teams shipping under real delivery pressure."
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/#how-we-work", label: "Explore How We Work" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Service lines"
          title="Choose the service that strengthens the release system fastest."
          description="Each engagement is designed to solve a specific release-confidence problem, from weak coverage and unstable validation to unclear reporting and fragmented QA ownership."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="surface-card rounded-[1.9rem] p-6 sm:rounded-[2.1rem] sm:p-7"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                {service.shortLabel}
              </p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-tight text-sand sm:text-[2.1rem]">
                {service.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted sm:text-base">{service.summary}</p>
              <div className="mt-5 space-y-2.5 text-sm text-muted">
                {service.situations.map((situation) => (
                  <div
                    key={situation}
                    className="surface-card-soft rounded-[1.35rem] px-4 py-3"
                  >
                    {situation}
                  </div>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="btn-secondary mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-sand transition"
              >
                Review the service
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}