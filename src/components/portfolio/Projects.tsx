import { Section } from "./Section";
import { ArrowUpRight, Github, FileText, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AstraMind AgentOS",
    tag: "Flagship",
    status: "In Progress",
    desc: "A universal AI agent platform — orchestration, memory, tools and evaluation in a single OS-level abstraction. Designed for production-grade agentic apps.",
    stack: ["Python", "FastAPI", "LangGraph", "LangChain", "Docker", "PostgreSQL", "Redis", "OpenAI API"],
    links: [
      { label: "Live Demo", icon: ExternalLink, href: "#" },
      { label: "GitHub", icon: Github, href: "#" },
      { label: "Docs", icon: FileText, href: "#" },
    ],
    featured: true,
  },
  {
    title: "Pollution Prediction",
    tag: "ML · Civic",
    status: "Shipped",
    desc: "End-to-end AQI prediction service with interactive maps, dashboards and analytics. Trained on multi-city sensor data with seasonal feature engineering.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    links: [
      { label: "Live Demo", icon: ExternalLink, href: "#" },
      { label: "GitHub", icon: Github, href: "#" },
    ],
  },
  {
    title: "AI Complaint Classification",
    tag: "Multimodal NLP",
    status: "Shipped",
    desc: "A multilingual complaint triage system with voice input, image recognition, OCR and a real-time dashboard for response teams.",
    stack: ["NLP", "Whisper", "OCR", "FastAPI", "React"],
    links: [
      { label: "GitHub", icon: Github, href: "#" },
    ],
  },
  {
    title: "AnantaNetra",
    tag: "Research",
    status: "Published",
    desc: "Research-grade visual intelligence system. Architecture, evaluation results and a published paper documenting the approach and findings.",
    stack: ["PyTorch", "OpenCV", "Transformers"],
    links: [
      { label: "Paper", icon: FileText, href: "#research" },
      { label: "GitHub", icon: Github, href: "#" },
    ],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title={<>Selected work — <span className="text-gradient">research to production</span>.</>}
      description="Each project below is a system, not a notebook. Designed, built, evaluated and shipped."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 ${
              p.featured ? "md:col-span-2" : ""
            }`}
          >
            {p.featured && (
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            )}
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {p.tag}
                  </span>
                  <span className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.status}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
                  >
                    <l.icon size={13} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}