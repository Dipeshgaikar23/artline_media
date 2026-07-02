import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site";
import { Nav } from "@/components/Nav";
import { ScrollTop } from "@/components/ScrollTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Artline Media — Grow faster with our all-in-one marketing platform",
  description:
    "Agency that build many amazing product to boost your business to next level.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="bg-white">
        <Nav />
        {/* spacer for the fixed nav (~logo h-19 + py-1 ≈ 84px) */}
        <div className="pt-[84px]">{children}</div>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
