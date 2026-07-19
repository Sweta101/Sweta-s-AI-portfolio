"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/knowledge/profile";
import { useChatUI } from "@/components/chat/ChatProvider";

export function Hero() {
  const { openChat } = useChatUI();

  return (
    <section className="relative overflow-hidden">
      {/* Soft glow only — no name watermark */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute right-0 top-20 h-[22rem] w-[22rem] rounded-full bg-violet-500/20 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[18rem] w-[18rem] rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" />
                {profile.focusAreas.join(" • ")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                {profile.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-display)] text-[3rem] font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            >
              Hi, I’m
              <br />
              <span className="gradient-text">Sweta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <button type="button" onClick={() => openChat()} className="btn-primary">
                Meet my AI portfolio bot
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link href="/experience" className="btn-secondary">
                My journey
              </Link>
              <Link href="/resume" className="btn-secondary">
                <FileText className="h-5 w-5" />
                Resume
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Visual identity panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-transparent to-violet-500/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,28,54,0.95),rgba(8,16,34,0.98))] p-6 shadow-2xl sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.4rem] shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-300/40">
                  <Image
                    src="/images/sweta-profile.jpg?v=2"
                    alt={profile.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    priority
                    unoptimized
                  />
                  <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#0a1428] bg-emerald-400" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    Sweta Kumari
                  </p>
                  <p className="mt-1 text-base text-[var(--muted)]">
                    Manager, RevOps & GTM Strategy
                  </p>
                  <p className="text-sm text-cyan-300/90">
                    Targeting GTM Engineer · Sales Analyst · RevOps
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                {profile.identityTraits.map((trait, i) => (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                    <p className="text-base leading-snug">
                      <span className="font-semibold text-white">{trait.label}.</span>{" "}
                      <span className="text-[var(--muted)]">{trait.detail}</span>
                    </p>
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openChat("Why is Sweta a strong fit for a GTM Engineer role?")}
                className="mt-7 w-full rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3.5 text-left text-base text-cyan-100 transition hover:bg-cyan-400/15"
              >
                Ask my bot why I’m a strong GTM / RevOps hire →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
