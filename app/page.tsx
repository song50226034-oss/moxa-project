import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";

export const metadata: Metadata = {
  title: "Traditional Eastern Wellness Solutions for Modern Clinics",
  description:
    "Reliable moxa sourcing from China's herbal production region for acupuncture clinics, wellness centers, and distribution partners.",
  keywords: [
    "moxa",
    "acupuncture",
    "clinic supply",
    "wellness",
    "China moxa sourcing",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketSection />
      <section className="bg-rice px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
              Supply Positioning
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              A focused sourcing partner for moxa-led wellness programs.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "China (Nanyang) herbal production access",
              "B2B export cooperation for clinic supply",
              "Stable sourcing for recurring product needs",
              "Wellness-market brand presentation",
            ].map((item) => (
              <div
                key={item}
                className="border-l border-matcha/40 bg-white/70 p-5 text-sm leading-7 text-cedar shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
