import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { profile } from "@/knowledge/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download Sweta Kumari’s resume.",
};

const RESUME_FILE = "Sweta_Kumari_Resume.pdf";
const RESUME_HREF = `/resume/${RESUME_FILE}?v=2026-07-23`;

export default function ResumePage() {
  const resumePath = path.join(process.cwd(), "public", "resume", RESUME_FILE);
  const hasResume = existsSync(resumePath);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Resume</h1>
      <p className="mt-3 prose-muted">
        Download the latest PDF resume, or ask Sweta’s AI portfolio bot about any section of her experience.
      </p>

      <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <FileText className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
              {profile.name} Resume
            </h2>
            {hasResume ? (
              <p className="mt-2 inline-flex items-center gap-2 text-base text-[var(--success)]">
                <CheckCircle2 className="h-4 w-4" />
                PDF is ready to download
              </p>
            ) : (
              <p className="mt-2 text-base text-[var(--muted)]">
                Place your PDF at{" "}
                <code className="text-[var(--accent)]">public/resume/{RESUME_FILE}</code> to enable
                download.
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-3">
              {hasResume ? (
                <a href={RESUME_HREF} className="btn-primary" download={RESUME_FILE}>
                  <Download className="h-5 w-5" />
                  Download PDF
                </a>
              ) : (
                <span className="btn-primary opacity-50 pointer-events-none">
                  <Download className="h-5 w-5" />
                  Download PDF
                </span>
              )}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn profile
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary">
                Email resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {!hasResume && (
        <div className="mt-6 rounded-3xl border border-dashed border-[var(--border)] p-6 text-base text-[var(--muted)]">
          <p className="font-medium text-white">How to add your resume</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Export your current resume as a PDF.</li>
            <li>
              Save it as <code>{RESUME_FILE}</code> inside <code>public/resume/</code>.
            </li>
            <li>Refresh this page. The download button will serve the file.</li>
          </ol>
        </div>
      )}
    </div>
  );
}
