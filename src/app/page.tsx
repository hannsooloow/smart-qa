import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/site-shell";
import {
  differentiators,
  insightPosts,
  deliveryBenefits,
  services,
} from "@/lib/site-data";

const featureHighlights = [
  {
    label: "Risk discovery",
    title: "Find the unstable paths before they reach production.",
    summary:
      "SmartQA focuses validation on the changes and flows most likely to create release risk.",
  },
  {
    label: "Quality signal",
    title: "Turn validation into clearer release signal.",
    summary:
      "Coverage, failures, and evidence are organized to support better release decisions, not more noise.",
  },
  {
    label: "Release readiness",
    title: "See what is ready, exposed, and still needs review.",
    summary:
      "SmartQA brings decision-ready reporting that shows where confidence is strong and where attention is still required.",
  },
  {
    label: "Delivery fit",
    title: "Improve QA without slowing delivery down.",
    summary:
      "The operating model fits active engineering teams instead of introducing another heavy process layer.",
  },
];

const serviceVisuals: Record<string, string> = {
  "automation-engineering": "/service-icon-automation.svg",
  "release-assurance": "/service-icon-performance.svg",
  "release-readiness": "/service-icon-cicd.svg",
  "quality-engineering-advisory": "/service-icon-consulting.svg",
  "release-risk-analysis": "/service-icon-performance.svg",
  "release-intelligence": "/service-icon-cicd.svg",
};

export default function Home() {
  return (
    <>
      <section className="grain flex min-h-[calc(100svh-88px)] items-center border-b border-[#1E293B]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-18 sm:gap-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="max-w-3xl space-y-8 lg:basis-[46%] lg:max-w-[40rem] xl:max-w-[42rem]">
            <span className="eyebrow-chip inline-flex rounded-full px-4.5 py-1.5 text-[0.72rem] font-medium tracking-[0.14em] uppercase sm:px-5">
              Platform-Enabled QA Delivery
            </span>
            <div className="space-y-5">
              <h1 className="headline-balance max-w-5xl font-display text-4xl leading-[1.02] font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]">
                Provide your URL. We&apos;ll find the cracks before your users do.
              </h1>
              <p className="copy-balance max-w-3xl text-base leading-7 text-muted sm:text-[1.1rem] sm:leading-8 lg:max-w-[34rem]">
                SmartQA helps teams uncover release-critical issues early,
                strengthen coverage, and ship with more confidence.
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
                href="/services"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="w-full lg:-mr-4 lg:basis-[62%] lg:-translate-y-3 xl:-mr-6 xl:max-w-[68rem]">
            <HeroVisual className="w-full" />
          </div>
        </div>
      </section>

      <section className="section-wash border-b border-[#1E293B]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3.5 px-6 py-10 text-sm text-muted sm:px-8 sm:py-12 lg:px-12">
          {[
            "Built Around Release Risk",
            "Quality Engineering, Not Test Staffing",
            "Clearer Signal Before Release",
            "Faster Path To Useful QA",
          ].map((item) => (
            <div key={item} className="proof-pill rounded-full px-5 py-3.5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Quality engineering services built for release confidence."
          description="From automation engineering and release assurance to risk analysis and release intelligence, SmartQA brings expert judgment into the moments where quality matters most."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="surface-card-soft group rounded-[1.8rem] p-5 transition hover:-translate-y-0.5 hover:border-accent/20 sm:rounded-[2rem] sm:p-6"
            >
              <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-[1.35rem] bg-[#0B1220]/64">
                <Image
                  src={serviceVisuals[service.slug]}
                  alt=""
                  width={96}
                  height={96}
                  className="h-auto w-full max-w-[5rem] object-contain"
                />
              </div>
              <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                {service.shortLabel}
              </p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-tight text-sand sm:text-[2.1rem]">
                {service.title}
              </h2>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-muted sm:text-base">
                {service.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.outcomes.slice(0, 3).map((outcome) => (
                  <span key={outcome} className="tag-pill rounded-full px-3 py-1 text-xs text-muted">
                    {outcome}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-start">
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
          >
            Explore Services
          </Link>
        </div>
      </section>

      <section id="how-we-work" className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            eyebrow="How We Work"
            title="Platform-enabled delivery built around release confidence."
            description="SmartQA combines expert QA execution with proprietary internal delivery infrastructure to surface risk earlier, keep coverage aligned, and make release signal easier to trust."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-[62rem]">
                  <Image
                    src="/section3-autopilot.svg"
                    alt=""
                    width={1200}
                    height={260}
                    className="h-auto w-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-center lg:justify-start">
                <div className="w-full max-w-[40rem]">
                  <Image
                    src="/section4-process.svg"
                    alt=""
                    width={700}
                    height={180}
                    className="h-auto w-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="surface-accent-card rounded-[2rem] p-6 sm:rounded-[2.25rem] sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-sand sm:text-3xl">
                What the model improves
              </h3>
              <div className="mt-6 space-y-4">
                {deliveryBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="surface-card-soft rounded-[1.35rem] p-5 sm:rounded-[1.5rem]"
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
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            eyebrow="Release Confidence"
            title="How stronger QA signal changes the release conversation."
            description="These are the advantages SmartQA brings when quality engineering is tied directly to release risk, readiness, and evidence."
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {featureHighlights.map((feature) => (
              <div
                key={feature.title}
                className="surface-card rounded-[2rem] p-6 sm:rounded-[2.25rem] sm:p-8"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  {feature.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-muted">
                  {feature.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Why SmartQA"
              title="Built for teams that need better release decisions, not more testing noise."
              description="SmartQA supports engineering leaders who need sharper QA judgment, stronger execution, and a more mature path to release confidence."
            />
          </div>
          <div className="w-full max-w-[28rem] lg:pt-6">
            <Image
              src="/section5-why.svg"
              alt=""
              width={520}
              height={240}
              className="h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="surface-card rounded-[1.7rem] p-6 sm:rounded-[1.9rem] sm:p-7"
            >
              <h3 className="text-xl font-semibold text-sand">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow="Insights"
          title="Practical thinking on release confidence and quality engineering."
          description="Short, useful insights for engineering and product leaders improving validation, coverage, and release signal."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {insightPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="surface-card rounded-[1.7rem] p-6 transition hover:-translate-y-1 hover:border-accent/25 sm:rounded-[1.9rem] sm:p-7"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Talk to SmartQA
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
              Start with the release risk.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Tell us where quality slows delivery, where coverage breaks down,
              or where release confidence is weak. SmartQA will help you find
              the gaps, reduce the risk, and strengthen the signal before ship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                Explore Services
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[22rem] lg:shrink-0">
            <Image
              src="/section6-contact.svg"
              alt=""
              width={420}
              height={260}
              className="h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
