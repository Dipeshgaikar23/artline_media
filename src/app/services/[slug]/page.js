/* One page per service, generated from the shared SERVICES data. */
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLUE, Check } from "@/components/site";
import { SERVICES } from "@/components/services-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return {
    title: s ? `${s.title} — Artline Media` : "Service — Artline Media",
    description: s?.desc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((x) => x.slug === slug);
  if (!service) notFound();

  return (
    <main className="bg-white">
      {/* hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://loremflickr.com/1600/900/${service.photoQuery}?lock=1`}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative mx-auto max-w-[85rem] px-6 py-24 text-white">
          <Link href="/services" className="text-sm text-white/70 hover:text-white">
            ← All services
          </Link>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-white/80">{service.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* content */}
      <section className="mx-auto grid max-w-[85rem] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-black">What we do</h2>
          <p className="mt-4 leading-relaxed text-zinc-600">{service.desc}</p>
          <p className="mt-4 leading-relaxed text-zinc-600">{service.longDesc}</p>

          <h3 className="mt-8 text-lg font-semibold text-black">What&apos;s included</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
            {service.includes.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check /> {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="gradient-brand mt-8 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get a quote
          </Link>
        </div>

        {/* related image */}
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-zinc-200 lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://loremflickr.com/900/1100/${service.photoQuery}?lock=2`}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* other services */}
      <section className="mx-auto max-w-[85rem] px-6 pb-20">
        <h3 className="text-lg font-semibold text-black">Explore other services</h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: BLUE }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24">{s.icon}</svg>
              </span>
              <span className="text-sm font-medium text-black group-hover:underline">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
