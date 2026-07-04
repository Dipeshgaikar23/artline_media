import { PageHeader } from "@/components/site";
import Link from "next/link";
import { POSTS } from "./data";

export const metadata = { title: "Blog — Artline Media" };

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
            <Link 
              href={`/blog/${post.slug}`}
              key={i} 
              className="group flex flex-col rounded-[20px] bg-[#fafafa] p-8 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-900 shadow-sm transition-colors group-hover:border-[#eb0b8b] group-hover:text-[#eb0b8b]">
                    {post.icon}
                  </div>
                  <div className="ml-4 mt-2 shrink-0 rounded-full bg-white p-2 border border-gray-200 text-gray-400 transition-colors group-hover:border-[#eb0b8b] group-hover:text-[#eb0b8b] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-semibold text-gray-900 transition-colors group-hover:text-[#eb0b8b]">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{post.summary}</p>
                <div className="mt-auto pt-5 flex items-center font-medium text-[0.95rem] text-[#eb0b8b]">
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
