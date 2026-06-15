import { aboutTimeline } from "./about.data";

const accentClasses = {
  primary: {
    border: "border-primary",
    dot: "bg-primary",
    label: "text-primary bg-primary/10",
  },
  secondary: {
    border: "border-secondary",
    dot: "bg-secondary",
    label: "text-secondary bg-secondary/10",
  },
  muted: {
    border: "border-muted-foreground",
    dot: "bg-muted-foreground",
    label: "text-muted-foreground bg-muted",
  },
};

export default function AboutTimeline() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-black uppercase mb-6 text-foreground">
        Journey
      </h3>

      <div className="space-y-6">
        {aboutTimeline.map((item) => {
          const accent = accentClasses[item.accent];

          return (
            <div
              key={item.title}
              className={`relative pl-8 border-l-4 ${accent.border} ${
                item.detail ? "pb-6" : ""
              }`}
            >
              <div
                className={`absolute -left-[11px] top-0 w-5 h-5 ${accent.dot} border-3 border-background`}
              />
              <span
                className={`text-xs font-mono font-bold px-2 py-1 inline-block mb-2 ${accent.label}`}
              >
                {item.year}
              </span>
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              {item.detail &&
                (item.highlightDetail ? (
                  <div className="inline-block mt-2 px-3 py-1 bg-primary border-2 border-foreground text-primary-foreground text-sm font-mono font-bold">
                    {item.detail}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.detail}
                  </p>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
