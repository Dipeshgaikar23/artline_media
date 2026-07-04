const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export const POSTS = [
  {
    slug: "how-to-scale-your-business-online-with-us",
    icon: <BoltIcon />,
    title: "How to scale your business online with us",
    summary: "Unlock the growth potential of your business with our proven digital strategies.",
    content: `Scaling a business in the modern digital landscape requires more than just a functional website; it demands a comprehensive, integrated strategy that spans across multiple platforms. At The Artline Media, we specialize in identifying the unique growth levers for your brand and capitalizing on them to drive sustainable, long-term expansion.

The first step to scaling is understanding your digital footprint. We conduct a thorough audit of your current online presence, analyzing everything from your website's user experience to your social media engagement. This allows us to pinpoint bottlenecks and uncover untapped opportunities where small optimizations can yield massive returns on investment.

Once we have a clear picture, we deploy targeted campaigns designed to accelerate your growth. Whether it's through high-converting sales funnels, aggressive content marketing, or precision-targeted advertising, our goal is simple: to turn your online presence into a predictable revenue-generating engine that scales alongside your ambition.`
  },
  {
    slug: "how-to-rank-with-seo-and-geo",
    icon: <GlobeIcon />,
    title: "How to rank with SEO and GEO",
    summary: "Dominate your local market by combining smart SEO with targeted geographical outreach.",
    content: `Search Engine Optimization (SEO) is no longer just about stuffing keywords into web pages; it’s about providing highly relevant, localized experiences. Geographical Optimization (GEO) takes traditional SEO a step further by tailoring your content to the specific locations where your highest-converting customers reside.

By leveraging local search trends, optimizing Google Business Profiles, and building localized citations, we ensure that your business appears right at the top when nearby customers search for the services you provide. This hyper-targeted approach significantly reduces bounce rates and dramatically increases foot traffic and local inquiries.

Furthermore, combining SEO and GEO creates a compounding effect. As your local authority grows, search engines begin to trust your brand more, which positively impacts your broader, national rankings. It’s a strategic foundation that builds trust within your immediate community while simultaneously expanding your digital horizon.`
  },
  {
    slug: "grow-faster-with-meta-ads",
    icon: <TrendingUpIcon />,
    title: "Grow faster with Meta Ads",
    summary: "Turn clicks into customers using high-converting Facebook and Instagram ad campaigns.",
    content: `Meta Ads (spanning Facebook, Instagram, and the Audience Network) remain one of the most powerful tools in a digital marketer’s arsenal. The sheer volume of user data available allows for unprecedented targeting capabilities, enabling you to put your brand directly in front of the people most likely to buy from you.

However, a successful Meta Ads strategy requires more than just throwing money at boosted posts. We focus on full-funnel advertising: capturing attention with scroll-stopping creatives, nurturing interest through strategic retargeting, and finally, driving the conversion with compelling, irresistible offers. 

Continuous testing is the secret to our success. We meticulously split-test ad copy, creatives, audience segments, and landing pages to ensure your cost-per-acquisition consistently decreases over time. By letting data drive our decisions, we transform your ad spend from a business expense into a predictable, highly profitable investment.`
  },
  {
    slug: "targeting-your-ideal-audience",
    icon: <TargetIcon />,
    title: "Targeting your ideal audience",
    summary: "Stop wasting ad spend. Learn how to reach the people most likely to buy from you.",
    content: `One of the most common mistakes businesses make is trying to sell to everyone. In the digital world, casting too wide a net usually results in wasted resources and diluted messaging. Identifying and targeting your ideal audience is the crucial first step to ensuring your marketing budget actually generates a return.

We start by building detailed customer personas. We look beyond basic demographics like age and location, diving deep into psychographics: their pain points, desires, online behaviors, and the specific problems they are trying to solve. Understanding the 'why' behind their purchasing decisions allows us to craft messaging that resonates on a profound level.

Armed with this data, we precision-target your campaigns across all platforms. Instead of shouting into the void, your brand begins to have meaningful conversations with the right people at the exact right time. This laser-focused approach not only increases conversion rates but also builds long-term brand loyalty among your most valuable customers.`
  },
  {
    slug: "data-driven-marketing-decisions",
    icon: <BarChartIcon />,
    title: "Data-driven marketing decisions",
    summary: "Use analytics and data insights to make smarter, more profitable marketing choices.",
    content: `In today’s highly competitive digital arena, relying on gut feelings and guesswork is a guaranteed path to stagnation. Data-driven marketing removes the emotion from decision-making, allowing you to clearly see what is working, what isn't, and exactly where your marketing dollars are best spent.

We implement robust tracking systems to monitor every touchpoint of your customer's journey. From the first ad click to the final checkout page, we analyze the metrics that matter most: bounce rates, conversion rates, customer lifetime value, and return on ad spend (ROAS). This wealth of information paints a clear picture of your digital health.

By interpreting this data, we can rapidly iterate and optimize your campaigns. If a specific landing page is underperforming, the data tells us why. If a certain ad creative is driving cheap but unqualified traffic, we pivot. This agile, analytical approach ensures that your marketing strategy is always evolving, always improving, and always focused on maximizing your bottom line.`
  },
  {
    slug: "great-marketing-doesnt-have-to-be-expensive",
    icon: <StarIcon />,
    title: "Great Marketing Doesn't Have to Be Expensive",
    summary: "Get high-quality digital marketing solutions at practical, affordable prices without compromising on results.",
    content: `Finding the right digital marketing partner can be challenging. Many agencies are either too expensive or fail to deliver the quality businesses truly deserve. That’s the problem our founder & CEO, Dipak K. Ray, set out to solve. In 2023, he founded THE ARTLINE MEDIA in Navi Mumbai with a clear mission—to deliver high-quality digital marketing solutions at practical, affordable prices.

Our promise is simple: We act as your end-to-end digital partner. From strategy and content creation to advertising and performance analysis, we manage everything—so you can focus on growing your business. We are a small, dedicated team, which means direct communication, personalized attention, and measurable results—without the heavy costs of large agencies.

At THE ARTLINE MEDIA, we believe every business—big or small—deserves the opportunity to grow online. We streamline our processes, cut out unnecessary corporate overhead, and focus entirely on strategies that actually drive revenue. Let us help you make that happen. Ready to grow your brand? Get in touch today.`
  }
];
