import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

export const aboutProfile = {
  image: "/assets/ProfileCard/mnandana.png",
  imageAlt: "Nandana Aruna - Full Stack Developer",
  name: "Nandana Aruna",
  role: "Full-Stack Web Developer",
};

export const aboutStats = [
  { icon: Briefcase, value: "1+", label: "Years Experience", delay: 0 },
  { icon: Code, value: "15+", label: "Projects Built", delay: 0.1 },
  { icon: Award, value: "10+", label: "Tech Stack", delay: 0.2 },
  { icon: GraduationCap, value: "3.81", label: "GPA", delay: 0.3 },
];

export const aboutTimeline = [
  {
    year: "2024 - 2025",
    title: "Internship at DIGIS",
    subtitle: "CV. Digital Idea Solutions",
    detail: "Web Development • Deploy & Hosting",
    accent: "primary",
    highlightDetail: false,
  },
  {
    year: "2022 - 2025",
    title: "Brawijaya University",
    subtitle: "Associate Degree in Information Technology",
    detail: "GPA: 3.81/4.00",
    accent: "secondary",
    highlightDetail: true,
  },
  {
    year: "2018 - 2021",
    title: "SMA Negeri 9 Malang",
    subtitle: "Senior High School",
    detail: null,
    accent: "muted",
    highlightDetail: false,
  },
] as const;

export const aboutCertificate = {
  image: "/assets/certificates/bnsp-junior-web-dev.png",
  imageAlt: "BNSP Junior Web Developer Certificate",
  badge: "BNSP Certified",
  title: "Junior Web Developer",
  downloadUrl: "/assets/certificates/junior-web-developer.pdf",
};
