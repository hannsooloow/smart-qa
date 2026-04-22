import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.shortLabel}
        title={service.title}
        description={service.hero}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/autopilot", label: "Explore SmartQA Autopilot" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="What this engagement solves"
              title="Built for teams that need usable quality leverage."
              description={service.summary}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="surface-card rounded-[1.7rem] p-6 text-sm leading-6 text-muted"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>
          <div className="surface-accent-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Typical deliverables
            </p>
            <div className="mt-5 space-y-3">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="surface-card-soft rounded-[1.35rem] px-4 py-3 text-sm text-muted"
                >
                  {deliverable}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="When to bring SmartQA in"
            title="Strong buying triggers are usually operational, not theoretical."
            description="These situations typically justify bringing in external QA automation support before the team absorbs more delivery risk."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.situations.map((situation) => (
              <div
                key={situation}
                className="surface-card rounded-[1.7rem] p-6 text-sm leading-6 text-muted"
              >
                {situation}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              Discuss this engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}