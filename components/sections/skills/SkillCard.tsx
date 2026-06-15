import type { Skill } from "./skills.types";

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SkillCard({
  skill,
  isSelected,
  onSelect,
}: SkillCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`group relative min-h-48 w-full border-3 p-5 text-left transition-all duration-200 ${
        isSelected
          ? "-translate-y-1 border-primary bg-primary/10 retro-shadow-sm"
          : "border-foreground bg-card hover:-translate-y-1 hover:border-primary"
      }`}
    >
      <div className="mb-8 flex items-start justify-between gap-4 font-mono text-xs font-bold uppercase tracking-widest">
        <span className="text-primary">{skill.code}</span>
        <span className="text-muted-foreground">{skill.role}</span>
      </div>

      <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-foreground">
        {skill.name}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {skill.summary}
      </p>

      <span className="absolute bottom-3 right-4 font-mono text-xs font-bold uppercase text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        View details +
      </span>
    </button>
  );
}
