"use client";

import { useState, useEffect } from "react";
import TimeLocation from "../ui/TimeLocation";
import RetroTextReveal from "../ui/RetroTextReveal";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroNew() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Retro Grid Background with Animation */}
      <div className="absolute inset-0 retro-grid opacity-10" />
      
      {/* Animated Decorative Circles - Retro Style */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border-4 border-primary rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 border-4 border-accent rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-20 w-24 h-24 bg-secondary opacity-10 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Time & Location */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TimeLocation />
        </motion.div>

        {/* Greeting with Glitch Effect */}
        <motion.div 
          className="mb-6 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-accent/20 border-3 border-foreground rounded-full">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
     
            </motion.div>
            <span className="text-sm font-mono uppercase tracking-wider text-foreground font-bold">
              Hello, I'm
            </span>
          </div>
        </motion.div>

        {/* Name - Giant Retro Typography with Stagger Animation */}
        <div className="retro-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
          <motion.span 
            className="block text-primary drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Nandana
          </motion.span>
          <motion.span 
            className="block text-foreground -mt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Aruna
          </motion.span>
        </div>

        {/* Title with Retro Box and Pulse Animation */}
        <motion.div 
          className="inline-block mb-12 px-8 py-4 bg-secondary text-secondary-foreground border-4 border-foreground retro-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            Full-Stack Web Developer
          </h2>
        </motion.div>

        {/* Description with Retro Text Reveal */}
        <RetroTextReveal
          text="Curious enough to start, Stubborn enough to finish."
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          delay={0.9}
        />

        {/* CTA Buttons - Retro Style with Stagger */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href="#skills"
            className="retro-button px-8 py-4 rounded-none font-bold uppercase text-lg tracking-wide inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore My Skills
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="mailto:nandana219@gmail.com"
            className="px-8 py-4 border-4 border-foreground bg-background text-foreground font-bold uppercase text-lg tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator with Bounce */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-3 border-foreground rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

