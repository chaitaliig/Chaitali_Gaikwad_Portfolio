import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Send,
  MapPin,
  Heart,
  Shield,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "chaitaligaikwad2708@gmail.com",
    href: "mailto:chaitaligaikwad2708@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 84840 06619",
    href: "tel:+918484006619",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chaitaliig",
    href: "https://www.linkedin.com/in/chaitaliig/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/chaitaliig",
    href: "https://github.com/chaitaliig",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "portfolio-website-ds.vercel.app",
    href: "https://portfolio-website-ds.vercel.app/",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with pre-filled content
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:chaitaligaikwad2708@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#0B1120]">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sky-400 font-mono text-sm">06.</span>
            <h2 className="text-3xl font-bold text-slate-100">Get in Touch</h2>
            <div className="flex-1 h-px bg-slate-700 ml-4" />
          </div>

          {/* Availability note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium mb-12">
            <MapPin className="w-4 h-4" />
            Available for internships · MSc admissions · Remote work · Willing to
            relocate to Germany
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold h-12 shadow-lg shadow-sky-500/20"
                >
                  {submitted ? (
                    "Opening email client..."
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-6">
                Direct Contact
              </h3>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-sky-400/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-400/20 transition-colors">
                      <link.icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-slate-300 text-sm group-hover:text-sky-300 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 text-sm hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Privacy / GDPR */}
            <div className="flex items-center gap-4 text-slate-600 text-xs">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                GDPR Compliant
              </span>
              <span>·</span>
              <span>No cookies or tracking used</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
            <p className="text-slate-600 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Chaitali Gaikwad. Built with{" "}
              <Heart className="w-3 h-3 text-rose-400" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}