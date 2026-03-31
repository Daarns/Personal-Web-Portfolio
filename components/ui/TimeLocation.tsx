"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

export default function TimeLocation() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta", // WIB
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
      {/* Location Badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-sm font-mono text-muted-foreground">
          Malang, Indonesia
        </span>
      </div>

      {/* Time Badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-sm font-mono text-foreground tabular-nums">
          {time} WIB
        </span>
      </div>
    </div>
  );
}
