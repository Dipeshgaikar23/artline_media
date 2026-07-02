/* Pricing page. */
import { BLUE, Check, PageHeader } from "@/components/site";

export const metadata = { title: "Pricing — Artline Media" };

const STANDARD = ["75 keywords phrases", "8 hours of consulting", "Custom dashboard: 4", "Usability check"];
const BUSINESS = ["75 keywords phrases", "48 hours of consulting", "Custom dashboard: 30", "Usability check"];

function BlueCheck() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l4.5 4.5L19 7" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="Simple and Flexible Pricing"
        subtitle="Try Artline Media free for 7 days. Then choose between the monthly or annual plan."
      />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Standard */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-black">Standard Plan</h3>
            <p className="mt-1 text-sm text-zinc-500">Team collaboration for any business</p>
            <ul className="mt-6 flex flex-col gap-3 text-zinc-700">
              {STANDARD.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-4xl font-semibold text-black">$30.99</p>
              <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Business */}
          <div className="rounded-3xl p-8" style={{ background: BLUE }}>
            <h3 className="text-xl font-semibold text-white">Business Plan</h3>
            <p className="mt-1 text-sm text-pink-100">Team collaboration for any business</p>
            <ul className="mt-6 flex flex-col gap-3 text-white">
              {BUSINESS.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <BlueCheck /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-4xl font-semibold text-white">$99.99</p>
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium" style={{ color: BLUE }}>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
