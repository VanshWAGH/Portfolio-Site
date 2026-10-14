export type ProjectStatus = "Building" | "In Progress" | "Published" | "Planned";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  features: string[];
  previewImage?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ai-qe-platform",
    title: "AI Quality Engineering Platform",
    description:
      "An AI-assisted platform for generating, organizing, executing, and evaluating browser automation workflows from structured test intent and web-page context.",
    status: "Building",
    techStack: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "Python",
      "PostgreSQL",
      "Redis",
      "OpenRouter",
    ],
    features: [
      "Structured test-case and BDD-style test design",
      "Separate test intent, components, locators, generated test code, and execution jobs",
      "AI-assisted automation generation",
      "Playwright browser execution",
      "Test-result collection and failure analysis",
      "Human review before generated automation is executed",
      "Traceability from requirement to execution result",
    ],
    previewImage: "/projects/ai-qe-platform.jpg",
    githubUrl: "https://github.com/VanshWagh/ai-quality-engineering-platform",
    liveUrl: "https://ai-qe-platform.vercel.app",
  },
  {
    id: "rag-eval-workbench",
    title: "RAG Evaluation Workbench",
    description:
      "A system that evaluates Retrieval-Augmented Generation pipelines by separating retrieval quality from answer quality.",
    status: "In Progress",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "OpenTelemetry",
      "GitHub Actions",
    ],
    features: [
      "Golden dataset management",
      "Retrieval metrics: Recall@k, MRR, hit rate",
      "Generation evaluation: faithfulness/groundedness and relevance",
      "Prompt and model comparison",
      "Experiment tracking",
      "Failure review with traces and retrieved source documents",
      "Regression tests and quality gates for prompts/models",
    ],
    previewImage: "/projects/rag-eval-workbench.jpg",
    githubUrl: "https://github.com/VanshWagh/rag-evaluation-workbench",
    liveUrl: "https://rag-eval-workbench.vercel.app",
  },
  {
    id: "regression-selector",
    title: "Intelligent Regression Test Selector",
    description:
      "A CI-focused system that recommends a safe, smaller regression-test subset for each pull request based on code changes and historical test data.",
    status: "Planned",
    techStack: ["Python", "FastAPI", "PostgreSQL", "GitHub Actions", "Docker"],
    features: [
      "Code-diff ingestion",
      "CI test-history ingestion",
      "Rule-based baseline selection",
      "Risk-based prioritization",
      "Regression-recall measurement",
      "Explainable selection reasons",
      "CI integration",
      "Fallback to full regression suite when confidence is low",
    ],
    previewImage: "/projects/regression-selector.jpg",
    githubUrl: "https://github.com/VanshWagh/intelligent-regression-selector",
    liveUrl: "https://regression-selector.vercel.app",
  },
  {
    id: "reliable-llm-client",
    title: "Reliable LLM Client",
    description:
      "A small reference project that shows how to safely call unreliable LLM providers with production-grade resilience patterns.",
    status: "Planned",
    techStack: ["Python", "asyncio", "OpenTelemetry", "Docker"],
    features: [
      "Per-attempt timeout and end-to-end deadline",
      "Bounded retries with exponential backoff + jitter",
      "Circuit breaker",
      "Fallback chain across providers/models",
      "Concurrency and rate limiting",
      "Graceful degradation",
      "Simulated provider failures",
      "Metrics, logs, and traces",
    ],
    previewImage: "/projects/reliable-llm-client.jpg",
    githubUrl: "https://github.com/VanshWagh/reliable-llm-client",
    liveUrl: "https://reliable-llm-client.vercel.app",
  },
];
