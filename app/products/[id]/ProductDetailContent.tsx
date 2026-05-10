"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getRelatedProducts } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";

type ProductDetailContentProps = {
  product: Product;
};

export default function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const name = t.products[product.nameKey as keyof typeof t.products] || product.nameKey;
  const description = t.products[product.descriptionKey as keyof typeof t.products] || product.descriptionKey;
  const useCase = t.productDetails[product.useKey as keyof typeof t.productDetails] || product.useKey;
  const packaging = t.productDetails[product.packagingKey as keyof typeof t.productDetails] || product.packagingKey;
  const shippingInfo = t.productDetails[product.shippingInfoKey as keyof typeof t.productDetails] || product.shippingInfoKey;
  const relatedProducts = getRelatedProducts(product.id);

  // Helper function to get translated spec
  const getSpec = (labelKey: string, valueKey: string) => ({
    label: t.productDetails[labelKey as keyof typeof t.productDetails] || labelKey,
    value: t.productDetails[valueKey as keyof typeof t.productDetails] || valueKey,
  });

  // Helper function to get translated usage scenario
  const getScenario = (key: string) => 
    t.productDetails[key as keyof typeof t.productDetails] || key;

  // Helper function to get translated FAQ
  const getFaq = (questionKey: string, answerKey: string) => ({
    question: t.productDetails[questionKey as keyof typeof t.productDetails] || questionKey,
    answer: t.productDetails[answerKey as keyof typeof t.productDetails] || answerKey,
  });

  return (
    <div className="pb-20 lg:pb-28">
      {/* Breadcrumb */}
      <nav className="bg-stonewash/50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ol className="flex items-center gap-2 text-sm text-cedar/60">
            <li>
              <Link href="/" className="hover:text-matcha">
                {t.nav.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-matcha">
                {t.nav.products}
              </Link>
            </li>
            <li>/</li>
            <li className="text-ink">{name}</li>
          </ol>
        </div>
      </nav>

      {/* Product Hero Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-stonewash">
                <img
                  src={product.images[activeImage]?.src || product.image}
                  alt={product.images[activeImage]?.alt || name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg bg-stonewash transition-all ${
                      activeImage === index
                        ? "ring-2 ring-matcha ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category & badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-stonewash px-3 py-1 text-xs font-medium text-cedar">
                  {product.category === "traditional" ? t.products.categoryTraditional : product.category === "modern" ? t.products.categoryModern : t.products.categoryRaw}
                </span>
                {product.oemSupport && (
                  <span className="inline-flex rounded-full bg-matcha/10 px-3 py-1 text-xs font-medium text-matcha">
                    {t.products.oemAvailable}
                  </span>
                )}
                {product.privateLabelSupport && (
                  <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                    {t.products.privateLabel}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{name}</h1>
              <p className="mt-4 text-base leading-relaxed text-cedar/80 sm:text-lg">
                {description}
              </p>

              {/* Quick Info */}
              <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-stonewash/50 p-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cedar/50">{t.products.moqLabel}</p>
                  <p className="mt-1 font-medium text-ink">{product.moq}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cedar/50">{t.products.useCase}</p>
                  <p className="mt-1 font-medium text-ink">{useCase}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cedar/50">{t.products.packaging}</p>
                  <p className="mt-1 text-sm text-cedar">{packaging}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="flex h-12 flex-1 items-center justify-center rounded-lg bg-matcha text-sm font-semibold text-rice transition-colors hover:bg-ink"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.products.inquireNow}
                </button>
                <Link
                  href={`/contact?product=${product.id}&type=sample`}
                  className="flex h-12 flex-1 items-center justify-center rounded-lg border border-cedar/20 text-sm font-semibold text-cedar transition-colors hover:bg-ink hover:text-rice"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  {t.products.requestSample}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specifications Table */}
      <section className="bg-stonewash/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {t.products.specifications}
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-card">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => {
                  const translatedSpec = getSpec(spec.labelKey, spec.valueKey);
                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-stonewash/30"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-cedar/70">
                        {translatedSpec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-ink">{translatedSpec.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {t.products.usageScenarios}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.usageScenarioKeys.map((scenarioKey, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-cedar">{getScenario(scenarioKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM & Private Label Section */}
      {(product.oemSupport || product.privateLabelSupport) && (
        <section className="bg-ink px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-matcha">
                  {t.products.oemPrivateLabel}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-rice sm:text-3xl">
                  {t.products.customManufacturing}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-rice/70">
                  {t.products.customManufacturingDesc}
                </p>
                <ul className="mt-6 space-y-3">
                  {product.oemSupport && (
                    <li className="flex items-center gap-3 text-sm text-rice">
                      <svg className="h-5 w-5 shrink-0 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.products.oemManufacturing}
                    </li>
                  )}
                  {product.privateLabelSupport && (
                    <li className="flex items-center gap-3 text-sm text-rice">
                      <svg className="h-5 w-5 shrink-0 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.products.privateLabelBranding}
                    </li>
                  )}
                  <li className="flex items-center gap-3 text-sm text-rice">
                    <svg className="h-5 w-5 shrink-0 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t.products.flexibleMoq}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-rice">
                    <svg className="h-5 w-5 shrink-0 text-matcha" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t.products.qualityCertification}
                  </li>
                </ul>
                <Link
                  href={`/contact?product=${product.id}&type=oem`}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-matcha px-6 text-sm font-semibold text-rice transition-colors hover:bg-rice hover:text-ink"
                >
                  {t.products.discussOem}
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cedar">
                  <img
                    src={product.images[3]?.src || product.image}
                    alt="Custom packaging and OEM services"
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Shipping Information */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {t.products.shippingInfo}
          </h2>
          <div className="mt-8 rounded-xl bg-stonewash/50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-matcha/10 text-matcha">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{t.products.globalDelivery}</h3>
                <p className="mt-2 leading-relaxed text-cedar/80">{shippingInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQ */}
      <section className="bg-stonewash/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {t.products.productFaq}
          </h2>
          <div className="mt-8 space-y-4">
            {product.faqs.map((faq, index) => {
              const translatedFaq = getFaq(faq.questionKey, faq.answerKey);
              return (
                <details
                  key={index}
                  className="group rounded-xl bg-white shadow-card"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left">
                    <span className="font-medium text-ink">{translatedFaq.question}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-cedar/50 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-stonewash px-6 py-5">
                    <p className="text-sm leading-relaxed text-cedar/80">{translatedFaq.answer}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
              {t.products.relatedProducts}
            </h2>
            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-matcha to-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-rice sm:text-3xl">
            {t.products.readyToOrder} {name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-rice/70">
            {t.products.readyToOrderDesc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setShowInquiryForm(true)}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-rice px-6 text-sm font-semibold text-ink transition-colors hover:bg-stonewash sm:w-auto"
            >
              {t.products.sendInquiry}
            </button>
            <Link
              href={`/contact?product=${product.id}&type=sample`}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-rice/30 px-6 text-sm font-semibold text-rice transition-colors hover:bg-rice/10 sm:w-auto"
            >
              {t.products.requestSample}
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <ProductInquiryForm
          product={product}
          onClose={() => setShowInquiryForm(false)}
        />
      )}
    </div>
  );
}
