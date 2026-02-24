import { useEffect, useRef, useState } from "react";
import { MapPin, Globe, Languages, ExternalLink } from "lucide-react";

const ABOUT_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/983868/2026-02-22/1ee1142d-8570-41ec-9f3e-de81463855fc.png";

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Pune, India" },
  { icon: Globe, label: "Relocation", value: "Open to Germany" },
  {
    icon: Languages,
    label: "Languages",
    value: "English (IELTS 7) · German (A1) · Hindi · Marathi",
  },
];

const links = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/chaitaliig/",
  },
  {
    label: "GitHub",
    url: "https://github.com/chaitaliig",
  },
  {
    label: "Portfolio",
    url: "https://portfolio-website-ds.vercel.app/",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0F172A]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sky-400 font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
          <div className="flex-1 h-px bg-slate-700 ml-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Text content */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am an Analyst with 1.5+ years of hands-on experience delivering
              data validation, KPI monitoring, financial reporting, and
              stakeholder-facing administration. I maintain central data systems,
              prepare management information, and support trading and category
              teams with accurate pricing, promotional, and turnover analysis.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Highly numerate with advanced Excel & Power BI skills, proficient
              in SQL and Python, I have a strong track record of reducing manual
              effort via automation and delivering clear reports that support
              commercial decisions. Currently pursuing an Distant MBA in Operations &
              Data Science from NMIMS Mumbai.
            </p>

            {/* Quick facts */}
            <div className="space-y-3 pt-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <fact.icon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-500 text-sm font-medium">
                      {fact.label}:
                    </span>{" "}
                    <span className="text-slate-300">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:border-sky-400/50 hover:text-sky-300 transition-all"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 to-indigo-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700">
                <img
                  src={ABOUT_IMG}
                  alt="Professional workspace with data dashboards"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-sky-400/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}