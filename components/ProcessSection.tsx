"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function ProcessSection() {
  const { t } = useI18n();

  const steps = [
    {
      number: "01",
      title: t.process.step1,
      description: t.process.step1Desc,
    },
    {
      number: "02",
      title: t.process.step2,
      description: t.process.step2Desc,
    },
    {
      number: "03",
      title: t.process.step3,
      description: t.process.step3Desc,
    },
    {
      number: "04",
      title: t.process.step4,
      description: t.process.step4Desc,
    },
    {
      number: "05",
      title: t.process.step5,
      description: t.process.step5Desc,
    },
  ];

  return (
    <section className="bg-ink px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            {t.process.tagline}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-rice sm:text-4xl lg:text-5xl">
            {t.process.title}
          </h2>
        </div>

        {/* Process steps */}
        <div className="mt-16">
          {/* Desktop layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-matcha/30 to-transparent" aria-hidden="true" />

              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-matcha bg-ink text-xl font-bold text-matcha">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-rice">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-rice/60">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="absolute right-0 top-8 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 border-r border-t border-matcha/30" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="space-y-6 lg:hidden">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-4">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 h-[calc(100%+1.5rem)] w-px bg-matcha/20" aria-hidden="true" />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-matcha bg-ink text-lg font-bold text-matcha">
                  {step.number}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-rice">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-rice/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-matcha px-8 text-sm font-semibold text-rice transition-all hover:bg-rice hover:text-ink sm:h-14 sm:text-base"
          >
            {t.cta.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
}
