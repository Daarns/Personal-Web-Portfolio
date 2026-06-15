"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 bg-background relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 retro-grid opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={inView}
              onViewDetails={() => setSelectedProject(index)}
            />
          ))}
        </div>

        <ProjectDetailModal
          project={selectedProject !== null ? projects[selectedProject] : null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
