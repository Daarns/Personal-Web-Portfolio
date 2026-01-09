"use client";
import ProfileCard from "../../app/components/ProfileCard/ProfileCard";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Award, Eye, X, Download, FileText } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [showCertModal, setShowCertModal] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCertModal(false);
      }
    };
    
    if (showCertModal) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [showCertModal]);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
          About <span className="text-primary">Me</span>
        </h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          {/* Kiri: Profile Card */}
          <div className="flex justify-center">
            <ProfileCard
              name="M Nandana Aruna A B"
              title="Web Developer"
              handle="Daarns"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/ProfileCard/daarn.png"
              iconUrl="/assets/ProfileCard/daarns.png"
              grainUrl={undefined}
              behindGradient={null}
              innerGradient={null}
              showBehindGradient={true}
              className=""
              miniAvatarUrl="/assets/ProfileCard/daarn.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              mobileTiltSensitivity={5}
              onContactClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=nandana219@gmail.com",
                  "_blank"
                )
              }
            />
          </div>
          
          {/* Kanan: Konten Background */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Background
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a versatile Full-Stack Developer specializing in
              comprehensive web solutions with a growing focus on IoT and
              Computer Vision technologies. My portfolio showcases real-time IoT
              monitoring systems, AI-powered web scraping platforms, and
              healthcare applications built with modern frameworks like Laravel,
              FastAPI, and Next.js. Through my internship experience, I gained
              practical expertise in application deployment and hosting. Im
              passionate about exploring emerging technologies, particularly
              Computer Vision and IoT development, always seeking to create
              innovative solutions that bridge hardware-software integration
              with user-friendly web interfaces.
            </p>
            
            <h3 className="text-2xl font-semibold mb-6 text-foreground mt-10">
              Education & Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-foreground">
                  Senior Highschool
                </h4>
                <p className="text-muted-foreground">SMA Negeri 9 Malang</p>
                <p className="text-muted-foreground">2018-2021</p>
              </div>
              <div className="border-l-4 border-success pl-6">
                <h4 className="font-semibold text-foreground">College</h4>
                <p className="text-muted-foreground">Brawijaya University</p>
                <p className="text-muted-foreground">2022-2025</p>
                <p className="text-muted-foreground">
                  Associate Degree in Information Technology
                </p>
                <p className="text-muted-foreground">GPA 3.81/4.00</p>
              </div>
              <div className="border-l-4 border-accent-foreground pl-6">
                <h4 className="font-semibold text-foreground">
                  Internship Experience
                </h4>
                <p className="text-muted-foreground">
                  CV. Digital Idea Solutions (DIGIS)
                </p>
                <p className="text-muted-foreground">
                  September 2024 - February 2025
                </p>
                <p className="text-muted-foreground">
                  Web Development, Deploy & Hosting
                </p>
              </div>
            </div>

            {/* Professional Certification Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Professional Certification
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-l-4 border-amber-500 pl-6 p-4 bg-card/50 rounded-r-lg hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* Certification Badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Certification Info */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-lg">
                      Junior Web Developer
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      Badan Nasional Sertifikasi Profesi (BNSP)
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Certified professional web development skills
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => {
                          setShowCertModal(true);
                          setPdfLoaded(false);
                          setShowFallback(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Certificate
                      </motion.button>
                      
                      <motion.a
                        href="/assets/certificates/junior-web-developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✅ UPDATED: Larger Certificate Modal for better readability */}
      {showCertModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowCertModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-card border border-border rounded-2xl overflow-hidden w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/95 backdrop-blur-sm">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Junior Web Developer Certification
                </h3>
                <p className="text-muted-foreground text-sm">
                  Issued by Badan Nasional Sertifikasi Profesi (BNSP)
                </p>
              </div>
              <motion.button
                onClick={() => setShowCertModal(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* PDF Container - Larger and Scrollable */}
            <div className="flex-1 relative bg-muted/5 min-h-0">
              {!showFallback ? (
                <iframe
                  src="/assets/certificates/junior-web-developer.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=page-width"
                  className="w-full h-full border-0"
                  title="Junior Web Developer Certificate"
                  onLoad={() => {
                    setPdfLoaded(true);
                    setTimeout(() => {
                      // Check if iframe content loaded properly
                      const iframe = document.querySelector('iframe[title="Junior Web Developer Certificate"]') as HTMLIFrameElement;
                      try {
                        // Try to access iframe content to check if PDF loaded
                        if (iframe && iframe.contentDocument === null) {
                          setShowFallback(true);
                        }
                      } catch (error) {
                        // Cross-origin restrictions mean PDF probably loaded
                        console.log("PDF likely loaded successfully");
                      }
                    }, 2000);
                  }}
                  onError={() => {
                    console.log("PDF failed to load");
                    setShowFallback(true);
                  }}
                />
              ) : (
                /* Fallback Content */
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center max-w-md">
                    <FileText className="w-20 h-20 text-amber-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      BNSP Junior Web Developer
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Your browser doesnt support PDF preview. Please download the certificate to view the full document.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <motion.a
                        href="/assets/certificates/junior-web-developer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </motion.a>
                      
                      <motion.button
                        onClick={() => setShowFallback(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                        Try Preview Again
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Loading Indicator */}
              {!pdfLoaded && !showFallback && (
                <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading certificate...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions - Compact */}
            <div className="p-3 border-t border-border bg-card/95 backdrop-blur-sm">
              <div className="flex justify-center gap-3">
                <motion.a
                  href="/assets/certificates/junior-web-developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
                
                <motion.button
                  onClick={() => setShowCertModal(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}