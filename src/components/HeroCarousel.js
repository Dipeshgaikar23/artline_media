"use client";
import { useEffect, useState } from "react";

const SERVICES = [
  ["Website Design & Development", "Fast, modern sites built to convert", "artline-web"],
  ["SEO Ranking", "Climb search results, organically", "artline-seo"],
  ["Videography & Photography", "Visuals that make you look premium", "artline-video"],
  ["Graphic Designing", "Brand assets that make you stand out", "artline-graphic"],
  ["Ads & Campaign Management", "Campaigns that drive real ROI", "artline-ads"],
  ["Influencer Marketing", "Reach audiences that already trust", "artline-influencer"],
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
      {SERVICES.map(([title, sub, seed], i) => (
        <div
          key={seed}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${seed}/800/1000`}
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
