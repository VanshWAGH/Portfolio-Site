import { Separator } from "@/components/ui/separator";

const designSteps = [
  { step: "01", label: "User flow & requirements" },
  { step: "02", label: "Components & responsibilities" },
  { step: "03", label: "APIs & data models" },
  { step: "04", label: "Reliability & failure handling" },
  { step: "05", label: "Testing strategy" },
  { step: "06", label: "Observability & evaluation" },
  { step: "07", label: "Deployment & scalability" },
];

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
          About
        </h2>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-zinc-800 dark:text-zinc-300">
        <p>
          I am a QA Automation Engineer with hands-on experience in browser
          automation, test design, and AI-assisted testing frameworks. I work
          with{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-bold">
            Selenium, Playwright, Python, and TypeScript
          </strong>
          , designing structured test workflows that scale.
        </p>
        <p>
          I am advancing toward{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-bold">
            AI Automation Engineer
          </strong>{" "}
          and{" "}
          <strong className="text-zinc-950 dark:text-zinc-100 font-bold">
            AI Engineer
          </strong>{" "}
          roles by engineering practical tools for RAG evaluation, LLM
          reliability, intelligent test selection, and agentic workflows.
        </p>
        <blockquote className="rounded-xl border-l-4 border-indigo-600 dark:border-indigo-500 bg-indigo-50/80 dark:bg-zinc-900/60 p-5 text-base sm:text-lg font-medium italic text-zinc-900 dark:text-zinc-200 shadow-sm">
          &ldquo;For me, an AI feature is not complete when it produces an
          answer — it must also be testable, evaluable, cost-aware, traceable,
          and engineered to fail safely.&rdquo;
        </blockquote>
      </div>

      {/* System design approach */}
      <div className="flex flex-col gap-3 pt-3">
        <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-900 dark:text-zinc-400 font-bold">
          My Engineering Breakdown Process
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {designSteps.map((item) => (
            <div
              key={item.step}
              className="group flex items-center gap-3.5 rounded-xl border border-zinc-250 border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-4 py-3 transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 shadow-sm"
            >
              <span className="font-mono text-sm font-bold text-indigo-700 dark:text-indigo-400">
                {item.step}
              </span>
              <span className="text-sm sm:text-base text-zinc-900 dark:text-zinc-200 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
