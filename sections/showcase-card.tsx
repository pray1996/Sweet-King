import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface ShowcaseCardProps {
  title: string;
  image: string;
  href: string;
  affiliation: string;
}

export function ShowcaseCard({
  title,
  image,
  href,
  affiliation,
}: ShowcaseCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex w-[430px] max-w-[calc(100vw-2rem)] cursor-pointer flex-col gap-1.5 overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        width={430}
        height={258}
        className="h-[258px] max-h-[258px] w-full rounded-xl border border-border/40 bg-card object-cover shadow-none"
      />

      <div className="flex flex-col">
        <div className="group inline-flex cursor-pointer items-center justify-start gap-1 text-lg font-semibold leading-6 text-neutral-700 duration-200 hover:text-neutral-700 md:text-xl dark:text-neutral-300 dark:hover:text-neutral-200">
          {title}
          <ChevronRight className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
        <p className="text-sm leading-5 text-neutral-400/90">{affiliation}</p>
      </div>
    </Link>
  );
}
