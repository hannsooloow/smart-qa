import { PageHero, SectionHeading } from "@/components/site-shell";
import { operatingPrinciples } from "@/lib/site-data";

export const metadata = {
  title: "Company",
  description:
    "Learn how SmartQA combines premium QA services, operational maturity, and proprietary internal delivery infrastructure.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="SmartQA is a quality engineering partner built around release confidence."
        description="SmartQA helps engineering teams strengthen coverage, sharpen QA signal, and improve release decisions through expert execution and proprietary internal delivery infrastructure."
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/#how-we-work", label: "Explore How We Work" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Operating philosophy"
          title="Built to make release decisions sharper."
          description="SmartQA exists for companies that do not want QA to stay manual, fragmented, or disconnected from how delivery actually works."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {operatingPrinciples.map((principle) => (
            <div key={principle} className="surface-card rounded-[1.7rem] p-7 text-sm leading-8 text-muted">
              {principle}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}