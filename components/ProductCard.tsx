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
  const description = t.products[product.descriptionKey as keyof typeof t.products] || product.descriptionKey;
  const spec = t.products[product.specKey as keyof typeof t.products] || product.specKey;

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
            {product.category === "traditional" ? "Traditional" : product.category === "modern" ? "Modern" : "Raw Material"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-matcha">
          Moxa Supply
        </p>
        <h2 className="mt-2 text-lg font-semibold text-ink sm:text-xl">{name}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cedar/80">
          {description}
        </p>

        {/* Specs */}
        <div className="mt-4 rounded-lg bg-stonewash/50 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cedar/50">
            {t.products.specifications}
          </p>
          <p className="mt-1 text-xs text-cedar/70">{spec}</p>
        </div>

        {/* Use case */}
        <div className="mt-4 border-t border-cedar/10 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cedar/50">
            {t.products.useCase}
          </p>
          <p className="mt-1 text-sm text-cedar">{product.use}</p>
        </div>

        {/* CTA */}
        <Link
          href={`/contact?product=${product.id}`}
          className="mt-5 flex h-11 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-rice transition-colors hover:bg-matcha"
        >
          {t.products.inquireNow}
        </Link>
      </div>
    </article>
  );
}
