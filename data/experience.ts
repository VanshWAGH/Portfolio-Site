export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "ubs",
    company: "UBS",
    role: "QA Automation Engineer",
    period: "Present",
    current: true,
    description:
      "Working in a QA team focused on browser automation, test design, and AI-assisted automation frameworks.",
    highlights: [
      "Building and maintaining browser automation suites using Selenium and Playwright",
      "Involved in an AI automation framework that uses web-page DOM structure to generate automation workflows",
      "Designing structured test workflows and test-case generation pipelines",
      "Contributing to test-result analysis and failure investigation processes",
    ],
  },
];
