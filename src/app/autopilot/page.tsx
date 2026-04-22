import { PageHero, SectionHeading } from "@/components/site-shell";
import { autopilotBenefits, autopilotSteps } from "@/lib/site-data";

export const metadata = {
  title: "SmartQA Autopilot",
  description:
    "Explore SmartQA Autopilot, the platform-backed managed QA system that analyzes, generates, executes, heals, and reports on test workflows.",
};

export default function AutopilotPage() {
  return (
    <>
      <PageHero
        eyebrow="SmartQA Autopilot"
        title="A platform-backed QA delivery model built for teams that have outgrown manual-heavy release validation."
        description="SmartQA Autopilot is positioned as a premium managed service today: intelligent analysis, generated test scenarios, execution, healing, and reporting wrapped in a workflow that clients can trust."
        primaryCta={{ href: "/contact", label: "Request an Autopilot Pilot" }}
        secondaryCta={{ href: "/services", label: "Compare with core services" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Why it exists"
          title="Traditional QA execution does not scale well enough for modern delivery speed."
          description="Teams need a more systematic path from application context to usable regression signal. Autopilot addresses the gaps between discovery, execution, maintenance, and reporting."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {autopilotBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="surface-card rounded-[1.9rem] p-7"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-sand">{benefit.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Workflow"
            title="How SmartQA Autopilot works"
            description="This page should make the system tangible enough to sell without implying a fully autonomous self-serve product before that is true."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {autopilotSteps.map((step, index) => (
              <div
                key={step.title}
                className="surface-card-soft rounded-[1.9rem] p-7"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  Stage 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-sand">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-2">
          <div className="surface-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Current market position
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-sand">
              Managed service first
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              The current offer should be sold as a SmartQA-managed pilot and
              delivery capability. That keeps credibility high while allowing
              the platform to mature through real client usage.
            </p>
          </div>
          <div className="surface-accent-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Future direction
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-sand">
              Selective SaaS expansion
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              As SmartQA Autopilot gains adoption, it can evolve toward client
              dashboards, historical reporting, scheduled runs, issue tracker
              integrations, and partial self-serve onboarding for qualified
              teams.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}