"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  if (!mounted) return null;

  return (
    // Desktop Only Navbar - Retro Style
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${
        isScrolled
          ? "py-2"
          : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex justify-between items-center px-6 py-4 transition-all duration-300 ${
            isScrolled
              ? "bg-card border-3 border-foreground retro-shadow"
              : "bg-transparent"
          }`}
        >
          {/* Logo - Retro Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary border-3 border-foreground flex items-center justify-center">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <span className="text-xl font-black uppercase tracking-tight text-foreground">
                Nandana
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-mono font-bold uppercase text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                
                {/* Active Indicator - Retro Style */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary border-t-2 border-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Contact CTA - Retro Button */}
            <motion.a
              href="mailto:nandana219@gmail.com"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-4 py-2 bg-primary text-white border-3 border-foreground font-bold uppercase text-sm hover:translate-y-[-2px] transition-all inline-flex items-center gap-2 retro-shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}