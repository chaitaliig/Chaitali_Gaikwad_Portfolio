import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  BookOpen,
  ExternalLink,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Degree {
  title: string;
  institution: string;
  period: string;
  status?: string;
  thesis?: string;
}

const degrees: Degree[] = [
  {
    title: "BE, Computer Science",
    institution: "Savitribai Phule Pune University (SPPU)",
    period: "2020 – 2024",
    thesis:
      "Phishing Detection System Using Hybrid Machine Learning Based on URL",
  },
  {
    title: "MBA, Operations in Data Science (Online)",
    institution: "NMIMS (Narsee Monjee Institute of Management Studies)",
    period: "Aug 2025 – Aug 2027",
    status: "Ongoing",
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", highlight: true },
  { name: "SUNY – Diploma in AI", highlight: true },
  { name: "IELTS – Overall Band 7", highlight: true },
  { name: "NASSCOM – Certificate Course on Data Science", highlight: true },
  {
    name: "Microsoft & LinkedIn – Career Essentials in Generative AI",
    highlight: true,
  },
  {
    name: "360digitmg – Professional Program on Data Science and AI",
    highlight: true,
  },
  {
    name: "Indian Institute of Skill Development – Certificate in Database Management",
    highlight: true,
  },
  {
    name: "Accenture – Digital Skills in Artificial Intelligence",
    highlight: true,
  },
  { name: "NPTEL – Enhancing Soft Skills and Personality", highlight: true },
  { name: "Brain O Vision – Data Science Hackathon", highlight: true },
];

const publication = {
  title:
    "Advancement in Phishing Detection: A Hybrid Machine Learning Approach Integrated with Google Chrome",
  journal: "TIJER – International Research Journal (ISSN 2349-9249)",
  date: "April 2024",
  volume: "Volume 11, Issue 4, pg b215–b219",
  authors:
    "Chaitali Gaikwad, Prof. Sonal Chanderi, Dhruvika Agrawal, Yukta Belgaonkar, Grace Gaikwad",
  takeaway:
    "Developed a hybrid ML approach combining Decision Tree, Random Forest, and SVM classifiers with a Chrome extension for real-time phishing URL detection, achieving robust accuracy with low false positives.",
};

export default function Education() {
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
    <section id="education" className="py-20 md:py-28 bg-[#0F172A]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="text-sky-400 font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-slate-100">
            Education, Certifications & Publications
          </h2>
          <div className="flex-1 h-px bg-slate-700 ml-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left column: Education + Publication */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                Education
              </h3>
              <div className="space-y-4">
                {degrees.map((deg) => (
                  <div
                    key={deg.title}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-sky-400/20 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          {deg.title}
                        </h4>
                        <p className="text-sky-400 text-sm font-medium mt-1">
                          {deg.institution}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-slate-400 text-sm">
                          {deg.period}
                        </span>
                        {deg.status && (
                          <Badge className="ml-2 bg-amber-400/10 text-amber-300 border-amber-400/20 text-xs">
                            {deg.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {deg.thesis && (
                      <p className="text-slate-400 text-sm mt-3 italic">
                        Thesis: {deg.thesis}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Publication */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-sky-400" />
                Publication
              </h3>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-sky-400/20 transition-all">
                <h4 className="text-base font-semibold text-slate-100 leading-snug">
                  {publication.title}
                </h4>
                <p className="text-sky-400 text-sm font-medium mt-2">
                  {publication.journal}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {publication.date} · {publication.volume}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Authors: {publication.authors}
                </p>
                <div className="mt-4 bg-sky-400/5 border border-sky-400/15 rounded-lg p-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-sky-400 font-semibold">
                      Key Takeaway:
                    </span>{" "}
                    {publication.takeaway}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Certifications + Resume Download */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-sky-400" />
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      cert.highlight
                        ? "bg-sky-400/5 border border-sky-400/20"
                        : "bg-slate-800/30 border border-slate-700/30"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        cert.highlight ? "bg-sky-400" : "bg-slate-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        cert.highlight
                          ? "text-slate-200 font-medium"
                          : "text-slate-400"
                      }`}
                    >
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <div className="bg-gradient-to-br from-sky-400/10 to-indigo-400/10 border border-sky-400/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2 mb-3">
                <Download className="w-5 h-5 text-sky-400" />
                Download Resume
              </h3>
              <p className="text-slate-400 text-sm mb-5">
                Get a copy of my full CV in PDF format, formatted in Europass
                style for German university and employer applications.
              </p>
              <Button
                asChild
                className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold shadow-lg shadow-sky-500/20"
              >
                <a href="/Chaitali_Gaikwad_CV.pdf" download>
                  <Download className="mr-2 w-4 h-4" />
                  Download CV (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}