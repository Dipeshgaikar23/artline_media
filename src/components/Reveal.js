"use client";
import { useEffect, useRef, useState } from "react";

/* Fades + slides its children up when scrolled into view. Native IntersectionObserver, no deps. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let released = false;
    const reveal = () => {
      if (released) return;
      released = true;
      setShown(true);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        // If a route-change curtain is up, wait for it to lift before revealing.
        if (window.__pageTransitioning) {
          window.addEventListener("pagetransitionend", reveal, { once: true });
          // Safety net: never stay hidden if the end signal is somehow missed.
          setTimeout(reveal, 2000);
        } else {
          reveal();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.removeEventListener("pagetransitionend", reveal);
    };
  }, []);

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
