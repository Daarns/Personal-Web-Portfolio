import Image from "next/image";

import { aboutProfile } from "./about.data";

export default function AboutProfile() {
  return (
    <div className="sticky top-24">
      <div className="relative group">
        <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-foreground retro-shadow overflow-hidden">
          <Image
            src={aboutProfile.image}
            alt={aboutProfile.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-accent" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-accent" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="px-4 py-2 bg-primary text-white border-3 border-foreground text-center">
            <h3 className="font-black uppercase text-lg">{aboutProfile.name}</h3>
          </div>
          <div className="px-4 py-2 bg-card border-2 border-foreground text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {aboutProfile.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
