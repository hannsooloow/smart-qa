import { PageHero, SectionHeading } from "@/components/site-shell";
import { operatingPrinciples } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Learn how SmartQA approaches automation QA, consulting, and platform-backed quality delivery for modern software teams.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SmartQA"
        title="Built for teams that need quality systems to scale with delivery."
        description="SmartQA exists for companies that do not want QA to be an afterthought, a manual bottleneck, or an unreliable layer in the release process."
        primaryCta={{ href: "/contact", label: "Start a conversation" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Operating philosophy"
          title="QA should make release decisions sharper, not slower."
          description="The SmartQA point of view combines automation leverage, workflow design, and technical pragmatism. That is how the service side and the future platform side stay aligned."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {operatingPrinciples.map((principle) => (
            <div
              key={principle}
              className="surface-card rounded-[1.7rem] p-7 text-sm leading-8 text-muted"
            >
              {principle}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}