import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export const metadata: Metadata = {
  title: "Moxa Products for Clinics and Wellness Supply",
  description:
    "Explore moxa sticks, smokeless moxibustion devices, moxa boxes, and moxa wool for clinic, spa, therapy, and OEM supply.",
  keywords: [
    "moxa products",
    "acupuncture clinic supply",
    "moxibustion device",
    "wellness supply",
  ],
};

export default function ProductsPage() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            Product Range
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Moxa supply options for clinical and wellness channels.
          </h1>
          <p className="mt-5 text-base leading-8 text-cedar/80">
            A concise product range for acupuncture clinics, therapy centers,
            SPA operators, distributors, and OEM processing needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
