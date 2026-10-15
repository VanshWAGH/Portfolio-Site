import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { WritingPageContent } from "@/components/sections/writing-page";

export const metadata: Metadata = {
  title: "Writing — Vansh Wagh | Technical Articles & Guides",
  description:
    "Technical articles, architectural breakdowns, and hands-on guides on AI systems, test automation, RAG evaluation, and LLM reliability by Vansh Wagh.",
  openGraph: {
    title: "Writing — Vansh Wagh | Technical Articles & Guides",
    description:
      "Technical articles, architectural breakdowns, and hands-on guides on AI systems, test automation, RAG evaluation, and LLM reliability.",
    type: "website",
  },
};

export default function WritingPage() {
  return (
    <div className="relative min-h-screen bg-[#fbf9f1] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-200 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-200">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      <WritingPageContent />
    </div>
  );
}
