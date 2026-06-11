import { Section } from "./Section";
import { Award, ExternalLink, Trophy } from "lucide-react";

const milestones = [
  { year: "2025", title: "Research Publication", desc: "AnantaNetra published in JETIR." },
  { year: "2025", title: "LLM Post-Training Internship", desc: "Selected for a competitive AI research internship." },
  { year: "2024–25", title: "Hackathons", desc: "Multiple wins & finalist placements across national AI hackathons." },
  { year: "2024–25", title: "Certifications", desc: "Specializations in ML, DL, Generative AI & Prompt Engineering." },
  { year: "Ongoing", title: "Open Source", desc: "Contributing to AI/agent tooling projects on GitHub." },
];

const certs = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI" },
  { name: "Generative AI with LLMs", issuer: "DeepLearning.AI" },
  { name: "Prompt Engineering for Developers", issuer: "OpenAI / DLAI" },
  { name: "Data Science Professional", issuer: "IBM" },
  { name: "EF SET English C2 Proficient", issuer: "EF Standard English Test" },
  { name: "Deep Learning Specialization", issuer: "Coursera" },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="06 — Achievements & Certifications"
      title={<>Milestones along the <span className="text-gradient">way</span>.</>}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            <h3 className="font-display text-lg font-semibold">Achievements</h3>
          </div>
          <ol className="relative space-y-5 border-l border-border/80 pl-6">
            {milestones.map((m, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">{m.year}</span>
                  <h4 className="font-display font-semibold">{m.title}</h4>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-2">
            <Award size={16} className="text-primary" />
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <div
                key={c.name}
                className="group rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40"
              >
                <p className="text-sm font-semibold leading-snug">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  View <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}