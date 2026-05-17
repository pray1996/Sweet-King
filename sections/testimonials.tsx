"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { TweetCard, type TweetCardProps } from "@/sections/tweet-card";

const tweets: TweetCardProps[] = [
  {
    name: "Steven Tey",
    handle: "@steventey",
    avatar: "ST",
    text: "Magic UI is exactly the kind of component library that makes shipping polished landing pages feel fast without losing the craft.",
    date: "Nov 9, 2024",
    metrics: { replies: "18", reposts: "42", likes: "620" },
  },
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    avatar: "GR",
    text: "The subtle animations and copy-paste friendly primitives are a great companion for teams already building with React and Tailwind.",
    date: "Dec 12, 2024",
    metrics: { replies: "31", reposts: "96", likes: "1.8K" },
  },
  {
    name: "McKay Wrigley",
    handle: "@mckaywrigley",
    avatar: "MW",
    text: "I keep reaching for Magic UI whenever a page needs that extra layer of motion and polish. The components feel tasteful out of the box.",
    date: "Sep 3, 2024",
    metrics: { replies: "12", reposts: "37", likes: "740" },
  },
  {
    name: "Lee Robinson",
    handle: "@leeerob",
    avatar: "LR",
    text: "Design engineers need tools that preserve both speed and taste. This library hits that balance nicely.",
    date: "Aug 21, 2024",
    metrics: { replies: "9", reposts: "24", likes: "512" },
  },
  {
    name: "Chronark",
    handle: "@chronark_",
    avatar: "CH",
    text: "The best thing about Magic UI is how small the pieces are. You can take one effect, understand it, and make it yours.",
    date: "Feb 6, 2025",
    metrics: { replies: "15", reposts: "58", likes: "980" },
  },
  {
    name: "Aiden Bai",
    handle: "@aidenybai",
    avatar: "AB",
    text: "Beautiful animated components, sensible defaults, and not too much ceremony. That's a rare combination.",
    date: "May 19, 2024",
    metrics: { replies: "7", reposts: "21", likes: "430" },
  },
  {
    name: "Jordan Hughes",
    handle: "@jordanphughes",
    avatar: "JH",
    text: "If you are building a polished SaaS page with shadcn/ui, Magic UI gives you a really sharp motion vocabulary.",
    date: "Jun 2, 2024",
    metrics: { replies: "6", reposts: "18", likes: "289" },
  },
  {
    name: "Marc Klingen",
    handle: "@MarcKlingen",
    avatar: "MK",
    text: "Dropped a couple of Magic UI effects into a product page and it immediately felt more alive, without becoming loud.",
    date: "May 20, 2024",
    metrics: { replies: "11", reposts: "29", likes: "388" },
  },
  {
    name: "Liz Hagearty",
    handle: "@lizhagearty",
    avatar: "LH",
    text: "The components are useful, but the real value is the restraint. Everything moves just enough.",
    date: "Sep 16, 2024",
    metrics: { replies: "5", reposts: "14", likes: "260" },
  },
  {
    name: "Dmytro Krasun",
    handle: "@DmytroKrasun",
    avatar: "DK",
    text: "A lovely reference for design engineers who want their interfaces to feel premium without rebuilding every animation from scratch.",
    date: "May 21, 2024",
    metrics: { replies: "10", reposts: "35", likes: "601" },
  },
  {
    name: "Namyakhann",
    handle: "@namyakhann",
    avatar: "NA",
    text: "Magic UI has become one of those libraries I browse for inspiration even when I do not copy a component directly.",
    date: "May 19, 2024",
    metrics: { replies: "4", reposts: "17", likes: "342" },
  },
  {
    name: "Ray Fernando",
    handle: "@RayFernando1337",
    avatar: "RF",
    text: "The landing page examples have the right amount of motion. Clean, modern, and still very usable.",
    date: "Aug 7, 2024",
    metrics: { replies: "8", reposts: "23", likes: "421" },
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="testimonials" className="container mx-auto py-10 md:py-14">
      <h2 className="mb-10 text-center text-3xl font-semibold leading-[1.2] tracking-tighter text-balance text-foreground md:text-4xl lg:text-5xl">
        What People Are Saying on Twitter
      </h2>

      <motion.div
        className="relative overflow-hidden"
        initial={false}
        animate={{ maxHeight: expanded ? 2400 : 800 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {tweets.map((tweet) => (
            <TweetCard key={`${tweet.handle}-${tweet.date}`} {...tweet} />
          ))}
        </div>

        <AnimatePresence>
          {!expanded && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "mx-auto mt-4 flex",
        })}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
