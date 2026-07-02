"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, NAV_LINKS } from "./site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          {NAV_LINKS.map(([label, href]) => (
            <li key={label}>
              <Link href={href} className="flex cursor-pointer items-center gap-1 hover:text-black">
                {label}
                {label === "Service" && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-black hover:bg-zinc-50"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
