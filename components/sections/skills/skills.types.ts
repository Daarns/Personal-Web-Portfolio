export type SkillCategoryId =
  | "backend"
  | "frontend"
  | "data-caching"
  | "infrastructure"
  | "workflow";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  code: string;
  description: string;
}

export interface Skill {
  id: string;
  code: string;
  name: string;
  category: SkillCategoryId;
  role: string;
  language?: string;
  summary: string;
  useCases: string[];
  projects: string[];
}
