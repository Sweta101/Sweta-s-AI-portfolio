import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/knowledge/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.demo && (
          <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] text-[var(--accent)]">
            Live demo
          </span>
        )}
        {project.githubPrivate && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-[var(--muted)]">
            <Lock className="h-3 w-3" />
            Private source
          </span>
        )}
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <Link href={`/projects/${project.slug}`} className="btn-secondary !py-2 !text-xs">
          View Case Study
        </Link>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2 !text-xs"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-2 !text-xs"
          >
            View GitHub
          </a>
        )}
      </div>
    </article>
  );
}
