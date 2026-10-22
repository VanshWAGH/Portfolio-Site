export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  publishDate: string;
  url: string;
  readTime?: string;
  featured?: boolean;
  platform?: "linkedin" | "blog";
}

export const articles: Article[] = [
  {
    id: "article-1",
    title: "Understanding the Full RAG Pipeline",
    summary:
      "Drew out the full RAG pipeline to understand it properly — from document ingestion and chunking through embedding, vector storage, retrieval, and LLM generation. A visual breakdown of every step in a Retrieval-Augmented Generation workflow.",
    tags: ["RAG", "LLM", "GenAI", "AI Engineering"],
    publishDate: "2026-10-20",
    url: "https://www.linkedin.com/posts/vansh-wagh-93a8b6254_rag-llm-genai-share-7518299652878823425-CQ5b/",
    readTime: "3 min",
    featured: true,
    platform: "linkedin",
  },
  {
    id: "article-2",
    title: "Reliability Patterns for AI Agent Workflows",
    summary:
      "What should you do when a request to your LLM fails? A deep dive into retry with exponential backoff & jitter, circuit breakers (CLOSED → OPEN → HALF_OPEN), bulkhead isolation, timeout & graceful degradation via fallback chains, and rate limiting strategies.",
    tags: ["AI Agents", "LLM", "System Design", "Software Engineering"],
    publishDate: "2026-10-10",
    url: "https://www.linkedin.com/posts/vansh-wagh-93a8b6254_aiagents-llm-systemdesign-share-7514752630339055616-OfoN/",
    readTime: "5 min",
    featured: true,
    platform: "linkedin",
  },
  {
    id: "article-3",
    title: "What Actually Is Jev? System 1 AI for Fast Structured Decisions",
    summary:
      "Exploring Jev — a System 1 model built for fast, structured decisions that software can use directly. How it differs from LLMs: millisecond responses, orders-of-magnitude cheaper per call, multi-question parallel sampling, and calibrated confidence scores via RLCD.",
    tags: ["AI", "Machine Learning", "LLM"],
    publishDate: "2026-09-08",
    url: "https://www.linkedin.com/posts/vansh-wagh-93a8b6254_what-is-jev-ugcPost-7510004610422628352-sNIU/",
    readTime: "4 min",
    featured: true,
    platform: "linkedin",
  },
];
