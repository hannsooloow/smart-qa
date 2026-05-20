import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { qonductorBenefits, qonductorSteps } from "@/lib/site-data";

export const metadata = {
  title: "Qonductor",
  description:
    "See how Qonductor brings coverage, execution, and release reporting into one QA system.",
};

export default function QonductorPage() {
  return (
    <>
      <PageHero
        eyebrow="Qonductor"
        title="Qonductor gives teams one place to run QA."
        description="It brings coverage, test execution, failure tracking, and release reporting into one system, so teams can see what is covered, what broke, and what needs attention before release."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#workflow", label: "Watch the Video" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Why teams buy it"
          title="Less release uncertainty. Less QA coordination."
          description="Qonductor helps teams keep QA organized, visible, and ready to support release decisions without extra manual coordination."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {qonductorBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="surface-card rounded-[1.9rem] p-7"
            >
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

      <section id="workflow" className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Workflow"
            title="Coverage, execution, and release reporting in one flow."
            description="The product story needs to feel operational. These stages show how Qonductor keeps QA connected to the release path instead of drifting into separate tools and manual updates."
          />
          <div className="mt-6 flex justify-center lg:mt-8">
            <div className="w-full max-w-[60rem]">
              <Image
                src="/section3-autopilot.svg"
                alt="Qonductor workflow overview"
                width={1200}
                height={260}
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center lg:mt-5">
            <div className="w-full max-w-[38rem]">
              <Image
                src="/section4-process.svg"
                alt="Qonductor process detail"
                width={700}
                height={180}
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {qonductorSteps.map((step, index) => (
              <div
                key={step.title}
                className="surface-card-soft rounded-[1.9rem] p-7"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  Stage 0{index + 1}
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

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-2">
          <div className="surface-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Product role
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-sand">
              Built to support release decisions
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              Qonductor keeps the operational QA picture in one place: what is
              covered, what ran, what failed, and what the team should review
              before shipping.
            </p>
          </div>
          <div className="surface-accent-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              SmartQA role
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-sand">
              Rollout, integration, stabilization
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              SmartQA helps teams roll out Qonductor, connect it to real delivery
              workflows, and keep the system reliable as product complexity grows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}