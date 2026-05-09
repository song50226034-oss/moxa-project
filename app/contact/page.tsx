import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact for Moxa B2B Supply",
  description:
    "Send a B2B inquiry for moxa clinic supply, acupuncture wellness products, and distribution cooperation.",
  keywords: [
    "moxa contact",
    "acupuncture supply inquiry",
    "clinic supply",
    "wellness distribution",
  ],
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Start a sourcing conversation.
          </h1>
          <p className="mt-6 text-base leading-8 text-cedar/80">
            Share your market, product interest, and expected cooperation model.
            We will review clinic supply, distribution, and OEM needs.
          </p>
          <div className="mt-8 border-l border-matcha bg-white/70 p-5 text-sm text-cedar shadow-sm">
            contact@yourbrand.com
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
