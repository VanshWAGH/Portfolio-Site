import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { GitHubActivitySection } from "@/components/sections/github-activity";
import { ExperienceSection } from "@/components/sections/experience";
import { WritingSection } from "@/components/sections/writing";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-200 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-200">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Single Column Container */}
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 pb-12 sm:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GitHubActivitySection />
        <ExperienceSection />
        <WritingSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
