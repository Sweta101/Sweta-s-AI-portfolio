import type { Metadata } from "next";
import { education } from "@/knowledge/education";
import { awards } from "@/knowledge/awards";

export const metadata: Metadata = {
  title: "Education",
  description:
    "MS Business Analytics at Penn State, VIT engineering degree, scholarships, and academic highlights.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Education</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Academic foundation in business analytics, data mining, and decision science.
      </p>

      <div className="mt-10 grid gap-4">
        {education.map((ed) => (
          <article
            key={ed.id}
            className="rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {ed.degree}
                </h2>
                <p className="mt-1 text-[var(--accent)]">
                  {ed.school} · {ed.location}
                </p>
              </div>
              <p className="text-sm text-[var(--muted)]">
                {ed.start} – {ed.end}
              </p>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">GPA: {ed.gpa}</p>
            {ed.honors.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">
                {ed.honors.map((h) => (
                  <li key={h}>▹ {h}</li>
                ))}
              </ul>
            )}
            {ed.coursework.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {ed.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-semibold">
        Awards & recognition
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {awards.map((award) => (
          <div
            key={award.title + award.org}
            className="rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.55)] p-4"
          >
            <p className="font-semibold">{award.title}</p>
            <p className="mt-1 text-sm text-[var(--accent)]">
              {award.org} · {award.year}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{award.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
