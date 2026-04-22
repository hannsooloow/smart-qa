import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import {
  audienceSegments,
  autopilotBenefits,
  autopilotSteps,
  companyStats,
  differentiators,
  insightPosts,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="grain border-b border-[#1E293B]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-32">
          <div className="max-w-3xl space-y-9 lg:max-w-[47rem]">
            <span className="eyebrow-chip rounded-full px-4 py-1.5 text-sm font-medium tracking-[0.18em] uppercase">
              Automation-first QA services
            </span>
            <div className="space-y-7">
              <h1 className="headline-balance max-w-5xl font-display text-5xl leading-[1.01] font-semibold tracking-tight text-sand sm:text-6xl lg:text-[5.25rem]">
                Release confidence for teams shipping at real product speed.
              </h1>
              <p className="copy-balance max-w-3xl text-lg leading-8 text-muted sm:text-[1.2rem] sm:leading-9">
                SmartQA builds the automation systems, quality workflows, and
                reporting visibility that growing software teams need to ship
                faster without normalizing risk.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                Book a Consultation
              </Link>
              <Link
                href="/autopilot"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                Explore SmartQA Autopilot
              </Link>
            </div>
          </div>
          <div className="surface-card-strong w-full max-w-[33rem] rounded-[2.5rem] p-7 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat rounded-[1.75rem] p-6"
                >
                  <div className="text-[2rem] font-display font-semibold tracking-tight text-[#38BDF8]">
                    {stat.value}
                  </div>
                  <div className="mt-3 max-w-[10rem] text-sm leading-6 text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="surface-accent-card mt-6 rounded-[2rem] p-6">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                SmartQA Autopilot
              </p>
              <p className="mt-4 text-lg leading-8 text-sand">
                A managed QA system that analyzes application flows, generates
                scenario candidates, runs tests, heals common breakages, and
                returns evidence-rich reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash border-b border-[#1E293B]">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-10 text-sm text-muted sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            "Reduce manual regression bottlenecks",
            "Stabilize release pipelines and quality gates",
            "Make automation assets reusable across teams",
            "Turn QA reporting into decision-ready evidence",
          ].map((item) => (
            <div key={item} className="surface-card-soft rounded-[1.5rem] px-5 py-4">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Core services"
          title="SmartQA sells operating leverage, not generic test execution."
          description="Each engagement is designed to remove a real quality bottleneck and leave the client with stronger systems, not just a backlog of test cases."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="surface-card group rounded-[2.25rem] p-8 transition hover:-translate-y-1 hover:border-accent/25"
            >
              <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                {service.shortLabel}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sand">
                {service.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                {service.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.outcomes.slice(0, 3).map((outcome) => (
                  <span key={outcome} className="tag-pill rounded-full px-3 py-1 text-xs text-muted">
                    {outcome}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="SmartQA Autopilot"
            title="A premium managed QA engine now, a product platform over time."
            description="Autopilot gives SmartQA a differentiated delivery model: intelligent analysis, generated scenarios, execution, healing, and reporting wrapped in a human-guided service."
          />
          <div className="mt-12 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {autopilotSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="surface-card-soft rounded-[1.85rem] p-6"
                >
                  <div className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-sand">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="surface-accent-card rounded-[2.25rem] p-8 sm:p-9">
              <h3 className="font-display text-3xl font-semibold text-sand">
                Why teams ask about it
              </h3>
              <div className="mt-6 space-y-4">
                {autopilotBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="surface-card-soft rounded-[1.5rem] p-5"
                  >
                    <p className="text-base font-semibold text-sand">
                      {benefit.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Why SmartQA"
          title="Built for technical buyers who care about release stability, not marketing theater."
          description="The site should make it obvious that SmartQA understands engineering workflows, maintenance reality, and the difference between test quantity and release confidence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="surface-card rounded-[1.9rem] p-7"
            >
              <h3 className="text-xl font-semibold text-sand">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <SectionHeading
            eyebrow="Who it is for"
            title="The message stays the same. The buying trigger changes by stage."
            description="SmartQA should speak differently to startup founders, scaleup engineering leaders, agencies, and enterprise teams without fragmenting the offer."
          />
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {audienceSegments.map((segment) => (
              <div
                key={segment.slug}
                className="surface-card rounded-[2.25rem] p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-sand">
                    {segment.title}
                  </h3>
                  <span className="eyebrow-chip rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
                    {segment.triggerLabel}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-8 text-muted">
                  {segment.summary}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {segment.painPoints.slice(0, 3).map((pain) => (
                    <li key={pain} className="surface-card-soft rounded-[1.35rem] px-4 py-3">
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Insights"
          title="Content designed to qualify buyers, not just attract clicks."
          description="The first content cluster should reinforce SmartQA's authority in automation systems, CI/CD quality, release confidence, and AI-assisted QA operations."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {insightPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="surface-card rounded-[1.9rem] p-7 transition hover:-translate-y-1 hover:border-accent/25"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {post.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-sand">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1E293B] bg-[#0B1220]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Start with the highest-leverage next step
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
              Book a consultation and map the QA bottleneck that is actually slowing releases.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
            >
              Review Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
