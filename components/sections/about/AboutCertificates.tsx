"use client";

import Image from "next/image";
import { Award, Download } from "lucide-react";
import { motion } from "framer-motion";

import { aboutCertificate } from "./about.data";

interface AboutCertificatesProps {
  isVisible: boolean;
}

export default function AboutCertificates({ isVisible }: AboutCertificatesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative"
    >
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

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 md:gap-6">
          <div className="w-[340px] md:w-[450px] flex-shrink-0">
            <div className="grid grid-cols-1 gap-3 md:gap-4 h-full">
              <div className="relative group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-4 border-foreground retro-shadow overflow-hidden">
                  <Image
                    src={aboutCertificate.image}
                    alt={aboutCertificate.imageAlt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 340px, 450px"
                  />
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-white font-bold uppercase text-xs md:text-sm px-4 text-center">
                      View Certificate
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <div className="inline-block px-3 py-1 bg-amber-500 text-white border-2 border-foreground font-bold uppercase tracking-wide text-xs">
                  {aboutCertificate.badge}
                </div>
                <h4 className="text-lg md:text-xl font-black uppercase text-foreground">
                  {aboutCertificate.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Nationally recognized certification from{" "}
                  <span className="font-bold text-foreground">BNSP</span>,
                  validating professional web development capabilities.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={aboutCertificate.downloadUrl}
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
        </div>
      </div>

      <div className="md:hidden text-center mt-4">
        <p className="text-xs text-muted-foreground font-mono">
          ← Swipe to see more certificates →
        </p>
      </div>
    </motion.div>
  );
}
