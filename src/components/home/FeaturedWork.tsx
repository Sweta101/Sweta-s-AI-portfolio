"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/knowledge/projects";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="section-title">Featured work</h2>
          <p className="mt-3 max-w-2xl prose-muted">
            A few products and systems that show how I think: ship useful GTM tools, measure
            what matters, and help revenue teams move faster.
          </p>
        </div>
        <Link href="/projects" className="hidden text-sm text-[var(--accent)] sm:inline-flex items-center gap-1">
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05 }}
            className="group rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-5 transition hover:border-[var(--accent)]/35"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-white sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
              {project.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-base">
              <Link href={`/projects/${project.slug}`} className="text-[var(--accent)]">
                View case study →
              </Link>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-white hover:text-[var(--accent)]">
                  Live demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-white">
                  GitHub
                </a>
              )}
              {project.githubPrivate && !project.github && (
                <span className="text-[var(--muted)]">Private source (API keys)</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
