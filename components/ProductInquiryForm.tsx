"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useI18n } from "@/lib/i18n";

type ProductInquiryFormProps = {
  product: Product;
  onClose: () => void;
};

export default function ProductInquiryForm({ product, onClose }: ProductInquiryFormProps) {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    quantity: "",
    message: "",
  });

  const name = t.products[product.nameKey as keyof typeof t.products] || product.nameKey;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log("Inquiry submitted:", { product: product.id, ...formData });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-premium sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-cedar/50 transition-colors hover:bg-stonewash hover:text-ink"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-matcha/10 text-matcha">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{t.products.inquirySubmitted}</h3>
            <p className="mt-2 text-sm text-cedar/70">
              {t.products.inquirySubmittedDesc}
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-ink px-6 text-sm font-semibold text-rice transition-colors hover:bg-matcha"
            >
              {t.products.close}
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">
              {t.products.inquireAbout} {name}
            </h3>
            <p className="mt-2 text-sm text-cedar/70">
              {t.products.inquiryFormDesc}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cedar">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 w-full rounded-lg border border-cedar/20 bg-white px-4 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-cedar">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 w-full rounded-lg border border-cedar/20 bg-white px-4 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-cedar">
                    {t.contact.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-11 w-full rounded-lg border border-cedar/20 bg-white px-4 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                    placeholder={t.contact.companyPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-cedar">
                    {t.contact.country}
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="h-11 w-full rounded-lg border border-cedar/20 bg-white px-4 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                    placeholder={t.contact.countryPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="mb-1.5 block text-sm font-medium text-cedar">
                  {t.products.expectedQuantity}
                </label>
                <input
                  type="text"
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="h-11 w-full rounded-lg border border-cedar/20 bg-white px-4 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                  placeholder={t.products.expectedQuantityPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cedar">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-cedar/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-cedar/40 focus:border-matcha focus:outline-none focus:ring-1 focus:ring-matcha"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-11 flex-1 items-center justify-center rounded-lg border border-cedar/20 text-sm font-semibold text-cedar transition-colors hover:bg-stonewash"
                >
                  {t.products.cancel}
                </button>
                <button
                  type="submit"
                  className="flex h-11 flex-1 items-center justify-center rounded-lg bg-matcha text-sm font-semibold text-rice transition-colors hover:bg-ink"
                >
                  {t.contact.submit}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
