"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import AboutBio from "./AboutBio";
import AboutCertificates from "./AboutCertificates";
import AboutProfile from "./AboutProfile";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-3 bg-primary/10 border-3 border-primary mb-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <AboutProfile />
          </motion.div>

          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <AboutBio />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <AboutTimeline />
            </motion.div>
          </div>
        </div>

        <AboutStats isVisible={isVisible} />
        <AboutCertificates isVisible={isVisible} />
      </div>
    </section>
  );
}
