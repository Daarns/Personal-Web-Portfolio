"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RetroTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RetroTextReveal({ text, className = "", delay = 0 }: RetroTextRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Split text into words
  const words = text.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[0.3em]"
            initial={{ 
              opacity: 0, 
              y: 20,
              rotateX: 90 
            }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              rotateX: 0
            } : {}}
            transition={{
              duration: 0.5,
              delay: delay + (index * 0.05),
              ease: [0.6, 0.01, 0.05, 0.95]
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
