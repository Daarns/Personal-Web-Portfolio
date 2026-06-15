export const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

export function scrollToSection(sectionId: SectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}
