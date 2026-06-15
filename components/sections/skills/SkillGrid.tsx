import SkillCard from "./SkillCard";
import type { Skill } from "./skills.types";

interface SkillGridProps {
  skills: Skill[];
  selectedSkillId: string;
  onSelect: (skillId: string) => void;
}

export default function SkillGrid({
  skills,
  selectedSkillId,
  onSelect,
}: SkillGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
          isSelected={skill.id === selectedSkillId}
          onSelect={() => onSelect(skill.id)}
        />
      ))}
    </div>
  );
}
