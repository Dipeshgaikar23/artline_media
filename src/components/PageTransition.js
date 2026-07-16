"use client";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/* Branded route-change curtain: a gradient panel slides up from the bottom showing
   the destination name, navigation happens behind it, then it slides off the top to
   reveal the new page. Intercepts every internal <a> click — no per-link wiring needed.
   Pure CSS animation (.pt-cover / .pt-uncover in globals.css). */

const LABELS = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/features": "Features",
  "/blog": "Blog",
  "/contact": "Contact",
  "/privacy": "Privacy",
};

function labelFor(pathname) {
  if (LABELS[pathname]) return LABELS[pathname];
  const seg = pathname.split("/").filter(Boolean)[0] || "Home";
  return LABELS[`/${seg}`] || seg.charAt(0).toUpperCase() + seg.slice(1);
}

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState("idle"); // idle | cover | uncover
  const [label, setLabel] = useState("");
  const [pending, setPending] = useState(null); // full destination (path+search+hash)

  // Intercept internal link clicks and play the curtain instead of navigating instantly.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a");
      if (!a) return;
      const raw = a.getAttribute("href");
      if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return; // internal paths only
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname === window.location.pathname) return; // same page (e.g. hash link) — let it be
      // Capture phase: stop the event before Next's <Link> handler runs and navigates instantly.
      e.preventDefault();
      e.stopPropagation();
      window.__pageTransitioning = true; // tell Reveals to hold until the curtain lifts
      setLabel(labelFor(url.pathname));
      setPending(url.pathname + url.search + url.hash);
      setPhase("cover");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Once the new route is active, hold briefly so the name reads, then slide away.
  useEffect(() => {
    if (phase !== "cover" || !pending) return;
    if (pathname === pending.split(/[?#]/)[0]) {
      const t = setTimeout(() => setPhase("uncover"), 320);
      return () => clearTimeout(t);
    }
  }, [pathname, phase, pending]);

  const onAnimEnd = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return; // ignore the label's own animation
      if (phase === "cover") router.push(pending);
      else if (phase === "uncover") {
        setPhase("idle");
        window.__pageTransitioning = false;
        window.dispatchEvent(new Event("pagetransitionend")); // release held Reveals
      }
    },
    [phase, pending, router]
  );

  if (phase === "idle") return null;

  return (
    <div
      className={`page-transition gradient-brand ${phase === "cover" ? "pt-cover" : "pt-uncover"}`}
      onAnimationEnd={onAnimEnd}
    >
      <span className="pt-label text-6xl font-extrabold uppercase tracking-tight text-white sm:text-8xl">
        {label}
      </span>
    </div>
  );
}
