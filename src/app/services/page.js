/* Services page — the four core offerings. */
import Link from "next/link";
import { BLUE, Check } from "@/components/site";

export const metadata = {
  title: "Services — Artline Media",
  description:
    "Website development, SEO ranking, photography & videography, and social media handling.",
};

const SERVICES = [
  {
    title: "Website Development",
    desc: "Fast, responsive, modern websites built to convert — from landing pages to full web apps.",
    points: ["Responsive design", "SEO-ready code", "CMS integration"],
    icon: (
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "SEO Ranking",
    desc: "Climb search rankings with proven on-page and technical SEO that brings in organic traffic.",
    points: ["Keyword research", "On-page optimization", "Monthly reporting"],
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18l5-5 3 3 8-8M20 8h-4M20 8v4" />
      </g>
    ),
  },
  {
    title: "Photography & Videography",
    desc: "Professional photo and video production that makes your brand look its absolute best.",
    points: ["Product & brand shoots", "Video editing", "Reels & ads"],
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <circle cx="12" cy="13" r="3" />
        <path d="M8 7l1.5-2h5L16 7" />
      </g>
    ),
  },
  {
    title: "Social Media Handling",
    desc: "End-to-end social media management — content, scheduling, and community growth.",
    points: ["Content calendar", "Community management", "Paid campaigns"],
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8 11l8-4M8 13l8 4" />
      </g>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 pb-6 pt-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
          Everything you need to{" "}
          <span className="font-serif italic" style={{ color: BLUE }}>
            grow
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500">
          One team for your website, your rankings, your visuals, and your socials.
        </p>
      </section>

      <section className="mx-auto max-w-[85rem] px-6 pb-16 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-8"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: BLUE }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">{s.icon}</svg>
              </span>
              <h2 className="mt-5 text-xl font-semibold text-black">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-zinc-700 flex-grow">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button 
                  className="rounded-full px-5 py-2 text-sm font-medium border border-[#eb0b8b] text-[#eb0b8b] hover:bg-[#eb0b8b] hover:text-white transition-colors"
                >
                  Our previous work
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="gradient-brand mt-12 flex flex-col items-center justify-between gap-6 rounded-[28px] p-10 sm:flex-row">
          <h3 className="max-w-md text-center text-2xl font-semibold text-white sm:text-left">
            Not sure which service fits? Let&apos;s talk it through.
          </h3>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium"
            style={{ color: BLUE }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
