import { PageHeader } from "@/components/site";

export const metadata = { title: "Privacy Policy — Artline Media" };

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last Updated: January 2026"
      />

      <div className="mx-auto max-w-[48rem] px-6 pb-24 pt-12">
        <section id="privacy" className="text-zinc-300 leading-relaxed space-y-6 text-lg">
          <p>At The Artline Media, we value your privacy. We collect basic personal information such as your name, email address, phone number, and website usage data only to communicate with you, provide our services, and improve our website experience.</p>
          <p>We do not sell, rent, or misuse your personal information. Data may be shared only with trusted service providers or when legally required.</p>
          <p>By using our website, you agree to this Privacy Policy.</p>
          <p className="pt-2 font-medium">📧 Contact us: <a href="mailto:theartlinemedia@gmail.com" className="text-white underline decoration-[#eb0b8b] decoration-2 underline-offset-4 hover:text-[#eb0b8b]">theartlinemedia@gmail.com</a></p>
        </section>

        <hr className="my-16 border-white/10" />

        <section id="terms" className="text-zinc-300 leading-relaxed space-y-6 text-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Terms of Service</h2>
          <p>By accessing www.theartlinemedia.com, you agree to follow these Terms of Service.</p>
          <p>All website content, designs, logos, and materials are the property of The Artline Media and may not be copied or reused without written permission.</p>
          <p>We are not responsible for any direct or indirect loss arising from the use of our website or services. We reserve the right to update these terms at any time.</p>
        </section>

        <hr className="my-16 border-white/10" />

        <section id="cookies" className="text-zinc-300 leading-relaxed space-y-6 text-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Cookies Policy</h2>
          <p>The Artline Media uses cookies to improve website performance, understand visitor behavior, and enhance user experience.</p>
          <p>Cookies do not collect personal information. You can disable cookies anytime through your browser settings.</p>
          <p>By continuing to use our website, you consent to the use of cookies.</p>
        </section>
      </div>
    </main>
  );
}
