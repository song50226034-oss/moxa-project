export default function Footer() {
  return (
    <footer className="border-t border-cedar/10 bg-ink px-6 py-10 text-rice sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Moxa Source Partner.</p>
        <p className="text-rice/70">
          China-based moxa sourcing and wellness supply partner.
        </p>
      </div>
    </footer>
  );
}
