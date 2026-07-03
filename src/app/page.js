/* Artline Media landing page — static design replica of the provided mockup. */
import { BLUE, Check } from "@/components/site";
import { Testimonials } from "@/components/Testimonials";
import { HeroCarousel } from "@/components/HeroCarousel";
import { EmailForm } from "@/components/EmailForm";

/* --------------------------------------------------------------- Hero */
function Hero() {
  return (
    <section className="w-full bg-[#0d0d0d]">
      <div className="mx-auto grid w-full max-w-[85rem] grid-cols-1 gap-6 px-6 py-8 md:grid-cols-2 md:py-10">
        {/* left */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Grow{" "}
            <span
              className="font-serif italic underline decoration-2 underline-offset-4"
              style={{ color: BLUE }}
            >
              faster
            </span>{" "}
            with our al-in-one marketing platform
          </h1>
          <p className="mt-5 max-w-md text-sm text-zinc-400">
            Agency that build many amazing product to boost your business to next
            level.
          </p>

          <EmailForm 
            theme="dark" 
            containerClass="mt-6" 
            buttonClass="gradient-brand transition-opacity hover:opacity-90"
          />

          <div className="mt-5 flex flex-col gap-2 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Check /> Data-driven strategies for exponential brand growth
            </div>
            <div className="flex items-center gap-2">
              <Check /> Premium digital solutions at unbeatable value
            </div>
          </div>
        </div>

        {/* right — fading service carousel */}
        <HeroCarousel />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Brands */
function Brands() {
  const brands = [
    "Jeelo",
    "Jeeconnect",
    "Eurokids",
    "Kidzee",
    "Commerce Ki paathsaala",
    "Anurag classes",
    "Flyhigh flysafe",
    "Tripindia",
    "Crocus travel",
    "TravelinGO",
    "Divyjyot international school",
    "Growin Finserv",
  ];
  // Repeat so one half is wider than the viewport, then render two identical
  // halves — the -50% slide loops seamlessly.
  const half = [...brands, ...brands, ...brands];
  return (
    <section className="mx-auto w-full max-w-[85rem] px-6 py-6">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <p className="w-[160px] shrink-0 text-sm font-medium text-zinc-500">
          Trusted by Thousand top brands
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[...half, ...half].map((b, i) => (
              <span
                key={i}
                className="mx-6 whitespace-nowrap text-xl font-semibold tracking-tight text-zinc-800"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Team quote */
function TeamQuote() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-2xl font-medium leading-[1.5] tracking-tight text-black sm:text-[32px]">
        Our flexible team 👩🏻👩🏽👩🏼 has a wide range of skills, which lets us look
        at projects from a complete point of view that combines creativity 🎨 and
        usefulness ✨.
      </p>
    </section>
  );
}

/* -------------------------------------------------------------- Stats */
function Stats() {
  const stats = [
    ["4", "Years Experience"],
    ["500", "Happy Customers"],
    ["10", "Professional Teams"],
  ];
  const cards = [
    ["Increase Traffic", "Our expertise will help you to improve visibility in search engine results."],
    ["Improved Rankings", "We employ ultimate strategic SEO to enhance your website's ranking world wide."],
    ["Targeted Audience", "We focus on targeting specific keywords to attract your ideal audience."],
  ];
  const icons = [
    <path key="a" d="M13 2L4.5 12.5H11L11 22L19.5 11.5H13L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
    <path key="b" d="M4 18l6-6 4 4 6-8M20 8h-4M20 8v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    <g key="c" stroke="currentColor" strokeWidth="1.6" fill="none"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" /></g>,
  ];
  return (
    <section className="mx-auto max-w-[85rem] px-6 py-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black">
            Bring in targeted visitors and increase sales.
          </h2>
          <button className="mt-5 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-black hover:bg-zinc-50">
            Contact Us
          </button>
        </div>
        <div className="flex gap-10 sm:gap-14">
          {stats.map(([num, label]) => (
            <div key={label}>
              <p className="text-gradient-brand w-fit text-6xl font-semibold tracking-tight">
                {num}+
              </p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map(([title, desc], i) => (
          <div key={title} className="rounded-2xl bg-zinc-50 p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24">{icons[i]}</svg>
            </span>
            <h3 className="mt-4 font-semibold text-black">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Services */
function Services() {
  const services = [
    "Search Engine Optimization (SEO)",
    "Conversion Rate Optimization (CRO)",
    "Online Reputation Management (ORM)",
    "Social Media Marketing",
    "Pay Per Click (PPC)",
    "Email Marketing Automation",
  ];
  const icon = (i) => {
    const paths = [
      <g key={i}><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></g>,
      <path key={i} d="M4 17l5-5 3 3 8-8M20 7h-4M20 7v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
      <g key={i} stroke="currentColor" strokeWidth="1.6" fill="none"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></g>,
      <g key={i} stroke="currentColor" strokeWidth="1.6" fill="none"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8 11l8-4M8 13l8 4" /></g>,
      <path key={i} d="M6 4l14 7-6 2-2 6-6-15z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
      <g key={i} stroke="currentColor" strokeWidth="1.6" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></g>,
    ];
    return <svg width="22" height="22" viewBox="0 0 24 24">{paths[i]}</svg>;
  };
  return (
    <section className="mx-auto max-w-[85rem] px-6 py-16">
      <h2 className="mx-auto max-w-lg text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl">
        We provide our customer the finest service available
      </h2>

      <div className="mt-14 grid grid-cols-1 border-l border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s} className="border-b border-r border-zinc-200 p-8 text-center">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-black">
              {icon(i)}
            </span>
            <h3 className="mt-4 font-semibold text-black">{s}</h3>
            <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-zinc-500">
              We employ ultimate strategic SEO to enhance your website&apos;s ranking
              world wide.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Pricing */
function PlanFeature({ children }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <Check /> {children}
    </li>
  );
}

function BlueCheckFeature({ children }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l4.5 4.5L19 7" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-[85rem] px-6 py-4">
      <div className="rounded-[28px] bg-[#0d0d0d] px-6 py-16 md:px-14">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Simple and Flexible Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-center text-sm text-zinc-400">
          Try Growly Premium for free for 7 days. Then choose between the monthly or
          annual plan.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Standard */}
          <div className="rounded-3xl border border-zinc-800 bg-[#141414] p-8">
            <h3 className="text-xl font-semibold text-white">Standard Plan</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Team collaboration for any business
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-zinc-200">
              <PlanFeature>75 keywords phrases</PlanFeature>
              <PlanFeature>8 hours of consulting</PlanFeature>
              <PlanFeature>Custom dashboard: 4</PlanFeature>
              <PlanFeature>Usability check</PlanFeature>
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-4xl font-semibold text-white">$30.99</p>
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Business */}
          <div className="rounded-3xl p-8" style={{ background: BLUE }}>
            <h3 className="text-xl font-semibold text-white">Business Plan</h3>
            <p className="mt-1 text-sm text-pink-100">
              Team collaboration for any business
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-white">
              <BlueCheckFeature>75 keywords phrases</BlueCheckFeature>
              <BlueCheckFeature>48 hours of consulting</BlueCheckFeature>
              <BlueCheckFeature>Custom dashboard: 30</BlueCheckFeature>
              <BlueCheckFeature>Usability check</BlueCheckFeature>
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-4xl font-semibold text-white">$99.99</p>
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium" style={{ color: BLUE }}>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Testimonials */
/* ---------------------------------------------------------------- CTA */
function CTA() {
  return (
    <section className="mx-auto max-w-[85rem] px-6 py-4">
      <div className="gradient-brand grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[28px] md:grid-cols-2">
        <div className="p-10 md:p-14">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            I would like to engage in a conversation regarding your endeavor
          </h2>
          <EmailForm 
            theme="light" 
            containerClass="mt-8" 
            buttonClass="bg-black" 
          />
        </div>
        <div className="h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80"
            alt="Client"
            className="h-full min-h-[300px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Brands />
      <TeamQuote />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
