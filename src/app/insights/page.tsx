import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { insightPosts } from "@/lib/site-data";

export const metadata = {
  title: "Insights",
  description:
    "Read SmartQA insights on release confidence, quality engineering, automation strategy, and reporting quality.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical insight for teams improving release confidence."
        description="Each article reinforces SmartQA's perspective on automation strategy, release readiness, reporting quality, and the operating discipline behind strong QA systems."
        primaryCta={{ href: "/services", label: "Explore Services" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Launch articles"
          title="Start with the issues that most often weaken release confidence."
          description="These articles help engineering and product leaders think more clearly about automation, validation, and the signal they use to ship."
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
              <h2 className="mt-4 text-2xl font-semibold text-sand">{post.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}