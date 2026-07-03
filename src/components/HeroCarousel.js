"use client";
import { useEffect, useState } from "react";

const SERVICES = [
  ["Website Design & Development", "Fast, modern sites built to convert", "1498050108023-c5249f4df085"],
  ["SEO Ranking", "Climb search results, organically", "1460925895917-afdab827c52f"],
  ["Videography & Photography", "Visuals that make you look premium", "1542038784456-1ea8e935640e"],
  ["Graphic Designing", "Brand assets that make you stand out", "1626785774573-4b799315345d"],
  ["Ads & Campaign Management", "Campaigns that drive real ROI", "1542744173-8e7e53415bb0"],
  ["Influencer Marketing", "Reach audiences that already trust", "1611162617474-5b21e879e113"],
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % SERVICES.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-[22px] sm:h-[600px]">
      {SERVICES.map(([title, sub, unsplashId], i) => (
        <div
          key={unsplashId}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://images.unsplash.com/photo-${unsplashId}?auto=format&fit=crop&w=1200&q=80`}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-20">
            <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
            <p className="mt-1 text-sm text-white/80">{sub}</p>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-7 right-6 flex gap-1.5">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            aria-label={`Show ${SERVICES[i][0]}`}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 22 : 6,
              background: i === active ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
