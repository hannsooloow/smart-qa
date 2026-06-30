import type { ReactNode } from "react";

function joinClasses(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export type SeverityLevel = "critical" | "high" | "needs-review" | "healthy";
export type MarkerTone = "critical" | "warning" | "accent" | "muted";

export type EvidenceFinding = {
  title: string;
  detail?: string;
  severity: SeverityLevel;
  marker?: string;
};

export type EvidenceStripItem = {
  label: string;
  value: string;
};

export type DossierLayer = {
  label: string;
  title: string;
  summary: string;
  highlights: string[];
};

const severityStyles: Record<SeverityLevel, string> = {
  critical:
    "border-[#F87171]/28 bg-[#F87171]/10 text-[#FCA5A5] shadow-[0_0_0_1px_rgba(248,113,113,0.06)]",
  high:
    "border-[#F59E0B]/28 bg-[#F59E0B]/10 text-[#FCD34D] shadow-[0_0_0_1px_rgba(245,158,11,0.06)]",
  "needs-review":
    "border-[#FACC15]/24 bg-[#FACC15]/10 text-[#FDE047] shadow-[0_0_0_1px_rgba(250,204,21,0.05)]",
  healthy:
    "border-[#2DD4BF]/24 bg-[#2DD4BF]/10 text-[#7DE7D6] shadow-[0_0_0_1px_rgba(45,212,191,0.05)]",
};

const markerStyles: Record<MarkerTone, string> = {
  critical: "border-[#F87171]/34 bg-[#F87171]/14 text-[#FCA5A5]",
  warning: "border-[#F59E0B]/30 bg-[#F59E0B]/12 text-[#FCD34D]",
  accent: "border-[#2DD4BF]/28 bg-[#2DD4BF]/12 text-[#7DE7D6]",
  muted: "border-white/10 bg-white/[0.04] text-slate-300",
};

export function MicroLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={joinClasses(
        "inline-flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.22em] text-slate-300/72 uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SeverityChip({
  level,
  className,
}: {
  level: SeverityLevel;
  className?: string;
}) {
  const labels: Record<SeverityLevel, string> = {
    critical: "Critical",
    high: "High Exposure",
    "needs-review": "Needs Review",
    healthy: "Healthy",
  };

  return (
    <span
      className={joinClasses(
        "inline-flex rounded-full border px-3 py-1 text-[0.66rem] font-medium tracking-[0.06em] uppercase",
        severityStyles[level],
        className,
      )}
    >
      {labels[level]}
    </span>
  );
}

export function EvidenceMarker({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: MarkerTone;
  className?: string;
}) {
  return (
    <span
      className={joinClasses(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.64rem] font-medium tracking-[0.08em] uppercase",
        markerStyles[tone],
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function FramedSurface({
  children,
  className,
  glow = "accent",
}: {
  children: ReactNode;
  className?: string;
  glow?: "accent" | "critical" | "warning" | "none";
}) {
  const glowClass =
    glow === "accent"
      ? "bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.14),transparent_34%)]"
      : glow === "critical"
        ? "bg-[radial-gradient(circle_at_top_right,rgba(248,113,113,0.14),transparent_34%)]"
        : glow === "warning"
          ? "bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_34%)]"
          : "";

  return (
    <div
      className={joinClasses(
        "surface-card-strong relative overflow-hidden rounded-[1.6rem] border border-[#425166]/54 p-5 sm:p-6",
        className,
      )}
    >
      <div aria-hidden className={joinClasses("absolute inset-0", glowClass)} />
      <div
        aria-hidden
        className="absolute inset-x-[8%] top-0 h-16 rounded-full bg-white/[0.05] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-[1px] rounded-[1.5rem] border border-white/[0.05]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function DossierDocument({
  label,
  title,
  summary,
  highlights,
  className,
  emphasis = "primary",
}: DossierLayer & {
  className?: string;
  emphasis?: "primary" | "secondary" | "tertiary";
}) {
  return (
    <FramedSurface
      glow={emphasis === "primary" ? "accent" : emphasis === "secondary" ? "warning" : "none"}
      className={joinClasses(
        "rounded-[1.45rem] border-[#506075]/52 p-4 sm:p-5",
        emphasis === "tertiary" ? "opacity-78" : emphasis === "secondary" ? "opacity-90" : "",
        className,
      )}
    >
      <MicroLabel>{label}</MicroLabel>
      <div className="mt-3 space-y-2.5">
        <h3 className={joinClasses(
          "font-display font-semibold tracking-tight text-sand",
          emphasis === "primary" ? "text-[1.25rem] leading-6 sm:text-[1.45rem]" : "text-base leading-5 sm:text-lg",
        )}>
          {title}
        </h3>
        <p className="max-w-[26rem] text-sm leading-6 text-slate-300/74">{summary}</p>
      </div>
      <div className="mt-4 space-y-2.5">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-[1rem] border border-white/8 bg-[#0A111B]/76 px-3.5 py-2.5 text-[0.78rem] leading-5 text-slate-200/82"
          >
            {item}
          </div>
        ))}
      </div>
    </FramedSurface>
  );
}

function EvidenceSupportPanel({
  label,
  title,
  items,
  tone = "accent",
}: {
  label: string;
  title: string;
  items: string[];
  tone?: MarkerTone;
}) {
  const hasItems = items.length > 0;

  return (
    <FramedSurface className="h-full border-white/[0.09] p-4.5 sm:p-5" glow="none">
      <MicroLabel>{label}</MicroLabel>
      <h3 className="mt-3 max-w-[20rem] font-display text-[1rem] font-semibold tracking-tight text-sand/94 sm:text-[1.08rem]">
        {title}
      </h3>
      <div className="mt-4 space-y-2">
        {hasItems ? (
          items.map((item, index) => (
            <div
              key={item}
              className={joinClasses(
                "border-white/7 px-0 py-2.5 text-[0.9rem] leading-6 text-slate-200/76",
                index < items.length - 1 ? "border-b" : "",
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={joinClasses(
                    "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full",
                    tone === "critical"
                      ? "bg-[#F87171]"
                      : tone === "warning"
                        ? "bg-[#F59E0B]"
                        : "bg-[#2DD4BF]",
                  )}
                />
                <span>{item}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[1rem] border border-dashed border-white/10 bg-[#09111B]/44 px-3.5 py-4 text-sm leading-6 text-muted">
            No supporting evidence loaded yet.
          </div>
        )}
      </div>
    </FramedSurface>
  );
}

export function ReleaseRiskEvidenceWall({
  label = "Release Risk Evidence",
  headline = "Checkout recovery remains the highest release-confidence risk.",
  context = "Observed across retry states, fallback handling, and session recovery before ship.",
  findings = defaultFindings,
  weakAreas = defaultWeakAreas,
  implications = defaultImplications,
  stripItems = defaultStripItems,
  className,
}: {
  label?: string;
  headline?: string;
  context?: string;
  findings?: EvidenceFinding[];
  weakAreas?: string[];
  implications?: string[];
  stripItems?: EvidenceStripItem[];
  className?: string;
}) {
  const renderedFindings = findings.length > 0 ? findings : emptyFindings;
  const renderedStrip = stripItems.length > 0 ? stripItems : emptyStripItems;

  return (
    <div className={joinClasses("space-y-5", className)}>
      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.95fr]">
        <FramedSurface className="min-h-[29rem] p-5 sm:min-h-[31rem] sm:p-6 lg:p-7" glow="critical">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-[32rem]">
              <MicroLabel>{label}</MicroLabel>
              <h3 className="mt-3 font-display text-[1.6rem] font-semibold tracking-tight text-sand sm:text-[1.9rem] lg:text-[2.15rem] lg:leading-[1.08]">
                {headline}
              </h3>
              <p className="mt-3 max-w-[28rem] text-sm leading-6 text-slate-300/76 sm:text-[0.98rem]">
                {context}
              </p>
            </div>
            <SeverityChip level="critical" className="shrink-0" />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[1.2rem] border border-white/8 bg-[#09111B]/72 p-4 sm:p-5">
              <MicroLabel>Critical Findings</MicroLabel>
              <div className="mt-4 space-y-3">
                {renderedFindings.map((finding) => (
                  <div
                    key={finding.title}
                    className="rounded-[1rem] border border-white/8 bg-[#0B1220]/86 px-3.5 py-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-slate-100 sm:text-[0.96rem]">
                          {finding.title}
                        </div>
                        <div className="mt-1 text-[0.78rem] leading-5 text-slate-300/68 sm:text-[0.8rem]">
                          {finding.detail ?? "Evidence captured against a release-critical user flow."}
                        </div>
                      </div>
                      <SeverityChip level={finding.severity} className="shrink-0" />
                    </div>
                    {finding.marker ? (
                      <div className="mt-3 text-[0.72rem] font-medium tracking-[0.1em] text-slate-400/76 uppercase">
                        {finding.marker}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-white/8 bg-[#09111B]/66 p-4 sm:p-5">
              <MicroLabel>Affected Journeys</MicroLabel>
              <div className="mt-4 space-y-2.5">
                {[
                  { journey: "Checkout Recovery", state: "Weak coverage in retry and fallback states", level: "critical" as SeverityLevel },
                  { journey: "Account Confirmation", state: "Resend logic still needs review", level: "needs-review" as SeverityLevel },
                  { journey: "Session Fallback", state: "Recovery path remains highly exposed", level: "high" as SeverityLevel },
                ].map((item) => (
                  <div
                    key={item.journey}
                    className="rounded-[1rem] border border-white/8 bg-[#0B1220]/82 px-3.5 py-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={joinClasses(
                          "mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full",
                          item.level === "critical"
                            ? "bg-[#F87171]"
                            : item.level === "high"
                              ? "bg-[#F59E0B]"
                              : "bg-[#FACC15]",
                        )}
                      />
                      <div>
                        <div className="text-sm font-medium text-slate-100">{item.journey}</div>
                        <div className="mt-1 text-[0.8rem] leading-5 text-slate-300/68">
                          {item.state}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.15rem] border border-white/8 bg-[#08101A]/78 px-4 py-3.5 text-sm leading-6 text-slate-300/74 sm:px-5">
            Release implication: high-risk journeys still carry visible exposure before ship, reducing confidence in checkout recovery and account access flows.
          </div>
        </FramedSurface>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <EvidenceSupportPanel
            label="Exposed Weak Areas"
            title="Coverage is uneven in the paths most likely to break under pressure."
            items={weakAreas}
            tone="warning"
          />
          <EvidenceSupportPanel
            label="Release Implications"
            title="The risk is not just technical. It affects release confidence and decision quality."
            items={implications}
            tone="critical"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {renderedStrip.map((item) => (
          <FramedSurface key={item.label} className="rounded-[1.2rem] p-4 sm:p-4.5" glow="none">
            <MicroLabel>{item.label}</MicroLabel>
            <div className="mt-3 text-sm leading-6 text-slate-100/88">{item.value}</div>
          </FramedSurface>
        ))}
      </div>
    </div>
  );
}

export function ExecutiveDossier({
  label = "Executive Dossier",
  title = "A premium package built for release decisions, not admin handoff.",
  summary = "SmartQA turns exposed risk into an executive-ready package that clarifies what matters, what failed, and what to do next.",
  layers = defaultDossierLayers,
  className,
}: {
  label?: string;
  title?: string;
  summary?: string;
  layers?: DossierLayer[];
  className?: string;
}) {
  const [primary, secondary, tertiary] = layers.length > 0 ? layers : defaultDossierLayers;

  return (
    <div className={joinClasses("grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center", className)}>
      <div className="max-w-[30rem]">
        <MicroLabel>{label}</MicroLabel>
        <h3 className="mt-4 font-display text-[1.8rem] font-semibold tracking-tight text-sand sm:text-[2.15rem] lg:text-[2.5rem] lg:leading-[1.08]">
          {title}
        </h3>
        <p className="mt-4 max-w-[26rem] text-sm leading-7 text-slate-300/76 sm:text-base">
          {summary}
        </p>
        <div className="mt-6 divide-y divide-white/8 border-y border-white/8">
          {layers.map((layer) => (
            <div key={layer.label} className="py-3.5 first:pt-0 last:pb-0">
              <div className="text-[0.72rem] font-semibold tracking-[0.16em] text-slate-400/76 uppercase">
                {layer.label}
              </div>
              <div className="mt-1.5 text-sm leading-6 text-slate-300/74">{layer.summary}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[45rem] px-3 py-6 sm:px-5 lg:px-8 xl:px-10">
        <div
          aria-hidden
          className="absolute inset-x-[10%] top-[6%] h-16 rounded-full bg-white/[0.05] blur-[72px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[18%] bottom-[12%] h-20 rounded-full bg-[#2DD4BF]/18 blur-[88px]"
        />
        <div className="relative h-[26rem] sm:h-[31rem] lg:h-[35rem]">
          <div className="absolute left-[8%] top-[16%] w-[70%] opacity-58 saturate-50 sm:left-[9%] sm:top-[12%] sm:w-[66%] lg:left-[10%] lg:top-[10%] lg:w-[60%]">
            <DossierDocument {...tertiary} emphasis="tertiary" />
          </div>
          <div className="absolute right-[4%] top-[9%] w-[73%] opacity-76 saturate-75 sm:right-[5%] sm:top-[7%] sm:w-[69%] lg:right-[7%] lg:top-[5%] lg:w-[64%]">
            <DossierDocument {...secondary} emphasis="secondary" />
          </div>
          <div className="absolute left-1/2 top-[27%] z-20 w-[88%] -translate-x-1/2 sm:top-[22%] sm:w-[84%] lg:top-[18%] lg:w-[76%]">
            <DossierDocument {...primary} emphasis="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultFindings: EvidenceFinding[] = [
  {
    title: "Checkout retry path fails after payment decline",
    detail: "Observed across the fallback branch used during recovery from failed card attempts.",
    severity: "critical",
    marker: "Retry failure observed",
  },
  {
    title: "Password reset confirmation becomes inconsistent",
    detail: "State handling weakens after resend conditions and creates user-facing uncertainty.",
    severity: "high",
    marker: "Confirmation flow exposed",
  },
  {
    title: "Cart recovery loses state on refresh",
    detail: "Coverage does not fully protect the session restoration path before release.",
    severity: "needs-review",
    marker: "Fallback branch uncovered",
  },
];

const defaultWeakAreas = [
  "Checkout recovery remains under-protected in retry and fallback paths.",
  "Account confirmation logic still weakens under resend conditions.",
  "Session persistence flows carry visible confidence gaps before ship.",
];

const defaultImplications = [
  "Release decisions still depend on incomplete confidence in critical user journeys.",
  "User-facing recovery failures remain possible during payment and account access scenarios.",
  "Further release velocity increases risk until these exposed areas are reinforced.",
];

const defaultStripItems: EvidenceStripItem[] = [
  {
    label: "Observed Issue",
    value: "Critical recovery paths expose failures after edge-case payment and confirmation states.",
  },
  {
    label: "Affected Journey",
    value: "Checkout recovery, account confirmation, and cart persistence remain the most exposed.",
  },
  {
    label: "Release Implication",
    value: "Confidence in high-value user journeys remains reduced before the next ship window.",
  },
];

const emptyFindings: EvidenceFinding[] = [
  {
    title: "No findings loaded yet",
    detail: "Connect release evidence data to show ranked issues and severity context here.",
    severity: "healthy",
    marker: "Awaiting evidence",
  },
];

const emptyStripItems: EvidenceStripItem[] = [
  {
    label: "Observed Issue",
    value: "Evidence has not been loaded into this asset yet.",
  },
  {
    label: "Affected Journey",
    value: "Add critical flows to surface journey-level exposure.",
  },
  {
    label: "Release Implication",
    value: "Use this strip to connect findings to release confidence and action.",
  },
];

const defaultDossierLayers: DossierLayer[] = [
  {
    label: "Risk Assessment",
    title: "Release confidence is weakest in checkout recovery and account access.",
    summary: "Decision-ready assessment of where release exposure remains highest before ship.",
    highlights: [
      "Priority areas: checkout retry, account confirmation, session persistence",
      "Confidence signal: high exposure remains in critical user paths",
      "Next focus: reinforce recovery coverage before the release window",
    ],
  },
  {
    label: "Findings Report",
    title: "Ranked findings with severity and evidence context.",
    summary: "Curated issue record showing what failed, where it surfaced, and how it affects release confidence.",
    highlights: [
      "Checkout retry path fails after decline",
      "Confirmation state becomes inconsistent under resend",
      "Cart recovery loses state during refresh",
    ],
  },
  {
    label: "Recommendations Brief",
    title: "Practical next actions sequenced by release impact.",
    summary: "Focused recommendations that help the team reduce risk fastest before release.",
    highlights: [
      "Reinforce checkout recovery validation first",
      "Stabilize confirmation-state handling next",
      "Close session persistence gaps before sign-off",
    ],
  },
];