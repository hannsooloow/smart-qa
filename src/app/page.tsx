import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/site-shell";
import {
  differentiators,
  insightPosts,
  qonductorBenefits,
  services,
} from "@/lib/site-data";

const featureHighlights = [
  {
    label: "Coverage orchestration",
    title: "Keep coverage tied to real product change.",
    summary:
      "Qonductor helps SmartQA keep QA aligned with what actually moved in the release path.",
  },
  {
    label: "Targeted execution",
    title: "Run the checks that matter now.",
    summary:
      "Focus execution around release signal instead of dragging every team through the same QA motion.",
  },
  {
    label: "Release visibility",
    title: "Make the signal easier to read.",
    summary:
      "Bring failures, reporting, and release readiness into a clearer system for engineering and product.",
  },
  {
    label: "Delivery fit",
    title: "Support the workflow teams already run.",
    summary:
      "The capability fits delivery operations instead of creating another disconnected QA layer to manage.",
  },
];

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
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-18 sm:gap-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="max-w-3xl space-y-8 lg:basis-[46%] lg:max-w-[40rem] xl:max-w-[42rem]">
            <span className="eyebrow-chip inline-flex rounded-full px-4.5 py-1.5 text-[0.72rem] font-medium tracking-[0.14em] uppercase sm:px-5">
              AI-Powered QA Orchestration
            </span>
            <div className="space-y-5">
              <h1 className="headline-balance max-w-5xl font-display text-4xl leading-[1.02] font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]">
                Set your URL. We test everything.
              </h1>
              <p className="copy-balance max-w-3xl text-base leading-7 text-muted sm:text-[1.1rem] sm:leading-8 lg:max-w-[34rem]">
                SmartQA delivers continuous QA coverage, release visibility, and
                execution workflows powered by Qonductor.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                Book a Demo
              </Link>
              <Link
                href="/qonductor"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                Watch the Video
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
            "Test automation without the maintenance drag",
            "QA consulting for real delivery teams",
            "CI/CD quality built into release flow",
            "Performance and reliability where it matters",
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
          title="What SmartQA brings into delivery."
          description="From test automation and QA consulting to CI/CD quality integration and reliability work, SmartQA helps teams put better QA systems in place without slowing the roadmap down."
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

      <section className="border-y border-[#1E293B] bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            eyebrow="Why Qonductor"
            title="Qonductor is the capability behind the model."
            description="SmartQA uses Qonductor to bring stronger orchestration, clearer signal, and better release visibility into the work without turning the company site into a product microsite."
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
                What it helps teams do
              </h3>
              <div className="mt-6 space-y-4">
                {qonductorBenefits.map((benefit) => (
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
              href="/qonductor"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              Watch the Video
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wash border-y border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            eyebrow="Features"
            title="The capability shows up in the work."
            description="These are the operational advantages SmartQA brings forward when Qonductor is part of the delivery model."
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
          title="Content for teams fixing real QA problems."
          description="Short, useful thinking on release confidence, CI/CD quality, flaky tests, and smarter automation."
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
              or where reporting is missing. We&apos;ll show where Qonductor and
              SmartQA fit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
              >
                Book a Demo
              </Link>
              <Link
                href="/qonductor"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-sand transition"
              >
                Watch the Video
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
