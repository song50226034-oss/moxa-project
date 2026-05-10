"use client";

import { useI18n } from "@/lib/i18n";

export default function MarketSection() {
  const { t } = useI18n();

  const markets = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      name: t.markets.japanClinics,
      description: t.markets.japanClinicsDesc,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      name: t.markets.westernWellness,
      description: t.markets.westernWellnessDesc,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      name: t.markets.asiaDistribution,
      description: t.markets.asiaDistributionDesc,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      name: t.markets.therapyCenters,
      description: t.markets.therapyCentersDesc,
    },
  ];

  return (
    <section className="bg-stonewash px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            {t.markets.tagline}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            {t.markets.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <article
              key={market.name}
              className="group relative overflow-hidden rounded-xl bg-rice p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-matcha/10 text-matcha transition-colors group-hover:bg-matcha group-hover:text-rice">
                {market.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink sm:text-xl">
                {market.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cedar/80">
                {market.description}
              </p>
              {/* Decorative corner */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-matcha/5 transition-transform group-hover:scale-150" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
