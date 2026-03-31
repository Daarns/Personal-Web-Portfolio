"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Calendar, Zap, X } from "lucide-react";
import Image from "next/image";

export default function ProjectsNew() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Chess Web App",
      description:
        "Full-featured chess game with Clean Architecture and SOLID principles.",
      longDescription:
        "Professional chess application with complete rule engine (castling, en passant, promotion), check/checkmate detection, undo/redo, and persistent game state using LocalStorage.",
      tech: ["Next.js", "TypeScript", "Clean Architecture"],
      demo: "https://daarn-chess-app.vercel.app/",
      github: "https://github.com/Daarns/chess-game",
      image: "/assets/project/chess-web-app.png",
      status: "Completed",
      year: "2025",
      category: "Web App",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Multi-vendor marketplace with buyer-to-seller role switching.",
      longDescription:
        "Full-featured marketplace where buyers can become sellers, with comprehensive admin controls for product approval, shipping, and user role management.",
      tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
      demo: "https://ecommerce-pro-self.vercel.app/",
      github: "#",
      image: "/assets/project/e-commerce.png",
      status: "In Progress",
      year: "2025",
      category: "E-Commerce",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio with interactive 3D elements and smooth animations.",
      longDescription:
        "Responsive portfolio website showcasing projects and skills with interactive 3D keycaps, smooth animations, and modern retro design principles.",
      tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
      demo: "#",
      github: "https://github.com/Daarns/Personal-Web-Portfolio/tree/main",
      image: "/assets/project/portofolio.png",
      status: "Completed",
      year: "2025",
      category: "Frontend",
    },
    {
      title: "Web Scraping Platform",
      description:
        "AI-powered academic journal scraper with Gemini AI query optimization.",
      longDescription:
        "Advanced web scraping platform for academic research using Gemini AI to optimize search queries, ensuring relevant journal discovery with automated data extraction and filtering.",
      tech: ["FastAPI", "BeautifulSoup", "Selenium", "Gemini AI"],
      demo: "#",
      github: "https://github.com/Daarns/Journal-web-scraping",
      image: "/assets/project/homepage.png",
      status: "Completed",
      year: "2024",
      category: "AI/ML",
    },
    {
      title: "Nutrihealth",
      description:
        "Healthcare platform with WhatsApp integration, health forums, and wellness tracking.",
      longDescription:
        "Comprehensive healthcare consultation platform featuring WhatsApp doctor integration, community health forums, weight monitoring, and curated medical articles for wellness management.",
      tech: ["Laravel", "MySQL", "WhatsApp API"],
      github: "https://github.com/Daarns/NutriHealth",
      demo: "#",
      image: "/assets/project/Nutrihealth.png",
      status: "Completed",
      year: "2024",
      category: "Healthcare",
    },
    {
      title: "Website-IOT",
      description:
        "Real-time IoT monitoring platform with Arduino integration and live sensor visualization.",
      longDescription:
        "Real-time IoT monitoring platform that receives and displays sensor data from Arduino IDE, featuring live data visualization, device status tracking, and comprehensive data logging capabilities.",
      tech: ["Laravel", "MySQL", "Arduino", "ESP32", "DHT-22"],
      github: "https://github.com/Daarns/Website-IOT/tree/main",
      demo: "#",
      image: "/assets/project/Web-IOT.png",
      status: "Completed",
      year: "2024",
      category: "IoT",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "In Progress":
        return "bg-amber-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Retro Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-3 bg-secondary/10 border-3 border-secondary mb-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Featured <span className="text-secondary">Projects</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            A collection of my work showcasing skills in web development, IoT, and AI integration.
          </p>
        </motion.div>

        {/* Projects Grid - Retro Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="bg-card border-4 border-foreground retro-shadow hover:translate-y-[-8px] transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`${getStatusColor(project.status)} px-3 py-1 text-xs font-bold uppercase border-2 border-foreground`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-background/90 backdrop-blur px-3 py-1 text-xs font-mono font-bold border-2 border-foreground">
                      {project.category}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedProject(index)}
                      className="px-6 py-3 bg-white text-primary border-3 border-foreground font-bold uppercase transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Year */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-black uppercase text-foreground leading-tight flex-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground ml-2">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-accent/20 border-2 border-accent text-xs font-mono font-bold text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-xs font-mono font-bold text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border-3 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2 font-bold uppercase text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 retro-button px-4 py-2 rounded-none flex items-center justify-center gap-2 font-bold uppercase text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Retro Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-accent opacity-50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-accent opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-background border-4 border-foreground retro-shadow max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-primary text-primary-foreground p-6 border-b-4 border-foreground flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-black uppercase mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm font-mono">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {projects[selectedProject].year}
                      </span>
                      <span className="flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        {projects[selectedProject].category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white text-primary border-3 border-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Image */}
                  {projects[selectedProject].image && (
                    <div className="relative aspect-video border-4 border-foreground overflow-hidden">
                      <Image
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        quality={90}
                      />
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h4 className="text-xl font-black uppercase mb-3 text-foreground flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      About
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-black uppercase mb-3 text-foreground flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-accent" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-accent/20 border-3 border-accent font-mono font-bold text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {projects[selectedProject].github !== "#" && (
                      <a
                        href={projects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 border-3 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2 font-bold uppercase"
                      >
                        <Github className="w-5 h-5" />
                        View Source Code
                      </a>
                    )}
                    {projects[selectedProject].demo !== "#" && (
                      <a
                        href={projects[selectedProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 retro-button px-6 py-3 rounded-none flex items-center justify-center gap-2 font-bold uppercase"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
