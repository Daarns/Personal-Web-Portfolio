import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import MobileNav from "@/components/layouts/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Nandana Aruna Apta Baswara | AI Native Engineer",
  description: "Fullstack Web Developer with backend focus. Curious enough to start, Stubborn enough to finish. Explore the portfolio of M Nandana Aruna Apta Baswara.",
  keywords: [
    "M Nandana Aruna Apta Baswara",
    "Nandana Aruna Apta Baswara",
    "Nandana",
    "Daarn",
    "Baswara",
    "AI Native Engineer",
    "Fullstack Web Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "M Nandana Aruna Apta Baswara" }],
  creator: "M Nandana Aruna Apta Baswara",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nandana-dev.vercel.app/",
    title: "M Nandana Aruna Apta Baswara | AI Native Engineer",
    description: "Fullstack Web Developer with backend focus. Curious enough to start, Stubborn enough to finish.",
    siteName: "M Nandana Aruna Apta Baswara Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen bg-background text-foreground">
          {/* Desktop Navbar */}
          <Navbar />

          {/* Main Content dengan padding untuk mobile dock */}
          <main className="pb-20 md:pb-0">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Mobile Dock Navigation */}
          <MobileNav />
        </div>
      </body>
    </html>
  );
}