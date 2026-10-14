import { experiences } from "@/data/experience";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
          Experience
        </h2>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-8 pl-2">
        {/* Continuous vertical line */}
        <div className="absolute left-[13px] top-4 bottom-4 w-0.5 bg-zinc-300 dark:bg-zinc-800" />

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative flex gap-5"
            id={`exp-${exp.id}`}
          >
            {/* Timeline node */}
            <div className="relative z-10 mt-1.5 flex-shrink-0">
              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border shadow-sm",
                  exp.current
                    ? "border-indigo-600 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400"
                    : "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                )}
              >
                <Briefcase className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Experience details card */}
            <div className="flex flex-col gap-3 rounded-none border border-zinc-200 dark:border-zinc-800/80 bg-transparent p-5 sm:p-6 w-full transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading font-bold text-xl text-zinc-950 dark:text-zinc-50 tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>

              <p className="font-mono text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-400">
                {exp.role}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-800 dark:text-zinc-300">
                {exp.description}
              </p>

              <ul className="flex flex-col gap-2 pl-4 text-sm sm:text-base text-zinc-800 dark:text-zinc-300 pt-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="list-disc leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
