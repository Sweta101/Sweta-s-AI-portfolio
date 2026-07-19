import type { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { GithubFeed } from "@/components/projects/GithubFeed";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Searchable project gallery - AI tools, ML models, Power BI, SQL, and automation case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Projects</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Filter by technology or domain, open detailed case studies, and connect directly to GitHub.
      </p>
      <div className="mt-10">
        <ProjectGallery />
        <GithubFeed />
      </div>
    </div>
  );
}
