"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Code2, ExternalLink, Github, X, Zap } from "lucide-react";

import type { Project } from "./projects.types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {project !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-background border-4 border-foreground retro-shadow max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-primary text-primary-foreground p-6 border-b-4 border-foreground flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black uppercase mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    {project.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white text-primary border-3 border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {project.image && (
                <div className="relative aspect-video border-4 border-foreground overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              )}

              <div>
                <h4 className="text-xl font-black uppercase mb-3 text-foreground flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  About
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-black uppercase mb-3 text-foreground flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-accent" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-accent/20 border-3 border-accent font-mono font-bold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-3 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2 font-bold uppercase"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
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
  );
}
