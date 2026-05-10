"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { useI18n } from "@/lib/i18n";

type CategoryFilter = "all" | "traditional" | "modern" | "raw";

export default function ProductsPageContent() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filters: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "traditional", label: "Traditional" },
    { value: "modern", label: "Modern" },
    { value: "raw", label: "Raw Materials" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pb-20 lg:pb-28">
      {/* Hero section */}
      <section className="bg-gradient-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
              {t.products.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
              {t.products.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cedar/80 sm:text-lg">
              {t.products.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5 ${
                  activeFilter === filter.value
                    ? "bg-ink text-rice"
                    : "bg-white text-cedar shadow-sm hover:bg-stonewash"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section className="mt-20 bg-stonewash px-4 py-16 sm:px-6 lg:mt-28 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
                OEM Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                Custom Manufacturing Solutions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cedar/80">
                We offer comprehensive OEM and private label services for brands looking to create their own line of moxa products. From custom formulations to tailored packaging designs, our experienced team can help bring your vision to life.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Custom formulation and blending",
                  "Private label and branded packaging",
                  "Flexible MOQ for new brands",
                  "Quality assurance and certification support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-cedar">
                    <svg className="h-5 w-5 shrink-0 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?type=oem"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-ink px-6 text-sm font-semibold text-rice transition-colors hover:bg-matcha"
              >
                Discuss OEM Requirements
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="OEM manufacturing and packaging"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-5 shadow-premium">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-ink">100+</p>
                    <p className="text-sm text-cedar/60">OEM Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:mt-28 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-rice sm:text-3xl">
            {t.cta.requestSamples}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-rice/70">
            Evaluate our products before placing bulk orders. Sample costs are often credited toward your first order.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?type=sample"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-matcha px-6 text-sm font-semibold text-rice transition-colors hover:bg-rice hover:text-ink sm:w-auto"
            >
              {t.cta.requestSamples}
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-rice/30 px-6 text-sm font-semibold text-rice transition-colors hover:bg-rice/10 sm:w-auto"
            >
              {t.cta.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
