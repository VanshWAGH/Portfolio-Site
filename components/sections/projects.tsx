"use client";

import { useState } from "react";
import { projects, type ProjectStatus } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  ProjectStatus,
  { dot: string; bg: string; border: string; text: string }
> = {
  Building: {
    dot: "bg-emerald-600 dark:bg-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-300 dark:border-emerald-500/30",
    text: "text-emerald-800 dark:text-emerald-300",
  },
  "In Progress": {
    dot: "bg-amber-600 dark:bg-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-300 dark:border-amber-500/30",
    text: "text-amber-800 dark:text-amber-300",
  },
  Published: {
    dot: "bg-blue-600 dark:bg-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-300 dark:border-blue-500/30",
    text: "text-blue-800 dark:text-blue-300",
  },
  Planned: {
    dot: "bg-zinc-600 dark:bg-zinc-400",
    bg: "bg-zinc-100 dark:bg-zinc-500/10",
    border: "border-zinc-300 dark:border-zinc-500/30",
    text: "text-zinc-800 dark:text-zinc-300",
  },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const config = statusConfig[project.status];

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-2xl shadow-sm backdrop-blur-sm"
      id={`project-${project.id}`}
    >
      <div className="flex flex-col gap-4">
        {/* Header: Title & Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-950 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            <div
              className={cn(
                "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-0.5 text-xs font-mono font-semibold",
                config.bg,
                config.border,
                config.text
              )}
            >
              <span className={cn("h-2 w-2 rounded-full", config.dot)} />
              {project.status}
            </div>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white"
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-mono text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-250 border-zinc-300 dark:border-zinc-700 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Expandable features section */}
      <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-300 transition-colors hover:text-indigo-600 dark:hover:text-white"
          id={`toggle-${project.id}`}
          type="button"
        >
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          {expanded ? "Hide architecture details" : "Key features & architecture"}
        </button>

        {expanded && (
          <div className="mt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-1 duration-200">
            <ul className="flex flex-col gap-2 pl-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {project.features.map((feature, i) => (
                <li key={i} className="list-disc leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>

            {/* Architecture diagram placeholder */}
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 p-5 text-center">
              <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-200">
                Architecture Blueprint
              </span>
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                Component diagram &amp; dataflow pipeline schema
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
            Projects
          </h2>
          <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            {projects.length} featured systems
          </span>
        </div>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Core engineering projects bridging QA automation with production AI
          systems.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
