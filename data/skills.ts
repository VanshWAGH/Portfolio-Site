export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "automation-qe",
    title: "Automation & Quality Engineering",
    icon: "🧪",
    skills: [
      "Playwright",
      "Selenium",
      "Test Automation",
      "Test Design",
      "BDD",
      "API Testing",
      "Regression Testing",
      "CI/CD Quality Gates",
      "Browser Automation",
    ],
  },
  {
    id: "ai-llm",
    title: "AI & LLM Systems",
    icon: "🤖",
    skills: [
      "RAG",
      "Embeddings",
      "Hybrid Search",
      "RAG Evaluation",
      "LLM Observability",
      "Prompt Evaluation",
      "Agent Workflows",
      "LLM Reliability",
      "AI Safety",
    ],
  },
  {
    id: "backend-system",
    title: "Backend & System Design",
    icon: "⚙️",
    skills: [
      "Python",
      "Java",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Queues",
      "Docker",
      "Distributed Patterns",
      "System Design",
    ],
  },
  {
    id: "frontend-platform",
    title: "Frontend & Platform",
    icon: "🚀",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "GitHub Actions",
      "Vercel",
      "Railway",
      "Render",
    ],
  },
];
