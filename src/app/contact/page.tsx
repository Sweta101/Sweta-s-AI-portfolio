"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/knowledge/profile";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!formspreeId) {
      const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="section-title">Contact</h1>
      <p className="mt-3 max-w-2xl prose-muted">
        Let’s talk about GTM Engineering, Sales Analyst, or RevOps roles. Reach out directly or send a
        message below.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-4 text-sm hover:border-[var(--accent)]/35"
          >
            <Mail className="h-4 w-4 text-[var(--accent)]" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-4 text-sm hover:border-[var(--accent)]/35"
          >
            <Phone className="h-4 w-4 text-[var(--accent)]" />
            {profile.phone}
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-4 text-sm">
            <MapPin className="h-4 w-4 text-[var(--accent)]" />
            {profile.location}
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-4 text-sm hover:border-[var(--accent)]/35"
          >
            <LinkedinIcon className="h-4 w-4 text-[var(--accent)]" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-4 text-sm hover:border-[var(--accent)]/35"
          >
            <GithubIcon className="h-4 w-4 text-[var(--accent)]" />
            GitHub
          </a>
        </aside>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.65)] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-[var(--muted)]">Name</span>
              <input
                name="name"
                required
                className="mt-1.5 w-full rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3 outline-none focus:border-[var(--accent)]/50"
              />
            </label>
            <label className="block text-sm">
              <span className="text-[var(--muted)]">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3 outline-none focus:border-[var(--accent)]/50"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="text-[var(--muted)]">Subject</span>
            <input
              name="subject"
              className="mt-1.5 w-full rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3 outline-none focus:border-[var(--accent)]/50"
              placeholder="Role, collaboration, or question"
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-[var(--muted)]">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-y rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3 outline-none focus:border-[var(--accent)]/50"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-5 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="mt-3 text-sm text-[var(--success)]">
              Thanks - your message is ready to send.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-[var(--danger)]">
              Something went wrong. Please email {profile.email} directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
