import { BLUE } from "@/components/site";

export const metadata = { title: "Team — Artline Media" };

const teamMembers = [
  { name: "Dipak Kumar Ray", role: "CEO & FOUNDER", image: "/dipak-ray.jpg" },
  { name: "Ankit", role: "GRAPHIC DESIGNER & VIDEO EDITOR", image: "/ankit-ray.jpg" },
  { name: "Sourav Mallik", role: "CONTENT MANAGER & PLANNER", image: "/sourav-mallik.jpg" },
  { name: "Hassan", role: "VIDEO EDITOR & PHOTOGRAPHER", image: "/hassan.png" },
  { name: "Priya Chaudhary", role: "VOICE ARTIST & SCRIPT WRITER", image: "/priya-chaudhary.jpg" },
  { name: "Anirudha Kolay", role: "DEVELOPER & ANALYST", image: "/anirudha-kolay.jpg" },
  { name: "Dipesh Gaikar", role: "DEVOPS ENGINEER", image: "https://i.pravatar.cc/300?img=17" },
];

export default function TeamPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden py-20 flex flex-col items-center">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#eb0b8b] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#eb0b8b] opacity-20 blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-[85rem] w-full px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div 
          className="px-4 py-1.5 rounded-full border border-[#eb0b8b]/30 bg-[#eb0b8b]/10 text-[10px] sm:text-xs font-semibold tracking-widest mb-6"
          style={{ color: BLUE }}
        >
          OUR PEOPLE
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          The <span style={{ color: BLUE }}>Artline</span> Team
        </h1>

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
      </div>
    </main>
  );
}
