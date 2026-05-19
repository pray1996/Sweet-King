import {
  ArrowUpRight,
  Box,
  ChartNoAxesCombined,
  ExternalLink,
  FileText,
  Grid3X3,
  Leaf,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredReference = {
  label: "Featured Reference",
  title:
    "Temporal Knowledge Graphs: A Survey of Representation, Modeling, and Applications",
  description:
    "Comprehensive survey of temporal KG methods, from modeling paradigms to real-world applications.",
  tags: ["Temporal KG", "Survey", "Representation Learning"],
  source: "IEEE Transactions on Knowledge and Data Engineering",
  year: "2023",
  href: "#",
};

const references = [
  {
    title: "Catalyst Deactivation Pathways in Heterogeneous Systems",
    source: "Chemical Reviews",
    year: "2021",
    description:
      "Review of deactivation mechanisms and characterization strategies for industrial catalysts.",
    tags: ["Catalysis", "Deactivation", "Review"],
    icon: ChartNoAxesCombined,
    href: "#",
  },
  {
    title: "Graph Neural Networks for Scientific Discovery",
    source: "Nature Machine Intelligence",
    year: "2022",
    description:
      "How GNNs enable representation learning over complex scientific data and knowledge graphs.",
    tags: ["GNN", "Scientific ML", "Graph Representation"],
    icon: Grid3X3,
    href: "#",
  },
  {
    title: "Geometric Deep Learning: A Survey",
    source: "IEEE Access",
    year: "2020",
    description:
      "Foundations, methods, and applications of geometric deep learning on non-Euclidean domains.",
    tags: ["Geometric DL", "Survey", "Representation"],
    icon: Box,
    href: "#",
  },
  {
    title: "Machine Learning for Catalysis and Materials",
    source: "Nature Catalysis",
    year: "2023",
    description:
      "Machine learning approaches for catalyst design, screening, and reaction optimization.",
    tags: ["ML", "Catalysis", "Materials"],
    icon: Leaf,
    href: "#",
  },
];

function TemporalGraphPreview() {
  const columns = [
    { x: 18, label: "t1" },
    { x: 34, label: "t2" },
    { x: 50, label: "t3" },
    { x: 66, label: "t4" },
    { x: 86, label: "tn" },
  ];

  const points = [
    [5, 58],
    [10, 46],
    [15, 34],
    [18, 63],
    [23, 52],
    [28, 40],
    [34, 54],
    [39, 35],
    [44, 47],
    [50, 32],
    [55, 51],
    [60, 41],
    [66, 30],
    [70, 48],
    [76, 37],
    [82, 53],
    [88, 34],
    [93, 43],
  ];

  return (
    <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_38%,rgba(99,102,241,0.18),transparent_36%),radial-gradient(circle_at_78%_48%,rgba(148,163,184,0.18),transparent_34%)]" />
      <svg
        viewBox="0 0 100 72"
        role="img"
        aria-label="Temporal knowledge graph preview"
        className="relative h-full w-full"
      >
        <defs>
          <linearGradient id="reference-edge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="52%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        {columns.map((column) => (
          <g key={column.label}>
            <text
              x={column.x}
              y="8"
              textAnchor="middle"
              className="fill-foreground text-[3.5px] font-semibold"
            >
              {column.label}
            </text>
            <path
              d={`M ${column.x - 2} 12 L ${column.x + 1} 14 L ${
                column.x + 1
              } 62 L ${column.x - 2} 60 Z`}
              className="fill-indigo-100/65 stroke-indigo-100"
            />
          </g>
        ))}

        <text x="72" y="8" className="fill-muted-foreground text-[3px]">
          ...
        </text>

        {points.slice(0, -1).map(([x, y], index) => {
          const [nextX, nextY] = points[index + 1];
          return (
            <path
              key={`${x}-${y}`}
              d={`M ${x} ${y} C ${(x + nextX) / 2} ${y - 9}, ${
                (x + nextX) / 2
              } ${nextY + 9}, ${nextX} ${nextY}`}
              stroke="url(#reference-edge)"
              strokeWidth="0.5"
              strokeDasharray={index % 3 === 0 ? "1 1" : undefined}
              fill="none"
              opacity="0.8"
            />
          );
        })}

        {points.map(([x, y], index) => (
          <circle
            key={`${x}-${y}-node`}
            cx={x}
            cy={y}
            r={index % 5 === 0 ? 2.2 : index % 3 === 0 ? 1.65 : 1.2}
            className={cn(
              "stroke-white stroke-[0.35]",
              index % 4 === 0 ? "fill-indigo-500" : "fill-slate-400",
            )}
          />
        ))}
      </svg>
    </div>
  );
}

function ReferenceTags({
  tags,
  className,
}: {
  tags: readonly string[];
  className?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-[background-color,color,box-shadow] duration-300 ease-out",
            className,
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ReferenceCard({
  reference,
}: {
  reference: (typeof references)[number];
}) {
  const Icon = reference.icon;

  return (
    <a
      href={reference.href}
      className="group/reference relative grid gap-5 rounded-xl border border-border bg-card p-5 text-left shadow-xs transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-background hover:shadow-md md:grid-cols-[4rem_minmax(0,1fr)] md:p-6"
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 transition-[background-color,color,box-shadow] duration-300 ease-out group-hover/reference:bg-indigo-100 group-hover/reference:text-indigo-600 group-hover/reference:shadow-[0_0_24px_rgba(99,102,241,0.16)]">
        <Icon className="size-6 stroke-[1.65]" />
      </span>

      <span className="min-w-0">
        <span className="flex items-start gap-4">
          <span className="flex-1">
            <span className="block max-w-[20rem] text-xl font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
              {reference.title}
            </span>
            <span className="mt-2 block text-sm text-muted-foreground">
              {reference.source}
              <span className="mx-2">•</span>
              {reference.year}
            </span>
          </span>
          <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover/reference:-translate-y-0.5 group-hover/reference:translate-x-0.5 group-hover/reference:text-indigo-600" />
        </span>

        <span className="mt-3 block text-sm leading-6 text-muted-foreground">
          {reference.description}
        </span>
        <span className="mt-4 block">
          <ReferenceTags
            tags={reference.tags}
            className="group-hover/reference:bg-indigo-50 group-hover/reference:text-indigo-600 group-hover/reference:shadow-[0_0_0_1px_rgba(99,102,241,0.08)]"
          />
        </span>
      </span>
    </a>
  );
}

export function VideoTestimonials() {
  return (
    <section id="about" className="container mx-auto py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-balance text-foreground md:text-5xl lg:text-6xl">
          Research Inspirations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
          Papers, systems, and ideas that inform my research on knowledge
          graphs, environmental catalysis, and AI-assisted discovery.
        </p>
      </div>

      <div className="mx-auto mt-9 max-w-6xl space-y-5 md:mt-10">
        <article className="group/featured overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
          <div className="grid gap-6 bg-[radial-gradient(circle_at_22%_20%,rgba(99,102,241,0.11),transparent_34%),linear-gradient(135deg,rgba(248,250,252,0.96),rgba(255,255,255,0.82))] p-6 transition-[background] duration-300 ease-out group-hover/featured:bg-[radial-gradient(circle_at_22%_20%,rgba(99,102,241,0.16),transparent_34%),linear-gradient(135deg,rgba(248,250,252,0.98),rgba(255,255,255,0.88))] md:grid-cols-[0.92fr_1.08fr] md:p-9">
            <div className="flex min-w-0 flex-col items-start">
              <p className="text-xs font-medium uppercase tracking-[0.02em] text-indigo-600">
                {featuredReference.label}
              </p>
              <h3 className="mt-5 max-w-[30rem] text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground md:text-4xl">
                {featuredReference.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                {featuredReference.description}
              </p>
              <div className="mt-5">
                <ReferenceTags
                  tags={featuredReference.tags}
                  className="group-hover/featured:bg-indigo-50 group-hover/featured:text-indigo-600 group-hover/featured:shadow-[0_0_0_1px_rgba(99,102,241,0.08)]"
                />
              </div>
              <a
                href={featuredReference.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 h-11 gap-2 rounded-lg px-5 text-sm font-medium shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md",
                )}
              >
                <FileText className="size-4" />
                View Paper
                <ExternalLink className="size-4" />
              </a>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <TemporalGraphPreview />
              <div className="ml-auto w-full max-w-[18rem] rounded-lg border border-border/70 bg-background/70 p-4 text-sm shadow-xs backdrop-blur transition-[border-color,box-shadow] duration-300 ease-out group-hover/featured:border-indigo-200 group-hover/featured:shadow-sm">
                <p className="text-xs text-muted-foreground">Source</p>
                <p className="mt-1 font-medium leading-5 text-foreground">
                  {featuredReference.source}
                </p>
                <p className="mt-0.5 text-muted-foreground">
                  {featuredReference.year}
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {references.map((reference) => (
            <ReferenceCard key={reference.title} reference={reference} />
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-center">
        <a
          href="#projects"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-10 gap-2 rounded-full px-5 text-sm font-medium shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md",
          )}
        >
          View all references
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
