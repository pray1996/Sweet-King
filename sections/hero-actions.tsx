import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mx-auto md:max-w-3xl md:flex-nowrap md:gap-5">
      <Link
        href="#projects"
        className={buttonVariants({
          variant: "rainbow",
          size: "lg",
          className: "w-full gap-2 sm:w-[11.5rem] md:w-auto",
        })}
      >
        <span className="relative z-10">View Projects</span>
        <ChevronRight className="relative z-10 ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
      <Link
        href="#experience"
        className={buttonVariants({
          variant: "rainbow",
          size: "lg",
          className: "w-full gap-2 sm:w-[12.75rem] md:w-auto",
        })}
      >
        <span className="relative z-10">View Experience</span>
        <ChevronRight className="relative z-10 ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
      <Link
        href="#about"
        className={buttonVariants({
          variant:"rainbow",
          size: "lg",
          className:
            "w-full gap-2 opacity-90 sm:w-[11.5rem] md:w-auto [&:before]:opacity-70 hover:opacity-100",
        })}
      >
        <span className="relative z-10">About Me</span>
        <ChevronRight className="relative z-10 ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
