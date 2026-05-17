import { TechStack } from "@/components/tech-stack";
import { HeroActions } from "@/sections/hero-actions";
import { HeroBadge } from "@/sections/hero-badge";

export function Hero() {
  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(69.6%_0.165_251_/_0.16),transparent_68%)] blur-3xl"
        />
        <div className="relative z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <HeroBadge />

              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="relative mx-0 max-w-[43.5rem] pt-5 text-left text-5xl font-semibold tracking-tighter text-balance text-black leading-[0.98] sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl md:leading-[0.96] lg:text-7xl dark:text-white">
                  UI library for Design Engineers
                </h1>
              </div>

              <p className="max-w-xl text-left text-base leading-7 tracking-tight text-balance text-primary md:text-center md:text-lg md:leading-8">
                150+ free and open-source animated components and effects built
                with <b className="font-[550] dark:font-[580]">React</b>,{" "}
                <b className="font-[550] dark:font-[580]">Typescript</b>,{" "}
                <b className="font-[550] dark:font-[580]">Tailwind CSS</b>, and{" "}
                <b className="font-[550] dark:font-[580]">Motion</b>.
                <br />
                Perfect companion for{" "}
                <b className="font-[550] dark:font-[580]">shadcn/ui</b>.
              </p>

              <HeroActions />
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
            <TechStack className="mx-auto flex w-full items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
}
