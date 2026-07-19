import type { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Chatbots, calculators, lead-scoring tools, and automation products built by Sweta Kumari.",
};

export default function AIToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">AI Tools</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Conversational assistants, predictive lead scoring, and automation products that turn
        workflows into intelligent systems.
      </p>
      <div className="mt-10">
        <ProjectGallery category="ai-tools" />
      </div>
    </div>
  );
}
