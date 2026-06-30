import {
  ExecutiveDossier,
  ReleaseRiskEvidenceWall,
} from "@/components/homepage-story-assets";

export const metadata = {
  title: "Asset Preview",
  description: "Internal preview of homepage visual assets.",
};

export default function AssetPreviewPage() {
  return (
    <div className="grain min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            Internal Asset Preview
          </p>
          <h1 className="headline-balance mt-4 font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
            Homepage visual assets
          </h1>
          <p className="copy-balance mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Release Risk Evidence Wall and Executive Dossier previewed in isolation before homepage integration.
          </p>
        </div>

        <section className="mt-14">
          <ReleaseRiskEvidenceWall />
        </section>

        <section className="mt-20 border-t border-[#1E293B]/80 pt-20">
          <ExecutiveDossier />
        </section>
      </div>
    </div>
  );
}