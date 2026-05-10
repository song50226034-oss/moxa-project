import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Moxa Source Partner | Nanyang Moxa Supplier",
  description:
    "Learn about our expertise in moxa sourcing from Nanyang, China. We connect global wellness professionals with premium moxa products backed by decades of production heritage.",
  keywords: [
    "moxa supplier",
    "Nanyang moxa",
    "China moxa manufacturer",
    "moxa sourcing",
    "acupuncture supply",
    "wellness distribution",
  ],
};

export default function AboutPage() {
  return <AboutPageContent />;
}
