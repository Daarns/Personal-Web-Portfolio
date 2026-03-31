"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "words" | "lines" | "chars";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  mode = "words",
}: TextRevealProps) {
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

  const getElements = () => {
    switch (mode) {
      case "words":
        return text.split(" ");
      case "lines":
        return text.split("\n");
      case "chars":
        return text.split("");
      default:
        return text.split(" ");
    }
  };

  const elements = getElements();
  const separator = mode === "words" ? " " : mode === "lines" ? "\n" : "";

  return (
    <div ref={ref} className={className}>
      {elements.map((element, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          {element}
          {index < elements.length - 1 && separator}
        </span>
      ))}
    </div>
  );
}
