"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, NAV_LINKS } from "./site";
import { SERVICES } from "./services-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href) =>
    `flex cursor-pointer items-center gap-1 border-b-2 pb-0.5 hover:text-black ${
      isActive(href) ? "border-[#eb0b8b] text-black" : "border-transparent"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/70 shadow-sm backdrop-blur-lg backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-6 py-1">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
          {NAV_LINKS.map(([label, href]) =>
            label === "Services" ? (
              <li key={label} className="group relative">
                <Link href={href} className={linkClass(href)}>
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
                </Link>
                {/* dropdown (pt bridges the gap so hover isn't lost) */}
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-xl px-4 py-2.5 hover:bg-zinc-50"
                      >
                        <span className="block text-sm font-medium text-black">{s.title}</span>
                        <span className="mt-0.5 block text-xs text-zinc-500">{s.tagline}</span>
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
        <Link
          href="/contact"
          className="gradient-brand rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
