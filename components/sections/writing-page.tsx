"use client";

import { useState } from "react";
import { articles, type Article } from "@/data/writing";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  ArrowLeft,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "@/components/icons";

function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-5 border border-indigo-200/60 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30 dark:from-indigo-950/30 dark:via-transparent dark:to-purple-950/20 p-6 sm:p-8 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 rounded-none"
      id={`featured-${article.id}`}
    >
      {/* Featured badge */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="h-3 w-3" />
          Featured
        </span>
        {article.platform === "linkedin" && (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest font-bold text-[#0A66C2]">
            <LinkedinIcon className="h-3 w-3" />
            LinkedIn Post
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {article.title}
        </h3>
        <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-zinc-400 dark:text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300" />
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl">
        {article.summary}
      </p>

      <div className="flex items-center justify-between gap-4 pt-1">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-mono text-xs px-2.5 py-0.5 bg-indigo-100/60 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-500/20 font-medium rounded-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          {article.readTime && (
            <span className="flex items-center gap-1 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          )}
          <span className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {article.publishDate}
          </span>
        </div>
      </div>
    </a>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 border border-zinc-200 dark:border-zinc-800/80 bg-transparent p-5 sm:p-6 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02] rounded-none"
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
        <div className="flex items-center gap-4 flex-shrink-0">
          {article.readTime && (
            <span className="flex items-center gap-1 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          )}
          <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            {article.publishDate}
          </span>
        </div>
      </div>
    </a>
  );
}

export function WritingPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all unique tags
  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags))).sort();

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesTag = activeTag === null || article.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 pt-10 sm:pt-12 pb-16 sm:px-8">
      {/* Back to home */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
        id="writing-back-home"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Back to home
      </Link>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
          Technical Writing
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl">
          Articles, architectural breakdowns, and hands-on guides — distilled
          from building AI systems, test automation frameworks, and production
          infrastructure.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-zinc-200 dark:border-zinc-800 font-mono text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors rounded-none"
            id="writing-search"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "font-mono text-xs px-3 py-1.5 border transition-colors rounded-none font-medium",
              activeTag === null
                ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500"
                : "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
            )}
            type="button"
            id="filter-all"
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={cn(
                "font-mono text-xs px-3 py-1.5 border transition-colors rounded-none font-medium",
                activeTag === tag
                  ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500"
                  : "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
              )}
              type="button"
              id={`filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Article Count */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          {filteredArticles.length} article{filteredArticles.length !== 1 && "s"}
          {activeTag && ` tagged "${activeTag}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        <a
          href="https://www.linkedin.com/in/vansh-wagh-93a8b6254"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-300 transition-colors hover:text-[#0A66C2] dark:hover:text-[#0A66C2]"
          id="writing-linkedin-link"
        >
          <LinkedinIcon className="h-4 w-4" />
          <span>All on LinkedIn</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="flex flex-col gap-4">
          {featuredArticles.map((article) => (
            <FeaturedArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <div className="flex flex-col gap-4">
          {featuredArticles.length > 0 && (
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-bold pt-2">
              More Articles
            </h2>
          )}
          {regularArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <BookOpen className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
          <div className="flex flex-col gap-1">
            <p className="font-heading font-bold text-lg text-zinc-600 dark:text-zinc-400">
              No articles found
            </p>
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTag(null);
            }}
            className="font-mono text-xs px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-none font-medium"
            type="button"
            id="writing-clear-filters"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-center pt-8 pb-4">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          © 2026 Vansh Wagh · All rights reserved
        </p>
      </div>
    </main>
  );
}
