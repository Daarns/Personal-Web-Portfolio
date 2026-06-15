import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    title: "Playful To-Do List",
    description:
      "A responsive task management application with an intuitive interface, flexible views, and persistent browser-based storage.",
    longDescription:
      "A playful and responsive task management application designed to help users organize their daily activities efficiently. It supports task creation, inline editing, completion and reactivation, card and Kanban views, theme preferences, undo actions, and automatic local persistence without requiring an account.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    demo: "https://playful-task.vercel.app/",
    github: "https://github.com/Daarns/To-Do-list",
    image: "/assets/Project/landing-page.png",
    status: "Completed",
    year: "Jun 2026",
    category: "Website",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "A full-stack online store featuring product management, secure checkout, integrated payments, order fulfillment, and comprehensive admin operations.",
    longDescription:
      "A portfolio-grade e-commerce platform built to support realistic online shopping workflows. It includes role-based authentication, product variants and inventory, wishlist, cart, promo codes, Midtrans payments, order tracking, refunds, product reviews, notifications, realtime customer support chat, analytics, and a comprehensive admin dashboard. The system uses a layered Go REST API, a responsive Next.js storefront, PostgreSQL, Redis, object storage, and containerized local infrastructure.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Midtrans",
    ],
    github: "https://github.com/Daarns/E-Commerce",
    image: "/assets/Project/e-commerce.png",
    status: "Completed",
    year: "Jun 2026",
    category: "Website",
  },
  {
    title: "Chess App",
    description:
      "Full-featured chess game with Clean Architecture and SOLID principles.",
    longDescription:
      "Professional chess application with complete rule engine (castling, en passant, promotion), check/checkmate detection, undo/redo, and persistent game state using LocalStorage.",
    tech: ["Next.js", "TypeScript", "Clean Architecture"],
    demo: "https://daarn-chess-app.vercel.app/",
    github: "https://github.com/Daarns/chess-game",
    image: "/assets/Project/chess-web-app.png",
    status: "Completed",
    year: "Dec 2025",
    category: "Website",
  },
  {
    title: "AI-Based Scientific Journal Scraper",
    description:
      "AI-powered academic journal scraper with Gemini AI query optimization.",
    longDescription:
      "Advanced web scraping platform for academic research using Gemini AI to optimize search queries, ensuring relevant journal discovery with automated data extraction and filtering.",
    tech: ["FastAPI", "BeautifulSoup", "Selenium", "Gemini AI"],
    github: "https://github.com/Daarns/Journal-web-scraping",
    image: "/assets/Project/homepage.png",
    status: "Completed",
    year: "Jul 2025",
    category: "Website",
  },
  {
    title: "Nutrihealth",
    description:
      "Healthcare platform with WhatsApp integration, health forums, and wellness tracking.",
    longDescription:
      "Comprehensive healthcare consultation platform featuring WhatsApp doctor integration, community health forums, weight monitoring, and curated medical articles for wellness management.",
    tech: ["Laravel", "MySQL", "WhatsApp API"],
    github: "https://github.com/Daarns/NutriHealth",
    image: "/assets/Project/Nutrihealth.png",
    status: "Completed",
    year: "2024",
    category: "Website",
  },
  {
    title: "IoT Monitoring Platform",
    description:
      "Real-time IoT monitoring platform with Arduino integration and live sensor visualization.",
    longDescription:
      "Real-time IoT monitoring platform that receives and displays sensor data from Arduino IDE, featuring live data visualization, device status tracking, and comprehensive data logging capabilities.",
    tech: ["Laravel", "MySQL", "Arduino", "ESP32", "DHT-22"],
    github: "https://github.com/Daarns/Website-IOT/tree/main",
    image: "/assets/Project/Web-IOT.png",
    status: "Completed",
    year: "2023",
    category: "IoT",
  },
];
