import type { SkillCategory, SkillCategoryId } from "./skills.types";

interface SkillTabsProps {
  categories: SkillCategory[];
  activeCategory: SkillCategoryId;
  onChange: (category: SkillCategoryId) => void;
}

export default function SkillTabs({
  categories,
  activeCategory,
  onChange,
}: SkillTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Skill categories"
      className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            id={`skill-tab-${category.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="skills-panel"
            onClick={() => onChange(category.id)}
            className={`shrink-0 border-3 px-4 py-3 text-left font-mono transition-colors ${
              isActive
                ? "border-foreground bg-primary text-primary-foreground retro-shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            <span className="mr-3 text-xs opacity-70">[{category.code}]</span>
            <span className="text-sm font-black uppercase tracking-wide">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
