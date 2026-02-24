import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Role {
  title: string;
  company: string;
  website: string;
  dates: string;
  location: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    title: "Jr. Data Scientist",
    company: "aYc Analytics",
    website: "https://www.aycanalytics.com/",
    dates: "Apr 2025 – Aug 2025",
    location: "Pune, India",
    highlights: [
      "Ensured high-quality product, pricing, and promotional datasets by running automated validation checks and resolving data issues before they entered central systems.",
      "Supported category and business teams with structured reports, dashboards, and performance insights used for pricing decisions and turnover analysis.",
      "Collaborated with internal stakeholders to troubleshoot data discrepancies and maintain accurate inputs for downstream reporting.",
    ],
  },
  {
    title: "Jr. Data Analyst",
    company: "Maxamtech Digital Ventures",
    website: "https://www.maxamventures.com/",
    dates: "Jun 2024 – Mar 2025",
    location: "Pune, India",
    highlights: [
      "Performed daily reconciliation of transaction, pricing, and promotional data using SQL, ensuring accurate turnover reporting and smooth trading operations.",
      "Produced KPI dashboards with AWS Quicksight, performance summaries, and promo-impact reports for trading and category teams, supporting data-driven commercial decisions.",
      "Coordinated with cross-functional teams to resolve configuration issues and maintain clean product/promo data for invoicing and budgeting.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0B1120]">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="text-sky-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
          <div className="flex-1 h-px bg-slate-700 ml-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-400/50 via-slate-600 to-transparent" />

          <div className="space-y-12">
            {roles.map((role, index) => (
              <div key={index} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-sky-400 bg-[#0B1120] z-10" />

                {/* Card */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-sky-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-sky-400" />
                        {/* <span className="text-sky-400 font-medium">
                          {role.company}
                        </span> */}
                        <a
                            href={role.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 font-medium hover:underline hover:text-sky-300 transition"
                        >
                        {role.company}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{role.dates}</span>
                      <span className="text-slate-600">·</span>
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {role.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-sky-400 mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span className="text-slate-400 leading-relaxed text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}