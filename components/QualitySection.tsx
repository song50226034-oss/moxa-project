"use client";

import { useI18n } from "@/lib/i18n";

const qualityImage = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80";

export default function QualitySection() {
  const { t } = useI18n();

  const items = [
    t.quality.item1,
    t.quality.item2,
    t.quality.item3,
    t.quality.item4,
  ];

  return (
    <section className="bg-stonewash px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
              <img
                src={qualityImage}
                alt="Quality control and manufacturing facility"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-matcha/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-premium sm:-bottom-6 sm:-right-6 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-matcha text-rice">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-cedar/60">Certified</p>
                <p className="text-lg font-bold text-ink">ISO 9001</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
              {t.quality.tagline}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {t.quality.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cedar/80 sm:text-lg">
              {t.quality.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl bg-rice p-4 shadow-card"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-ink sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
