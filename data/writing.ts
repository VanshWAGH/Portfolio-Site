export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  publishDate: string;
  url: string;
}

export const articles: Article[] = [
  {
    id: "article-1",
    title: "Building Reliable LLM Clients: Timeouts, Retries, and Circuit Breakers",
    summary:
      "A deep dive into production resilience patterns for calling LLM APIs — covering exponential backoff, jitter, fallback chains, and graceful degradation.",
    tags: ["LLM", "Reliability", "System Design"],
    publishDate: "2026-09-15",
    url: "#",
  },
  {
    id: "article-2",
    title: "RAG Evaluation: Separating Retrieval Quality from Answer Quality",
    summary:
      "How to evaluate RAG pipelines by measuring retrieval metrics (Recall@k, MRR) independently from generation faithfulness and relevance.",
    tags: ["RAG", "Evaluation", "AI"],
    publishDate: "2026-08-20",
    url: "#",
  },
  {
    id: "article-3",
    title: "From Manual QA to AI-Powered Test Automation",
    summary:
      "My journey from traditional test scripting to building AI-assisted automation workflows using DOM context and LLM-based test generation.",
    tags: ["Automation", "AI", "Career"],
    publishDate: "2026-07-10",
    url: "#",
  },
];
