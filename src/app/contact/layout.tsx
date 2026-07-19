import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sweta Kumari via email, LinkedIn, GitHub, or message form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
