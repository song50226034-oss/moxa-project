import Link from "next/link";

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Stick-on-moxa-rolls-japan.jpg/1525px-Stick-on-moxa-rolls-japan.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-rice px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            Global Moxa Supply
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Traditional Eastern Wellness Solutions for Modern Clinics
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cedar/80">
            Reliable moxa sourcing from China's herbal production region
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center bg-ink px-6 text-sm font-semibold text-rice transition hover:bg-matcha"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center border border-cedar/20 bg-white px-6 text-sm font-semibold text-ink transition hover:border-matcha hover:text-matcha"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-stonewash shadow-soft">
          <img
            src={heroImage}
            alt="Stick-on moxa and moxa rolls used for indirect heat treatment"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 text-rice">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rice/70">
              Clinical Product Sourcing
            </p>
            <p className="mt-2 text-lg font-semibold">
              Moxa products for acupuncture, therapy, and wellness channels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
