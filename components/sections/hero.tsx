import Image from "next/image";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, HashnodeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-8 pt-24 pb-6">
      {/* Cover Banner Card (LinkedIn / Profile style) */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-250 border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-md dark:shadow-2xl backdrop-blur-sm transition-colors duration-200">
        {/* Banner image header */}
        <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-zinc-950">
          <Image
            src="/banner.jpg"
            alt="AI & Quality Automation Architecture Banner"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-zinc-950/95 via-transparent to-transparent transition-colors duration-200" />
        </div>

        {/* Profile Content overlapping banner */}
        <div className="relative px-6 pb-7 sm:px-8">
          {/* Avatar and CTAs row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 -mt-16 sm:-mt-22 mb-5">
            {/* Avatar overlapping banner (Pure Circular Frame) */}
            <div className="group/avatar relative h-28 w-28 sm:h-36 sm:w-36 flex-shrink-0">
              <div className="h-full w-full rounded-full bg-white dark:bg-zinc-950 p-1.5 ring-4 ring-white dark:ring-zinc-950 shadow-2xl overflow-hidden transition-all duration-300 group-hover/avatar:scale-105 group-hover/avatar:ring-indigo-500">
                <div className="relative h-full w-full rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src="/vansh-wagh.jpg"
                    alt="Vansh Wagh"
                    fill
                    priority
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover object-center transition-transform duration-500 group-hover/avatar:scale-110"
                  />
                </div>
              </div>
              {/* Online status indicator */}
              <span className="absolute bottom-1 right-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
              </span>
            </div>

            {/* CTAs on top right */}
            <div className="flex flex-wrap items-center gap-3 sm:mb-2">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "group gap-2 bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-semibold shadow-md shadow-indigo-600/20 px-5 py-2.5 rounded-xl"
                )}
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/resume.pdf"
                download
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "gap-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm"
                )}
              >
                <FileText className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                Download Resume
              </a>
            </div>
          </div>

          {/* User Details */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                Vansh Wagh
              </h1>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                Open to opportunities
              </div>
            </div>

            <p className="font-mono text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-400">
              QA Automation Engineer · AI Systems Builder
            </p>
            <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
              Pune, India · Currently at <span className="font-bold text-zinc-950 dark:text-zinc-200">UBS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bio and Headline */}
      <div className="flex flex-col gap-3 px-1">
        <h2 className="text-xl sm:text-2xl font-bold leading-snug text-zinc-950 dark:text-zinc-100">
          Building AI-powered testing platforms, reliable LLM systems, and
          evaluation-driven automation tools.
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-zinc-750 text-zinc-800 dark:text-zinc-300">
          I work at the intersection of quality engineering, AI automation,
          backend systems, and developer tooling. Transitioning QA automation into
          measurable, production-grade AI systems.
        </p>
      </div>

      {/* Social links row */}
      <div className="flex flex-wrap items-center gap-3 px-1 text-zinc-800 dark:text-zinc-300">
        <a
          href="https://github.com/VanshWagh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 px-4 py-2 text-sm font-semibold transition-colors hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white shadow-sm"
          id="hero-github"
        >
          <GithubIcon className="h-4 w-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/vanshwagh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 px-4 py-2 text-sm font-semibold transition-colors hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white shadow-sm"
          id="hero-linkedin"
        >
          <LinkedinIcon className="h-4 w-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://hashnode.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hashnode Blog"
          className="flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 px-4 py-2 text-sm font-semibold transition-colors hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white shadow-sm"
          id="hero-hashnode"
        >
          <HashnodeIcon className="h-4 w-4" />
          <span>Hashnode</span>
        </a>
        <a
          href="mailto:waghvansh@gmail.com"
          aria-label="Email"
          className="flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 px-4 py-2 text-sm font-semibold transition-colors hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white shadow-sm"
          id="hero-email"
        >
          <Mail className="h-4 w-4" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
