"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">
        {value}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
      
      {/* Retro corner accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
    </div>
  );
}
