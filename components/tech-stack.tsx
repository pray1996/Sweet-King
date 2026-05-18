import { cn } from "@/lib/utils";

const capabilities = [
  "Environmental Catalysis",
  "Knowledge Graphs",
  "AI Tools",
  "Front-end Design",
  "Research Writing",
];

export function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row flex-wrap gap-2", className)}>
      {capabilities.map((capability) => (
        <span
          key={capability}
          className="inline-flex h-8 items-center justify-center rounded-full border border-border bg-background/70 px-3 text-xs font-medium text-foreground/70 opacity-80 shadow-xs backdrop-blur-sm transition-[background-color,border-color,opacity] duration-200 ease-out hover:border-border/80 hover:bg-accent hover:opacity-100 md:text-sm"
        >
          {capability}
        </span>
      ))}
    </div>
  );
}
