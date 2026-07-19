import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/knowledge/projects";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections: { title: string; body: ReactNode }[] = [
    { title: "Business problem", body: <p>{project.problem}</p> },
    { title: "Project objective", body: <p>{project.objective}</p> },
    { title: "My role", body: <p>{project.role}</p> },
    {
      title: "Tools and technologies",
      body: (
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent)]"
            >
              {tool}
            </span>
          ))}
        </div>
      ),
    },
    { title: "Dataset / information sources", body: <p>{project.dataSources}</p> },
    { title: "Solution architecture", body: <p>{project.architecture}</p> },
    {
      title: "Implementation process",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          {project.process.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Challenges",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Optimization",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          {project.optimization.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Results and business impact",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          {project.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "What I learned",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          {project.learned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-white">
        ← Back to projects
      </Link>
      <h1 className="section-title mt-4">{project.title}</h1>
      <p className="mt-3 prose-muted">{project.shortDescription}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2 text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-2 text-sm"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub repository
          </a>
        )}
        {project.githubPrivate && !project.github && (
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]">
            <Lock className="h-4 w-4" />
            Source private - contains API keys
          </span>
        )}
      </div>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.55)] p-5"
          >
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {section.title}
            </h2>
            <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
