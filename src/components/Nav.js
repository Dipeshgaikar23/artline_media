"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, NAV_LINKS } from "./site";
import { SERVICES } from "./services-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href) =>
    `flex cursor-pointer items-center gap-1 border-b-2 pb-0.5 transition-colors hover:text-white ${isActive(href) ? "border-[#eb0b8b] text-white" : "border-transparent"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The curtain swallows the link click, so close the sidebar when navigation starts.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("routechangestart", close);
    return () => window.removeEventListener("routechangestart", close);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-white/10 bg-[#0d0d0d]/70 shadow-lg backdrop-blur-lg backdrop-saturate-150"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-6 py-1">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {NAV_LINKS.map(([label, href]) =>
            label === "Services" ? (
              <li key={label} className="group relative">
                <button type="button" className={linkClass(href)}>
                  {label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-200 group-hover:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                {/* dropdown (pt bridges the gap so hover isn't lost) */}
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-white/10 bg-[#141414] p-2 shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <span className="block text-sm font-medium text-white">{s.title}</span>
                        <span className="mt-0.5 block text-xs text-zinc-400">{s.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={label}>
                <Link href={href} className={linkClass(href)}>
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="gradient-brand rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="1.8" /><circle cx="12" cy="5" r="1.8" /><circle cx="19" cy="5" r="1.8" />
              <circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
              <circle cx="5" cy="19" r="1.8" /><circle cx="12" cy="19" r="1.8" /><circle cx="19" cy="19" r="1.8" />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile sidebar + backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-72 max-w-[80vw] border-l border-white/10 bg-[#0d0d0d] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-sm font-semibold tracking-wide text-white">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-3 py-4">
          {NAV_LINKS.map(([label, href]) =>
            label === "Services" ? (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/5 ${
                    isActive(href) ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                    servicesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="ml-4 flex flex-col gap-0.5 border-l border-white/10 py-1 pl-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/5 ${
                    isActive(href) ? "bg-white/5 text-white" : "text-zinc-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    </header>
  );
}
