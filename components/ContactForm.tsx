"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("B2B moxa inquiry", form);
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-soft ring-1 ring-cedar/10 sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-cedar">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 border border-cedar/15 bg-rice px-4 text-ink outline-none transition focus:border-matcha"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-cedar">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-12 border border-cedar/15 bg-rice px-4 text-ink outline-none transition focus:border-matcha"
            placeholder="name@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-cedar">
          Message
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="resize-none border border-cedar/15 bg-rice px-4 py-3 text-ink outline-none transition focus:border-matcha"
            placeholder="Market, products, quantity range, cooperation model"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 h-12 w-full bg-ink px-5 text-sm font-semibold text-rice transition hover:bg-matcha"
      >
        Submit Inquiry
      </button>

      {submitted ? (
        <p className="mt-4 text-sm font-medium text-matcha">
          Inquiry captured in the browser console.
        </p>
      ) : null}
    </form>
  );
}
