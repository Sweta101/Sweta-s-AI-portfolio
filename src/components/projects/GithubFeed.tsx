"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { GithubRepo } from "@/lib/github";

export function GithubFeed() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/github");
        const data = (await res.json()) as { repos?: GithubRepo[]; error?: string };
        if (!cancelled) {
          setRepos(data.repos ?? []);
          setError(data.error ?? null);
        }
      } catch {
        if (!cancelled) setError("Could not load GitHub repositories.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mt-14">
      <div className="mb-6 flex items-center gap-2">
        <GithubIcon className="h-5 w-5 text-[var(--accent)]" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          All GitHub projects
        </h2>
      </div>
      <p className="mb-6 max-w-2xl text-sm text-[var(--muted)]">
        Live feed from{" "}
        <a
          href="https://github.com/Sweta101"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent)]"
        >
          github.com/Sweta101
        </a>
        . Featured case studies above are curated; this list updates automatically.
      </p>

      {loading && (
        <p className="text-sm text-[var(--muted)]">Loading repositories…</p>
      )}
      {error && !loading && (
        <p className="text-sm text-[var(--danger)]">{error}</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.55)] p-4 transition hover:border-[var(--accent)]/35"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-white">{repo.name}</h3>
              <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)]" />
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
              {repo.description || "No description provided."}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
              {repo.language && <span>{repo.language}</span>}
              <span className="inline-flex items-center gap-1">
                <Star className="h-3 w-3" />
                {repo.stargazers_count}
              </span>
              <span>
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
            {repo.topics?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[10px] text-[var(--muted)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
