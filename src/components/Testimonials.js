"use client";
import { useEffect, useRef } from "react";

const QUOTES = [
  {
    text: "As a small business owner, I was initially overwhelmed by the idea of managing our online presence. Partnering with Artline Media was a game-changer for us. They developed a tailored strategy that not only increased our website traffic but also significantly boosted our social media engagement.",
    name: "Sarah L",
    role: "CEO of NuHealth",
    img: 47,
  },
  {
    text: "What I appreciate most is their responsiveness and dedication to our success. They are always available to answer questions, and I feel like we have a true partner. I couldn't be happier with the results. I would recommend them to any business looking to grow.",
    name: "John Lynn",
    role: "CEO of NuHealth",
    img: 12,
  },
  {
    text: "The team rebuilt our website from scratch and the difference is night and day. It loads faster, looks premium, and our enquiries have gone up every single month since launch.",
    name: "Priya R",
    role: "Founder, Bloom Studio",
    img: 32,
  },
  {
    text: "Their photography and video work made our brand look like a national player. We finally have visuals we're proud to put in front of clients.",
    name: "Marcus T",
    role: "Marketing Lead, Vertex",
    img: 15,
  },
  {
    text: "Handing over our social media was the best decision we made this year. Consistent content, real engagement, and a team that actually understands our audience.",
    name: "Aisha K",
    role: "Owner, Saffron Co.",
    img: 5,
  },
];

const GAP = 32; // matches gap-8

export function Testimonials() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);

  const go = (target) => {
    const el = trackRef.current;
    const card = el?.children[0];
    if (!el || !card) return;
    const step = card.offsetWidth + GAP;
    const visible = Math.max(1, Math.round(el.clientWidth / step));
    const maxIndex = Math.max(0, QUOTES.length - visible);
    let idx = target;
    if (idx > maxIndex) idx = 0;
    if (idx < 0) idx = maxIndex;
    indexRef.current = idx;
    el.scrollTo({ left: idx * step, behavior: "smooth" });
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) go(indexRef.current + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-[85rem] px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          What client says
        </h2>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => go(indexRef.current - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-black hover:bg-zinc-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => go(indexRef.current + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="mt-10 flex gap-8 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {QUOTES.map((q) => (
          <div
            key={q.name}
            className="shrink-0 basis-full rounded-3xl border border-zinc-200 p-8 md:basis-[calc(50%-1rem)]"
          >
            <p className="text-lg leading-relaxed text-zinc-700">&ldquo;{q.text}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.pravatar.cc/80?img=${q.img}`}
                alt={q.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-black">{q.name}</p>
                <p className="text-xs text-zinc-500">{q.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
