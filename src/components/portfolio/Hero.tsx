import { useEffect, useState } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/Gemini_Generated_Image_2alt3g2alt3g2alt.png";
import resumeAsset from "@/assets/PRANAV_YOGESH_HADOLE_Resume.pdf.asset.json";

const roles = ["AI Engineer", "Data Scientist", "Researcher", "LLM Builder"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          {/* Profile Picture */}
          <div className="order-1 flex shrink-0 justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/60 via-accent/40 to-primary/60 blur-lg" />
              <img
                src={profileImage}
                alt="Pranav Hadole"
                className="relative h-48 w-48 rounded-full border-2 border-border/60 object-cover shadow-2xl sm:h-56 sm:w-56 md:h-72 md:w-72"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 flex-1 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to research & engineering roles · 2026
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              Pranav <span className="text-gradient">Hadole</span>
            </h1>

            <div className="mt-6 flex items-baseline gap-3 font-display text-2xl text-muted-foreground sm:text-3xl">
              <span>I'm an</span>
              <span className="caret font-semibold text-foreground">{text}</span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Building intelligent systems that solve real-world problems through{" "}
              <span className="text-foreground">Machine Learning</span>,{" "}
              <span className="text-foreground">LLMs</span>,{" "}
              <span className="text-foreground">Computer Vision</span> and{" "}
              <span className="text-foreground">AI Agents</span>. Currently engineering the future
              of agentic AI with <span className="text-foreground">AstraMind AgentOS</span>.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-primary"
              >
                <Sparkles size={16} /> View Projects
              </a>
              <a
                href={resumeAsset.url}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/60"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}