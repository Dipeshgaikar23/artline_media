"use client";
import { useEffect, useRef, useState } from "react";

/* Fades + slides its children up when scrolled into view. Native IntersectionObserver, no deps. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  // Hold if we mounted mid route-change (behind the curtain); release when it lifts.
  const [ready, setReady] = useState(
    () => typeof window === "undefined" || !window.__pageTransitioning
  );

  useEffect(() => {
    if (ready) return;
    const onDone = () => setReady(true);
    window.addEventListener("pagetransitionend", onDone);
    return () => window.removeEventListener("pagetransitionend", onDone);
  }, [ready]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = inView && ready;

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
