import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Moxa Source Partner | China Moxa Clinic Supply",
    template: "%s | Moxa Source Partner",
  },
  description:
    "China-based moxa sourcing and wellness supply partner for acupuncture clinics, SPA operators, and global wellness distributors.",
  keywords: [
    "moxa",
    "acupuncture",
    "clinic supply",
    "wellness",
    "moxibustion",
    "B2B moxa supply",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
