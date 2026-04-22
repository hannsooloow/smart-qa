import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Explore SmartQA services across automation QA, consulting, CI/CD quality integration, and performance and reliability.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="QA services designed around release confidence, not task volume."
        description="SmartQA helps teams remove the QA bottlenecks that block reliable delivery: fragile coverage, unclear workflows, weak quality gates, and poor visibility into release risk."
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/autopilot", label: "See SmartQA Autopilot" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Service lines"
          title="Choose the engagement that fits the current bottleneck."
          description="Some teams need foundational strategy. Others need pipeline integration or scalable automation coverage. The structure below makes each offer legible to technical buyers."
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
                Review service details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}