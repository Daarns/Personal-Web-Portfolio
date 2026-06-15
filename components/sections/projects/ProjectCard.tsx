"use client";

import Image from "next/image";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "./projects.types";

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-green-500 text-white",
  "In Progress": "bg-amber-500 text-white",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  onViewDetails: () => void;
}

export default function ProjectCard({
  project,
  index,
  isVisible,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="bg-card border-4 border-foreground retro-shadow hover:translate-y-[-8px] transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video bg-muted overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          <div className="absolute top-3 left-3">
            <div
              className={`${statusStyles[project.status]} px-3 py-1 text-xs font-bold uppercase border-2 border-foreground`}
            >
              {project.status}
            </div>
          </div>

          <div className="absolute top-3 right-3">
            <div className="bg-background/90 backdrop-blur px-3 py-1 text-xs font-mono font-bold border-2 border-foreground">
              {project.category}
            </div>
          </div>

          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={onViewDetails}
              className="px-6 py-3 bg-white text-primary border-3 border-foreground font-bold uppercase transform scale-0 group-hover:scale-100 transition-transform duration-300"
            >
              View Details
            </button>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-black uppercase text-foreground leading-tight flex-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground ml-2">
              <Calendar className="w-3 h-3" />
              {project.year}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
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
            {project.demo && (
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

        <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-accent opacity-50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-accent opacity-50" />
      </div>
    </motion.div>
  );
}
