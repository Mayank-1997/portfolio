"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Rocket,
  Terminal,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { AiBackground } from "@/components/ai-background";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  architectureFlows,
  certifications,
  experiences,
  links,
  navItems,
  projects,
  skillGroups,
  stats
} from "@/lib/data";
import { cn } from "@/lib/utils";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-black/55 shadow-panel backdrop-blur-2xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-primary/30 bg-primary/10 font-display font-bold text-primary shadow-glow">
            MA
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Mayank Aggarwal</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 backdrop-blur-2xl lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-white/66 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="glass">
            <a href={links.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="mx-5 mb-5 rounded-[8px] border border-white/10 bg-black/85 p-3 backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-[8px] px-4 py-3 text-sm text-white/75 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <AiBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pt-16">
        <Reveal>
          <div>
            <Badge className="border-accent/35 bg-accent/10 text-[#ffbf72]">
              <Terminal className="mr-2 h-3.5 w-3.5" /> Backend & Agentic AI Engineer
            </Badge>
            <h1 className="mt-7 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-7xl lg:text-8xl">
              Building Scalable Backend Platforms &{" "}
              <span className="bg-gradient-to-r from-[#ff6b00] via-[#ffb224] to-[#fff0b0] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                Agentic AI Systems
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
              Generative AI Engineer specializing in Agentic AI workflows, RAG pipelines, autonomous AI systems,
              FastAPI microservices, and production-grade backend engineering.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  <Rocket className="h-5 w-5" /> View Projects
                </a>
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href="#contact">
                  <Mail className="h-5 w-5" /> Contact Me
                </a>
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href={links.github} target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" /> GitHub
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.08 }}
                  className="rounded-[8px] border border-primary/15 bg-white/[0.055] p-4 backdrop-blur-xl"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-accent to-primary" />
                  <p className="font-display text-sm font-semibold text-white">{stat}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" />
            <Card className="relative overflow-hidden p-3">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="relative aspect-square overflow-hidden rounded-[8px] border border-white/10 bg-black">
                <Image
                  src="/assets/MAYANK_PROFILE_PIC.png"
                  alt="Futuristic AI avatar representation of Mayank Aggarwal"
                  fill
                  sizes="(max-width: 768px) 92vw, 42vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-[8px] border border-primary/20 bg-black/50 p-4 backdrop-blur-xl">
                  <p className="font-display text-sm font-semibold text-primary">AI Architect Mode</p>
                  <p className="mt-1 text-xs text-white/65">LangGraph orchestration • RAG • FastAPI platforms</p>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering reliable backends for the age of autonomous software."
          body="Mayank blends backend engineering discipline with modern AI orchestration to build systems that move from prototype energy to production trust."
        />
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full p-7">
              <BriefcaseBusiness className="h-9 w-9 text-primary" />
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">Backend depth. AI-native execution.</h3>
              <p className="mt-5 leading-8 text-white/65">
                Mayank builds scalable architectures across FastAPI, Python, Docker, Kubernetes, AWS, distributed
                systems, semantic retrieval, and enterprise AI automation. His work emphasizes clean service boundaries,
                observability-minded delivery, secure APIs, and AI workflows that can be reasoned about under real
                production constraints.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {["LangGraph", "LangChain", "OpenAI APIs", "Groq APIs", "Gemini APIs", "RAG systems", "Prompt Engineering", "Multi-Agent Systems"].map((item) => (
                <Card key={item} className="group relative overflow-hidden p-5">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <p className="mt-4 font-display text-lg font-semibold text-white">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Production-focused capability for enterprise AI systems, automation, and scalable backend workflows.
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A production-grade stack for agentic AI."
          body="The skill map is intentionally balanced: LLM orchestration, backend platforms, cloud deployment, databases, and distributed systems all reinforcing each other."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <Card className="group h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} className="bg-white/[0.045] text-white/75">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise engineering with AI systems momentum."
          body="A timeline shaped by financial intelligence, production APIs, scalable services, and AI-assisted delivery workflows."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <div className={cn("relative mb-8 md:w-1/2", index % 2 ? "md:ml-auto md:pl-8" : "md:pr-8")}>
                <div
                  className={cn(
                    "absolute left-0 top-6 h-3 w-3 rounded-full bg-primary shadow-glow md:left-auto",
                    index % 2 ? "md:left-[-6px]" : "md:right-[-6px]"
                  )}
                />
                <Card className="ml-10 p-6 md:ml-0">
                  <p className="text-sm font-semibold text-primary">{item.role}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-4 leading-7 text-white/62">{item.focus}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <Badge key={highlight}>{highlight}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production AI applications with real deployment surfaces."
          body="Each build is presented like a startup product: problem clarity, architecture signal, production stack, and a direct path to evaluate the live system."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={index * 0.07}>
                <Card className="group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-2 hover:border-primary/45 hover:shadow-glow">
                  <div className="relative h-48 overflow-hidden border-b border-white/10 bg-[#090705]">
                    <div className="absolute inset-0 bg-radial-grid bg-[size:20px_20px] opacity-40" />
                    <motion.div
                      className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/25 bg-primary/10"
                      animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                      <Icon className="h-10 w-10 text-primary" />
                    </motion.div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                    <Badge className="absolute bottom-4 left-4">Live Deployment</Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                    {"subtitle" in project && project.subtitle ? (
                      <p className="mt-1 text-sm text-primary/80">{project.subtitle}</p>
                    ) : null}
                    <p className="mt-4 leading-7 text-white/62">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} className="bg-white/[0.045] text-white/70">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-white/58">
                      {project.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex gap-3 pt-7">
                      <Button asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live Demo <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="glass" size="icon">
                        <a href={links.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="relative overflow-hidden px-5 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,36,.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Architecture Showcase"
          title="From multi-agent plans to backend execution paths."
          body="A compact visualization of the systems Mayank builds: agent coordination, semantic retrieval, LLM processing, and microservices working as one product-grade architecture."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {architectureFlows.map((flow, index) => {
            const Icon = flow.icon;
            return (
              <Reveal key={flow.title} delay={index * 0.08}>
                <Card className="relative overflow-hidden p-6">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="mb-7 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{flow.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {flow.nodes.map((node, nodeIndex) => (
                      <motion.div
                        key={node}
                        className="relative rounded-[8px] border border-white/10 bg-black/35 p-4"
                        whileHover={{ x: 5, borderColor: "rgba(255,178,36,.45)" }}
                      >
                        {nodeIndex < flow.nodes.length - 1 ? (
                          <div className="absolute left-6 top-full h-3 w-px bg-primary/45" />
                        ) : null}
                        <div className="flex items-center gap-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-xs text-primary">
                            {nodeIndex + 1}
                          </span>
                          <span className="text-sm font-medium text-white/82">{node}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Foundations that support production AI engineering."
          body="Data structures, databases, machine learning, and backend application delivery form the base layer behind the newer AI systems work."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert} delay={index * 0.05}>
              <Card className="p-6">
                <Award className="h-7 w-7 text-primary" />
                <p className="mt-5 font-display text-lg font-semibold text-white">{cert}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[8px] border border-primary/20 bg-white/[0.055] shadow-glow backdrop-blur-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_.85fr]">
            <div className="p-8 md:p-12">
              <Badge>Contact</Badge>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
                Build the next AI system with Mayank.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Open for backend engineering, agentic AI systems, RAG pipelines, production GenAI applications,
                freelancing, and startup product engineering conversations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={links.email}>
                    <Mail className="h-5 w-5" /> Email
                  </a>
                </Button>
                <Button asChild size="lg" variant="glass">
                  <a href={links.linkedIn} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="glass">
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-black/30 p-8 md:p-12 lg:border-l lg:border-t-0">
              {[
                { icon: Mail, label: "Email", value: "developermayank18@gmail.com", href: links.email },
                { icon: Phone, label: "Phone", value: "+91 7018858411", href: links.phone },
                { icon: Linkedin, label: "LinkedIn", value: "mayank-aggarwal-116061141", href: links.linkedIn },
                { icon: Github, label: "GitHub", value: "Mayank-1997 repositories", href: links.github }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group mb-4 flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:border-primary/40 hover:bg-primary/10"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-xs uppercase text-white/35">{item.label}</span>
                      <span className="break-all text-sm font-medium text-white/80 group-hover:text-white">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PortfolioClient() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/45 md:px-8">
        <p>Mayank Aggarwal • Backend & Agentic AI Engineer • Production GenAI Systems</p>
      </footer>
    </>
  );
}
