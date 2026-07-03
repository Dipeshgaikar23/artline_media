"use client";
import { BLUE } from "@/components/site";

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-400";

export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const help = formData.get("help");

    let message = `Hello, I would like to get in touch.\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    if (company) {
      message += `*Company:* ${company}\n`;
    }
    message += `*Message:* ${help}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919359873438?text=${encodedMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-zinc-200 p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" className={inputClass} type="text" placeholder="Full name" required />
        <input name="email" className={inputClass} type="email" placeholder="Email address" required />
      </div>
      <input name="company" className={inputClass} type="text" placeholder="Company (optional)" />
      <textarea name="help" className={inputClass} rows={5} placeholder="How can we help?" required />
      <button
        type="submit"
        className="mt-2 rounded-full px-6 py-3 text-sm font-medium text-white"
        style={{ background: BLUE }}
      >
        Send message
      </button>
    </form>
  );
}
