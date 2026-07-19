import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "RevOps, GTM strategy, sales analytics, and revenue systems experience timeline.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Experience</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        From sales leadership to RevOps and GTM systems: funnel KPIs, CRM operations,
        lead scoring, and AI tools that support revenue teams.
      </p>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
}
