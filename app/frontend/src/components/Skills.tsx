import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const SKILLS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/983868/2026-02-22/ea05a60a-0f61-4c99-bf16-874cb82f278f.png";

interface SkillGroup {
  title: string;
//   skills: { name: string; level: "Pro" | "Advanced" | "Familiar" }[];
  skills: { name: string; level: "Pro" | "Advanced" }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Core & Data Engineering",
    skills: [
      { name: "SQL (MySQL, MSSQL, SSMS)", level: "Pro" },
      { name: "Python (Pandas, NumPy)", level: "Pro" },
      { name: "ETL Pipeline Development", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Data Validation & QC", level: "Pro" },
      { name: "Advanced Excel", level: "Pro" },
    ],
  },
  {
    title: "ML & Modelling",
    skills: [
      { name: "scikit-learn", level: "Advanced" },
      { name: "Time Series (ARIMA, SARIMA)", level: "Advanced" },
      { name: "SVM & Random Forest", level: "Advanced" },
      { name: "Predictive Modelling", level: "Advanced" },
      { name: "Data Preprocessing", level: "Pro" },
    ],
  },
  {
    title: "BI & Visualisation",
    skills: [
      { name: "Power BI (DAX, Dashboards)", level: "Pro" },
      { name: "AWS QuickSight", level: "Advanced" },
      { name: "KPI Reporting", level: "Pro" },
      { name: "Tableau", level: "Advanced" },
      { name: "MI Reporting", level: "Pro" },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: "Pro" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Jupyter Notebook", level: "Pro" },
      { name: "Postman", level: "Advanced" },
      { name: "DBeaver / SSMS", level: "Advanced" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Pro: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  Advanced: "bg-sky-400/10 text-sky-300 border-sky-400/20",
//   Familiar: "bg-amber-400/10 text-amber-300 border-amber-400/20",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B1120] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={SKILLS_IMG}
          alt=""
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
        />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sky-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-slate-100">Skills & Tools</h2>
          <div className="flex-1 h-px bg-slate-700 ml-4" />
        </div>

        <p className="text-slate-400 mb-12 max-w-2xl">
          Technical competencies grouped by domain. Proficiency levels reflect
          real project experience.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10">
          {Object.entries(levelColors).map(([level, cls]) => (
            <div key={level} className="flex items-center gap-2">
              <Badge variant="outline" className={cls + " text-xs"}>
                {level}
              </Badge>
              <span className="text-slate-500 text-xs">
                {level === "Pro"
                  ? "Daily use, deep expertise"
                  : level === "Advanced"
                  ? "Regular use, strong knowledge"
                  : "Working knowledge"}
              </span>
            </div>
          ))}
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-sky-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-slate-900/50 rounded-lg px-3 py-2"
                  >
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                    <Badge
                      variant="outline"
                      className={
                        levelColors[skill.level] + " text-[10px] px-1.5 py-0"
                      }
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-10 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Analytical & Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "KPI Tracking & Analysis",
              "Forecasting & Predictive Insights",
              "Root-Cause Analysis",
              "Dashboard Building & Automation",
              "Requirement Gathering",
              "Stakeholder Coordination",
              "Strong Communication",
              "Team Collaboration",
              "Problem-Solving",
              "Attention to Detail",
              "Time Management",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm text-slate-300 bg-indigo-400/5 border border-indigo-400/15 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}