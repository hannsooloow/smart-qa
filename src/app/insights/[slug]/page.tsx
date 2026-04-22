import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site-shell";
import { insightPosts } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = insightPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function InsightDetailPage({ params }: { params: Params }) {
  const post = insightPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
      />

      <article className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="surface-card rounded-[2.25rem] p-8 sm:p-10">
          <p className="text-lg leading-8 text-muted sm:text-[1.08rem]">{post.summary}</p>
          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-sand">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}