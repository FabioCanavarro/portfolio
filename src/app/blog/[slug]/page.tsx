import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type PostProps = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const param = await params; // Ensure params is awaited
  const post = await getPostData(param.slug);

  return {
    title: `${post.title} | Fabio Canavarro`,
    description: post.description || "A blog post by Fabio Canavarro.",
  };
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params; // Destructure here
  const postData = await getPostData(slug);

  return (
    <div className="bg-crust/50 backdrop-blur-sm border border-surface0 rounded-2xl p-8 md:p-12 shadow-lg shadow-crust/50">
      <article className="prose prose-invert prose-lg max-w-none font-code prose-pre:bg-crust prose-pre:border prose-pre:border-surface0 prose-headings:text-mauve prose-a:text-rosewater prose-strong:text-text">
        <Link
          href="/blog"
          className="flex items-center text-subtext1 hover:text-text mb-8 no-underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="flex items-center text-subtext1 mt-0">
          <span>{postData.date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{postData.readingTime} min read</span>
          </div>
        </div>
        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>

      {/* Navigation Links */}
      <div className="mt-12 pt-8 border-t border-surface0 flex justify-between">
        {postData.previousPost ? (
          <Link
            href={`/blog/${postData.previousPost.slug}`}
            className="flex items-center text-subtext1 hover:text-mauve transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            <div>
              <p className="text-sm">Previous</p>
              <p className="text-text font-semibold">
                {postData.previousPost.title}
              </p>
            </div>
          </Link>
        ) : (
          <div /> // Empty div to maintain spacing
        )}
        {postData.nextPost && (
          <Link
            href={`/blog/${postData.nextPost.slug}`}
            className="flex items-center text-subtext1 hover:text-mauve transition-colors text-right"
          >
            <div>
              <p className="text-sm">Next</p>
              <p className="text-text font-semibold">
                {postData.nextPost.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        )}
      </div>
    </div>
  );
}