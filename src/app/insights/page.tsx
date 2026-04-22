import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { insightPosts } from "@/lib/site-data";

export const metadata = {
  title: "Insights",
  description:
    "Read SmartQA insights on QA automation, release confidence, CI/CD quality, and automation operations.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thoughtful QA content that supports buying decisions and technical credibility."
        description="The initial content strategy is service-led: each article reinforces SmartQA's authority in automation systems, release quality, CI/CD integration, and maintenance reality."
        primaryCta={{ href: "/contact", label: "Talk to SmartQA" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          eyebrow="Launch articles"
          title="Start with foundational content that qualifies buyers."
          description="These articles support SEO, internal linking, and credibility without turning the site into a generic traffic blog."
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