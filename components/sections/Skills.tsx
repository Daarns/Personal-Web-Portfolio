"use client";
import dynamic from "next/dynamic";
import {useState, useRef, useEffect} from "react";
import {motion, useInView} from "framer-motion";

interface TechInfo {
  name: string;
  description: string;
  level: string;
  category: string;
}

const Keycaps3D = dynamic(
  () => import("../../app/components/Keycaps/Keycaps"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Loading 3D Model...</span>
      </div>
    ),
  }
);

export default function Skills() {
  const [hoveredTech, setHoveredTech] = useState<TechInfo | null>(null);
  const [loadingPhase, setLoadingPhase] = useState("initial");
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-100px"});

  // Sequential loading management
  useEffect(() => {
    if (inView && loadingPhase === "initial") {
      setLoadingPhase("loading");

      const loadingTimer = setTimeout(() => {
        if (is3DLoaded) {
          setLoadingPhase("ready");
        }
      }, 700);

      return () => clearTimeout(loadingTimer);
    }
  }, [inView, loadingPhase, is3DLoaded]);

  // Trigger animasi setelah 3D loaded dan loading phase selesai
  useEffect(() => {
    if (loadingPhase === "ready") {
      const animationTimer = setTimeout(() => {
        setLoadingPhase("animating");
      }, 300);

      return () => clearTimeout(animationTimer);
    }
  }, [loadingPhase]);

  const handle3DLoaded = () => {
    setIs3DLoaded(true);
    if (loadingPhase === "loading") {
      setLoadingPhase("ready");
    }
  };

  const handleAnimationComplete = () => {
    setLoadingPhase("complete");
  };

  const handleHover = (tech: TechInfo | null) => {
    setHoveredTech(tech);
  };

  return (
    <section ref={ref} id="skills" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.6, ease: "easeOut"}}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive keycaps representing my technical expertise.
            <span className="text-primary font-medium">
              {" "}
              Hover to explore each technology
            </span>
          </p>
        </motion.div>

        {/* COMPACT Loading & Tech Info Display - REDUCED HEIGHT */}
        <div className="flex justify-center mb-4 h-[80px] sm:h-[100px]">
          <div className="flex items-center justify-center max-w-lg w-full">
            {/* Simple Loading State - HANYA loading dots tanpa teks */}
            {(loadingPhase === "loading" || loadingPhase === "ready") && (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="flex items-center gap-2"
              >
                <div className="flex space-x-2">
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: 0.4,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Tech Info Display - HANYA saat hover */}
            {loadingPhase === "complete" && hoveredTech && (
              <motion.div
                className="text-center"
                initial={{opacity: 0, scale: 0.9, y: 10}}
                animate={{opacity: 1, scale: 1, y: 0}}
                exit={{opacity: 0, scale: 0.9, y: 10}}
                transition={{duration: 0.3}}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                  {hoveredTech.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-2 max-w-md mx-auto leading-relaxed">
                  {hoveredTech.description}
                </p>
                <motion.div
                  className="flex items-center justify-center gap-3 text-xs sm:text-sm"
                  initial={{opacity: 0, y: 5}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                >
                  {hoveredTech.level && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {hoveredTech.level}
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs self-center">
                    •
                  </span>
                  <span className="text-muted-foreground text-xs font-medium self-center">
                    {hoveredTech.category}
                  </span>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* 3D Keycaps Container - SIGNIFICANTLY REDUCED HEIGHT */}
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.95,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="w-full flex justify-center items-center"
        >
          {/* SMALLER CONTAINER - Reduced significantly */}
          <div className="w-full max-w-[750px] sm:max-w-[850px] lg:max-w-[1000px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex justify-center items-center relative ml-4 sm:ml-6 md:ml-8 lg:ml-12">
            {/* Minimal Loading Overlay - HANYA spinner tanpa text */}
            <motion.div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-10"
              initial={{opacity: 1}}
              animate={{
                opacity:
                  loadingPhase === "animating" || loadingPhase === "complete"
                    ? 0
                    : 1,
              }}
              transition={{duration: 0.5}}
              style={{
                pointerEvents:
                  loadingPhase === "animating" || loadingPhase === "complete"
                    ? "none"
                    : "auto",
              }}
            >
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </motion.div>

            {/* 3D Keycaps */}
            <div className="w-full h-full">
              <Keycaps3D
                onHover={handleHover}
                onLoaded={handle3DLoaded}
                startAnimation={loadingPhase === "animating"}
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </motion.div>

        {/* Instruction Text - SMALLER and more compact */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={
            loadingPhase === "complete"
              ? {opacity: 1, y: 0}
              : {opacity: 0, y: 20}
          }
          transition={{duration: 0.5, delay: 0.3}}
          className="text-center mt-4 sm:mt-6"
        >
        </motion.div>
      </div>
    </section>
  );
}