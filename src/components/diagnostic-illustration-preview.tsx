import Image from "next/image";
import type { CSSProperties } from "react";

type Annotation = {
  label: string;
  style: CSSProperties;
  tone?: "teal" | "amber" | "red" | "slate";
};

type IllustrationSpec = {
  id: string;
  title: string;
  src: string;
  emotion: string;
  hierarchy: string;
  compositionMap: string[];
  colorHierarchy: string[];
  desktopBehavior: string;
  mobileBehavior: string;
  svgApproach: string;
  focalLabel: string;
  focalRingClassName: string;
  annotations: Annotation[];
};

const illustrations: IllustrationSpec[] = [
  {
    id: "01",
    title: "Issues surface after release",
    src: "/smartqa-diagnostic-01.svg",
    emotion: "We missed something important.",
    hierarchy:
      "The calm checkpoint rhythm stays muted so the red rupture owns the first read, while the faint broken continuation lands as consequence rather than a second focal point.",
    compositionMap: [
      "Lower-third horizontal diagnostic path with five stable checkpoints.",
      "Failure burst anchored in the right live zone, not on the edge.",
      "Minimal post-failure debris and a broken continuation trace preserve the exposure story.",
    ],
    colorHierarchy: [
      "Neutral gray-blue path dominates area.",
      "Red-coral is reserved only for the rupture and immediate fallout.",
      "No teal so the story stays about exposed failure, not validated signal.",
    ],
    desktopBehavior:
      "The long path builds false confidence before the late-stage rupture interrupts the reading flow.",
    mobileBehavior:
      "The burst stays dominant while the path shortens naturally without pushing the focal event into the edge.",
    svgApproach:
      "Thin dashed path, restrained radial burst, localized red glow, and small debris marks on a transparent field.",
    focalLabel: "Failure burst",
    focalRingClassName: "right-[8%] top-[49%] h-18 w-18 rounded-full border border-[#FF7A7D]/65 shadow-[0_0_0_1px_rgba(255,122,125,0.16)]",
    annotations: [
      {
        label: "Stable path",
        tone: "slate",
        style: { left: "16%", top: "67%" },
      },
      {
        label: "Late rupture",
        tone: "red",
        style: { left: "73%", top: "30%" },
      },
      {
        label: "Broken continuation",
        tone: "slate",
        style: { left: "77%", top: "70%" },
      },
    ],
  },
  {
    id: "02",
    title: "Unclear release readiness",
    src: "/smartqa-diagnostic-02.svg",
    emotion: "We do not know enough.",
    hierarchy:
      "The incomplete upper confidence construct carries the first read, while lower hollow nodes and broken supports reinforce absence without turning into a chart.",
    compositionMap: [
      "Center-weighted partial confidence construct with vertical bias.",
      "Broken support traces and hollow nodes sit beneath the main unresolved state.",
      "Large quiet zones keep the illustration suspended rather than busy.",
    ],
    colorHierarchy: [
      "Slate and steel neutrals hold the structure.",
      "Muted amber marks the unresolved readiness edge.",
      "One tiny teal cue remains subordinate and never reads as confirmation.",
    ],
    desktopBehavior:
      "Two hollow-node anchors remain enough to suggest a readiness system without implying a dashboard panel.",
    mobileBehavior:
      "The upper unresolved construct stays centered while weaker ring fragments fall away first.",
    svgApproach:
      "Interrupted arcs, hollow nodes, dotted support fragments, and a restrained amber edge emphasis.",
    focalLabel: "Partial confidence construct",
    focalRingClassName: "left-1/2 top-[23%] h-22 w-22 -translate-x-1/2 rounded-full border border-[#F1B452]/60 shadow-[0_0_0_1px_rgba(241,180,82,0.14)]",
    annotations: [
      {
        label: "Incomplete ring",
        tone: "amber",
        style: { left: "56%", top: "18%" },
      },
      {
        label: "Broken supports",
        tone: "slate",
        style: { left: "22%", top: "66%" },
      },
      {
        label: "Hollow node",
        tone: "slate",
        style: { left: "62%", top: "76%" },
      },
    ],
  },
  {
    id: "03",
    title: "Automation lacks trust",
    src: "/smartqa-diagnostic-03.svg",
    emotion: "We cannot trust this signal.",
    hierarchy:
      "The warning state lands first, while the ghost echoes and drift cues stay quieter so the illustration reads as distrust rather than catastrophe.",
    compositionMap: [
      "Mid-band signal path with subtle degradation across the right half.",
      "Ghost echoes appear only near the unstable segment.",
      "Warning triangle closes the story without becoming an explosion.",
    ],
    colorHierarchy: [
      "Deep navy and ghost gray own most of the surface.",
      "Amber rises only in the final third and culminates in the warning.",
      "No red so the story remains degraded trust, not confirmed failure.",
    ],
    desktopBehavior:
      "The longer waveform gives the drift enough time to feel observed rather than decorative.",
    mobileBehavior:
      "The warning remains oversized slightly while intermediate instability compresses to one or two meaningful shifts.",
    svgApproach:
      "Thin signal stroke, low-opacity echoes, gradient handoff into amber, and a restrained outlined warning triangle.",
    focalLabel: "Warning state",
    focalRingClassName: "right-[6%] top-[42%] h-20 w-20 rounded-[1.4rem] border border-[#F2C65E]/62 shadow-[0_0_0_1px_rgba(242,198,94,0.15)]",
    annotations: [
      {
        label: "Observed drift",
        tone: "slate",
        style: { left: "22%", top: "62%" },
      },
      {
        label: "Ghost echoes",
        tone: "slate",
        style: { left: "45%", top: "28%" },
      },
      {
        label: "Amber warning",
        tone: "amber",
        style: { left: "71%", top: "18%" },
      },
    ],
  },
  {
    id: "04",
    title: "Visibility is fragmented",
    src: "/smartqa-diagnostic-04.svg",
    emotion: "We see pieces, but not the whole picture.",
    hierarchy:
      "The central observation point owns the first read, while the outer clusters and broken connectors reinforce separation rather than network structure.",
    compositionMap: [
      "A central observation point sits slightly off true center to create tension.",
      "Two asymmetric evidence clusters stay detached on the left and right.",
      "Broken inward paths imply correlation attempts without completing the system.",
    ],
    colorHierarchy: [
      "Deep navy and slate keep the field quiet.",
      "Muted cyan supports the fragment zones.",
      "Teal is reserved for the observation point and never floods the clusters.",
    ],
    desktopBehavior:
      "Three evidence regions remain enough to feel investigative without slipping into a topology diagram.",
    mobileBehavior:
      "The center observation point stays prominent while cluster detail reduces before spacing does.",
    svgApproach:
      "Concentric observation mark, small fragment clusters, partial dotted connectors, and subdued cyan support points.",
    focalLabel: "Observation point",
    focalRingClassName: "left-1/2 top-[46%] h-18 w-18 -translate-x-1/2 rounded-full border border-[#8DE7DA]/62 shadow-[0_0_0_1px_rgba(141,231,218,0.15)]",
    annotations: [
      {
        label: "Fragment cluster",
        tone: "slate",
        style: { left: "10%", top: "55%" },
      },
      {
        label: "Observation point",
        tone: "teal",
        style: { left: "50%", top: "20%", transform: "translateX(-50%)" },
      },
      {
        label: "Broken linkage",
        tone: "slate",
        style: { left: "68%", top: "63%" },
      },
    ],
  },
];

function toneClasses(tone: Annotation["tone"] = "slate") {
  if (tone === "teal") {
    return "border-[#2DD4BF]/30 bg-[#2DD4BF]/10 text-[#9CF2E6]";
  }

  if (tone === "amber") {
    return "border-[#F1B452]/32 bg-[#F1B452]/12 text-[#FFD68B]";
  }

  if (tone === "red") {
    return "border-[#FF7A7D]/30 bg-[#FF7A7D]/10 text-[#FFB6B7]";
  }

  return "border-white/10 bg-white/[0.04] text-slate-300";
}

function PreviewShell({
  children,
  className = "h-[19rem]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-[#425166]/52 bg-[#0B1220] shadow-[0_20px_44px_rgba(2,8,23,0.22)] ${className}`}>
      <div aria-hidden className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_38%)]" />
      <div aria-hidden className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] border border-white/[0.04]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function IllustrationStage({ src, alt, annotated = false, focalRingClassName, annotations }: { src: string; alt: string; annotated?: boolean; focalRingClassName?: string; annotations?: Annotation[]; }) {
  return (
    <PreviewShell>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.02),rgba(8,17,29,0.08))]" />
      <Image src={src} alt={alt} fill className="object-contain p-4" />
      {annotated ? (
        <>
          {focalRingClassName ? <div aria-hidden className={`pointer-events-none absolute ${focalRingClassName}`} /> : null}
          {annotations?.map((annotation) => (
            <span
              key={annotation.label}
              className={`pointer-events-none absolute inline-flex rounded-full border px-2.5 py-1 text-[0.64rem] font-medium tracking-[0.08em] uppercase ${toneClasses(annotation.tone)}`}
              style={annotation.style}
            >
              {annotation.label}
            </span>
          ))}
        </>
      ) : null}
    </PreviewShell>
  );
}

function MobileStage({ src, alt }: { src: string; alt: string }) {
  return (
    <PreviewShell className="mx-auto h-[14rem] max-w-[18rem]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.04),rgba(8,17,29,0.1))]" />
      <Image src={src} alt={alt} fill className="object-contain p-3.5" />
    </PreviewShell>
  );
}

export function DiagnosticIllustrationSystemPreview() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          SmartQA Diagnostic Illustration System v1
        </p>
        <h2 className="headline-balance mt-4 font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl lg:text-[3rem] lg:leading-[1.04]">
          Production-ready illustration-only assets for the Problem Recognition cards.
        </h2>
        <p className="copy-balance mt-5 max-w-2xl text-base leading-7 text-muted sm:text-[1.02rem] sm:leading-8">
          Each asset carries only the diagnostic story. The website card owns framing, copy, spacing, hierarchy, and responsiveness.
        </p>
      </div>

      <div className="space-y-10">
        {illustrations.map((illustration) => (
          <article
            key={illustration.id}
            className="rounded-[2rem] border border-[#1E293B]/90 bg-[#08111D]/84 p-5 shadow-[0_24px_60px_rgba(2,8,23,0.18)] sm:p-6 lg:p-7"
          >
            <div className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
              <div className="space-y-5">
                <div>
                  <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase">
                    Illustration {illustration.id}
                  </p>
                  <h3 className="mt-3 font-display text-[1.65rem] font-semibold tracking-tight text-sand sm:text-[1.9rem]">
                    {illustration.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300/76 sm:text-[0.97rem]">
                    Emotion target: {illustration.emotion}
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                  <div>
                    <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.18em] text-slate-300/78 uppercase">
                      Preview Render
                    </p>
                    <IllustrationStage src={illustration.src} alt={illustration.title} />
                    <p className="mt-3 text-sm leading-6 text-slate-300/72">
                      {illustration.desktopBehavior}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.18em] text-slate-300/78 uppercase">
                      Mobile Crop Simulation
                    </p>
                    <MobileStage src={illustration.src} alt={`${illustration.title} mobile simulation`} />
                    <p className="mt-3 text-sm leading-6 text-slate-300/72">
                      {illustration.mobileBehavior}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.18em] text-slate-300/78 uppercase">
                    Composition Map + Focal Annotation
                  </p>
                  <IllustrationStage
                    src={illustration.src}
                    alt={`${illustration.title} annotated composition map`}
                    annotated
                    focalRingClassName={illustration.focalRingClassName}
                    annotations={illustration.annotations}
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-white/8 bg-[#0B1220]/86 p-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                    Focal Point
                  </p>
                  <p className="mt-3 font-display text-[1.2rem] font-semibold tracking-tight text-sand">
                    {illustration.focalLabel}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300/74">
                    {illustration.hierarchy}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/8 bg-[#0B1220]/86 p-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                    Composition Map
                  </p>
                  <div className="mt-4 space-y-3">
                    {illustration.compositionMap.map((item) => (
                      <div key={item} className="rounded-[1rem] border border-white/8 bg-[#09111B]/74 px-3.5 py-3 text-sm leading-6 text-slate-200/78">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/8 bg-[#0B1220]/86 p-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                    Color + SVG Rules
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300/74">
                    {illustration.colorHierarchy.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    <p className="pt-2 text-slate-200/78">{illustration.svgApproach}</p>
                    <a href={illustration.src} className="inline-flex rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/8 px-3.5 py-1.5 text-[0.72rem] font-medium tracking-[0.08em] text-[#9CF2E6] uppercase">
                      View SVG Asset
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}