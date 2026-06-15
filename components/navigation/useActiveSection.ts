"use client";

import { useEffect, useState } from "react";

import { NAV_ITEMS, type SectionId } from "./navigation.config";

export function useActiveSection(offset = 100) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = NAV_ITEMS.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [offset]);

  return activeSection;
}
