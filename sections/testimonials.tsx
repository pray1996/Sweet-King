"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ExperienceCard,
  type ExperienceCardProps,
} from "@/sections/tweet-card";

const experiences: ExperienceCardProps[] = [
  {
    title: "Environmental Catalysis Research",
    meta: "Research Direction",
    avatar: "EC",
    description:
      "Focused on catalyst mechanisms, environmental reaction pathways, and structured technical notes that connect experimental context with computational insight.",
    period: "2024 - Present",
    tags: ["Catalysis", "Mechanism", "Literature"],
  },
  {
    title: "Technical Writing System",
    meta: "Research Notes",
    avatar: "TW",
    description:
      "Maintained structured notes for experiments, papers, AI prompts, implementation decisions, and reusable explanations across research and development tasks.",
    period: "2023 - Present",
    tags: ["Writing", "Systems", "Notes"],
  },
  {
    title: "Literature Knowledge Mapping",
    meta: "Knowledge Organization",
    avatar: "LM",
    description:
      "Organized papers, concepts, datasets, and method notes into connected structures for easier review, comparison, and long-term reuse.",
    period: "2022 - Present",
    tags: ["Papers", "Mapping", "Graph"],
  },
  {
    title: "TeCES Knowledge Graph Framework",
    meta: "Research Project",
    avatar: "KG",
    description:
      "Built a temporal knowledge graph exploration around evolving fact snapshots, snapshot decomposition, and geometric representation for environmental data.",
    period: "2020 - 2024",
    tags: ["Temporal KG", "Snapshots", "OpenReview"],
  },
  {
    title: "AI Markdown Tool Prototype",
    meta: "Personal Product",
    avatar: "MD",
    description:
      "Created a light, writing-first markdown workspace concept for AI-assisted drafting, document refinement, and collaborative research productivity.",
    period: "2020 - 2023",
    tags: ["AI", "Markdown", "Product"],
  },
  {
    title: "Personal Portfolio System",
    meta: "Web Experience",
    avatar: "PF",
    description:
      "Built a personal site system that presents projects, research directions, and technical writing with a Magic UI-inspired visual language.",
    period: "2019 - 2022",
    tags: ["Portfolio", "Polish", "Tailwind"],
  },
  {
    title: "AI-assisted Knowledge Workflows",
    meta: "Productivity System",
    avatar: "AI",
    description:
      "Designed workflows for reading, extracting, organizing, and reusing research knowledge with notes, markdown workspaces, and reusable systems.",
    period: "2018 - 2021",
    tags: ["Workflow", "Knowledge", "Productivity"],
  },
  {
    title: "Data-to-interface Translation",
    meta: "Visualization Practice",
    avatar: "DV",
    description:
      "Translated complex research information into readable cards, diagrams, project pages, and interface structures for clearer review and communication.",
    period: "2016 - 2019",
    tags: ["Visualization", "Interfaces", "Design"],
  },
  {
    title: "Experiment Documentation",
    meta: "Research Process",
    avatar: "EX",
    description:
      "Captured experimental assumptions, parameters, observations, and follow-up questions in structured, reusable documentation instead of isolated notes.",
    period: "2014 - 2016",
    tags: ["Documentation", "Process", "Research"],
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="container mx-auto py-12 md:py-16">
      <h2 className="mb-8 text-center text-4xl font-semibold leading-none tracking-tighter text-balance text-foreground md:text-5xl lg:text-6xl">
        Selected Experience
      </h2>

      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden"
        initial={false}
        animate={{ maxHeight: expanded ? 2200 : 860 }}
        transition={{ duration: 1.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="flex flex-col gap-5"
          onMouseLeave={() => setHoveredIndex(null)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.055,
              },
            },
          }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${experience.period}`}
              {...experience}
              active={hoveredIndex === index}
              dimmed={hoveredIndex !== null && hoveredIndex !== index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {!expanded && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-background via-background/90 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "mx-auto mt-7 flex h-10 gap-2 rounded-full px-5 text-sm font-medium shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md",
        )}
      >
        {expanded ? "Show Less" : "Show More"}
        <ArrowUpRight className="size-4" />
      </button>
    </section>
  );
}
