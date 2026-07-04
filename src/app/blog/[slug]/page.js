import { PageHeader } from "@/components/site";
import { POSTS } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — Artline Media" };
  return { title: `${post.title} — Artline Media` };
}

export function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        title={post.title}
        subtitle="Insights, ideas, and strategies to help you grow your business online."
      />
      <article className="mx-auto max-w-[48rem] px-6 pb-24 pt-12">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#eb0b8b] transition-colors mb-10">
          <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Blog
        </Link>

        <div className="flex items-center mb-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] border border-gray-200 bg-[#fafafa] text-[#eb0b8b] shadow-sm">
            {post.icon}
          </div>
          <p className="ml-6 text-[1.1rem] text-gray-600 leading-relaxed font-medium border-l-2 border-gray-200 pl-6 py-2">
            {post.summary}
          </p>
        </div>

        <div className="whitespace-pre-wrap leading-[1.8] text-[1.1rem] text-gray-700">
          {post.content}
        </div>
      </article>
    </main>
  );
}
