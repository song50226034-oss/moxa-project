"use client";

import { useI18n } from "@/lib/i18n";

export default function AdvantagesSection() {
  const { t } = useI18n();

  const advantages = [
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t.advantages.nanyangAccess,
      description: t.advantages.nanyangAccessDesc,
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t.advantages.qualityAssurance,
      description: t.advantages.qualityAssuranceDesc,
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t.advantages.oemCapability,
      description: t.advantages.oemCapabilityDesc,
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.advantages.globalShipping,
      description: t.advantages.globalShippingDesc,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-rice px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-matcha/3" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
              {t.advantages.tagline}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {t.advantages.title}
            </h2>
            <div className="mt-8 space-y-6">
              {advantages.slice(0, 2).map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-matcha/10 text-matcha">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{adv.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cedar/80">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {advantages.slice(2).map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-matcha/10 text-matcha">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{adv.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cedar/80">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-xl border border-cedar/10 bg-white/50 p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-matcha sm:text-3xl">10+</p>
                <p className="mt-1 text-xs text-cedar/70 sm:text-sm">{t.stats.yearsExperienceLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-matcha sm:text-3xl">20+</p>
                <p className="mt-1 text-xs text-cedar/70 sm:text-sm">{t.stats.exportCountriesLabel}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-matcha sm:text-3xl">500+</p>
                <p className="mt-1 text-xs text-cedar/70 sm:text-sm">{t.stats.b2bPartnersLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
