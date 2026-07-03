/* Canonical service list — shared by the nav dropdown and the detail pages. */

export const SERVICES = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Content, ads, and influencers that grow your brand.",
    desc: "We manage your social media from planning to posting, run paid ad campaigns, and connect you with the right influencers — all working together to grow visibility, engagement, and sales.",
    longDesc:
      "From a consistent content calendar to high-performing Meta and Google ad campaigns and vetted influencer collaborations, we handle every part of your social presence. Our goal is measurable growth: more reach, more engagement, and more customers.",
    tags: ["Strategy", "Ads", "Influencer", "Engagement"],
    includes: [
      "Social media management & content calendar",
      "Post design, copywriting & community management",
      "Paid ads on Facebook, Instagram & Google",
      "Influencer sourcing, outreach & collaborations",
      "Monthly performance & ROI reporting",
    ],
    photoQuery: "social,media,marketing",
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8 11l8-4M8 13l8 4" />
      </g>
    ),
  },
  {
    slug: "website-design-development",
    title: "Website Designing & Development",
    tagline: "Websites and brand design that convert.",
    desc: "We design modern, responsive, user-friendly websites that reflect your brand — plus all the graphic design assets you need, from logos to social creatives, banners, and flyers.",
    longDesc:
      "We build fast, SEO-ready websites that turn visitors into customers, and back them with strong visual branding. Whether you need a new site, a redesign, or design assets that attract and convert, our team covers both the build and the look.",
    tags: ["UI/UX", "Development", "Branding", "Design"],
    includes: [
      "Responsive, mobile-first website design",
      "SEO-ready, fast-loading development",
      "CMS integration & ongoing support",
      "Brand identity & logo design",
      "Social media creatives, banners & flyers",
    ],
    photoQuery: "website,web,developer",
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </g>
    ),
  },
  {
    slug: "photography-videography",
    title: "Photography & Videography",
    tagline: "High-quality visuals that tell your story.",
    desc: "Professional photography and video production for brands, products, events, and social media — high-quality visuals that tell your brand story and create real impact.",
    longDesc:
      "From product and brand shoots to event coverage and scroll-stopping reels, we produce visuals that make your brand look premium. Every shot is planned, captured, and edited to fit your brand and perform on the platforms that matter.",
    tags: ["Photography", "Production"],
    includes: [
      "Product & brand photography",
      "Event coverage",
      "Reels & short-form video",
      "Video editing & post-production",
    ],
    photoQuery: "camera,photography,video",
    icon: (
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <circle cx="12" cy="13" r="3" />
        <path d="M8 7l1.5-2h5L16 7" />
      </g>
    ),
  },
];
