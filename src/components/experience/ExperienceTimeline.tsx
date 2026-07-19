"use client";

import { motion } from "framer-motion";
import { experience } from "@/knowledge/experience";

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-6 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[var(--border)] sm:before:left-[15px]">
      {experience.map((job, index) => (
        <motion.article
          key={job.id}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.04 }}
          className="relative pl-10 sm:pl-12"
        >
          <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--accent)]/50 bg-[var(--bg)] shadow-[0_0_0_4px_rgba(109,140,255,0.12)] sm:left-1 sm:h-4 sm:w-4" />
          <div className="rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">
                  {job.company} · {job.location}
                </p>
              </div>
              <p className="text-xs text-[var(--muted)]">
                {job.start} – {job.end}
              </p>
            </div>
            {job.previousRoles && (
              <p className="mt-2 text-xs text-[var(--muted)]">
                Path: {job.previousRoles.join(" → ")} → {job.title}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {job.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-[var(--muted)]">
                  <span className="mr-2 text-[var(--accent)]">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
