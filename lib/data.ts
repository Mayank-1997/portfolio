import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  "7+ Years Experience",
  "Production AI Systems",
  "Multi-Agent Architectures",
  "Enterprise Backend Engineering"
];

export const skillGroups = [
  {
    title: "Generative AI",
    icon: BrainCircuit,
    skills: ["Agentic AI", "RAG Pipelines", "OpenAI APIs", "Gemini APIs", "Groq APIs", "Prompt Engineering"]
  },
  {
    title: "Backend Engineering",
    icon: ServerCog,
    skills: ["FastAPI", "Python", "REST APIs", "SQLAlchemy", "Pydantic", "JWT Authentication"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Render", "CI/CD", "Microservices"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "Vector Stores", "Semantic Search", "Data Modeling", "Caching"]
  },
  {
    title: "Distributed Systems",
    icon: Network,
    skills: ["Scalable APIs", "Event Flows", "Service Boundaries", "Async Jobs", "Observability", "Reliability"]
  },
  {
    title: "AI Orchestration",
    icon: Workflow,
    skills: ["LangGraph", "LangChain", "Multi-Agent Systems", "Router Agents", "Reducers", "Tool Calling"]
  }
];

export const experiences = [
  {
    company: "S&P Global",
    role: "Backend & GenAI Engineering",
    focus: "Enterprise financial intelligence, RAG pipelines, semantic retrieval, LLM workflows, and production backend services.",
    highlights: ["Financial document intelligence", "Enterprise RAG architecture", "Prompt engineering for analyst workflows"]
  },
  {
    company: "O4S",
    role: "Scalable Backend Engineering",
    focus: "Production APIs, microservices, AI-assisted development workflows, and reliable product engineering systems.",
    highlights: ["FastAPI-style service design", "Distributed backend workflows", "Kubernetes-ready deployment thinking"]
  },
  {
    company: "Avizva Solutions",
    role: "Backend Platform Engineer",
    focus: "Enterprise software delivery with secure APIs, data workflows, automation, and scalable backend architecture.",
    highlights: ["Microservice patterns", "Automation-heavy delivery", "Clean API contracts"]
  },
  {
    company: "Nokia Networks",
    role: "Engineering Systems",
    focus: "Network-grade engineering practices, distributed systems mindset, reliable software, and operational discipline.",
    highlights: ["Reliability engineering", "Backend integration", "Production system awareness"]
  }
];

export const projects = [
  {
    title: "Agentic AI Blog Generation System",
    description:
      "Production-grade multi-agent AI blog generation platform using LangGraph, LangChain, GPT-4.1, Tavily Search, Gemini APIs, FastAPI, and Streamlit.",
    liveUrl: "https://agenticaiblogapplication.streamlit.app/",
    stack: ["LangGraph", "LangChain", "GPT-4.1", "Tavily", "Gemini", "FastAPI", "Streamlit"],
    features: [
      "Multi-agent orchestration",
      "Router/Research/Worker/Reducer architecture",
      "AI-generated diagrams",
      "Real-time web research",
      "Autonomous AI workflows",
      "PDF/DOCX export",
      "Markdown rendering"
    ],
    icon: Bot
  },
  {
    title: "CommentIQ",
    subtitle: "AI-Powered YouTube Comment Analytics Platform",
    description:
      "AI platform for YouTube audience intelligence, sentiment analysis, buyer intent detection, content idea generation, and engagement analytics.",
    liveUrl: "https://comment-iq-six.vercel.app/clients",
    stack: ["GenAI", "Analytics", "Sentiment AI", "Audience Intelligence", "Vercel"],
    features: [
      "Sentiment analysis",
      "Topic extraction",
      "AI summarization",
      "Audience intelligence",
      "Content strategy insights",
      "Engagement analytics"
    ],
    icon: Sparkles
  },
  {
    title: "FastAPI TODO Application",
    description:
      "Production-ready FastAPI CRUD application with JWT authentication, SQLAlchemy integration, Pydantic validation, and Render deployment.",
    liveUrl: "https://todo-app-p50a.onrender.com/auth/login-page",
    stack: ["FastAPI", "JWT", "SQLAlchemy", "Pydantic", "REST", "Render"],
    features: ["JWT Authentication", "CRUD APIs", "SQLAlchemy ORM", "Pydantic Validation", "REST API Architecture"],
    icon: Code2
  }
];

export const architectureFlows = [
  {
    title: "Agentic AI Workflow",
    icon: GitBranch,
    nodes: ["Intent Router", "Research Agent", "Worker Agents", "Reducer", "Quality Gate", "Export Layer"]
  },
  {
    title: "RAG Intelligence Pipeline",
    icon: Layers3,
    nodes: ["Ingestion", "Chunking", "Embeddings", "Vector Store", "Semantic Retrieval", "LLM Response"]
  },
  {
    title: "Backend Microservices",
    icon: ShieldCheck,
    nodes: ["API Gateway", "Auth", "FastAPI Services", "Async Jobs", "Databases", "Kubernetes"]
  }
];

export const certifications = [
  "NPTEL Data Structures",
  "NPTEL DBMS",
  "NPTEL Machine Learning",
  "FastAPI End-to-End CRUD Application"
];

export const links = {
  linkedIn: "https://www.linkedin.com/in/mayank-aggarwal-116061141/",
  github: "https://github.com/Mayank-1997?tab=repositories",
  email: "mailto:developermayank18@gmail.com",
  phone: "tel:+917018858411"
};
