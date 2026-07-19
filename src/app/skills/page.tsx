import type { Metadata } from "next";
import { skills } from "@/knowledge/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "GTM Engineering, RevOps, sales analytics, CRM, lead scoring, and revenue systems skills.",
};

const groups: { title: string; items: readonly string[] }[] = [
  { title: "GTM & RevOps", items: skills.gtmAndRevops },
  { title: "Sales Analytics", items: skills.salesAnalytics },
  { title: "AI & GTM Automation", items: skills.aiAutomation },
  { title: "Programming & Analytics", items: skills.programmingAnalytics },
  { title: "CRM & Business Systems", items: skills.crmSystems },
  { title: "Collaboration", items: skills.collaboration },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Skills</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Built for GTM Engineer, Sales Analyst, and RevOps roles: revenue systems,
        funnel analytics, CRM operations, and AI-powered sales enablement.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.title}
            className="rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-5"
          >
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {group.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
