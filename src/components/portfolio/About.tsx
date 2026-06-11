import { Section } from "./Section";
import { Brain, FlaskConical, GraduationCap, Rocket, Sparkles, Cpu } from "lucide-react";

const timeline = [
  { year: "2024", title: "Started AI Journey", desc: "Dove into Python, ML fundamentals & first kaggle notebooks." },
  { year: "2024", title: "Machine Learning", desc: "Production ML pipelines, feature engineering, model deployment." },
  { year: "2024", title: "Deep Learning", desc: "PyTorch, CNNs, transformers — built first end-to-end DL systems." },
  { year: "2025", title: "Research Publication", desc: "AnantaNetra — peer-reviewed paper published in JETIR." },
  { year: "2025", title: "LLM Post-Training Intern", desc: "RLHF concepts, preference data, evaluation & prompt engineering." },
  { year: "2026", title: "AI Engineer", desc: "Architecting AstraMind AgentOS — a universal AI agent platform." },
];

const traits = [
  { icon: GraduationCap, label: "Third Year B.Tech · AI & DS" },
  { icon: FlaskConical, label: "AI Researcher" },
  { icon: Brain, label: "LLM Enthusiast" },
  { icon: Cpu, label: "Data Scientist" },
  { icon: Rocket, label: "ML Engineer" },
  { icon: Sparkles, label: "Agentic Systems Builder" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>A builder at the intersection of <span className="text-gradient">research & systems</span>.</>}
      description="I care about systems that learn, reason and act — not just demos. My focus is shipping AI products that work in the real world, backed by strong fundamentals and honest evaluation."
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {traits.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <t.icon size={16} />
                </span>
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-card/60 to-card/20 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Long-term vision
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              AstraMind AgentOS
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A universal operating system for AI agents — orchestration, memory, tools and
              evaluation in one platform. Designed to make agentic software production-grade.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ol className="relative space-y-6 border-l border-border/80 pl-6">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">{t.year}</span>
                  <h4 className="font-display text-lg font-semibold">{t.title}</h4>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}