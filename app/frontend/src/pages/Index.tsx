import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-['Inter',sans-serif]">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-lg font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            CG<span className="text-slate-500">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === item.href.slice(1)
                    ? "text-sky-400 bg-sky-400/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <span className="text-sky-400 font-mono text-xs mr-1">
                  0{index + 1}.
                </span>
                {item.label}
              </button>
            ))}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="ml-3 !bg-transparent border-sky-400/50 text-sky-400 hover:!bg-sky-400/10 hover:border-sky-400"
            >
              <a href="/Chaitali_Gaikwad_CV.pdf" download>
                <Download className="mr-1.5 w-3.5 h-3.5" />
                CV
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-sky-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A]/98 backdrop-blur-lg border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.href.slice(1)
                      ? "text-sky-400 bg-sky-400/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-sky-400 font-mono text-xs mr-2">
                    0{index + 1}.
                  </span>
                  {item.label}
                </button>
              ))}
              <a
                href="/Chaitali_Gaikwad_CV.pdf"
                download
                className="block w-full text-center px-4 py-3 mt-2 text-sm font-medium text-sky-400 border border-sky-400/50 rounded-lg hover:bg-sky-400/10 transition-all"
              >
                <Download className="inline mr-1.5 w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}