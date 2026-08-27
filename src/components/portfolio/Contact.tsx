import { Section } from "./Section";
import { Github, Linkedin, Mail, MapPin, FileDown } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "hadolepranav12@gmail.com", href: "mailto:hadolepranav12@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "www.linkedin.com/in/pranav-ai-datascience", href: "https://www.linkedin.com/in/pranav-ai-datascience" },
  { icon: Github, label: "GitHub", value: "@Pranavhadole31", href: "https://github.com/Pranavhadole31" },
  { icon: MapPin, label: "Location", value: "India · Open to remote", href: null },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 — Contact"
      title={<>Let's build something <span className="text-gradient">intelligent</span>.</>}
      description="Open to research roles, AI engineering opportunities and meaningful collaborations."
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/30 to-background p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The fastest way to reach me.
            </h3>
            <p className="mt-3 max-w-md text-muted-foreground">
              I read every message. If you're working on agents, evaluation, or
              applied LLM systems — let's talk.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="mailto:hadolepranav12@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Mail size={14} /> Send email
              </a>
              <a
                id="resume"
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:border-primary/60"
              >
                <FileDown size={14} /> Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <c.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-medium">{c.value}</p>
                  </div>
                </Comp>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}