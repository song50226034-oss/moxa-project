import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { I18nProvider } from "@/lib/i18n";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["400", "500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sc",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Moxa Source Partner | Premium Moxa Supplier from Nanyang, China",
    template: "%s | Moxa Source Partner",
  },
  description:
    "Based in Nanyang, China's traditional moxa production region, we connect global wellness professionals with reliable sourcing solutions. Premium moxa products for acupuncture clinics, wellness spas, and distributors.",
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
    "艾灸",
    "艾条",
  ],
  openGraph: {
    title: "Moxa Source Partner | Premium Moxa Supplier from Nanyang, China",
    description: "Connecting global wellness professionals with authentic moxa products from China's renowned herbal production region.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#687768",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${notoSansSC.variable} bg-rice`}>
      <body className="min-h-screen font-sans antialiased">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <StickyCTA />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
