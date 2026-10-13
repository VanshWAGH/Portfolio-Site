import { articles } from "@/data/writing";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function WritingSection() {
  return (
    <section id="writing" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
            Technical Writing
          </h2>
          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-300 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            id="writing-view-all"
          >
            <span>All on Hashnode</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Selected technical articles, architectural breakdowns, and hands-on
          guides.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md shadow-sm"
            id={`article-${article.id}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
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
                    className="font-mono text-xs px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 font-medium"
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
    </section>
  );
}
