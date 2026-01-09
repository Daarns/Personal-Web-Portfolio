"use client";
import {useState, useRef, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Code2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Website-IOT",
      description:
        "Real-time IoT monitoring platform that receives and displays random sensor data from Arduino IDE, featuring live data visualization and device status tracking.",
      longDescription:
        "This IoT monitoring platform demonstrates real-time data communication between Arduino devices and web applications. The system receives random sensor data transmitted from Arduino IDE and displays it through an intuitive dashboard with live charts, data logging, and device status monitoring. Built with Laravel backend for robust data handling and real-time updates.",
      tech: [
        "PHP",
        "Laravel",
        "MySQL",
        "Arduino IDE",
        "ESP32",
        "HCSR04",
        "DHT-22",
      ],
      github: "https://github.com/Daarns/Website-IOT/tree/main",
      demo: "#",
      image: "/assets/project/Web-IOT.png",
      status: "Completed",
      year: "2024",
      category: "IoT Development",
    },
    {
      title: "Nutrihealth",
      description:
        "Healthcare consultation platform featuring WhatsApp doctor integration, health forums, weight monitoring, and medical articles for comprehensive wellness management.",
      longDescription:
        "Comprehensive healthcare platform that bridges the gap between patients and medical professionals. Features include direct WhatsApp integration for doctor consultations, community health forums for peer discussions, personal weight tracking system, and curated medical articles. The platform provides a user-friendly interface for health management while maintaining easy access to professional medical advice.",
      tech: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/Daarns/NutriHealth",
      demo: "#",
      image: "/assets/project/Nutrihealth.png",
      status: "Completed",
      year: "2024",
      category: "Healthcare Web Application",
    },
    {
      title: "Web Scraping Platform",
      description:
        "AI-powered academic journal scraper with Gemini AI query optimization, designed for efficient research paper discovery and data extraction.",
      longDescription:
        "Advanced web scraping platform specifically designed for academic research. The system uses Gemini AI to optimize search queries, ensuring more relevant and accurate journal discovery. Features include intelligent query processing, automated data extraction, result filtering, and comprehensive journal database management. Built with modern Python frameworks for scalability and performance optimization.",
      tech: ["Python", "FastAPI", "BeautifulSoup", "Selenium", "Gemini API"],
      demo: "#",
      github: "https://github.com/Daarns/Journal-web-scraping",
      image: "/assets/project/homepage.png",
      status: "Completed - Needs Optimization",
      year: "2024",
      category: "Web Development",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website showcasing projects and skills with interactive 3D elements.",
      longDescription:
        "Responsive portfolio website built with Next.js and Three.js, featuring smooth animations, interactive 3D keycaps, and modern UI design principles.",
      tech: [
        "Next.js",
        "Three.js",
        "Framer Motion",
        "Tailwind CSS",
        "TypeScript",
      ],
      demo: "#",
      github: "https://github.com/Daarns/Personal-Web-Portfolio/tree/main",
      image: "/assets/project/portofolio.png",
      status: "Completed",
      year: "2025",
      category: "Frontend Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured marketplace platform where buyers can become sellers, with comprehensive admin controls for product approval, shipping management, and user role transitions.",
      longDescription:
        "Comprehensive e-commerce marketplace that enables dynamic user role switching - buyers can seamlessly become sellers. Features include product catalog management, secure payment processing, shipping coordination, and robust admin dashboard for controlling product approvals, user role transitions, and marketplace operations. The platform supports multi-vendor functionality with complete order management system.",
      tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
      demo: "https://ecommerce-pro-self.vercel.app/",
      github: "#",
      image: "/assets/project/e-commerce.png",
      status: "In Development",
      year: "2025",
      category: "E-Commerce Development",
    },
    {
      title: "Chess Web Application",
      description:
        "Full-featured local multiplayer chess game with complete rule implementation, responsive design, and Clean Architecture principles. Demonstrates SOLID design patterns and modern TypeScript development.",
      longDescription:
        "Professional chess application built with Next.js 16 and TypeScript 5, showcasing Clean Architecture and SOLID principles. Features complete chess rule engine including all standard moves (castling, en passant, pawn promotion) with real-time check and checkmate detection. Implements Repository pattern for game state persistence, Dependency Injection for loose coupling, and Use Case pattern for business logic encapsulation. The responsive UI adapts seamlessly across devices (1920px to 375px) with dynamic board sizing and intuitive click-to-move interface. Includes comprehensive game controls: undo/redo functionality, move history viewer, automatic game state persistence via LocalStorage, and turn-based validation. Built with separation of concerns across Domain (chess rules), Application (use cases), and Infrastructure (data persistence) layers, demonstrating enterprise-level software architecture in a practical application.",
      tech: ["Next.js", "Typescript"],
      demo: "https://daarn-chess-app.vercel.app/",
      github: "https://github.com/Daarns/chess-game",
      image: "/assets/project/chess-web-app.png",
      status: "Currently Completed | Future Enhancements Planned",
      year: "2025",
      category: "Web Application",
    },
  ];

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // Check scroll position
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.2, type: "spring", stiffness: 200}}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-6 shadow-lg border border-primary/20"
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary drop-shadow-sm">
              Featured Projects
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            My Latest Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing various technologies and
            development approaches
          </p>
        </motion.div>

        {/* Projects Horizontal Scroll Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg transition-all duration-200 ${
              canScrollLeft
                ? "opacity-100 hover:scale-105 hover:bg-card"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            whileHover={{scale: canScrollLeft ? 1.05 : 1}}
            whileTap={{scale: canScrollLeft ? 0.98 : 1}}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg transition-all duration-200 ${
              canScrollRight
                ? "opacity-100 hover:scale-105 hover:bg-card"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            whileHover={{scale: canScrollRight ? 1.05 : 1}}
            whileTap={{scale: canScrollRight ? 0.98 : 1}}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </motion.button>

          {/* Scrollable Projects Container */}
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.8,
                  },
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 flex-shrink-0 w-[400px] will-change-transform"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-sm text-primary/60 font-medium">
                          Project Preview
                        </p>
                        <p className="text-xs text-primary/40">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Status Badge Overlay */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-200 ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded text-xs font-medium transition-all duration-200">
                      {project.year}
                    </span>
                  </div>

                  {/* Faster hover overlay transition */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 ease-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <motion.div
                      initial={{scale: 0.8, opacity: 0}}
                      whileHover={{
                        scale: 1,
                        opacity: 1,
                        transition: {duration: 0.15, ease: "easeOut"},
                      }}
                      className="transform"
                    >
                      <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    {/*Enhanced icon with faster transition */}
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md border border-primary/20 transition-all duration-200"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: {duration: 0.2, ease: "easeOut"},
                      }}
                    >
                      <Code2 className="w-5 h-5 text-white drop-shadow-sm" />
                    </motion.div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
                      {project.category}
                    </span>
                  </div>

                  {/* Faster title color transition */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 transition-colors duration-200">
                    {project.description}
                  </p>

                  {/* Faster tech stack animations */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium transition-all duration-200 hover:bg-primary/20"
                        whileHover={{
                          scale: 1.05,
                          transition: {duration: 0.15},
                        }}
                        initial={{opacity: 0, y: 10}}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: techIndex * 0.05,
                            duration: 0.3,
                          },
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium transition-all duration-200 group-hover:bg-primary/10 group-hover:text-primary">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Faster button animations */}
                  <div className="flex items-center gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.05,
                        transition: {duration: 0.15, ease: "easeOut"},
                      }}
                      whileTap={{scale: 0.98}}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background rounded-lg text-xs font-medium hover:bg-foreground/90 transition-all duration-200 hover:shadow-md"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </motion.a>

                    {project.demo !== "#" && project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.05,
                          transition: {duration: 0.15, ease: "easeOut"},
                        }}
                        whileTap={{scale: 0.98}}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-muted transition-all duration-200 hover:shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </motion.a>
                    )}

                    <motion.button
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === index ? null : index
                        )
                      }
                      whileHover={{
                        scale: 1.05,
                        transition: {duration: 0.15, ease: "easeOut"},
                      }}
                      whileTap={{scale: 0.98}}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-primary hover:bg-primary/10 rounded-lg text-xs font-medium transition-all duration-200 ml-auto hover:shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </motion.button>
                  </div>
                </div>

                {/*Faster gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    transition: {duration: 0.2, ease: "easeOut"},
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({length: Math.ceil(projects.length / 3)}).map(
              (_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors duration-200 hover:bg-primary/50"
                  whileHover={{scale: 1.2}}
                />
              )
            )}
          </div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{scale: 0.95, opacity: 0, y: 20}}
                animate={{scale: 1, opacity: 1, y: 0}}
                exit={{scale: 0.95, opacity: 0, y: 20}}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  duration: 0.3,
                }}
                className="bg-card border border-border rounded-2xl overflow-hidden max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5">
                  {projects[selectedProject].image ? (
                    <Image
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-16 h-16 text-primary/40 mx-auto mb-2" />
                        <p className="text-primary/60 font-medium">
                          Project Preview
                        </p>
                        <p className="text-sm text-primary/40">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/40 transition-colors duration-200"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {projects[selectedProject].title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            projects[selectedProject].status
                          )}`}
                        >
                          {projects[selectedProject].status}
                        </span>
                        <span className="text-muted-foreground">
                          {projects[selectedProject].category}
                        </span>
                        <span className="text-muted-foreground">
                          • {projects[selectedProject].year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {projects[selectedProject].longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-primary/20"
                          initial={{opacity: 0, scale: 0.8}}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                              delay: techIndex * 0.05,
                              duration: 0.2,
                            },
                          }}
                          whileHover={{scale: 1.05}}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.03,
                        transition: {duration: 0.15},
                      }}
                      whileTap={{scale: 0.98}}
                      className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200 hover:shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>

                    {projects[selectedProject].demo !== "#" &&
                      projects[selectedProject].demo && (
                        <motion.a
                          href={projects[selectedProject].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.03,
                            transition: {duration: 0.15},
                          }}
                          whileTap={{scale: 0.98}}
                          className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all duration-200 hover:shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.a>
                      )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.4, duration: 0.6}}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: {duration: 0.2},
            }}
            whileTap={{scale: 0.98}}
          >
            <span>More projects coming soon</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
