import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronRight } from "lucide-react";

const PROJECTS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/983868/2026-02-22/e73a2923-e461-46dd-a690-3999eecc8bc6.png";

interface Project {
  title: string;
  summary: string;
  stack: string[];
  result: string;
  problem: string;
  approach: string;
  outcome: string;
  learnings: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: "Optimized Bonus Allocation",
    summary:
      "ML model to optimize bonus distribution aligned with commercial KPIs.",
    stack: ["Python", "scikit-learn", "Power BI"],
    result: "~20% revenue lift, ~10% margin improvement",
    problem:
      "Bonus distribution caused resource waste and poor ROI due to misalignment with performance KPIs.",
    approach:
      "Analysed bonus distribution patterns using research-backed methods and dataset evaluation. Built a machine learning model using a synthetic dataset to optimise allocation decisions. Created a Power BI dashboard to visualise allocation impact and monitor KPIs.",
    outcome:
      "Projected improved turnover efficiency with a ~10% margin increase and ~20% revenue lift, supporting data-driven commercial planning.",
    learnings:
      "Learned to bridge ML predictions with business stakeholder needs through intuitive visualisations.",
    isFeatured: true,
  },
  {
    title: "Automated Data Validation Pipeline",
    summary:
      "Backend automation for data loading, cleaning, and validation with schema mapping.",
    stack: ["Python", "FastAPI", "SSMS"],
    result: "Reduced manual checks significantly",
    problem:
      "Manual data entry and validation for product, pricing, and promotional data was error-prone and time-consuming.",
    approach:
      "Developed backend logic using Python and FastAPI to automate data loading, cleaning, and validation with schema mapping. Implemented automated error handling and flexible validation rules. Integrated with SSMS to streamline ingestion pipelines.",
    outcome:
      "Reduced manual checks and improved consistency across central systems, enabling smoother reporting and MI preparation for trading teams.",
    learnings:
      "Gained deep experience in building production-grade data validation pipelines with FastAPI.",
    isFeatured: true,
  },
  {
    title: "Phishing Detection System",
    summary:
      "Hybrid ML model with real-time detection for phishing identification.",
    stack: ["Python", "SVM", "Random Forest", "Streamlit", "Flask"],
    result: "Published in TIJER journal",
    problem:
      "Phishing attacks were becoming increasingly sophisticated, requiring automated real-time detection.",
    approach:
      "Developed a robust hybrid ML model extracting lexical and host-based features from URLs. Applied advanced statistical techniques and predictive modelling. Built a Chrome extension for real-time URL scanning and user alerts.",
    outcome:
      "Successfully published research in TIJER (ISSN 2349-9249). System demonstrated robust detection with low false positives.",
    learnings:
      "Gained experience in end-to-end ML deployment, from research to browser extension integration.",
  },
  {
    title: "Bindas — BI & Data Analysis System",
    summary:
      "ETL pipelines centralising product, pricing, and operational datasets.",
    stack: ["Python", "SQL", "ETL", "Power BI"],
    result: "Improved KPI visibility for trading teams",
    problem:
      "Fragmented data sources made it difficult for trading and category teams to get accurate, timely insights.",
    approach:
      "Engineered ETL pipelines to centralise and validate datasets. Developed predictive and analytical modules that generated automated management information (MI). Designed reporting workflows mirroring real-world trading support operations.",
    outcome:
      "Improved visibility into performance KPIs and turnover metrics, enabling teams to monitor pricing impact and promotions seamlessly.",
    learnings:
      "Understood the importance of data pipeline reliability in production business environments.",
  },
  {
    title: "Sales Management Dashboard",
    summary:
      "Interactive dashboard for product performance, pricing trends, and forecasting.",
    stack: ["Power BI", "Python", "Pandas", "NumPy"],
    result: "Dynamic drill-downs with forecasting",
    problem:
      "Trading teams lacked a unified view of product performance, pricing trends, and promotional outcomes.",
    approach:
      "Built an interactive dashboard analysing product performance, pricing trends, and regional sales movement. Automated data extraction and cleaning using Python. Added dynamic drill-downs by date, category, and region. Integrated forecasting logic for sales trend prediction.",
    outcome:
      "Enabled detailed evaluation of product changes and promo planning, facilitating better pricing actions and inventory decisions.",
    learnings:
      "Learned to combine Python data processing with Power BI for end-to-end analytics solutions.",
  },
  {
    title: "Raw Material Price Forecasting",
    summary:
      "Time series analysis for accurate raw material price prediction.",
    stack: ["Python", "SQL", "ARIMA", "SARIMA"],
    result: "MAPE of 0.027 — highly accurate",
    problem:
      "Unpredictable raw material prices led to suboptimal procurement strategies and increased costs.",
    approach:
      "Implemented advanced Quadratic ARIMA, SARIMA, and Exponential Smoothing models. Preprocessed data in SQL and established seamless connection between SQL database and Python for efficient model building.",
    outcome:
      "Achieved a highly accurate Mean Absolute Percentage Error (MAPE) of 0.027, enabling cost reduction through optimised procurement strategies.",
    learnings:
      "Deepened expertise in time series analysis and SQL-Python integration for forecasting workflows.",
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/5 hover:-translate-y-1 group"
    >
      {project.isFeatured && (
        <Badge className="bg-sky-400/10 text-sky-300 border-sky-400/20 mb-3 text-xs">
          Featured
        </Badge>
      )}
      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-700/50 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-emerald-400 text-sm font-medium">
          {project.result}
        </span>
        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
      </div>
    </button>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <section id="projects" className="py-20 md:py-28 bg-[#0F172A]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sky-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-slate-100">
            Projects & Case Studies
          </h2>
          <div className="flex-1 h-px bg-slate-700 ml-4" />
        </div>

        <p className="text-slate-400 mb-12 max-w-2xl">
          A selection of data engineering, machine learning, and business
          intelligence projects. Click any card to see the full case study.
        </p>

        {/* Featured banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img
            src={PROJECTS_IMG}
            alt="Data dashboard visualization"
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#0F172A]/40 flex items-center px-8">
            <div>
              <p className="text-sky-400 font-mono text-sm mb-2">
                Featured Work
              </p>
              <h3 className="text-2xl font-bold text-slate-100">
                Data-Driven Solutions
              </h3>
              <p className="text-slate-300 mt-2 max-w-md">
                From ML models to BI dashboards — building tools that support
                commercial decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project detail modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl max-h-[85vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-100">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-slate-400">
                    {selectedProject.summary}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-sky-400/10 text-sky-300 border-sky-400/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Problem */}
                  <div>
                    <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">
                      Approach
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">
                      Outcome
                    </h4>
                    <div className="flex items-start gap-3 bg-emerald-400/5 border border-emerald-400/20 rounded-lg p-4">
                      <span className="text-emerald-400 text-lg">✓</span>
                      <p className="text-emerald-300 leading-relaxed">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Learnings */}
                  <div>
                    <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">
                      Key Learnings
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {selectedProject.learnings}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700">
                  <Button
                    onClick={() => setSelectedProject(null)}
                    className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold"
                  >
                    Close
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}