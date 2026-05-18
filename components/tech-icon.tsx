import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function TechIcon({
  label,
  detail,
  href,
  children,
  className,
}: {
  label: string;
  detail?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const sharedClassName = cn(
    "group relative inline-flex size-8 items-center justify-center text-foreground/55 opacity-75 outline-none transition-[color,opacity] duration-200 ease-out hover:text-foreground hover:opacity-100 focus-visible:text-foreground focus-visible:opacity-100",
    className,
  );
  const tooltip = (
    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 dark:bg-white dark:text-black">
      <span>{label}</span>
      {detail ? (
        <span className="ml-1 text-white/65 dark:text-black/60">{detail}</span>
      ) : null}
      <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-black dark:bg-white" />
    </span>
  );

  if (href) {
    return (
      <a href={href} aria-label={label} className={sharedClassName}>
        {children}
        {tooltip}
      </a>
    );
  }

  return (
    <button type="button" aria-label={label} className={sharedClassName}>
      {children}
      {tooltip}
    </button>
  );
}
