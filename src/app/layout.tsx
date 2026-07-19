import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { FloatingChat } from "@/components/chat/FloatingChat";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sweta Kumari | GTM Engineer · Sales Analyst · RevOps",
    template: "%s | Sweta Kumari",
  },
  description:
    "GTM Engineer, Sales Analyst, and RevOps professional building revenue systems, sales analytics, lead scoring, and AI-powered GTM tools. Chat with Sweta’s AI portfolio bot.",
  openGraph: {
    title: "Sweta Kumari | GTM Engineer · Sales Analyst · RevOps",
    description: "Building the Future of Revenue Operations with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ChatProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingChat />
        </ChatProvider>
      </body>
    </html>
  );
}
