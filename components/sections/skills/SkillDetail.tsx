import type { Skill } from "./skills.types";

interface SkillDetailProps {
  skill: Skill;
}

export default function SkillDetail({ skill }: SkillDetailProps) {
  return (
    <aside className="relative border-4 border-foreground bg-foreground p-6 text-background retro-shadow lg:sticky lg:top-28">
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-background/30 pb-4 font-mono text-xs font-bold uppercase tracking-widest">
        <span className="text-primary">Selected record</span>
        <span>{skill.code}</span>
      </div>

      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-background/60">
        {skill.role}
      </p>
      <h3 className="mb-4 text-3xl font-black uppercase tracking-tight">
        {skill.name}
      </h3>
      {skill.language && (
        <div className="mb-6 border-l-2 border-primary pl-3">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/50">
            Programming language
          </p>
          <p className="font-mono text-sm font-black uppercase text-primary">
            {skill.language}
          </p>
        </div>
      )}
      <p className="mb-8 leading-relaxed text-background/75">{skill.summary}</p>

      <DetailList title="Use cases" items={skill.useCases} />
      <DetailList title="Related work" items={skill.projects} />

      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-primary" />
    </aside>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-7 last:mb-0">
      <h4 className="mb-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-primary">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-background/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="font-mono text-primary">
              &gt;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
