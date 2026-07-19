"use client";

import { useMemo, useState } from "react";
import { projects, projectTags, type ProjectTag } from "@/knowledge/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGallery({
  initialTag,
  category,
}: {
  initialTag?: ProjectTag;
  category?: "ai-tools" | "analytics" | "ml" | "automation";
}) {
  const [active, setActive] = useState<ProjectTag | "All">(initialTag ?? "All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      if (category && project.category !== category) {
        // allow ml under analytics page? no - keep strict
        // AI tools page uses category ai-tools but also show ML lead scoring? User wanted AI Tools for chatbot, calculators, lead-scoring
        // For ai-tools page we'll pass a custom filter via tags instead when needed
      }
      const categoryOk = category
        ? category === "ai-tools"
          ? project.category === "ai-tools" ||
            project.tags.includes("AI") ||
            project.slug.includes("lead-scoring") ||
            project.slug.includes("photography")
          : category === "analytics"
            ? project.category === "analytics" ||
              project.tags.includes("Power BI") ||
              project.tags.includes("Tableau") ||
              project.tags.includes("SQL")
            : project.category === category
        : true;
      const tagOk = active === "All" || project.tags.includes(active);
      const q = query.trim().toLowerCase();
      const queryOk =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.tools.some((t) => t.toLowerCase().includes(q));
      return categoryOk && tagOk && queryOk;
    });
  }, [active, query, category]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, tools, keywords…"
          className="w-full rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 sm:max-w-sm"
        />
        <p className="text-sm text-[var(--muted)]">{filtered.length} projects</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`rounded-full px-3 py-1.5 text-xs ${
            active === "All"
              ? "bg-[var(--accent-soft)] text-[var(--accent)]"
              : "border border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          All
        </button>
        {projectTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={`rounded-full px-3 py-1.5 text-xs ${
              active === tag
                ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border border-[var(--border)] text-[var(--muted)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
