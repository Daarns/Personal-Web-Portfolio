import { Calendar, MapPin } from "lucide-react";

export default function AboutBio() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-foreground leading-relaxed">
        Full-Stack Web Developer with hands-on experience building end-to-end
        web applications using <Tech>Laravel</Tech>, <Tech>FastAPI</Tech>, and{" "}
        <Tech>Next.js</Tech>.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        During my internship at <Strong>CV. Digital Idea Solution</Strong>, I
        contributed to legacy system migration and production deployment in
        real client environments.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        I hold a <Strong>BNSP Junior Web Developer</Strong> certification and am
        continuously expanding my skills — currently building a full-scale
        e-commerce platform using <Tech>Go</Tech>, <Tech>Docker</Tech>, and clean
        architecture principles.
      </p>

      <div className="flex flex-wrap gap-3 pt-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono font-bold">Malang, Indonesia</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-mono font-bold">
            Available for Work
          </span>
        </div>
      </div>
    </div>
  );
}

function Tech({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-primary">{children}</span>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-foreground">{children}</span>;
}
