"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const heroImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80";
const manufacturingImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";

export default function AboutPageContent() {
  const { t } = useI18n();

  const points = [
    t.about.point1,
    t.about.point2,
    t.about.point3,
    t.about.point4,
    t.about.point5,
  ];

  const timeline = [
    { year: "2010", event: "Company founded in Nanyang" },
    { year: "2014", event: "ISO 9001 certification achieved" },
    { year: "2016", event: "Expanded to international markets" },
    { year: "2018", event: "OEM services launched" },
    { year: "2020", event: "20+ export countries reached" },
    { year: "2024", event: "500+ global B2B partners" },
  ];

  return (
    <div className="pb-20 lg:pb-28">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
                {t.about.tagline}
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
                {t.about.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-cedar/80">
                {t.about.subtitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cedar/70">
                {t.about.story}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={heroImage}
                  alt="Nanyang landscape - moxa production region"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-matcha/20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Why Partner With Us
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {points.map((point, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-xl bg-stonewash p-6 text-center transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-matcha/10 text-lg font-bold text-matcha transition-colors group-hover:bg-matcha group-hover:text-rice">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-cedar">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing section */}
      <section className="bg-stonewash px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={manufacturingImage}
                  alt="Manufacturing facility"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Certifications */}
              <div className="mt-6 flex flex-wrap gap-3">
                {["ISO 9001", "GMP Certified", "FDA Registered"].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center rounded-full border border-cedar/20 bg-white px-4 py-2 text-sm font-medium text-cedar"
                  >
                    <svg className="mr-2 h-4 w-4 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
                Production
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                {t.about.manufacturingTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cedar/80">
                {t.about.manufacturingDesc}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-5 shadow-card">
                  <p className="text-3xl font-bold text-matcha">50,000+</p>
                  <p className="mt-1 text-sm text-cedar/60">Sq. Meters Facility</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-card">
                  <p className="text-3xl font-bold text-matcha">200+</p>
                  <p className="mt-1 text-sm text-cedar/60">Skilled Workers</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-card">
                  <p className="text-3xl font-bold text-matcha">5M+</p>
                  <p className="mt-1 text-sm text-cedar/60">Units/Year Capacity</p>
                </div>
                <div className="rounded-xl bg-white p-5 shadow-card">
                  <p className="text-3xl font-bold text-matcha">99.5%</p>
                  <p className="mt-1 text-sm text-cedar/60">Quality Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
              Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              Milestones
            </h2>
          </div>

          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-cedar/10 sm:left-1/2" aria-hidden="true" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 sm:gap-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-matcha sm:left-1/2 sm:-ml-2">
                    <div className="h-2 w-2 rounded-full bg-rice" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div className="inline-block rounded-xl bg-stonewash p-4 sm:p-5">
                      <p className="text-lg font-bold text-matcha">{item.year}</p>
                      <p className="mt-1 text-sm text-cedar">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-matcha px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-rice sm:text-3xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-rice/80">
            Join 500+ global B2B partners who trust us for their moxa sourcing needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-rice px-6 text-sm font-semibold text-matcha transition-colors hover:bg-ink hover:text-rice sm:w-auto"
            >
              {t.cta.contactUs}
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-rice/30 px-6 text-sm font-semibold text-rice transition-colors hover:bg-rice/10 sm:w-auto"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
