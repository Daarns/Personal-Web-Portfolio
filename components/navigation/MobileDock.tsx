"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  Home,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import {
  NAV_ITEMS,
  scrollToSection,
  type SectionId,
} from "./navigation.config";
import { useActiveSection } from "./useActiveSection";

const navigationIcons: Record<SectionId, LucideIcon> = {
  hero: Home,
  about: User,
  skills: Wrench,
  projects: FolderOpen,
};

export default function MobileDock() {
  const activeSection = useActiveSection(150);

  return (
    <motion.nav
      aria-label="Mobile navigation"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-safe md:hidden"
    >
      <div className="flex items-end gap-3 rounded-2xl border-3 border-foreground bg-card/95 px-4 py-3 shadow-2xl backdrop-blur-xl">
        {NAV_ITEMS.map((item) => {
          const Icon = navigationIcons[item.id];
          const isActive = item.id === activeSection;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: isActive ? -5 : 0,
                scale: isActive ? 1.08 : 1,
              }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-md transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-foreground text-background hover:border-primary"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-foreground px-2 py-1 font-mono text-[10px] font-bold uppercase text-background opacity-0 transition-opacity group-focus-visible:opacity-100 group-hover:opacity-100">
                {item.label}
              </span>
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 h-1.5 w-1.5 rounded-full bg-primary"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
