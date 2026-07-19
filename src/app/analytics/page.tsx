import type { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const metadata: Metadata = {
  title: "Analytics",
  description:
    "Power BI, Tableau, SQL, and machine learning analytics projects.",
};

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Analytics</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Executive dashboards, funnel intelligence, SQL/time-series analytics, and visualization work.
      </p>
      <div className="mt-10">
        <ProjectGallery category="analytics" />
      </div>
    </div>
  );
}
