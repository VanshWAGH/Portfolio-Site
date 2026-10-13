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
    <section id="about" className="flex flex-col gap-6 scroll-mt-8">
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

      {/* System design approach - Horizontal moving strip */}
      <div className="flex flex-col gap-3 pt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-900 dark:text-zinc-400 font-bold">
            My Engineering Breakdown Process
          </h3>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline-block">
            Hover to pause
          </span>
        </div>

        <div className="relative -mx-6 sm:-mx-8 overflow-hidden py-3 px-6 sm:px-8">
          <style>{`
            @keyframes engineeringMarquee {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .engineering-marquee-track {
              display: flex !important;
              width: max-content !important;
              animation: engineeringMarquee 25s linear infinite !important;
              will-change: transform;
            }
            .engineering-marquee-track:hover {
              animation-play-state: paused !important;
            }
          `}</style>

          {/* Left & Right gradient fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-[#fbf9f1] dark:from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-[#fbf9f1] dark:from-zinc-950 to-transparent" />

          {/* Marquee Track */}
          <div className="engineering-marquee-track flex items-center gap-3.5 sm:gap-4">
            {[...designSteps, ...designSteps].map((item, idx) => (
              <div
                key={`${item.step}-${idx}`}
                className="group flex items-center gap-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 px-5 py-3 sm:px-6 sm:py-3.5 shadow-xs hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-default select-none"
              >
                <span className="font-mono text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                  {item.step}
                </span>
                <span className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
