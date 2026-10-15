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
    id: "devpilot",
    title: "DevPilot",
    description:
      "A full-stack AI-powered coding assistant that connects to your GitHub account and provides professional technical assistance regarding your repositories. Indexes your codebase using vector embeddings and lets you have deep, contextual AI conversations about your code — with real source citations. Supports BYOK (Bring Your Own Key) for OpenAI, Anthropic, Gemini, and OpenRouter.",
    status: "Published",
    techStack: [
      "Spring AI",
      "Java",
      "pgvector",
      "RAG",
      "GitHub OAuth",
      "Next.js",
      "TypeScript",
    ],
    features: [
      "GitHub OAuth integration for repository access",
      "Vector embeddings for codebase indexing",
      "Contextual AI chat with source citations",
      "BYOK support — OpenAI, Anthropic, Gemini, OpenRouter",
      "RAG architecture with pgvector",
      "Streaming chat responses",
      "Open source",
    ],
    previewImage: "/projects/devpilot.png",
    githubUrl: "https://github.com/VanshWagh",
    liveUrl: "https://project-java-ai.vercel.app/",
  },
  {
    id: "lexassist",
    title: "LexAssist",
    description:
      "Upload startup contracts, NDAs, and legal documents — get instant risk analysis and plain-English summaries under Indian Law. Chat with your documents using AI to understand complex legal terms, identify potential risks, and get actionable insights without needing a lawyer.",
    status: "Published",
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LLM",
      "RAG",
      "Document Processing",
    ],
    features: [
      "Document upload and processing (contracts, NDAs, agreements)",
      "Instant risk analysis with severity indicators",
      "Plain-English legal summaries",
      "Interactive chat for document Q&A",
      "Indian Law context and compliance",
      "Free to get started",
    ],
    previewImage: "/projects/lexassist.png",
    githubUrl: "https://github.com/VanshWagh",
    liveUrl: "https://client-iota-gilt-18.vercel.app/",
  },
];
