import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/site-shell";
import {
  audienceSegments,
  autopilotBenefits,
  autopilotSteps,
  differentiators,
  insightPosts,
  services,
} from "@/lib/site-data";

const serviceVisuals: Record<string, string> = {
  "automation-qa": "/service-icon-automation.svg",
  "qa-consulting": "/service-icon-consulting.svg",
  "cicd-quality-integration": "/service-icon-cicd.svg",
  "performance-reliability": "/service-icon-performance.svg",
};

export default function Home() {
  return (
    <>
      <section className="grain flex min-h-[calc(100svh-88px)] items-center border-b border-[#1E293B]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 sm:gap-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-12 lg:py-16 xl:gap-20 xl:py-20">
          <div className="max-w-3xl space-y-7 lg:basis-[49%] lg:max-w-[40rem] xl:max-w-[42rem]">
            <span className="eyebrow-chip rounded-full px-4 py-1.5 text-sm font-medium tracking-[0.18em] uppercase">
              Autopilot QA for fast-moving teams
            </span>
            <div className="space-y-5">
              <h1 className="headline-balance max-w-5xl font-display text-4xl leading-[1.02] font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]">
                Set your URL. We test everything.
              </h1>
              <p className="copy-balance max-w-3xl text-base leading-7 text-muted sm:text-[1.1rem] sm:leading-8 lg:max-w-[36rem]">
                SmartQA Autopilot turns your product into continuous QA
                coverage, test runs, and release reporting, without adding more
                work to your team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/autopilot"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                Start with Autopilot
              </Link>
              <Link
                href="/autopilot"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                See how it works
              </Link>
            </div>
          </div>
          <div className="w-full lg:-mr-4 lg:basis-[63%] lg:-translate-y-3 xl:-mr-6 xl:max-w-[68rem]">
            <HeroVisual className="w-full" />
          </div>
        </div>
      </section>

      <section className="section-wash border-b border-[#1E293B]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-8 text-sm text-muted sm:px-8 sm:py-10 lg:px-12">
          {[
            "Set up QA without building it all in-house",
            "Catch release risk before production",
            "Keep tests running as the product changes",
            "Get clear pass/fail reporting for every release",
          ].map((item) => (
            <div key={item} className="proof-pill rounded-full px-5 py-3.5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="SmartQA Autopilot"
            title="QA on autopilot."
            description="Give SmartQA your product URL. We map flows, generate tests, run them, and report what matters."
          />
          <div className="mt-6 flex justify-center lg:mt-8">
            <div className="w-full max-w-[60rem]">
              <Image
                src="/section3-autopilot.svg"
                alt=""
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
                alt=""
                width={700}
                height={180}
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {autopilotSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="surface-card-soft rounded-[1.6rem] p-5 sm:rounded-[1.85rem] sm:p-6"
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
            <div className="surface-accent-card rounded-[2rem] p-6 sm:rounded-[2.25rem] sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-sand sm:text-3xl">
                Why teams ask about it
              </h3>
              <div className="mt-6 space-y-4">
                {autopilotBenefits.map((benefit) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Core services"
          title="We take QA work off your team."
          description="SmartQA removes the testing bottlenecks that slow releases. You get better coverage, earlier signal, and clearer release decisions."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="surface-card group rounded-[1.8rem] p-5 transition hover:-translate-y-1 hover:border-accent/25 sm:rounded-[2rem] sm:p-6"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-[#0B1220]/78">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Why SmartQA"
              title="Built for teams that need QA done, not explained."
              description="SmartQA is for companies that want faster releases, fewer manual checks, and a QA system they can trust."
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Who it&apos;s for"
            title="Same outcome. Different trigger."
            description="SmartQA works for teams at different stages, but the value stays simple: less QA work and better release confidence."
          />
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {audienceSegments.map((segment) => (
              <div
                key={segment.slug}
                className="surface-card rounded-[2rem] p-6 sm:rounded-[2.25rem] sm:p-8"
              >
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
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

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Insights"
          title="Content for teams fixing real QA problems."
          description="Short, useful thinking on release confidence, CI/CD quality, flaky tests, and smarter automation."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
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
              Start with the product
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
              We&apos;ll handle the QA.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Show us the app, the release flow, or the bottleneck. We&apos;ll show
              you where Autopilot fits.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/autopilot"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                Start with Autopilot
              </Link>
              <Link
                href="/autopilot"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                Start with your URL
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
