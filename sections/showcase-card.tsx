"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { flushSync } from "react-dom";
import { ArrowUpRight, ExternalLink, FileText, Github } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ShowcaseCardProps {
  title: string;
  image: string;
  href: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
}

export function ShowcaseCard({
  title,
  image,
  description,
  tags,
  demoUrl,
  githubUrl,
  paperUrl,
}: ShowcaseCardProps) {
  const primaryUrl = demoUrl ?? paperUrl ?? githubUrl ?? "#";
  const [suppressHover, setSuppressHover] = useState(false);
  const handlePrimaryClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.href;

    flushSync(() => setSuppressHover(true));
    target.blur();

    window.requestAnimationFrame(() => {
      window.location.href = href;
    });
  };

  return (
    <article
      onPointerLeave={() => setSuppressHover(false)}
      className="group/card relative flex w-[420px] max-w-[calc(100vw-2rem)] cursor-pointer flex-col overflow-hidden rounded-lg border border-border/70 bg-card shadow-lg transition-[transform,box-shadow,border-color] duration-300 ease-out hover:scale-[1.02] hover:border-border hover:shadow-xl md:w-[460px]"
    >
      <div
        className={cn(
          "transition duration-300 ease-out",
          !suppressHover &&
            "group-hover/card:blur-[2px] group-focus-within/card:blur-[2px]",
        )}
      >
        <img
          src={image}
          alt={title}
          width={1280}
          height={720}
          className="aspect-video w-full object-cover"
        />

        <div className="flex min-h-[220px] flex-col gap-4 p-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {demoUrl ? (
              <a
                href={demoUrl}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground shadow-xs transition-colors duration-200 ease-out hover:bg-accent"
              >
                Demo
                <ExternalLink className="size-3.5" />
              </a>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground shadow-xs transition-colors duration-200 ease-out hover:bg-accent"
              >
                GitHub
                <Github className="size-3.5" />
              </a>
            ) : null}
            {paperUrl ? (
              <a
                href={paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground shadow-xs transition-colors duration-200 ease-out hover:bg-accent"
              >
                Paper
                <FileText className="size-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <a
        href={primaryUrl}
        onClick={handlePrimaryClick}
        className={cn(
          "pointer-events-none absolute inset-0 hidden items-center justify-center bg-white/35 opacity-0 transition-opacity duration-200 ease-out md:flex dark:bg-black/15",
          !suppressHover &&
            "group-hover/card:pointer-events-auto group-hover/card:opacity-100 group-focus-within/card:pointer-events-auto group-focus-within/card:opacity-100",
        )}
        aria-label={`View ${title}`}
      >
        <span className="inline-flex scale-[0.98] items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-transform duration-200 ease-out group-hover/card:scale-100 group-focus-within/card:scale-100 dark:bg-white dark:text-black">
          View Project
          <ArrowUpRight className="size-3.5" />
        </span>
      </a>
    </article>
  );
}
