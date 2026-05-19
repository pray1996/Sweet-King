"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Beaker,
  BookOpen,
  Briefcase,
  CalendarDays,
  Layers,
  Pencil,
  Sparkles,
  Workflow,
} from "lucide-react";

import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  title: string;
  meta: string;
  avatar: string;
  description: string;
  period: string;
  tags: string[];
  active?: boolean;
  dimmed?: boolean;
  onMouseEnter?: () => void;
  className?: string;
}

const tagIcons = [Briefcase, Layers, ArrowUpRight];

const iconByTag: Record<string, typeof Briefcase> = {
  AI: Sparkles,
  Catalysis: Beaker,
  Documentation: BookOpen,
  Literature: ArrowUpRight,
  Markdown: Layers,
  Notes: ArrowUpRight,
  Papers: BookOpen,
  Research: ArrowUpRight,
  Systems: Layers,
  Workflow: Workflow,
  Writing: Pencil,
};

export function ExperienceCard({
  title,
  meta,
  avatar,
  description,
  period,
  tags,
  active = false,
  dimmed = false,
  onMouseEnter,
  className,
}: ExperienceCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      onMouseEnter={onMouseEnter}
      className={cn(
        "group relative grid gap-5 overflow-hidden rounded-[2rem] border border-border/80 bg-card px-5 py-5 shadow-xs transition-[border-color,box-shadow,transform,background-color,filter,opacity] duration-300 ease-out hover:z-10 hover:-translate-y-0.5 hover:border-border hover:bg-background hover:shadow-md md:grid-cols-[4.5rem_minmax(0,1fr)_12rem] md:px-7 md:py-6",
        active && "z-10 border-border bg-background opacity-100 blur-0 shadow-md",
        dimmed && "md:opacity-45 md:blur-[2px]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 md:contents">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-base font-semibold text-foreground shadow-[inset_0_1px_0_oklch(100%_0_0_/_0.65)] md:size-14 md:text-lg">
          {avatar}
        </div>

        <div className="flex items-center gap-2 pt-1 text-sm font-medium text-foreground md:col-start-3 md:row-start-1 md:justify-end md:pt-2">
          <CalendarDays className="size-4 text-muted-foreground" />
          <span>{period}</span>
        </div>
      </div>

      <div className="min-w-0 md:col-start-2 md:row-start-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold leading-5 tracking-tight text-foreground md:text-lg">
            {title}
          </h3>
          <p className="text-sm leading-5 text-muted-foreground">{meta}</p>
        </div>

        <p className="mt-2 max-w-3xl text-[15px] leading-6 tracking-[-0.005em] text-foreground/90">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {tags.map((tag, index) => {
            const Icon = iconByTag[tag] ?? tagIcons[index % tagIcons.length];

            return (
              <span
                key={tag}
                className="inline-flex h-7 items-center gap-1.5 rounded-full bg-muted px-2.5 text-xs font-medium text-foreground/85 shadow-[inset_0_1px_0_oklch(100%_0_0_/_0.62)] transition-colors duration-200 ease-out group-hover:bg-muted/80"
              >
                <Icon className="size-3.5 text-muted-foreground" />
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
