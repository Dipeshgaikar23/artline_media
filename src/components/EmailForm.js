"use client";

export function EmailForm({ theme = "dark", buttonStyle, containerClass, buttonClass }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const body = `I want to book an appoitment\n\nMy email: ${email}`;
    const mailto = `mailto:theartlinemedia@gmail.com?subject=Booking Appointment&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#1c1c1c]" : "bg-white";
  const textClass = isDark ? "text-white" : "text-black";
  const placeholderClass = isDark ? "placeholder:text-zinc-500" : "placeholder:text-zinc-400";

  return (
    <form onSubmit={handleSubmit} className={`${containerClass} flex max-w-md items-center gap-2 rounded-full p-1.5 ${bgClass}`}>
      <input
        name="email"
        type="email"
        required
        placeholder="Enter your email..."
        className={`flex-1 bg-transparent px-4 text-sm outline-none ${textClass} ${placeholderClass}`}
      />
      <button
        type="submit"
        className={`rounded-full px-5 py-2.5 text-sm font-medium text-white ${buttonClass || ""}`}
        style={buttonStyle}
      >
        Get Started
      </button>
    </form>
  );
}
