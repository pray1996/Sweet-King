import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-4 gap-y-2 md:mx-auto md:max-w-xs md:flex-row md:justify-center">
      <Link
        href="#components"
        className={buttonVariants({
          variant: "rainbow",
          size: "lg",
          className: "w-full gap-2",
        })}
      >
        <span className="relative z-10">Browse Components</span>
        <ChevronRight className="relative z-10 ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
      <Link
        href="#templates"
        className={buttonVariants({
          variant: "rainbow-outline",
          size: "lg",
          className: "w-full gap-2",
        })}
      >
        <span className="relative z-10">Browse Templates</span>
        <ChevronRight className="relative z-10 ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
