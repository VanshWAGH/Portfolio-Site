import Image from "next/image";
import { projects } from "@/data/projects";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-transparent transition-colors duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02] rounded-none"
      id={`project-${project.id}`}
    >
      {/* Project Preview Image */}
      {project.previewImage && (
        <a
          href={project.liveUrl || project.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/30 dark:bg-zinc-900/30 rounded-none group/img block"
          aria-label={`${project.title} preview`}
        >
          <Image
            src={project.previewImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105 rounded-none"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 dark:group-hover/img:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
            <span className="flex items-center gap-1.5 bg-zinc-900/90 text-white dark:bg-zinc-100 dark:text-zinc-900 px-3 py-1.5 text-xs font-mono font-semibold tracking-wide border border-white/20 dark:border-black/20 shadow-sm rounded-none transition-transform duration-200 group-hover/img:scale-105">
              <span>Preview</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </a>
      )}

      {/* Card Content: Title, Links & Description Only */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 gap-3">
        <div className="flex flex-col gap-2.5">
          {/* Header: Title and Links */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-950 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <a
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            </h3>

            {/* Links */}
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-200 dark:border-zinc-800 bg-transparent p-1.5 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors rounded-none"
                  aria-label={`${project.title} GitHub`}
                  title="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border border-zinc-200 dark:border-zinc-800 bg-transparent px-2.5 py-1 text-xs font-mono font-medium hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors rounded-none"
                  aria-label={`${project.title} live preview`}
                  title="Live Preview"
                >
                  <span>Preview</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Description Only */}
          <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.description}
          </p>
        </div>
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
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500 rounded-none" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
