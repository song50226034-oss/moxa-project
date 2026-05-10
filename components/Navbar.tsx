"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useI18n, localeNames, type Locale } from "@/lib/i18n";

export default function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangOpen(false);
    };
    if (isLangOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isLangOpen]);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-cedar/10 bg-rice/95 shadow-sm backdrop-blur-md"
          : "bg-rice/90 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-matcha sm:tracking-[0.22em]"
        >
          <svg
            className="h-8 w-8 text-matcha"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M16 6C16 6 12 10 12 16C12 22 16 26 16 26C16 26 20 22 20 16C20 10 16 6 16 6Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M16 8C16 8 13 11 13 16C13 21 16 24 16 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="hidden sm:inline">Moxa Source</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-cedar/10 bg-white/70 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cedar transition-all hover:bg-stonewash hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
              className="flex items-center gap-1.5 rounded-full border border-cedar/10 bg-white/70 px-3 py-2 text-xs font-medium text-cedar transition-all hover:border-matcha hover:text-matcha sm:text-sm"
              aria-label="Select language"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span>{localeNames[locale]}</span>
              <svg
                className={`h-3 w-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[120px] overflow-hidden rounded-lg border border-cedar/10 bg-white shadow-premium">
                {(Object.keys(localeNames) as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocale(lang);
                      setIsLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${
                      locale === lang
                        ? "bg-matcha/10 font-medium text-matcha"
                        : "text-cedar hover:bg-stonewash"
                    }`}
                  >
                    {localeNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cedar/10 bg-white/70 text-cedar transition-all hover:border-matcha hover:text-matcha md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-64 border-t border-cedar/10" : "max-h-0"
        }`}
      >
        <div className="bg-rice/95 px-4 py-4 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-cedar transition-colors hover:bg-stonewash hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-cedar/10 pt-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg bg-matcha px-4 py-3 text-center text-base font-semibold text-rice transition-colors hover:bg-ink"
            >
              {t.cta.requestSamples}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
