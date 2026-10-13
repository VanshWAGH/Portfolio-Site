import { skillCategories } from "@/data/skills";
import { Separator } from "@/components/ui/separator";

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
          Skills &amp; Expertise
        </h2>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Core toolchain across quality engineering, LLM systems, backend, and
          infrastructure.
        </p>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 shadow-sm hover:shadow-md transition-shadow"
            id={`skill-${category.id}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{category.icon}</span>
              <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-zinc-950 dark:text-zinc-100">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 px-3 py-1.5 font-mono text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-all hover:text-zinc-950 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
