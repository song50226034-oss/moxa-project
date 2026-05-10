import { Metadata } from "next";
import { notFound } from "next/navigation";
import products, { getProductById } from "@/data/products";
import ProductDetailContent from "./ProductDetailContent";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.nameKey} | Premium Moxa Products`,
    description: `Professional ${product.nameKey} for ${product.use}. MOQ: ${product.moq}. OEM and private label available.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
