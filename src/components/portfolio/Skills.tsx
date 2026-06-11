import { Section } from "./Section";

const groups = [
  { name: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript"] },
  { name: "AI / ML", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "Generative AI", "RLHF"] },
  { name: "Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "FastAPI", "Flask", "Streamlit", "LangChain", "LangGraph"] },
  { name: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite", "Redis"] },
  { name: "Cloud & Tools", items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Linux", "Git"] },
];

const marquee = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "FastAPI", "Docker",
  "PostgreSQL", "AWS", "React", "TypeScript", "OpenAI", "Hugging Face",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 — Skills"
      title={<>The <span className="text-gradient">stack</span> I build with.</>}
      description="Tools I reach for daily — from low-level model code to deployed services."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.name}
            className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/40"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              {g.name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-card/30 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/70 hover:text-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}