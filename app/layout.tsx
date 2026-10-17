import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vansh Wagh — QA Automation Engineer · AI Systems Builder",
  description:
    "QA Automation Engineer building AI-powered testing and security-automation frameworks—turning APIs, specs, and business rules into intelligent, production-grade quality gates.",
  keywords: [
    "Vansh Wagh",
    "QA Automation Engineer",
    "AI Automation",
    "AI Engineer",
    "Playwright",
    "Selenium",
    "RAG Evaluation",
    "LLM Reliability",
    "UBS",
    "System Design",
  ],
  authors: [{ name: "Vansh Wagh" }],
  openGraph: {
    title: "Vansh Wagh — QA Automation Engineer · AI Systems Builder",
    description:
      "QA Automation Engineer building AI-powered testing and security-automation frameworks—turning APIs, specs, and business rules into intelligent, production-grade quality gates.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f1" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased scroll-smooth",
        jakartaSans.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fbf9f1] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
