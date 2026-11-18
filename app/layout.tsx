import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayank-ai-portfolio.onrender.com"),
  title: {
    default: "Mayank Aggarwal | Senior Full-Stack AI Engineer",
    template: "%s | Mayank Aggarwal"
  },
  description:
    "Mayank Aggarwal is a Senior Full-Stack AI Engineer building end-to-end AI platforms: Next.js frontends, FastAPI backends, LangGraph orchestration, cloud infrastructure, and production AI systems including AI Video Studio.",
  keywords: [
    "Mayank Aggarwal",
    "Senior Full-Stack AI Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "AI Engineer",
    "Next.js",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "AI Video Studio",
    "RAG pipelines",
    "Multi-Agent Systems",
    "Production AI"
  ],
  authors: [{ name: "Mayank Aggarwal" }],
  creator: "Mayank Aggarwal",
  openGraph: {
    title: "Mayank Aggarwal | Senior Full-Stack AI Engineer",
    description:
      "End-to-end AI platforms: Next.js frontends, FastAPI backends, LangGraph orchestration, cloud infrastructure, and production AI systems including AI Video Studio with 150K+ video views.",
    url: "https://mayank-ai-portfolio.onrender.com",
    siteName: "Mayank Aggarwal Portfolio",
    images: [
      {
        url: "/assets/mayank-ai-avatar.png",
        width: 1024,
        height: 1024,
        alt: "Mayank Aggarwal AI engineer avatar"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Aggarwal | Senior Full-Stack AI Engineer",
    description:
      "Full-stack AI platforms: Next.js, FastAPI, LangGraph, cloud infrastructure, and production AI systems including AI Video Studio.",
    images: ["/assets/mayank-ai-avatar.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
