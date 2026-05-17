import { Marquee } from "@/components/marquee";
import { ShowcaseCard } from "@/sections/showcase-card";

const showcases = [
  {
    title: "Linear",
    affiliation: "Productivity",
    image: "/showcase/linear.svg",
    href: "#",
  },
  {
    title: "Raycast",
    affiliation: "Developer Tools",
    image: "/showcase/raycast.svg",
    href: "#",
  },
  {
    title: "Supabase",
    affiliation: "Database Platform",
    image: "/showcase/supabase.svg",
    href: "#",
  },
  {
    title: "Vercel",
    affiliation: "Frontend Cloud",
    image: "/showcase/vercel.svg",
    href: "#",
  },
  {
    title: "Dub",
    affiliation: "Link Management",
    image: "/showcase/dub.svg",
    href: "#",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="container py-10 md:py-14">
      <h2 className="mb-2 text-center text-3xl font-semibold leading-[1.2] tracking-tighter text-balance text-foreground md:text-4xl lg:text-5xl">
        Showcase
      </h2>
      <h3 className="mx-auto mb-8 text-center text-lg font-medium tracking-tight text-balance text-foreground/80">
        Companies choose Magic UI to build their landing pages.
      </h3>

      <div className="relative flex flex-col">
        <Marquee className="max-w-screen [--duration:30s]">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.title} {...showcase} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-linear-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/12 bg-linear-to-l from-background" />
      </div>
    </section>
  );
}
