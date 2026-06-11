import { Section } from "./Section";
import { Building2, FlaskConical, BookOpen } from "lucide-react";

const items = [
  {
    icon: Building2,
    role: "LLM Post-Training Intern",
    org: "Stealth · AI Research",
    period: "2025 — Present",
    desc: "Working on evaluation and fine-tuning pipelines for large language models. Building preference datasets, prompt-engineering rubrics and model behavior diagnostics.",
    tags: ["LLM Evaluation", "Prompt Engineering", "Preference Data", "RLHF Concepts", "Model Testing"],
  },
  {
    icon: FlaskConical,
    role: "AI Internship",
    org: "Multiple AI Startups",
    period: "2024 — 2025",
    desc: "Shipped ML systems end-to-end — from data cleaning and feature engineering to model training, deployment and monitoring in production.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Model Deployment"],
  },
  {
    icon: BookOpen,
    role: "Research Experience",
    org: "AnantaNetra · Published Paper",
    period: "2025",
    desc: "Co-authored a research publication on intelligent visual systems. Owned literature survey, experimental design and quantitative evaluation.",
    tags: ["Published Paper", "AnantaNetra", "Computer Vision", "JETIR"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title={<>Where I've shipped <span className="text-gradient">real AI work</span>.</>}
      description="Internships and research roles where I went past notebooks — building, evaluating and deploying systems."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.role}
            className="group relative flex flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_oklch(0.66_0.18_256/0.3)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon size={18} />
              </span>
              <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
            </div>
            <h3 className="font-display text-lg font-semibold">{it.role}</h3>
            <p className="mt-1 text-sm text-primary">{it.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {it.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}