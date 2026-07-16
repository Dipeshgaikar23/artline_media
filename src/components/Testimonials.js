"use client";
import { useEffect, useRef } from "react";

const QUOTES = [
  // Company Reviews
  {
    text: "Artline Media helped us establish our local presence effectively. Great work!",
    name: "Management",
    role: "Jeelo",
    img: 11,
  },
  {
    text: "Outstanding leads for our connectivity solutions! The team is brilliant.",
    name: "Founder",
    role: "Jeeconnect",
    img: 12,
  },
  {
    text: "They significantly boosted our preschool enrollment through targeted local campaigns.",
    name: "Center Head",
    role: "Eurokids",
    img: 13,
  },
  {
    text: "Excellent social media management that parents love to engage with.",
    name: "Director",
    role: "Kidzee",
    img: 14,
  },
  {
    text: "Their digital marketing strategies brought a surge in student enrollments for our coaching institute.",
    name: "Admin",
    role: "Commerce Ki paathsaala",
    img: 15,
  },
  {
    text: "Highly professional team. They designed a campaign that perfectly targeted our local students.",
    name: "Anurag",
    role: "Anurag classes",
    img: 16,
  },
  {
    text: "Great visibility boost for our aviation training programs!",
    name: "Marketing Head",
    role: "Flyhigh flysafe",
    img: 17,
  },
  {
    text: "Increased our travel bookings by 40% in just a few months. Highly recommended!",
    name: "Owner",
    role: "Tripindia",
    img: 18,
  },
  {
    text: "A reliable marketing partner for the travel industry. Fantastic results.",
    name: "Manager",
    role: "Crocus travel",
    img: 19,
  },
  {
    text: "Artline Media's campaigns really understand the travel market and user psychology.",
    name: "Founder",
    role: "TravelinGO",
    img: 20,
  },
  {
    text: "Wonderful digital branding that showcases our school's values perfectly.",
    name: "Principal",
    role: "Divyjyot international school",
    img: 21,
  },
  {
    text: "Professional financial marketing that brought us high-quality leads consistently.",
    name: "Director",
    role: "Growin Finserv",
    img: 22,
  },
  // Specific User Reviews
  {
    text: "The Artline Media Marketing team does a fantastic job with social media management and digital marketing. Their strategies are effective, their designs are creative, and their dedication is impressive. A reliable agency that truly understands how to make a brand stand out!",
    name: "SAM",
    role: "5 stars • 7 months ago",
    img: null,
  },
  {
    text: "👍",
    name: "My Luck",
    role: "5 stars • 7 months ago",
    img: null,
  },
  {
    text: "Artline Media Marketing is one of the best social media marketing agencies I’ve worked with! The team is hardworking, creative, and very professional. They always deliver quality results on time. Highly recommend them for anyone who wants to grow their brand online!",
    name: "Sachin Kumar",
    role: "5 stars • 7 months ago",
    img: null,
  },
  {
    text: "Nice",
    name: "Suraj Kumar",
    role: "5 stars • Edited 7 months ago",
    img: null,
  },
  {
    text: "Hardworking...",
    name: "A Jain",
    role: "5 stars • Edited 10 months ago",
    img: null,
  },
  {
    text: "Professional, reliable, and cost-effective digital marketing solutions. Thank you for the great service!",
    name: "Roshan Kumar",
    role: "10 months ago",
    img: null,
  },
  {
    text: "This platform provides informative videos on the various topics .... amazing experience with this channel. ❤️🙏2",
    name: "Priya Chaudhary",
    role: "2 years ago",
    img: null,
  },
  {
    text: "⭐⭐⭐⭐⭐",
    name: "Gaurav P",
    role: "5 stars • 2 years ago",
    img: null,
  },
  {
    text: "⭐⭐⭐⭐⭐",
    name: "Ruchi Gupta",
    role: "5 stars • 2 years ago",
    img: null,
  },
  {
    text: "⭐⭐⭐⭐⭐",
    name: "Kundan Rai",
    role: "5 stars • 2 years ago",
    img: null,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#ffc107" : "#e4e5e9"}
    className={filled ? "text-yellow-400" : "text-zinc-200"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const PROCESSED_QUOTES = QUOTES.map((q, i) => {
  let stars = 5;
  let cleanRole = q.role;

  if (q.role && q.role.includes("stars")) {
    const match = q.role.match(/(\d+) stars/);
    if (match) stars = parseInt(match[1]);
    cleanRole = q.role.replace(/\d+ stars \• /, "").replace(/\d+ stars/, "").trim();
  } else {
    // Generate pseudo-random consistent stars 3-5
    const seed = (i * 137) % 10;
    stars = seed > 5 ? 5 : (seed > 2 ? 4 : 3);
  }

  // Clean up explicit text stars
  let cleanText = q.text.replace(/⭐/g, "").trim();
  if (cleanText.length === 0) cleanText = "Highly recommended, great experience!";

  return { ...q, text: cleanText, stars, role: cleanRole || "Customer" };
});

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
    const maxIndex = Math.max(0, PROCESSED_QUOTES.length - visible);
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
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What client says
        </h2>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => go(indexRef.current - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:scale-105 hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => go(indexRef.current + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-105"
            style={{ background: "#eb0b8b" }}
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
        {PROCESSED_QUOTES.map((q, i) => (
          <div
            key={`${q.name}-${i}`}
            className="card-glow shrink-0 flex flex-col justify-between basis-full rounded-3xl p-8 md:basis-[calc(50%-1rem)]"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIdx) => (
                  <StarIcon key={starIdx} filled={starIdx < q.stars} />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-zinc-300">&ldquo;{q.text}&rdquo;</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0">
                <circle cx="50" cy="50" r="50" fill="#a1a1aa" />
                <circle cx="50" cy="38" r="18" fill="#f4f4f5" />
                <path d="M50 63C32 63 18 75 16 90C25 96 37 100 50 100C63 100 75 96 84 90C82 75 68 63 50 63Z" fill="#f4f4f5" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">{q.name}</p>
                <p className="text-xs text-zinc-400">{q.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
