export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  demo?: string;
  github: string;
  image: string;
  status: ProjectStatus;
  year: string;
  category: string;
}
