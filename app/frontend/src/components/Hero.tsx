import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ChevronRight } from "lucide-react";

const HERO_BG = "https://mgx-backend-cdn.metadl.com/generate/images/983868/2026-02-22/2cc709d3-7ec2-4969-a31d-c87aa28122af.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400/10 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities in Germany
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Chaitali{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Gaikwad
            </span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
            Data Analyst & ML Engineer
          </p>

          {/* Tagline */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build robust data pipelines, actionable dashboards, and ML models
            that drive commercial decisions. 1.5+ years of hands-on experience
            in data validation, KPI monitoring, and financial reporting.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-400/30 hover:scale-105"
            >
              View Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="!bg-transparent border-slate-600 text-slate-300 hover:!bg-slate-800 hover:border-slate-500 px-8 py-6 text-base rounded-xl transition-all hover:scale-105"
            >
              <a href="/Chaitali_Gaikwad_CV.pdf" download>
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-sky-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}