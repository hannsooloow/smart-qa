import { PageHero, SectionHeading } from "@/components/site-shell";
import { qonductorBenefits, qonductorSteps } from "@/lib/site-data";

export const metadata = {
  title: "Features",
  description:
    "See the orchestration, release visibility, and QA capability that Qonductor brings into SmartQA's delivery model.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="The capability behind clearer QA systems."
        description="These features show how Qonductor helps SmartQA bring stronger orchestration, execution signal, and release visibility into real delivery environments."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "/qonductor", label: "Watch the Video" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Built to make release signal easier to trust."
          description="The goal is not more QA ceremony. The goal is a cleaner system for coverage, execution, reporting, and decision-making."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {qonductorBenefits.map((benefit) => (
            <div key={benefit.title} className="surface-card rounded-[1.9rem] p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-sand">
                {benefit.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="How it shows up"
            title="Operational features that fit delivery."
            description="Qonductor helps SmartQA keep QA connected to the release path instead of splitting signal across disconnected tools and manual updates."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {qonductorSteps.map((step, index) => (
              <div key={step.title} className="surface-card-soft rounded-[1.9rem] p-7">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  Feature 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-sand">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}