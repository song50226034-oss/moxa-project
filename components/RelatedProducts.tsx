"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useI18n } from "@/lib/i18n";

type RelatedProductsProps = {
  products: Product[];
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const { t } = useI18n();

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const name = t.products[product.nameKey as keyof typeof t.products] || product.nameKey;
        const shortDesc = t.products[product.shortDescKey as keyof typeof t.products] || t.products[product.descriptionKey as keyof typeof t.products] || product.descriptionKey;

        return (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-premium"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-stonewash">
              <img
                src={product.image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-cedar backdrop-blur-sm">
                  {product.category === "traditional" ? "Traditional" : product.category === "modern" ? "Modern" : "Raw Material"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-ink">{name}</h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-cedar/70">
                {shortDesc}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-cedar/50">MOQ: {product.moq}</span>
                <span className="text-sm font-medium text-matcha group-hover:text-ink">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
