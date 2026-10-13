"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { GitCommit, GitPullRequest, Flame, ExternalLink } from "lucide-react";

interface GitHubActivityProps {
  username?: string;
}

interface GitHubStats {
  publicRepos: number | null;
  followers: number | null;
}

export function GitHubActivitySection({
  username = "VanshWAGH",
}: GitHubActivityProps) {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: null,
    followers: null,
  });

  useEffect(() => {
    // Dynamically fetch live user statistics from GitHub API
    async function fetchGitHubData() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          setStats({
            publicRepos: data.public_repos ?? null,
            followers: data.followers ?? null,
          });
        }
      } catch {
        // Fallback to static values if offline or rate limited
      }
    }

    fetchGitHubData();
  }, [username]);

  return (
    <section id="github" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
              Activity
            </h2>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <span>@{username}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Live GitHub contributions &amp; repository activity dynamically updated.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      {/* GitHub contribution heatmap - dynamically loaded */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/6366f1/${username}`}
          alt={`${username}'s live GitHub contribution graph`}
          className="w-full min-w-[650px] h-auto rounded drop-shadow-sm transition-opacity"
          loading="lazy"
        />
      </div>

      {/* Stats counters */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 text-center shadow-sm transition-colors hover:border-zinc-400 dark:hover:border-zinc-700">
          <GitCommit className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 font-heading">
            Live
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-bold">
            Contributions
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 text-center shadow-sm transition-colors hover:border-zinc-400 dark:hover:border-zinc-700">
          <GitPullRequest className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 font-heading">
            {stats.publicRepos !== null ? stats.publicRepos : "18+"}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-bold">
            Repositories
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 text-center shadow-sm transition-colors hover:border-zinc-400 dark:hover:border-zinc-700">
          <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <span className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 font-heading">
            Active
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-bold">
            Streak
          </span>
        </div>
      </div>
    </section>
  );
}
