"use client";

import { FormEvent, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  country: "",
  inquiryType: "",
  message: "",
};

const countries = [
  "Japan",
  "United States",
  "Germany",
  "France",
  "United Kingdom",
  "Canada",
  "Australia",
  "South Korea",
  "Taiwan",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "India",
  "Other",
];

export default function ContactForm() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    const product = searchParams.get("product");
    
    if (type) {
      setForm((prev) => ({
        ...prev,
        inquiryType: type === "sample" ? "sample" : type === "distributor" ? "distributor" : type === "oem" ? "oem" : "general",
      }));
    }
    
    if (product) {
      setForm((prev) => ({
        ...prev,
        message: `I am interested in: ${product}\n\n`,
      }));
    }
  }, [searchParams]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("B2B moxa inquiry", form);
    setSubmitted(true);
    setIsSubmitting(false);
    setForm(initialState);
  }

  const inputClass =
    "h-12 w-full rounded-lg border border-cedar/15 bg-rice px-4 text-ink outline-none transition focus:border-matcha focus:ring-2 focus:ring-matcha/10";
  const labelClass = "block text-sm font-medium text-cedar mb-2";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-premium sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.contact.name} *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            placeholder={t.contact.namePlaceholder}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.contact.email} *
          </label>
          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            placeholder={t.contact.emailPlaceholder}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClass}>
            {t.contact.company}
          </label>
          <input
            id="company"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClass}
            placeholder={t.contact.companyPlaceholder}
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className={labelClass}>
            {t.contact.country} *
          </label>
          <select
            id="country"
            required
            value={form.country}
            onChange={(e) => updateField("country", e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">{t.contact.countryPlaceholder}</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Inquiry Type */}
        <div className="sm:col-span-2">
          <label htmlFor="inquiryType" className={labelClass}>
            {t.contact.inquiryType} *
          </label>
          <select
            id="inquiryType"
            required
            value={form.inquiryType}
            onChange={(e) => updateField("inquiryType", e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">{t.contact.selectType}</option>
            <option value="sample">{t.contact.typeSample}</option>
            <option value="distributor">{t.contact.typeDistributor}</option>
            <option value="oem">{t.contact.typeOEM}</option>
            <option value="general">{t.contact.typeGeneral}</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {t.contact.message} *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full resize-none rounded-lg border border-cedar/15 bg-rice px-4 py-3 text-ink outline-none transition focus:border-matcha focus:ring-2 focus:ring-matcha/10"
            placeholder={t.contact.messagePlaceholder}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-ink text-sm font-semibold text-rice transition-colors hover:bg-matcha disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          t.contact.submit
        )}
      </button>

      {submitted && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-matcha/10 p-4 text-sm font-medium text-matcha">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {t.contact.submitted}
        </div>
      )}
    </form>
  );
}
