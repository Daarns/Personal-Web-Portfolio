"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StatCard from "../ui/StatCard";
import { Code, Briefcase, Award, GraduationCap, MapPin, Calendar, Download } from "lucide-react";
import Image from "next/image";

export default function AboutNew() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, value: "1+", label: "Years Experience", delay: 0 },
    { icon: Code, value: "15+", label: "Projects Built", delay: 100 },
    { icon: Award, value: "10+", label: "Tech Stack", delay: 200 },
    { icon: GraduationCap, value: "3.81", label: "GPA", delay: 300 },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Retro Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-6 py-3 bg-primary/10 border-3 border-primary mb-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              {/* Photo Container - Retro Frame */}
              <div className="relative group">
                <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-foreground retro-shadow overflow-hidden">
                  {/* Replace this with your actual photo */}
                  <Image 
                    src="/assets/ProfileCard/mnandana.png" 
                    alt="Nandana Aruna - Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* Retro Corner Accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-accent" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-accent" />
                </div>
                
                {/* Name & Role Badge */}
                <div className="mt-4 space-y-2">
                  <div className="px-4 py-2 bg-primary text-white border-3 border-foreground text-center">
                    <h3 className="font-black uppercase text-lg">Nandana Aruna</h3>
                  </div>
                  <div className="px-4 py-2 bg-card border-2 border-foreground text-center">
                    <p className="font-mono text-sm text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                I am a versatile <span className="font-bold text-primary">Full-Stack Developer</span> specializing in 
                comprehensive web solutions with a growing focus on <span className="font-bold text-secondary">IoT</span> and{" "}
                <span className="font-bold text-secondary">Computer Vision</span> technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My portfolio showcases real-time IoT monitoring systems, AI-powered web scraping platforms, 
                and healthcare applications built with modern frameworks like <span className="font-mono text-primary">Laravel</span>,{" "}
                <span className="font-mono text-primary">FastAPI</span>, and <span className="font-mono text-primary">Next.js</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through my internship experience at CV. Digital Idea Solutions (DIGIS), I gained practical 
                expertise in application deployment and hosting. I'm passionate about exploring emerging 
                technologies, particularly Computer Vision and IoT development.
              </p>

              {/* Location & Status - Retro Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono font-bold">Malang, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono font-bold">Available for Work</span>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-black uppercase mb-6 text-foreground">Journey</h3>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {/* Internship */}
                <div className="relative pl-8 border-l-4 border-primary pb-6">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary border-3 border-background" />
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 inline-block mb-2">
                    2024 - 2025
                  </span>
                  <h4 className="text-lg font-bold">Internship at DIGIS</h4>
                  <p className="text-sm text-muted-foreground">CV. Digital Idea Solutions</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Web Development • Deploy & Hosting
                  </p>
                </div>

                {/* College */}
                <div className="relative pl-8 border-l-4 border-secondary pb-6">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-secondary border-3 border-background" />
                  <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2 py-1 inline-block mb-2">
                    2022 - 2025
                  </span>
                  <h4 className="text-lg font-bold">Brawijaya University</h4>
                  <p className="text-sm text-muted-foreground">
                    Associate Degree in Information Technology
                  </p>
                  <div className="inline-block mt-2 px-3 py-1 bg-primary border-2 border-foreground text-primary-foreground text-sm font-mono font-bold">
                    GPA: 3.81/4.00
                  </div>
                </div>

                {/* High School */}
                <div className="relative pl-8 border-l-4 border-muted-foreground">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-muted-foreground border-3 border-background" />
                  <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-2 py-1 inline-block mb-2">
                    2018 - 2021
                  </span>
                  <h4 className="text-lg font-bold">SMA Negeri 9 Malang</h4>
                  <p className="text-sm text-muted-foreground">Senior High School</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Certification Showcase - Horizontal Scroll Carousel (ONLY show if you have cert) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="inline-block px-6 py-3 bg-amber-500/10 border-3 border-amber-500">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground">
                <Award className="w-6 h-6 inline-block mr-2 text-amber-500" />
                Certifications
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-mono hidden md:block">
              Scroll horizontally to view more →
            </p>
          </div>

          {/* Scrollable Certificate Container */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 md:gap-6">
              
              {/* Certificate 1 - BNSP Junior Web Developer */}
              <div className="w-[340px] md:w-[450px] flex-shrink-0">
                <div className="grid grid-cols-1 gap-3 md:gap-4 h-full">
                  {/* Certificate Image */}
                  <div className="relative group">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-4 border-foreground retro-shadow overflow-hidden">
                      {/* Replace with actual certificate image */}
                      <Image
                        src="/assets/certificates/bnsp-junior-web-dev.png"
                        alt="BNSP Junior Web Developer Certificate"
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 340px, 450px"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="text-white font-bold uppercase text-xs md:text-sm px-4 text-center">View Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="inline-block px-3 py-1 bg-amber-500 text-white border-2 border-foreground font-bold uppercase tracking-wide text-xs">
                      BNSP Certified
                    </div>
                    
                    <h4 className="text-lg md:text-xl font-black uppercase text-foreground">
                      Junior Web Developer
                    </h4>
                    
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Nationally recognized certification from <span className="font-bold text-foreground">BNSP</span>, 
                      validating professional web development capabilities.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href="/assets/certificates/junior-web-developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 md:px-4 py-1.5 md:py-2 border-3 border-foreground bg-background hover:bg-primary hover:text-white transition-colors font-bold uppercase text-xs inline-flex items-center gap-2"
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more certificates here as needed - just duplicate the card above */}

            </div>
          </div>

          {/* Scroll Indicator (mobile only) */}
          <div className="md:hidden text-center mt-4">
            <p className="text-xs text-muted-foreground font-mono">
              ← Swipe to see more certificates →
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
