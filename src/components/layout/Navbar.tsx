"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatUI } from "@/components/chat/ChatProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/analytics", label: "Analytics" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openChat } = useChatUI();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(7,11,22,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-[family-name:var(--font-display)] text-base font-bold tracking-tight sm:text-lg md:text-xl">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            <span className="gradient-text">Sweta’s</span> portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-[0.95rem] text-[var(--muted)] transition hover:text-white",
                pathname === link.href && "bg-white/5 text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => openChat()} className="btn-primary hidden !px-4 !py-2.5 text-[0.95rem] sm:inline-flex">
            Ask the bot
          </button>
          <button
            type="button"
            className="rounded-xl border border-[var(--border)] p-2.5 text-[var(--muted)] xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 xl:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base text-[var(--muted)]",
                  pathname === link.href && "bg-white/5 text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="btn-primary mt-2"
              onClick={() => {
                setOpen(false);
                openChat();
              }}
            >
              Ask the bot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
