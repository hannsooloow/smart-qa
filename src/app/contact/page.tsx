import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site-shell";
import { contactDetails } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Book a SmartQA consultation or send an inquiry about QA automation services and SmartQA Autopilot.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the QA bottleneck that is costing the team the most."
        description="Use the form to outline your release risk, automation gaps, or interest in SmartQA Autopilot. The next step is a scoped consultation, not a generic sales sequence."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
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
              need stronger automation systems, delivery confidence, or an
              Autopilot pilot discussion.
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
                href="mailto:hello@smartqa.pro"
                className="btn-secondary mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-sand transition"
              >
                Email SmartQA directly
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}