"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import SkillDetail from "./SkillDetail";
import SkillGrid from "./SkillGrid";
import SkillTabs from "./SkillTabs";
import { skillCategories, skills } from "./skills.data";
import type { SkillCategoryId } from "./skills.types";

const DEFAULT_CATEGORY: SkillCategoryId = "backend";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryId>(DEFAULT_CATEGORY);
  const [selectedSkillId, setSelectedSkillId] = useState(
    () => skills.find((skill) => skill.category === DEFAULT_CATEGORY)?.id ?? "",
  );

  const activeCategoryData =
    skillCategories.find((category) => category.id === activeCategory) ??
    skillCategories[0];
  const visibleSkills = useMemo(
    () => skills.filter((skill) => skill.category === activeCategory),
    [activeCategory],
  );
  const selectedSkill =
    visibleSkills.find((skill) => skill.id === selectedSkillId) ??
    visibleSkills[0];

  const handleCategoryChange = (category: SkillCategoryId) => {
    const firstSkill = skills.find((skill) => skill.category === category);

    setActiveCategory(category);
    setSelectedSkillId(firstSkill?.id ?? "");
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-muted/30 px-6 py-20 md:py-32"
    >
      <div className="absolute inset-0 retro-grid opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 inline-block border-3 border-primary bg-primary/10 px-6 py-3">
            <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              Skill <span className="text-primary">Console</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A text-first index of the technologies I use to build products.
            Select a category, then inspect a record for practical use cases
            and related work.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-8"
        >
          <SkillTabs
            categories={skillCategories}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />
        </motion.div>

        <motion.div
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${activeCategory}`}
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-8 flex flex-col justify-between gap-3 border-l-4 border-primary pl-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Directory / {activeCategoryData.code}
              </p>
              <h3 className="text-2xl font-black uppercase text-foreground">
                {activeCategoryData.label}
              </h3>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-right">
              {activeCategoryData.description}
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <SkillGrid
              skills={visibleSkills}
              selectedSkillId={selectedSkill.id}
              onSelect={setSelectedSkillId}
            />
            <SkillDetail skill={selectedSkill} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
