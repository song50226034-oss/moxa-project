import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex min-h-64 flex-col justify-between bg-white p-6 shadow-soft ring-1 ring-cedar/10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-matcha">
          Moxa Supply
        </p>
        <h2 className="mt-4 text-xl font-semibold text-ink">{product.name}</h2>
        <p className="mt-4 text-sm leading-7 text-cedar/80">
          {product.description}
        </p>
      </div>
      <div className="mt-8 border-t border-cedar/10 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cedar/50">
          Use Case
        </p>
        <p className="mt-2 text-sm text-cedar">{product.use}</p>
      </div>
    </article>
  );
}
