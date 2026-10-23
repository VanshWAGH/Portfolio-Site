import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, XIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Cover Banner (Seamless bottom fade into background) */}
      <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="AI & Quality Automation Architecture Banner"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        />
        {/* Soft top shadow to complement navbar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
        {/* Gradual seamless fade at the bottom directly into the page canvas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#fbf9f1] dark:from-zinc-950 via-[#fbf9f1]/80 dark:via-zinc-950/80 to-transparent" />
      </div>

      {/* Profile Content Container (Overlapping banner) */}
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 sm:px-8">
        {/* Avatar and CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 -mt-16 sm:-mt-22">
          {/* Avatar overlapping banner (Circular Frame) */}
          <div className="group/avatar relative h-32 w-32 sm:h-40 sm:w-40 flex-shrink-0">
            <div className="h-full w-full rounded-full bg-[#fbf9f1] dark:bg-zinc-950 p-1.5 ring-4 sm:ring-6 ring-[#fbf9f1] dark:ring-zinc-950 shadow-2xl overflow-hidden transition-all duration-300 group-hover/avatar:scale-105 group-hover/avatar:ring-indigo-500">
              <div className="relative h-full w-full rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/vansh-wagh.jpg"
                  alt="Vansh Wagh"
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-cover object-center transition-transform duration-500 group-hover/avatar:scale-110"
                />
              </div>
            </div>
            {/* Online status indicator */}
            <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex h-4 w-4 sm:h-5 sm:w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 ring-2 ring-[#fbf9f1] dark:ring-zinc-950" />
            </span>
          </div>

          {/* Action buttons on top right */}
          <div className="flex flex-wrap items-center gap-3 sm:mb-2 sm:self-end">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "group gap-2 bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-semibold shadow-md shadow-indigo-600/20 px-5 py-2.5 rounded-xl"
              )}
              id="hero-projects-cta"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* User Details */}
        <div className="flex flex-col gap-2 pt-1">
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

        {/* Bio */}
        <p className="text-base sm:text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
          Software Engineer, Currently working at UBS. I build  building AI-powered testing and security-automation frameworks—turning APIs, specs, and business rules into intelligent, production-grade quality gates.
        </p>

        {/* Social links row (Minimal icon style matching reference) */}
        <div className="flex items-center gap-5 sm:gap-6 pt-1 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://github.com/VanshWagh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="hero-github"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            title="X"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="hero-x"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-wagh-93a8b6254/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="hero-linkedin"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
