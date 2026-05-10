"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useI18n } from "@/lib/i18n";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useI18n();

  const name = t.products[product.nameKey as keyof typeof t.products] || product.nameKey;
  const shortDesc = t.products[product.shortDescKey as keyof typeof t.products] || t.products[product.descriptionKey as keyof typeof t.products] || product.descriptionKey;

  // Get first 3 key specifications for the card
  const keySpecs = product.specifications.slice(0, 3);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stonewash">
        <img
          src={product.image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-cedar backdrop-blur-sm">
            {product.category === "traditional" ? t.products.categoryTraditional : product.category === "modern" ? t.products.categoryModern : t.products.categoryRaw}
          </span>
        </div>

        {/* OEM badge */}
        {product.oemSupport && (
          <div className="absolute right-3 top-3">
            <span className="inline-flex rounded-full bg-matcha/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {t.products.oemAvailable}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-matcha">
          {t.products.tagline || "Moxa Supply"}
        </p>
        <h2 className="mt-2 text-lg font-semibold text-ink sm:text-xl">{name}</h2>
        
        {/* Short description / selling point */}
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-cedar/80">
          {shortDesc}
        </p>

        {/* Key Specifications */}
        <div className="mt-4 rounded-lg bg-stonewash/50 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-cedar/50">
            {t.products.keySpecs || "Key Specifications"}
          </p>
          <ul className="space-y-1">
            {keySpecs.map((spec, index) => (
              <li key={index} className="flex items-center justify-between text-xs">
                <span className="text-cedar/60">{spec.label}</span>
                <span className="font-medium text-cedar">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MOQ & Use case */}
        <div className="mt-4 flex items-center justify-between border-t border-cedar/10 pt-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-cedar/50">
              {t.products.moqLabel || "MOQ"}
            </p>
            <p className="mt-0.5 text-sm font-medium text-cedar">{product.moq}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-cedar/50">
              {t.products.useCase || "Use Case"}
            </p>
            <p className="mt-0.5 text-sm text-cedar">{product.use}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex gap-3">
          <Link
            href={`/products/${product.id}`}
            className="flex h-11 flex-1 items-center justify-center rounded-lg border border-cedar/20 text-sm font-semibold text-cedar transition-colors hover:border-ink hover:bg-ink hover:text-rice"
          >
            {t.products.viewDetails || "View Details"}
          </Link>
          <Link
            href={`/contact?product=${product.id}&type=sample`}
            className="flex h-11 flex-1 items-center justify-center rounded-lg bg-matcha text-sm font-semibold text-rice transition-colors hover:bg-ink"
          >
            {t.products.requestSample || "Request Sample"}
          </Link>
        </div>
      </div>
    </article>
  );
}
