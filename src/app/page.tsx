import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DeliverableFrame } from "@/components/deliverable-visuals";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/site-shell";
import {
  differentiators,
  insightPosts,
  deliveryBenefits,
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

const problemRecognitionCards = [
  {
    id: "01",
    accent: "#FF6B6F",
    tint: "rgba(255,107,111,0.14)",
    icon: "alert",
    illustrationClassName: "translate-x-[2%] translate-y-[10px] scale-[1.08] md:-translate-y-[24px]",
    title: "Issues surface after release",
    description: "Bugs and gaps appear in production, not in testing.",
    src: "/smartqa-diagnostic-01.svg",
  },
  {
    id: "02",
    accent: "#F1B452",
    tint: "rgba(241,180,82,0.14)",
    icon: "question",
    illustrationClassName: "translate-y-[13px] scale-[1.1] md:-translate-y-[28px]",
    title: "Unclear release readiness",
    description: "No one knows what's truly covered or what's still risky.",
    src: "/smartqa-diagnostic-02.svg",
  },
  {
    id: "03",
    accent: "#F2C65E",
    tint: "rgba(242,198,94,0.14)",
    icon: "shield",
    illustrationClassName: "-translate-x-[7%] translate-y-[9px] scale-[1.08] md:-translate-y-[26px]",
    title: "Automation lacks trust",
    description: "Existing automation is brittle, noisy, or doesn't reflect real risk.",
    src: "/smartqa-diagnostic-03.svg",
  },
  {
    id: "04",
    accent: "#2DD4BF",
    tint: "rgba(45,212,191,0.14)",
    icon: "eye",
    illustrationClassName: "translate-y-[10px] scale-[1.08] md:-translate-y-[22px]",
    title: "Visibility is fragmented",
    description: "Teams rely on disconnected tools and incomplete data.",
    src: "/smartqa-diagnostic-04.svg",
  },
] as const;

type ProblemRecognitionIcon = (typeof problemRecognitionCards)[number]["icon"];

const simpleSolutionSteps = [
  {
    step: "01",
    title: "You provide the URL",
    summary: "Start with the product surface that needs a clearer release signal.",
  },
  {
    step: "02",
    title: "We assess release risk",
    summary: "SmartQA reviews the journeys most likely to fail, break trust, or slow the release.",
  },
  {
    step: "03",
    title: "You see what matters",
    summary: "The result is a clearer view of exposure, priorities, and what deserves attention next.",
  },
];

const whatYouReceiveCards = [
  {
    title: "Clarity",
    description: "See where release confidence is weak and what needs attention first.",
    icon: SearchIcon,
    preview: (
      <DeliverableFrame
        size="compact"
        label="Executive Summary"
        title="Confidence is weakest in checkout and account recovery."
        footer="Top risks prioritized"
      />
    ),
  },
  {
    title: "Evidence",
    description: "Receive findings grounded in real issues, exposure, and validation gaps.",
    icon: ShieldIcon,
    preview: (
      <DeliverableFrame
        size="compact"
        label="Findings Report"
        title="Five ranked findings with severity and supporting evidence."
        footer="Evidence linked to each issue"
      />
    ),
  },
  {
    title: "Recommendations",
    description: "Get clear next steps to reduce risk and improve release readiness.",
    icon: ChecklistIcon,
    preview: (
      <DeliverableFrame
        size="compact"
        label="Recommendations Brief"
        title="Recommended actions sequenced by impact and urgency."
        footer="Immediate next actions defined"
      />
    ),
  },
  {
    title: "Ongoing Confidence",
    description: "Keep coverage strong and release decisions supported over time.",
    icon: SignalIcon,
    preview: (
      <DeliverableFrame
        size="compact"
        label="Release Readiness Review"
        title="Readiness status, watch areas, and blockers before ship."
        footer="Recurring release signal"
      />
    ),
  },
] as const;

function OutcomeCard({
  icon,
  title,
  description,
  preview,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  preview: ReactNode;
}) {
  return (
    <div className="surface-card group rounded-[1.8rem] p-6 sm:rounded-[2rem] sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#2DD4BF]/20 bg-[#2DD4BF]/8 text-accent">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-[1.5rem] font-semibold tracking-tight text-sand sm:text-[1.7rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-muted sm:text-[0.98rem]">
        {description}
      </p>
      <div className="mt-6">{preview}</div>
    </div>
  );
}

function ProblemRecognitionIconGlyph({
  icon,
}: {
  icon: ProblemRecognitionIcon;
}) {
  if (icon === "alert") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M12 5.3V13.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="12" cy="18.1" r="1.7" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "question") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M9.15 8.95C9.15 6.95 10.76 5.52 12.95 5.52C15.01 5.52 16.54 6.84 16.54 8.73C16.54 10.1 15.84 10.95 14.4 11.79C13.08 12.56 12.46 13.22 12.46 14.6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12.34" cy="18.36" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M12 4.2L18.6 7.04V11.64C18.6 15.66 15.8 19.33 12 20.35C8.2 19.33 5.4 15.66 5.4 11.64V7.04L12 4.2Z" stroke="currentColor" strokeWidth="2.05" strokeLinejoin="round" />
        <path d="M9.42 12.1L11.25 13.93L14.82 10.36" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
      <path d="M3.6 12C5.78 8.4 8.88 6.55 12 6.55C15.12 6.55 18.22 8.4 20.4 12C18.22 15.6 15.12 17.45 12 17.45C8.88 17.45 5.78 15.6 3.6 12Z" stroke="currentColor" strokeWidth="2.05" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.65" stroke="currentColor" strokeWidth="2.05" />
    </svg>
  );
}

function ProblemRecognitionCard({
  id,
  accent,
  tint,
  icon,
  illustrationClassName,
  title,
  description,
  src,
}: {
  id: string;
  accent: string;
  tint: string;
  icon: ProblemRecognitionIcon;
  illustrationClassName: string;
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="relative min-h-[23rem] overflow-hidden rounded-[1.75rem] border border-[rgba(148,163,184,0.2)] bg-[#0B1220] p-6 shadow-[0_16px_34px_rgba(2,8,23,0.2)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.75rem] before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] md:min-h-[24.5rem] xl:min-h-[25.75rem] xl:p-[26px]">
      <div
        aria-hidden
        className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_38%)]"
      />
      <div
        aria-hidden
        className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/[0.04]"
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex h-[54px] items-center gap-[14px]">
          <div
            className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border-2"
            style={{
              color: accent,
              borderColor: accent,
              backgroundColor: "rgba(255,255,255,0.01)",
              boxShadow: `0 0 12px ${tint}`,
            }}
          >
            <ProblemRecognitionIconGlyph icon={icon} />
          </div>
          <p
            className="text-[1.58rem] font-bold tracking-[0.1em] uppercase sm:text-[1.72rem]"
            style={{ color: accent }}
          >
            {id}
          </p>
        </div>

        <div className="mt-4 max-w-[13.8rem]">
          <h3 className="font-display text-[1.38rem] leading-[1.05] font-[650] tracking-tight text-sand sm:text-[1.54rem]">
            {title}
          </h3>
          <p className="mt-[10px] max-w-[15.4rem] text-[0.93rem] leading-[1.58] text-slate-300/82 sm:text-[0.96rem]">
            {description}
          </p>
        </div>

        <div className="relative mt-3 h-[12.75rem] shrink-0 sm:h-[13.9rem] md:mt-[12px] md:h-[10.75rem] xl:h-[10.5rem]">
          <div
            aria-hidden
            className="absolute inset-x-[10%] bottom-[8px] h-20 rounded-full bg-white/[0.05] blur-[62px]"
          />
          <div className={`absolute inset-x-0 top-0 h-full md:top-auto md:bottom-[-16px] ${illustrationClassName}`}>
            <Image
              src={src}
              alt={title}
              fill
              sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
              className="object-contain object-top md:object-bottom"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[linear-gradient(180deg,rgba(11,18,32,0.24),rgba(11,18,32,0))]"
          />
        </div>
      </div>
    </div>
  );
}

function SolutionStep({
  step,
  title,
  summary,
  emphasized = false,
}: {
  step: string;
  title: string;
  summary: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[1.4rem] px-5 py-5 sm:px-6 sm:py-6",
        emphasized
          ? "bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(45,212,191,0.12)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="text-[0.7rem] font-semibold tracking-[0.18em] text-accent uppercase">
        {step}
      </div>
      <h3 className="mt-3 font-display text-[1.28rem] font-semibold tracking-tight text-sand sm:text-[1.45rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-[20rem] text-sm leading-6 text-slate-300/78 sm:text-[0.96rem]">
        {summary}
      </p>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3.75L18.75 6.75V11.43C18.75 15.75 15.78 19.74 12 20.75C8.22 19.74 5.25 15.75 5.25 11.43V6.75L12 3.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.25 12.25L11.15 14.15L14.9 10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M8 7.5H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 16.5H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 7.5L5.5 8.5L7 6.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 12L5.5 13L7 11.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 16.5L5.5 17.5L7 15.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 16.75L8 12.75L11 15.75L17.25 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.75 9.5H17.25V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="grain flex min-h-[calc(100svh-88px)] items-center border-b border-[#1E293B]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:gap-12 sm:px-8 sm:py-18 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-24 xl:gap-16 xl:py-28">
          <div className="max-w-3xl space-y-8 lg:basis-[46%] lg:max-w-[40rem] xl:max-w-[42rem]">
            <span className="eyebrow-chip inline-flex rounded-full px-4.5 py-1.5 text-[0.72rem] font-medium tracking-[0.14em] uppercase sm:px-5">
              Release-Focused Quality Engineering
            </span>
            <div className="space-y-5">
              <h1 className="headline-balance max-w-5xl font-display text-4xl leading-[1.02] font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]">
                Provide your URL. We&apos;ll find the cracks before your users do.
              </h1>
              <p className="copy-balance max-w-3xl text-base leading-7 text-muted sm:text-[1.1rem] sm:leading-8 lg:max-w-[34rem]">
                Independent assessment, focused validation, and clear
                recommendations to help teams release with confidence.
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
          <div className="w-full lg:-mr-4 lg:basis-[62%] lg:-translate-y-6 xl:-mr-6 xl:max-w-[68rem]">
            <HeroVisual className="w-full" />
          </div>
        </div>
      </section>

      <section id="problem-recognition" className="border-b border-[#1E293B] bg-[#08111D]">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-12 xl:gap-16">
            <div className="max-w-[30rem]">
              <p className="text-sm font-semibold tracking-[0.22em] text-accent uppercase">
                Problem Recognition
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl lg:text-[3.55rem] lg:leading-[1.06]">
                You don&apos;t have a bug problem. You have a visibility problem.
              </h2>
              <p className="mt-7 max-w-[24rem] text-base leading-8 text-slate-300/78 sm:text-[1.05rem]">
                The biggest risks are usually the ones nobody sees before release.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[56rem] lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-x-[10%] top-[3%] h-20 rounded-full bg-white/[0.05] blur-[70px]"
              />
              <div
                aria-hidden
                className="absolute inset-x-[12%] bottom-[4%] h-20 rounded-full bg-[#2DD4BF]/10 blur-[82px]"
              />
              <Image
                src="/Problem%20Recognition%20_RR.png"
                alt="Release readiness assessment board showing weak release confidence, exposed risk distribution, and open issues"
                width={1536}
                height={1024}
                className="relative z-10 h-auto w-[106%] max-w-none -translate-x-[3%] sm:w-[104%] sm:-translate-x-[2%] lg:w-[108%] lg:-translate-x-[4%]"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 sm:mt-14">
            <div className="h-px flex-1 bg-[#2DD4BF]/22" />
            <p className="shrink-0 text-[0.76rem] font-semibold tracking-[0.18em] text-accent uppercase">
              Common Challenges We See
            </p>
            <div className="h-px flex-1 bg-[#2DD4BF]/22" />
          </div>

          <div id="problem-recognition-cards" className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {problemRecognitionCards.map((card) => (
              <ProblemRecognitionCard
                key={card.id}
                id={card.id}
                accent={card.accent}
                tint={card.tint}
                icon={card.icon}
                illustrationClassName={card.illustrationClassName}
                title={card.title}
                description={card.description}
                src={card.src}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash border-b border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Simple Solution
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl lg:text-[3.1rem] lg:leading-[1.08]">
              SmartQA stays simple: start with the URL, then get the signal you actually need.
            </h2>
          </div>

          <div className="surface-card-soft mt-10 rounded-[2rem] border border-white/8 p-3 sm:p-4 lg:p-5">
            <div className="grid gap-2 lg:grid-cols-3 lg:gap-0">
              {simpleSolutionSteps.map((item, index) => (
                <div
                  key={item.step}
                  className={[
                    index > 0 ? "lg:border-l lg:border-white/8" : "",
                    index > 0 ? "border-t border-white/8 lg:border-t-0" : "",
                  ].join(" ")}
                >
                  <SolutionStep
                    step={item.step}
                    title={item.title}
                    summary={item.summary}
                    emphasized={index === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash border-b border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            eyebrow="What You Receive"
            title="Clear deliverables before you commit to the next move."
            description="SmartQA delivers evidence, findings, and recommendations your team can use to make better release decisions faster."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {whatYouReceiveCards.map((card) => (
              <OutcomeCard
                key={card.title}
                icon={<card.icon />}
                title={card.title}
                description={card.description}
                preview={card.preview}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="border-y border-[#1E293B] bg-[#0F172A]">
        <SectionHeading
          eyebrow="How We Work"
          title="From URL to release confidence"
          description="SmartQA combines expert QA assessment, focused validation, and clear findings to help teams understand release risk and act with confidence."
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
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
