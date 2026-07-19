"use client";

import { MessageCircle } from "lucide-react";
import { useChatUI } from "./ChatProvider";
import { ChatPanel } from "./ChatPanel";

export function FloatingChat() {
  const { isOpen, toggleChat } = useChatUI();

  return (
    <>
      <ChatPanel />
      {!isOpen && (
        <button
          type="button"
          onClick={toggleChat}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#67e8f9] via-[#38bdf8] to-[#a78bfa] px-5 py-3.5 text-base font-semibold text-[#041018] shadow-xl shadow-[rgba(56,189,248,0.4)] transition hover:scale-[1.02]"
        >
          <MessageCircle className="h-5 w-5" />
          Ask the bot
        </button>
      )}
    </>
  );
}
