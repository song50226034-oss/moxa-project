import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cedar/10 bg-rice/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-0">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-ink">
          Moxa Source
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-cedar/10 bg-white/70 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-cedar transition hover:bg-stonewash hover:text-ink sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
