"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const heroImage =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-matcha/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-2xl animate-fade-in">
            <p className="inline-flex items-center rounded-full border border-matcha/20 bg-matcha/5 px-4 py-1.5 text-sm font-medium text-matcha">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-matcha" aria-hidden="true" />
              {t.hero.tagline}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-cedar/80 sm:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-ink px-6 text-sm font-semibold text-rice transition-all hover:bg-matcha hover:shadow-lg sm:h-14 sm:px-8 sm:text-base"
              >
                {t.hero.viewProducts}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-cedar/20 bg-white px-6 text-sm font-semibold text-ink transition-all hover:border-matcha hover:bg-matcha/5 hover:text-matcha sm:h-14 sm:px-8 sm:text-base"
              >
                {t.hero.requestSamples}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-cedar/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-matcha/10">
                  <svg className="h-5 w-5 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-cedar">{t.stats.isoCertified}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-matcha/10">
                  <svg className="h-5 w-5 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-cedar">{t.stats.countriesServed}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-matcha/10">
                  <svg className="h-5 w-5 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-cedar">{t.stats.yearsExperience}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium lg:aspect-square">
              <img
                src={heroImage}
                alt="Traditional wellness therapy with moxa products"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-matcha">
                  Nanyang, China
                </p>
                <p className="mt-1 text-sm font-medium text-ink sm:text-base">
                  {t.hero.brandMessage.substring(0, 80)}...
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-matcha/20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
