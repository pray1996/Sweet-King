import { Marquee } from "@/components/marquee";
import { ShowcaseCard } from "@/sections/showcase-card";

const showcases = [
  {
    title: "TeCES",
    description:
      "Collaborative Geometric Knowledge Representation Framework under Evolving Fact Snapshots.",
    image: "/assets/images/projects/teces-cover.png",
    tags: ["Temporal KG", "Snapshot Decomposition", "Geo-KG"],
    demoUrl: "#",
    githubUrl: "#",
    paperUrl: "https://openreview.net/forum?id=TqziuTzpOe",
    href: "#",
  },
  {
    title: "AI Markdown Tool",
    description:
      "AI-powered Markdown workspace for seamless writing and collaboration.",
    image: "/assets/images/projects/ai-markdown-cover.png",
    tags: ["AI", "Markdown", "Productivity"],
    demoUrl: "#",
    githubUrl: "#",
    href: "#",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="container py-10 md:py-14">
      <h2 className="mb-2 text-center text-3xl font-semibold leading-[1.2] tracking-tighter text-balance text-foreground md:text-4xl lg:text-5xl">
        Projects
      </h2>
      <h3 className="mx-auto mb-8 text-center text-lg font-medium tracking-tight text-balance text-foreground/80">
        Research-driven products and experiments across knowledge graphs, AI
        tools, and visual interfaces.
      </h3>

      <div className="relative flex flex-col">
        <Marquee pauseOnHover className="max-w-screen [--duration:15s]">
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
