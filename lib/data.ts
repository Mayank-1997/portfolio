import {
  BarChart3,
  Bot,
  BrainCircuit,
  Clapperboard,
  Cloud,
  Code2,
  Cpu,
  Database,
  Film,
  GitBranch,
  Globe,
  Layers3,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Featured Project", href: "#featured-project" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  "7+ Years Experience",
  "Production AI Systems",
  "Full-Stack AI Engineering",
  "Multi-Agent Architectures"
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Zustand"]
  },
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
    skills: ["Docker", "Fly.io", "Vercel", "Redis", "Celery", "CI/CD"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "Alembic", "Data Modeling", "Async ORM", "Relational Design"]
  },
  {
    title: "Distributed Systems",
    icon: Network,
    skills: ["Async Task Queues", "Celery Workers", "Service Boundaries", "Observability", "Langfuse", "Grafana Loki"]
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
    title: "AI Video Studio",
    subtitle: "Prompt-to-Publish Short-Video Automation Platform",
    description:
      "Production AI platform that converts a single prompt into a fully produced short-form video. Handles research, scripting, storyboarding, AI footage generation, voiceover, subtitles, thumbnails, metadata, and final render. Videos generated on the platform have crossed 150K+ views on Facebook Reels and continue to grow.",
    liveUrl: "https://frontend-ten-pearl-78.vercel.app/login",
    stack: ["Next.js", "FastAPI", "LangGraph", "Celery", "Fly.io", "Vercel", "PostgreSQL", "Redis"],
    features: [
      "Research mode: multi-agent LangGraph workflow for deep content research",
      "Direct Cinematic mode: full creative control with direct prompt engineering",
      "Multi-step pipeline: research → script → storyboard → assets → voice → subtitles → render",
      "Provider abstraction: Kling v3 (fal.ai), Veo, stock media, Google TTS",
      "Progress tracking: Celery task state with UI progress bars",
      "YouTube publishing integration",
      "150K+ video views on social platforms"
    ],
    icon: Clapperboard
  },
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

export const featuredProject = {
  title: "AI Video Studio",
  subtitle: "Prompt-to-Publish Short-Video Automation Platform",
  liveUrl: "https://frontend-ten-pearl-78.vercel.app/login",
  apiUrl: "https://ai-studio-api.fly.dev/health",
  repoUrl: "https://github.com/Mayank-1997/try-faceless",
  traction: "Videos generated on the platform have crossed 150K+ views on Facebook Reels and continue to grow.",
  description: "A production AI platform that converts a single prompt into a fully produced short-form video. The system orchestrates research, scripting, storyboarding, media generation, narration, subtitles, thumbnails, metadata, and final rendering with optional YouTube publishing.",
  modes: [
    {
      name: "Research Mode",
      description: "Multi-agent LangGraph workflow with 10+ specialized agents performing deep web research, fact-checking, and content planning before script generation."
    },
    {
      name: "Direct Cinematic Mode",
      description: "Bypasses research for direct creative control—users provide detailed prompts and the system focuses on asset generation, voice, and rendering."
    }
  ],
  frontend: {
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Turborepo Monorepo", "React Query", "Zustand"],
    details: "Typed SDK layer with TypeScript contracts, React Query for server state, Zustand for authentication state, responsive UI with real-time progress tracking, deployed to Vercel."
  },
  backend: {
    stack: ["FastAPI", "Python 3.12", "Pydantic v2", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis"],
    details: "Layered architecture with REST routers, JWT/API-key authentication middleware, repository pattern, async job orchestration, persistent workflow state, and Pydantic validation throughout."
  },
  ai: {
    stack: ["LangGraph", "LangChain", "Gemini", "LLM Gateway", "Provider Registry"],
    details: "Multi-agent workflows with router/planner/research/reducer patterns, LLM gateway for prompt/response tracking, provider abstraction for video generation (Kling v3 via fal.ai, Veo), prompt schemas, and model feature flags."
  },
  infrastructure: {
    stack: ["Docker", "Fly.io", "Vercel", "Celery", "Redis", "Supervisord"],
    details: "Docker-based deployment, FastAPI backend on Fly.io with health checks, Celery worker/beat under supervisord, Redis broker (Upstash TLS in production), persistent volume for generated media, deterministic startup sequence, and rollback via image redeploy."
  },
  deployment: {
    stack: ["CI/CD", "Docker Compose", "Health Checks", "Migrations"],
    details: "Automated migrations with Alembic, health check endpoints for orchestration, environment-based configuration, secrets excluded from source control, and container-based reproducibility."
  },
  operations: {
    stack: ["Celery Tasks", "Retry Logic", "Langfuse", "Grafana Loki"],
    details: "Retryable tasks with restart-safe checkpoints, idempotent job submission, duplicate paid-job prevention, per-second cost tracking, structured logging to Grafana Loki, and LLM trace observability via Langfuse (prompts, responses, tokens, costs, latency)."
  },
  patterns: [
    "Layered backend architecture with repository pattern",
    "Dependency injection via service container",
    "Provider registry/strategy abstraction for AI services",
    "Workflow orchestration with stateful checkpoints",
    "Async task processing with Celery/Redis",
    "Typed client/contract boundaries with TypeScript SDK",
    "Feature flags for model/provider selection"
  ],
  cost: "Approximately $1.51 for a 12-second Kling v3 clip at $0.126/sec, with per-second cost tracking and duplicate-job prevention to avoid waste."
};

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
