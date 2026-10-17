"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
        aria-label="Toggle theme"
        type="button"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-105 shadow-sm cursor-pointer"
      aria-label="Toggle light and dark mode"
      type="button"
      id="theme-toggle"
    >
      <Sun className="h-4 w-4 hidden dark:block text-amber-400 transition-transform duration-300 hover:rotate-45" />
      <Moon className="h-4 w-4 block dark:hidden text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
    </button>
  );
}
