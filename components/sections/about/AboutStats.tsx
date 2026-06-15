"use client";

import { motion } from "framer-motion";

import { aboutStats } from "./about.data";

interface AboutStatsProps {
  isVisible: boolean;
}

export default function AboutStats({ isVisible }: AboutStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
      {aboutStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: stat.delay, duration: 0.5 }}
            className="group relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
          >
            <Icon className="w-6 h-6 text-primary mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
          </motion.div>
        );
      })}
    </div>
  );
}
