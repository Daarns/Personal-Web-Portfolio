import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileDock from "@/components/navigation/MobileDock";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "M Nandana Aruna Apta Baswara",
    "Nandana Aruna",
    "Full-Stack Web Developer",
    "Go Developer",
    "Gin Framework",
    "Laravel Developer",
    "FastAPI Developer",
    "Next.js Developer",
    "Indonesia Web Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/assets/Project/portofolio.png",
        width: 1356,
        height: 631,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/Project/portofolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#171310",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: siteConfig.name,
                url: siteConfig.url,
                image: `${siteConfig.url}/assets/ProfileCard/mnandana.png`,
                jobTitle: "Full-Stack Web Developer",
                email: `mailto:${siteConfig.email}`,
                sameAs: [siteConfig.github, siteConfig.linkedin],
                knowsAbout: [
                  "Go",
                  "Gin",
                  "Laravel",
                  "FastAPI",
                  "Next.js",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                ],
              }).replace(/</g, "\\u003c"),
            }}
          />
          <div className="relative min-h-screen bg-background text-foreground">
            <DesktopNavigation />
            
            {/* Reserve space for the fixed mobile navigation. */}
            <div className="pb-20 md:pb-0">{children}</div>
            
            <Footer />
            
            <MobileDock />
          </div>
      </body>
    </html>
  );
}
