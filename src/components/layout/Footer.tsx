import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/knowledge/profile";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[rgba(7,11,22,0.6)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
            {profile.name}
          </p>
          <p className="mt-1 text-base text-[var(--muted)]">
            {profile.focusAreas.join(" · ")}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--muted)] transition hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--muted)] transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl border border-[var(--border)] p-2 text-[var(--muted)] transition hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <Link href="/contact" className="btn-secondary !py-2 text-sm">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
