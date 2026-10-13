import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  XIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  HashnodeIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-6 scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-sm sm:text-base uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
          Contact
        </h2>
        <Separator className="w-16 h-0.5 bg-indigo-600 dark:bg-indigo-500" />
      </div>

      <div className="relative overflow-hidden flex flex-col items-center gap-6 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-gradient-to-b dark:from-zinc-900/60 dark:to-zinc-950/90 p-8 sm:p-12 text-center shadow-md dark:shadow-2xl backdrop-blur-md">
        {/* Subtle glow background */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 bg-indigo-500/10 blur-3xl rounded-full" />

        <div className="flex flex-col items-center gap-3 max-w-lg">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
            Let&apos;s build something reliable
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Open to discussing AI automation platforms, quality engineering
            architecture, LLM reliability, or exciting engineering roles.
          </p>
        </div>

        {/* Social channels (Minimal icon style matching reference) */}
        <div className="flex items-center justify-center gap-6 text-zinc-600 dark:text-zinc-400 pt-1">
          <a
            href="https://github.com/VanshWagh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="contact-github"
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
            id="contact-x"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="contact-youtube"
          >
            <YoutubeIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-wagh-93a8b6254/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="contact-linkedin"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="contact-instagram"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href="https://hashnode.com/@vansh31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode"
            title="Hashnode"
            className="transition-all duration-200 hover:text-zinc-950 dark:hover:text-white hover:scale-110"
            id="contact-hashnode"
          >
            <HashnodeIcon className="h-6 w-6" />
          </a>
        </div>

        {/* Email button & Resume */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href="mailto:waghvansh12@gmail.com"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "gap-2 bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-semibold shadow-md shadow-indigo-600/25 px-5 py-2.5"
            )}
            id="contact-email"
          >
            <Mail className="h-4 w-4" />
            <span>waghvansh12@gmail.com</span>
            <ArrowUpRight className="h-4 w-4 opacity-75" />
          </a>
          <a
            href="/resume.pdf"
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "default" }),
              "gap-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white text-sm font-semibold px-5 py-2.5 shadow-sm"
            )}
            id="contact-resume"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-300 dark:border-zinc-800 py-8 mt-12 text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm">
      <p>
        © 2026 Vansh Wagh · Pune, India
      </p>
      <p className="text-zinc-500 dark:text-zinc-500">
        Built with Next.js, TypeScript &amp; Tailwind CSS
      </p>
    </footer>
  );
}
