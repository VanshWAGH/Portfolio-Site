import { articles } from "@/data/writing";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { LinkedinIcon } from "@/components/icons";

export function WritingSection() {
  // Show only the first 2 articles as a teaser on the homepage
  const previewArticles = articles.filter((a) => a.featured).slice(0, 2);

  return (
    <section id="writing" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
            Technical Writing
          </h2>
          <Link
            href="/writing"
            className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-300 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            id="writing-view-all"
          >
            <span>View all articles</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Selected technical articles, architectural breakdowns, and hands-on
          guides.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="flex flex-col gap-4">
        {previewArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-none border border-zinc-200 dark:border-zinc-800/80 bg-transparent p-5 sm:p-6 transition-colors duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02]"
            id={`article-${article.id}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {article.platform === "linkedin" ? (
                  <LinkedinIcon className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                ) : (
                  <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                )}
                <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-zinc-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-zinc-500 dark:text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300" />
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 pl-8">
              {article.summary}
            </p>

            <div className="flex items-center justify-between gap-4 pt-1 pl-8">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-xs px-2.5 py-0.5 bg-transparent text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-medium rounded-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                {article.publishDate}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA to full writing page */}
      <Link
        href="/writing"
        className="group flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 py-3 font-mono text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-none"
        id="writing-see-all-cta"
      >
        See all {articles.length} articles
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
