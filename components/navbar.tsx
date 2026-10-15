"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "About", href: "#about", type: "hash" as const },
  { label: "Projects", href: "#projects", type: "hash" as const },
  { label: "Writing", href: "/writing", type: "page" as const },
  { label: "Contact", href: "#contact", type: "hash" as const },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isWritingPage = pathname === "/writing";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const hashLinks = navLinks
        .filter((l) => l.type === "hash")
        .map((l) => l.href.slice(1));
      for (let i = hashLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(hashLinks[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(hashLinks[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      setIsOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on homepage, let the default <a> navigation happen (goes to /#about etc.)
  };

  return (
    <nav className="relative w-full z-20 border-b border-zinc-200/60 dark:border-zinc-800/80 bg-[#fbf9f1]/70 dark:bg-zinc-950/60 backdrop-blur-sm transition-colors">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center gap-1.5 font-mono text-base font-bold text-zinc-950 dark:text-zinc-50 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <span className="text-indigo-600 dark:text-indigo-400">~/</span>
          <span>VanshWAGH</span>
        </Link>

        {/* Right Corner: Nav links + Theme Toggle */}
        <div className="hidden items-center gap-6 font-sans md:flex ml-auto">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.type === "page"
                  ? pathname === link.href
                  : isHomePage && activeSection === link.href.slice(1);

              if (link.type === "page") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative py-1 text-sm font-semibold transition-colors",
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className={cn(
                    "relative py-1 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-bold"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pl-4 border-l border-zinc-250 border-zinc-200 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1.5 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
            id="nav-toggle"
            type="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out bg-white/98 dark:bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => {
            const isActive =
              link.type === "page"
                ? pathname === link.href
                : isHomePage && activeSection === link.href.slice(1);

            if (link.type === "page") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-bold"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => {
                  handleHashClick(e, link.href);
                  setIsOpen(false);
                }}
                className={cn(
                  "py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-bold"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
