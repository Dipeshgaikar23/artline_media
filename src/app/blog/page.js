/* Blog listing page. */
import { PageHeader } from "@/components/site";

export const metadata = { title: "Blog — Artline Media" };

const POSTS = [
  ["Growth", "How we tripled organic traffic in 90 days", "A breakdown of the SEO playbook we run for every new client.", 1027],
  ["Design", "Website that convert: 7 principles we live by", "Small design decisions that make a measurable difference to sales.", 1035],
  ["Social", "Building a content calendar that runs itself", "The exact workflow our social team uses to stay a month ahead.", 1043],
  ["Video", "Why short-form video belongs in your funnel", "Turning reels and shorts into a reliable source of leads.", 1050],
  ["SEO", "Technical SEO checklist for 2026", "The audit we run before touching a single keyword.", 1062],
  ["Brand", "Photography that makes your brand look premium", "How the right visuals change the way customers see you.", 1074],
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="The Artline Media Blog"
        subtitle="Playbooks, case studies, and ideas on growing your business online."
      />
      <section className="mx-auto max-w-[85rem] px-6 pb-16 pt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map(([tag, title, excerpt, img]) => (
            <article key={title} className="overflow-hidden rounded-3xl border border-zinc-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/id/${img}/600/360`}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {tag}
                </span>
                <h3 className="mt-2 font-semibold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
