import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Research } from "@/components/portfolio/Research";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranav Hadole — AI Engineer, Data Scientist & Researcher" },
      {
        name: "description",
        content:
          "Pranav Hadole — AI Engineer, Data Scientist & Researcher. Building intelligent systems with LLMs, ML, computer vision and AI agents.",
      },
      { property: "og:title", content: "Pranav Hadole — AI Engineer & Researcher" },
      {
        property: "og:description",
        content:
          "Building intelligent systems through ML, LLMs, Computer Vision and AI Agents.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}