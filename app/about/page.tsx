import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About China Moxa Sourcing",
  description:
    "Learn about China Nanyang moxa supply chain advantages, B2B export cooperation, stable supply, and global clinic support.",
  keywords: [
    "moxa",
    "Nanyang moxa",
    "acupuncture",
    "clinic supply",
    "wellness",
  ],
};

const points = [
  "China (Nanyang) moxa supply chain advantage",
  "B2B export cooperation",
  "Stable supply capability",
  "Wellness industry positioning",
  "Global clinic support",
];

export default function AboutPage() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            About
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            China-based moxa sourcing and wellness supply partner.
          </h1>
          <p className="mt-6 text-base leading-8 text-cedar/80">
            We connect global wellness businesses with moxa product resources
            from China's herbal production regions, with a focus on clinical
            credibility, reliable supply, and long-term B2B cooperation.
          </p>
        </div>

        <div className="bg-white/80 p-6 shadow-soft sm:p-8">
          <div className="grid gap-4">
            {points.map((point, index) => (
              <div
                key={point}
                className="flex gap-4 border-b border-cedar/10 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stonewash text-sm font-semibold text-matcha">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-base leading-7 text-cedar">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
