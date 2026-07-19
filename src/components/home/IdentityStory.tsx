"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase } from "lucide-react";
import { profile } from "@/knowledge/profile";

export function IdentityStory() {
  return (
    <section className="relative border-y border-white/5 bg-[rgba(6,12,26,0.65)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            Who I am
          </p>
          <h2 className="section-title mt-3">
            A person who builds. A professional who drives revenue.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.05 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-pink-400/15 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent p-7 sm:p-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-3 py-1.5 text-sm text-pink-100">
              <Heart className="h-4 w-4" />
              As a person
            </div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Curious, hands-on, and obsessed with making hard things feel clear.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              {profile.personalStory}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.12 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-7 sm:p-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-100">
              <Briefcase className="h-4 w-4" />
              As a professional
            </div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-white sm:text-3xl">
              GTM systems thinker. Sales analytics builder. RevOps operator.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              {profile.professionalStory}
            </p>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {profile.proofPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                <span className="gradient-text">{point.value}</span>
              </p>
              <p className="mt-2 text-sm leading-snug text-[var(--muted)] sm:text-base">
                {point.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
