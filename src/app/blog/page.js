import { PageHeader } from "@/components/site";

export const metadata = { title: "Blog — Artline Media" };

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

const POSTS = [
  {
    icon: <BoltIcon />,
    title: "How to scale your business online with us",
    summary: "Unlock the growth potential of your business with our proven digital strategies.",
    content: "Discover the exact strategies we use to help businesses expand their digital footprint, optimize operations, and drive meaningful, sustainable growth."
  },
  {
    icon: <GlobeIcon />,
    title: "How to rank with SEO and GEO",
    summary: "Dominate your local market by combining smart SEO with targeted geographical outreach.",
    content: "Learn how combining Search Engine Optimization with geographical targeting can help you dominate your local market and attract high-intent customers."
  },
  {
    icon: <TrendingUpIcon />,
    title: "Grow faster with Meta Ads",
    summary: "Turn clicks into customers using high-converting Facebook and Instagram ad campaigns.",
    content: "A comprehensive breakdown on leveraging Facebook and Instagram advertising to skyrocket your customer acquisition and maximize return on ad spend."
  },
  {
    icon: <TargetIcon />,
    title: "Targeting your ideal audience",
    summary: "Stop wasting ad spend. Learn how to reach the people most likely to buy from you.",
    content: "We focus on targeting specific demographics and behaviors to ensure your message reaches the people who are most likely to convert into loyal customers."
  },
  {
    icon: <BarChartIcon />,
    title: "Data-driven marketing decisions",
    summary: "Use analytics and data insights to make smarter, more profitable marketing choices.",
    content: "Stop guessing. See how analyzing your marketing data can significantly improve your campaign performance and overall digital strategy."
  },
  {
    icon: <StarIcon />,
    title: "Great Marketing Doesn't Have to Be Expensive",
    summary: "Get high-quality digital marketing solutions at practical, affordable prices without compromising on results.",
    content: `Finding the right digital marketing partner can be challenging. Many agencies are either too expensive or fail to deliver the quality businesses truly deserve.

That’s the problem our founder & CEO, Dipak K. Ray, set out to solve. In 2023, he founded THE ARTLINE MEDIA in Navi Mumbai with a clear mission—to deliver high-quality digital marketing solutions at practical, affordable prices.

Our promise is simple:
We act as your end-to-end digital partner. From strategy and content creation to advertising and performance analysis, we manage everything—so you can focus on growing your business.

We are a small, dedicated team, which means direct communication, personalized attention, and measurable results—without the heavy costs of large agencies.

At THE ARTLINE MEDIA, we believe every business—big or small—deserves the opportunity to grow online. Let us help you make that happen.

Ready to grow your brand? Get in touch today.`
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageHeader
        title="The Artline Media Blog"
        subtitle="Insights, ideas, and strategies to help you grow your business online."
      />
      <section className="mx-auto max-w-[85rem] px-6 pb-24 pt-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <details 
              key={i} 
              className="group flex flex-col rounded-[20px] bg-[#fafafa] p-8"
            >
              <summary className="flex cursor-pointer flex-col list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-start justify-between">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-900 shadow-sm">
                    {post.icon}
                  </div>
                  <div className="ml-4 mt-2 shrink-0 rounded-full bg-white p-2 border border-gray-200 text-gray-400 transition-transform duration-300 group-open:rotate-180 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{post.summary}</p>
                <div className="mt-5 flex items-center font-medium text-[0.95rem] text-[#eb0b8b] group-open:hidden">
                  Read More
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                <div className="mt-5 hidden items-center font-medium text-[0.95rem] text-[#eb0b8b] group-open:flex">
                  Show Less
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path></svg>
                </div>
              </summary>
              <div className="mt-4 text-[0.95rem] leading-relaxed text-gray-600 whitespace-pre-wrap border-t border-gray-200 pt-5">
                {post.content}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
