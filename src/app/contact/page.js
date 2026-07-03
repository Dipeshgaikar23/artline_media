/* Contact page. */
import { PageHeader } from "@/components/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact — Artline Media" };

export default function ContactPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="Let's start a conversation"
        subtitle="Tell us about your endeavor and we'll get back to you within one business day."
      />
      <section className="mx-auto grid max-w-[85rem] grid-cols-1 gap-10 px-6 pb-20 pt-6 lg:grid-cols-2">
        {/* form */}
        <ContactForm />

        {/* side info */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Reach us directly
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              We&apos;re a small, responsive team. Drop by our office or give us a call.
            </p>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-zinc-700">
            <p className="font-semibold text-black text-lg">The Artline Media</p>
            <p><strong>Address:</strong> Vista Avenue Cooperative Housing Society Limited, Sector 34, Kamothe, Panvel, Maharashtra 410209</p>
            <p><strong>Phone:</strong> 093598 73438</p>
            <p><strong>Hours:</strong> Closed &middot; Opens 9 am Fri</p>
          </div>

          {/* map view */}
          <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
            <iframe
              title="The Artline Media Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=The+Artline+Media,+Vista+Avenue+Cooperative+Housing+Society+Limited,+Sector+34,+Kamothe,+Panvel,+Maharashtra+410209&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
