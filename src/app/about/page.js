import Link from "next/link";

export const metadata = { title: "About Us — Artline Media" };

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
      {/* Background glow effects to match the image's dark space aesthetic */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#eb0b8b]/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f9a826]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="relative mx-auto max-w-[85rem] px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image with Badge */}
          <div className="relative z-10 w-full max-w-[600px] mx-auto lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/about-team.jpg" 
              alt="Artline Media Team" 
              className="w-full h-auto rounded-3xl object-cover shadow-2xl"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 lg:-left-8 flex items-center gap-4 bg-[#231e3d] rounded-2xl p-3 pr-8 shadow-xl border border-white/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eb0b8b] text-white shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide">EST. 2023</span>
                <span className="text-xs text-zinc-400">Panvel HQ</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#eb0b8b]"></span>
              <span className="text-sm font-bold tracking-widest text-[#eb0b8b] uppercase">01. About Us</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              Who We Are
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-zinc-300 font-medium mb-8">
              Crafting digital narratives that resonate.
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed mb-12">
              <p>
                The Artline Media is a creative digital marketing agency founded by Dipak k. Ray based in, Navi Mumbai, focused on building strong and engaging brands online.
              </p>
              <p>
                We deliver end-to-end digital solutions including social media marketing, graphic designing, photo & videography, ads management, website development, and influencer marketing—all driven by creativity and results.
              </p>
            </div>
            
            <hr className="border-zinc-800 mb-10" />
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-2">Founder & CEO</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#eb0b8b] to-[#f9a826] bg-clip-text text-transparent">
                  Dipak k. Ray
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-2">Since 2023</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#eb0b8b] to-[#f9a826] bg-clip-text text-transparent">
                  Navi Mumbai
                </p>
              </div>
            </div>
            
            <div>
              <Link 
                href="/team" 
                className="inline-flex items-center gap-3 bg-[#eb0b8b] hover:bg-[#d1097b] transition-colors text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#eb0b8b]/20"
              >
                Meet the Team
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
