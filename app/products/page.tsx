import type { Metadata } from "next";
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Premium Moxa Products | Moxa Sticks, Smokeless Devices, OEM Supply",
  description:
    "Explore our comprehensive range of moxa products including traditional moxa sticks, smokeless moxibustion devices, moxa boxes, pure moxa wool, and more. Premium quality for acupuncture clinics, wellness centers, and distributors.",
  keywords: [
    "moxa products",
    "moxa sticks",
    "smokeless moxibustion",
    "moxa box",
    "moxa wool",
    "moxa cones",
    "acupuncture clinic supply",
    "wellness supply",
    "OEM moxa",
  ],
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
