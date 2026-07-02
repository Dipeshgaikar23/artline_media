/* Features page. */
import { BLUE, PageHeader } from "@/components/site";

export const metadata = { title: "Features — Artline Media" };

const FEATURES = [
  ["Increase Traffic", "Improve your visibility in search engine results and reach the right people."],
  ["Improved Rankings", "Strategic SEO that lifts your website's ranking world wide."],
  ["Targeted Audience", "Focus on the specific keywords that attract your ideal audience."],
  ["Real-time Analytics", "Track every campaign with a live dashboard and clear reporting."],
  ["Content Studio", "Plan, produce, and publish content across every channel."],
  ["Dedicated Support", "A real team on hand to answer questions and keep you growing."],
];

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="Features that do the heavy lifting"
        subtitle="Everything Artline Media gives your team to bring in visitors and increase sales."
      />
      <section className="mx-auto max-w-[85rem] px-6 pb-16 pt-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-zinc-50 p-6">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ background: BLUE }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l4.5 4.5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold text-black">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
