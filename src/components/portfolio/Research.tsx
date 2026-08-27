import { Section } from "./Section";
import { BookOpen, ExternalLink, Quote } from "lucide-react";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="04 — Research"
      title={<>Published <span className="text-gradient">research</span>.</>}
      description="Peer-reviewed work documenting systems, methods and results."
    >
      <article className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/40 to-background p-8 sm:p-12">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
              <BookOpen size={12} /> Published · JETIR
            </span>
            <h3 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              AnantaNetra
            </h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Journal of Emerging Technologies and Innovative Research · 2025
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
              <Quote size={18} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                AnantaNetra presents a vision-centric framework combining deep learning and
                classical computer vision to deliver robust, real-time perception for
                resource-constrained environments — with quantitative gains across accuracy
                and latency over established baselines.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {["Computer Vision", "Deep Learning", "Edge Inference", "Real-time Systems"].map(
                (k) => (
                  <span
                    key={k}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {k}
                  </span>
                ),
              )}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="https://www.jetir.org/view?paper=JETIR2509217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <ExternalLink size={14} /> Read Paper
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:border-primary/60"
              >
                BibTeX Citation
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/40 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Quick facts
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Venue", "JETIR"],
                ["Year", "2025"],
                ["Role", "Co-author"],
                ["Status", "Peer-reviewed"],
                ["Domain", "Computer Vision"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>
    </Section>
  );
}