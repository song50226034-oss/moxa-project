import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import QualitySection from "@/components/QualitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Premium Moxa Supply from Nanyang, China | Moxa Source Partner",
  description:
    "Based in Nanyang, China's traditional moxa production region, we connect global wellness professionals with reliable sourcing solutions. Premium moxa products for acupuncture clinics, wellness spas, therapy centers, and distributors.",
  keywords: [
    "moxa supplier china",
    "nanyang moxa manufacturer",
    "japanese moxa products",
    "acupuncture clinic supply",
    "smokeless moxibustion device",
    "moxa wholesale",
    "moxibustion supplies",
    "B2B moxa supply",
    "OEM moxa",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarketSection />
      <AdvantagesSection />
      <QualitySection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
