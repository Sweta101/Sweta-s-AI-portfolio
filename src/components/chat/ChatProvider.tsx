"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ChatUIContextValue = {
  isOpen: boolean;
  isExpanded: boolean;
  openChat: (prefill?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  toggleExpanded: () => void;
  setExpanded: (value: boolean) => void;
  prefill: string | null;
  clearPrefill: () => void;
};

const ChatUIContext = createContext<ChatUIContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [prefill, setPrefill] = useState<string | null>(null);

  const openChat = useCallback((next?: string) => {
    if (next) setPrefill(next);
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setIsExpanded(false);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((v) => {
      if (v) setIsExpanded(false);
      return !v;
    });
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((v) => !v);
  }, []);

  const setExpanded = useCallback((value: boolean) => {
    setIsExpanded(value);
  }, []);

  const clearPrefill = useCallback(() => setPrefill(null), []);

  const value = useMemo(
    () => ({
      isOpen,
      isExpanded,
      openChat,
      closeChat,
      toggleChat,
      toggleExpanded,
      setExpanded,
      prefill,
      clearPrefill,
    }),
    [
      isOpen,
      isExpanded,
      openChat,
      closeChat,
      toggleChat,
      toggleExpanded,
      setExpanded,
      prefill,
      clearPrefill,
    ],
  );

  return (
    <ChatUIContext.Provider value={value}>{children}</ChatUIContext.Provider>
  );
}

export function useChatUI() {
  const ctx = useContext(ChatUIContext);
  if (!ctx) throw new Error("useChatUI must be used within ChatProvider");
  return ctx;
}
