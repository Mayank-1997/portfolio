import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayank-ai-portfolio.onrender.com"),
  title: {
    default: "Mayank Aggarwal | Backend & Agentic AI Engineer",
    template: "%s | Mayank Aggarwal"
  },
  description:
    "Mayank Aggarwal is a Backend & Agentic AI Engineer building scalable backend platforms, RAG pipelines, multi-agent systems, FastAPI microservices, and production-grade GenAI applications.",
  keywords: [
    "Mayank Aggarwal",
    "Backend Engineer",
    "Agentic AI Engineer",
    "Generative AI Engineer",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "RAG pipelines",
    "Multi-Agent Systems"
  ],
  authors: [{ name: "Mayank Aggarwal" }],
  creator: "Mayank Aggarwal",
  openGraph: {
    title: "Mayank Aggarwal | Backend & Agentic AI Engineer",
    description:
      "Production-grade GenAI, RAG pipelines, autonomous AI systems, FastAPI microservices, and scalable backend architecture.",
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
    title: "Mayank Aggarwal | Backend & Agentic AI Engineer",
    description:
      "Scalable backend platforms, Agentic AI workflows, RAG pipelines, and production GenAI applications.",
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
