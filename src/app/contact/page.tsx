import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site-shell";
import { contactDetails } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Book a SmartQA consultation or send an inquiry about Qonductor, rollout services, and release confidence work.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the release risk."
        description="Use the form to outline where quality slows delivery, where coverage breaks down, or where reporting is missing. The next step is a scoped conversation, not a generic sales sequence."
        sectionClassName="min-h-[20rem] sm:min-h-[22rem] lg:min-h-[24rem]"
        contentClassName="py-12 sm:py-14 lg:py-16 xl:py-18"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card rounded-[2.25rem] p-8 sm:p-9">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Contact details
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-sand">
              Consultation first
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              SmartQA is optimized around qualified conversations with teams that
              need stronger QA systems, clearer release signal, or a Qonductor
              rollout discussion.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <div>{contactDetails.email}</div>
              <div>{contactDetails.location}</div>
            </div>
            <div className="surface-accent-card mt-8 rounded-[1.7rem] p-6">
              <p className="text-sm leading-8 text-muted">
                Booking integration can be connected next. For now, this form and
                the direct email route provide the primary conversion path.
              </p>
              <Link
                href="/qonductor"
                className="btn-secondary mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-sand transition"
              >
                Watch the Video
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}