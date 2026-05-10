import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Moxa B2B Supply Inquiry",
  description:
    "Get in touch for moxa supply inquiries, sample requests, distributor partnerships, and OEM services. We respond within 24-48 hours.",
  keywords: [
    "moxa inquiry",
    "moxa supplier contact",
    "B2B moxa",
    "acupuncture supply inquiry",
    "wellness distribution",
    "OEM moxa",
  ],
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-rice" />}>
      <ContactPageContent />
    </Suspense>
  );
}
