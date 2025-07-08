import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { BookText } from "lucide-react";

const tagColorMap: { [key: string]: string } = {
  rust: "bg-red/20 text-red border-red/30",
  systems: "bg-blue/20 text-blue border-blue/30",
  kernel: "bg-mauve/20 text-mauve border-mauve/30",
  webdev: "bg-green/20 text-green border-green/30",
  os: "bg-yellow/20 text-yellow border-yellow/30",
  default: "bg-surface2/20 text-subtext1 border-surface2/30",
};

const getTagColor = (tag: string) => {
  return tagColorMap[tag.toLowerCase()] || tagColorMap.default;
};

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-mauve flex items-center">
        <BookText className="w-8 h-8 mr-4" />
        Writings
      </h1>
      <ul className="space-y-8">
        {allPostsData.map(({ slug, title, date, description, tags }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="group block">
              <div className="bg-crust/50 p-6 rounded-xl border border-surface0 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-crust/50 group-hover:border-mauve/50 group-hover:shadow-xl group-hover:shadow-mauve/10">
                <p className="text-subtext1 mb-2">{date}</p>
                <h2 className="text-2xl font-semibold text-text group-hover:text-mauve transition-colors">
                  {title}
                </h2>
                <p className="text-subtext0 mt-3 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}