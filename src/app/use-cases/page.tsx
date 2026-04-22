import { PageHero, SectionHeading } from "@/components/site-shell";
import { audienceSegments } from "@/lib/site-data";

export const metadata = {
  title: "Use Cases",
  description:
    "See how SmartQA tailors QA automation and consulting support for startups, scaleups, agencies, and enterprise teams.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="The offer stays consistent. The buying trigger changes by team stage."
        description="SmartQA supports startups, scaleups, agencies, and enterprise teams with a service model that adapts to their release risk, delivery maturity, and reporting needs."
        primaryCta={{ href: "/contact", label: "Discuss your use case" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Audience segments"
          title="Speak directly to the moment each buyer is in."
          description="This page is a conversion aid: it helps visitors self-identify and confirms that SmartQA understands the pressure they are under."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {audienceSegments.map((segment) => (
            <div
              key={segment.slug}
              className="surface-card rounded-[2.25rem] p-8"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                {segment.triggerLabel}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sand">
                {segment.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted">
                {segment.summary}
              </p>
              <div className="mt-6 space-y-3">
                {segment.painPoints.map((painPoint) => (
                  <div
                    key={painPoint}
                    className="surface-card-soft rounded-[1.35rem] px-4 py-3 text-sm text-muted"
                  >
                    {painPoint}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}