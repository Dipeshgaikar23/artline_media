/* Contact page. */
import { BLUE, Check, PageHeader } from "@/components/site";

export const metadata = { title: "Contact — Artline Media" };

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-400";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="Let's start a conversation"
        subtitle="Tell us about your endeavor and we'll get back to you within one business day."
      />
      <section className="mx-auto grid max-w-[85rem] grid-cols-1 gap-10 px-6 pb-20 pt-6 lg:grid-cols-2">
        {/* form */}
        <form className="flex flex-col gap-4 rounded-3xl border border-zinc-200 p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className={inputClass} type="text" placeholder="Full name" required />
            <input className={inputClass} type="email" placeholder="Email address" required />
          </div>
          <input className={inputClass} type="text" placeholder="Company (optional)" />
          <textarea className={inputClass} rows={5} placeholder="How can we help?" required />
          <button
            type="submit"
            className="mt-2 rounded-full px-6 py-3 text-sm font-medium text-white"
            style={{ background: BLUE }}
          >
            Send message
          </button>
        </form>

        {/* side info */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Prefer to reach us directly?
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              We&apos;re a small, responsive team. Email works great too.
            </p>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-zinc-700">
            <li className="flex items-center gap-2"><Check /> hello@artlinemedia.io</li>
            <li className="flex items-center gap-2"><Check /> Mon–Fri, 9am–6pm</li>
            <li className="flex items-center gap-2"><Check /> 30 day free trial, no credit card</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
