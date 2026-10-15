export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  publishDate: string;
  url: string;
  readTime?: string;
  featured?: boolean;
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
    readTime: "12 min",
    featured: true,
  },
  {
    id: "article-2",
    title: "RAG Evaluation: Separating Retrieval Quality from Answer Quality",
    summary:
      "How to evaluate RAG pipelines by measuring retrieval metrics (Recall@k, MRR) independently from generation faithfulness and relevance.",
    tags: ["RAG", "Evaluation", "AI"],
    publishDate: "2026-08-20",
    url: "#",
    readTime: "10 min",
    featured: true,
  },
  {
    id: "article-3",
    title: "From Manual QA to AI-Powered Test Automation",
    summary:
      "My journey from traditional test scripting to building AI-assisted automation workflows using DOM context and LLM-based test generation.",
    tags: ["Automation", "AI", "Career"],
    publishDate: "2026-07-10",
    url: "#",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "article-4",
    title: "Playwright at Scale: Custom Fixtures, Parallelism, and Flaky Test Isolation",
    summary:
      "Lessons from running 2000+ Playwright tests in CI — custom fixture patterns, worker isolation strategies, and flake detection heuristics.",
    tags: ["Playwright", "Testing", "CI/CD"],
    publishDate: "2026-06-05",
    url: "#",
    readTime: "14 min",
  },
  {
    id: "article-5",
    title: "Designing Evaluation Pipelines for LLM-Generated Content",
    summary:
      "An architectural guide to building automated eval pipelines — from prompt versioning and golden datasets to LLM-as-judge and human-in-the-loop scoring.",
    tags: ["LLM", "Evaluation", "Architecture"],
    publishDate: "2026-05-18",
    url: "#",
    readTime: "11 min",
  },
  {
    id: "article-6",
    title: "Vector Databases Compared: Pinecone vs Weaviate vs Qdrant",
    summary:
      "A hands-on comparison of popular vector stores — analyzing indexing speed, query latency, filtering capabilities, and cost at different scales.",
    tags: ["Vector DB", "RAG", "Infrastructure"],
    publishDate: "2026-04-22",
    url: "#",
    readTime: "15 min",
  },
  {
    id: "article-7",
    title: "Building a Semantic Search Engine with FastAPI and Sentence Transformers",
    summary:
      "Step-by-step guide to building a production-ready semantic search service — from embedding generation to HNSW indexing and API design.",
    tags: ["NLP", "FastAPI", "Python"],
    publishDate: "2026-03-14",
    url: "#",
    readTime: "9 min",
  },
  {
    id: "article-8",
    title: "Why Your Test Suite Is Lying to You: Coverage vs Confidence",
    summary:
      "Exploring the gap between code coverage metrics and actual test effectiveness — mutation testing, property-based testing, and coverage-guided fuzzing.",
    tags: ["Testing", "Quality", "Engineering"],
    publishDate: "2026-02-08",
    url: "#",
    readTime: "7 min",
  },
];
