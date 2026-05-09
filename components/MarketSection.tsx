const markets = [
  {
    name: "Japan Clinics",
    description: "Acupuncture clinics, osteopathic clinics, and shinkyu care.",
  },
  {
    name: "Western Wellness",
    description: "SPA, wellness studios, and alternative therapy operators.",
  },
  {
    name: "Asia Distribution",
    description: "Health institutions, wholesale partners, and local agents.",
  },
];

export default function MarketSection() {
  return (
    <section className="bg-stonewash px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-matcha">
            Markets
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            Built for inquiry-led global B2B cooperation.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {markets.map((market) => (
            <article key={market.name} className="bg-rice p-6 shadow-sm ring-1 ring-cedar/10">
              <h3 className="text-xl font-semibold text-ink">{market.name}</h3>
              <p className="mt-4 text-sm leading-7 text-cedar/80">
                {market.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
