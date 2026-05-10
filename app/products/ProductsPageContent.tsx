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
    { value: "all", label: t.products.filterAll || "All Products" },
    { value: "traditional", label: t.products.categoryTraditional || "Traditional" },
    { value: "modern", label: t.products.categoryModern || "Modern" },
    { value: "raw", label: t.products.categoryRaw || "Raw Materials" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const productCount = {
    all: products.length,
    traditional: products.filter((p) => p.category === "traditional").length,
    modern: products.filter((p) => p.category === "modern").length,
    raw: products.filter((p) => p.category === "raw").length,
  };

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
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5 ${
                  activeFilter === filter.value
                    ? "bg-ink text-rice"
                    : "bg-white text-cedar shadow-sm hover:bg-stonewash"
                }`}
              >
                {filter.label}
                <span
                  className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs ${
                    activeFilter === filter.value
                      ? "bg-rice/20 text-rice"
                      : "bg-stonewash text-cedar/60"
                  }`}
                >
                  {productCount[filter.value]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-stonewash px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center justify-center gap-3 rounded-lg bg-stonewash/30 px-4 py-3 sm:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-ink">{t.products.isoCertified}</p>
                <p className="text-cedar/60">{t.products.qualityAssured}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-stonewash/30 px-4 py-3 sm:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-ink">{t.products.oemReady}</p>
                <p className="text-cedar/60">{t.products.privateLabel}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-stonewash/30 px-4 py-3 sm:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-ink">{t.products.globalShipping}</p>
                <p className="text-cedar/60">{t.products.countriesServed}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-stonewash/30 px-4 py-3 sm:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-ink">{t.products.freeSamples}</p>
                <p className="text-cedar/60">{t.products.creditedToOrder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-cedar/60">
              {t.products.showingProducts} <span className="font-medium text-ink">{filteredProducts.length}</span>
            </p>
          </div>
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
                {t.products.oemServices}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                {t.products.oemSectionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cedar/80">
                {t.products.oemSectionDesc}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  t.products.oemItem1,
                  t.products.oemItem2,
                  t.products.oemItem3,
                  t.products.oemItem4,
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
                {t.products.discussOem}
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-premium">
                <img
                  src="/images/products/moxa-wool-main.jpg"
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
                    <p className="text-sm text-cedar/60">{t.products.oemClients}</p>
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
            {t.products.sampleCtaDesc}
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
