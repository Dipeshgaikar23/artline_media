import { BLUE } from "@/components/site";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About Us — Artline Media" };

const teamMembers = [
  { name: "Dipak Kumar Ray", role: "CEO & FOUNDER", image: "/dipak-ray.jpg" },
  { name: "Ankit", role: "GRAPHIC DESIGNER & VIDEO EDITOR", image: "/ankit-ray.jpg" },
  { name: "Hassan", role: "VIDEO EDITOR & PHOTOGRAPHER", image: "/hassan.jpg" },
  { name: "Priya Chaudhary", role: "VOICE ARTIST & SCRIPT WRITER", image: "/priya-chaudhary.jpg" },
  { name: "Anirudha Kolay", role: "DEVELOPER & ANALYST", image: "/anirudha-kolay.jpg" },
  { name: "Dipesh Gaikar", role: "DEVOPS ENGINEER", image: "/Dipesh Gaikar.jpg" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden flex flex-col pt-24 lg:pt-0">
      {/* Background glow effects to match the image's dark space aesthetic */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#eb0b8b]/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f9a826]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      {/* About Section */}
      <div className="relative mx-auto max-w-[85rem] px-6 w-full flex-grow flex items-center lg:py-24 py-16">
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
            
            <div className="grid grid-cols-2 gap-8">
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
          </div>
          
        </div>
      </div>

      {/* Team Section */}
      <Reveal className="relative z-10 max-w-[85rem] w-full mx-auto px-6 flex flex-col items-center text-center pb-24 lg:pt-16">
        {/* Badge */}
        <div
          className="px-4 py-1.5 rounded-full border border-[#eb0b8b]/30 bg-[#eb0b8b]/10 text-[10px] sm:text-xs font-semibold tracking-widest mb-6"
          style={{ color: BLUE }}
        >
          OUR PEOPLE
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span style={{ color: BLUE }}>Artline</span> Team
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mb-20">
          Creativity powered by people. Meet the minds behind our digital magic.
        </p>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center group">
              <div className={`relative p-1 rounded-full ${member.name === "Sourav Mallik" ? 'border-2 border-[#eb0b8b]' : 'border-2 border-transparent group-hover:border-[#eb0b8b]/50'} transition-colors duration-300 mb-5`}>
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase max-w-[160px]" style={{ color: BLUE }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
