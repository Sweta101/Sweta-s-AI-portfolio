"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X, Loader2, Maximize2, Minimize2 } from "lucide-react";
import { suggestedQuestions } from "@/knowledge/faq";
import { useChatUI } from "./ChatProvider";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const welcome: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I’m Sweta’s AI portfolio bot. Ask me anything about my GTM, RevOps, and sales analytics experience, projects, education, or career journey.",
};

export function ChatPanel({
  embedded = false,
  className,
}: {
  embedded?: boolean;
  className?: string;
}) {
  const { isOpen, isExpanded, closeChat, toggleExpanded, prefill, clearPrefill, openChat } =
    useChatUI();
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll only inside the chat list, never the whole page
    const list = listRef.current;
    if (!list) return;
    list.scrollTop = list.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (prefill) {
      setInput(prefill);
      clearPrefill();
    }
  }, [prefill, clearPrefill]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply ?? "I couldn’t generate a reply. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Network error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  const panel = (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[rgba(13,21,38,0.92)] shadow-2xl shadow-black/40 backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="font-[family-name:var(--font-display)] text-base font-semibold sm:text-lg">
              Sweta’s AI portfolio bot
            </p>
            <p className="text-sm text-[var(--muted)]">Ask me anything</p>
          </div>
        </div>
        {!embedded && (
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleExpanded}
              className="rounded-xl p-2 text-[var(--muted)] hover:bg-white/5 hover:text-white"
              aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <Minimize2 className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={closeChat}
              className="rounded-xl p-2 text-[var(--muted)] hover:bg-white/5 hover:text-white"
              aria-label="Close chat"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-3 py-4 sm:px-5"
      >
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          {messages.map((message) => {
            const isUser = message.role === "user";
            return (
              <div
                key={message.id}
                className={cn(
                  "flex items-end gap-2.5",
                  isUser ? "justify-end" : "justify-start",
                )}
              >
                {!isUser && (
                  <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/30 text-[var(--accent)] ring-1 ring-cyan-400/20">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                )}
                <div
                  className={cn(
                    "w-fit max-w-[90%] px-4 py-2.5 text-[0.95rem] leading-relaxed whitespace-pre-wrap shadow-sm sm:text-base",
                    isUser
                      ? "rounded-[1.25rem] rounded-br-md bg-gradient-to-br from-[#22d3ee] via-[#38bdf8] to-[#a78bfa] font-medium text-[#041018]"
                      : "rounded-[1.25rem] rounded-bl-md bg-[rgba(255,255,255,0.08)] text-[var(--text)] ring-1 ring-white/10",
                  )}
                >
                  {message.content}
                </div>
              </div>
            );
          })}
          {loading && (
            <div className="flex items-end gap-2.5 justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/30 text-[var(--accent)] ring-1 ring-cyan-400/20">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <div className="inline-flex items-center gap-2 rounded-[1.25rem] rounded-bl-md bg-[rgba(255,255,255,0.08)] px-4 py-2.5 text-[0.95rem] text-[var(--muted)] ring-1 ring-white/10">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking…
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-3 py-3.5 sm:px-4">
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
          {suggestedQuestions.slice(0, 4).map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                if (!embedded && !isOpen) openChat();
                void send(q);
              }}
              className="shrink-0 rounded-full border border-[var(--border)] bg-white/[0.03] px-3.5 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-white"
            >
              {q}
            </button>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about GTM, RevOps, projects…"
            className="flex-1 rounded-2xl border border-[var(--border)] bg-black/20 px-4 py-3.5 text-base outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="btn-primary !rounded-2xl !px-4 disabled:opacity-50"
            aria-label="Send"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );

  if (embedded) return panel;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close overlay"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
          />
          <motion.div
            className={cn(
              "fixed z-50 transition-[width,height,inset] duration-300 ease-out",
              isExpanded
                ? "inset-3 h-auto w-auto sm:inset-6"
                : "bottom-4 right-4 h-[min(720px,88vh)] w-[min(440px,calc(100vw-1.5rem))]",
            )}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            {panel}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
