import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Technology = {
  id: string;
  name: string;
  icon: ReactNode;
};

const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8" fill="currentColor">
        <path d="M16 13.15a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7Zm0-2.3c5.9 0 10.7 2.3 10.7 5.15S21.9 21.15 16 21.15 5.3 18.85 5.3 16 10.1 10.85 16 10.85Zm0 1.35c-5.05 0-9.35 1.75-9.35 3.8s4.3 3.8 9.35 3.8 9.35-1.75 9.35-3.8-4.3-3.8-9.35-3.8Z" />
        <path d="M11.52 13.43C14.47 8.32 18.86 5 21.32 6.42c2.47 1.43 2.08 7-0.87 12.11-2.95 5.12-7.34 8.44-9.8 7.02-2.47-1.43-2.08-7 .87-12.12Zm1.17.68c-2.53 4.37-3.16 8.97-1.38 10 1.77 1.03 5.44-1.82 7.96-6.2 2.52-4.37 3.16-8.97 1.38-10-1.77-1.02-5.44 1.83-7.96 6.2Z" />
        <path d="M11.52 18.57C8.57 13.45 8.18 7.85 10.65 6.42c2.46-1.42 6.85 1.9 9.8 7.01 2.95 5.12 3.34 10.7.87 12.12-2.46 1.42-6.85-1.9-9.8-6.98Zm1.17-.68c2.52 4.37 6.19 7.22 7.96 6.2 1.78-1.03 1.14-5.63-1.38-10-2.52-4.37-6.19-7.22-7.96-6.2-1.78 1.03-1.15 5.63 1.38 10Z" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8" fill="currentColor">
        <path d="M0 16v16h32V0H0v16Zm17.3-.7v1.3h-4.1v11.8h-3V16.6H6.1v-2.5h11.2v1.2Zm8.5-1c1 .25 1.8.8 2.4 1.65.3.42.55.8.55.85 0 .08-2.1 1.5-2.25 1.5-.05 0-.2-.17-.35-.38-.46-.67-1-.95-1.78-.95-.95 0-1.55.48-1.55 1.24 0 .78.47 1.12 2.25 1.9 2.2.94 3.14 1.55 3.72 2.42.73 1.1.78 2.95.12 4.13-.75 1.34-2.26 2.04-4.33 2.04-1.96 0-3.44-.65-4.45-1.94-.4-.5-.93-1.45-.86-1.52.03-.03.55-.33 1.17-.68l1.12-.64.25.37c.33.5.95 1.05 1.42 1.27.6.29 1.9.27 2.44-.04.5-.28.74-.67.74-1.2 0-.77-.46-1.12-2.02-1.78-2-.84-2.85-1.36-3.48-2.13-.75-.9-1-2.55-.58-3.8.38-1.12 1.3-1.96 2.55-2.34.73-.22 2.25-.2 3 .03Z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="currentColor">
        <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.29 1.62C13.66 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.29-1.62C16.34 6.18 14.97 4.8 12 4.8ZM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.29 1.62C7.66 17.82 9.03 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.29-1.62C10.34 13.38 8.97 12 6 12Z" />
      </svg>
    ),
  },
  {
    id: "motion",
    name: "Motion",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
        <path d="m12 12-8-8v16L20 4v16l-4-4" />
        <path d="m20 12-8 8-4-4" />
      </svg>
    ),
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    icon: (
      <svg viewBox="0 0 256 256" aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16">
        <line x1="208" x2="128" y1="128" y2="208" />
        <line x1="192" x2="40" y1="40" y2="192" />
      </svg>
    ),
  },
];

export function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row gap-2", className)}>
      {technologies.map((technology) => (
        <span
          key={technology.id}
          title={technology.name}
          className="inline-flex size-8 items-center justify-center text-foreground/70 opacity-75 transition-opacity duration-200 ease-out hover:opacity-100"
        >
          {technology.icon}
        </span>
      ))}
    </div>
  );
}
