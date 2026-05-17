import { ArrowUpRight, Heart, MessageCircle, Repeat2 } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TweetCardProps {
  name: string;
  handle: string;
  avatar: string;
  text: string;
  date: string;
  metrics: {
    replies: string;
    reposts: string;
    likes: string;
  };
  className?: string;
}

export function TweetCard({
  name,
  handle,
  avatar,
  text,
  date,
  metrics,
  className,
}: TweetCardProps) {
  return (
    <article
      className={cn(
        "group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-card p-4 shadow-xs transition-[border-color,background-color] duration-200 ease-in-out",
        className,
      )}
    >
      <div className="transition duration-200 ease-out group-hover:blur-[2px] group-focus-within:blur-[2px]">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
            {avatar}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-semibold leading-5 text-foreground">
                {name}
              </p>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 shrink-0 fill-[#1d9bf0]"
              >
                <path d="M22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12Zm-11.43 4.64 7.61-7.61-1.42-1.42-6.19 6.19-2.83-2.83-1.42 1.42 4.25 4.25Z" />
              </svg>
            </div>
            <p className="text-sm leading-5 text-muted-foreground">{handle}</p>
          </div>
        </div>

        <p className="mt-3 text-[15px] leading-6 tracking-[-0.005em] text-foreground/90">
          {text}
        </p>

        <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
          <span>{date}</span>
        </div>

        <div className="mt-3 flex items-center gap-5 border-t border-border/70 pt-3 text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 text-xs">
            <MessageCircle className="size-3.5" />
            {metrics.replies}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs">
            <Repeat2 className="size-3.5" />
            {metrics.reposts}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs">
            <Heart className="size-3.5" />
            {metrics.likes}
          </span>
        </div>
      </div>

      <a
        href="#"
        className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-white/35 opacity-0 transition-opacity duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 md:flex dark:bg-black/15"
        aria-label={`View tweet by ${name}`}
      >
        <span className="inline-flex scale-[0.98] items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-transform duration-200 ease-out group-hover:scale-100 group-focus-within:scale-100 dark:bg-white dark:text-black">
          View Tweet
          <ArrowUpRight className="size-3.5" />
        </span>
      </a>
    </article>
  );
}
