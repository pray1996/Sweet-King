import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function HeroBadge() {
  return (
    <Link
      href="#"
      className={buttonVariants({
        variant: "outline",
        size: "sm",
        className: "rounded-full text-xs font-medium md:text-sm",
      })}
    >
      <span aria-hidden="true">🎉</span>
      <span className="mx-1 h-4 w-px bg-border" />
      Introducing Magic UI Pro
      <ChevronRight className="ml-1 size-4 text-muted-foreground" />
    </Link>
  );
}
