"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const YOUTUBE_THUMBNAIL_BASE_URL = "https://img.youtube.com/vi";

const videos = [
  {
    title: "Build beautiful landing pages with Magic UI",
    channel: "Magic UI",
    embedUrl: "https://www.youtube.com/embed/UGm8djxwC5s",
  },
  {
    title: "Animated components for design engineers",
    channel: "Design Engineers",
    embedUrl: "https://www.youtube.com/embed/qh3NGpYRG3I",
  },
  {
    title: "React, Tailwind CSS, and polished motion",
    channel: "Frontend Labs",
    embedUrl: "https://www.youtube.com/embed/AkN6xJcnVYs",
  },
  {
    title: "Modern UI effects without the heavy lift",
    channel: "Builder Studio",
    embedUrl: "https://www.youtube.com/embed/hlSu_ldrbQw",
  },
  {
    title: "Shipping premium interfaces faster",
    channel: "Product Craft",
    embedUrl: "https://www.youtube.com/embed/ZYvvTehpA5I",
  },
] as const;

function extractVideoId(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.pathname.split("/").at(-1)?.split("?").at(0) ?? "";
  } catch {
    return "";
  }
}

function buildEmbedSrc(url: string, shouldAutoplay: boolean) {
  if (!shouldAutoplay) {
    return url;
  }

  return url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
}

export function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="video-testimonials"
      className="container mx-auto py-10 md:py-14"
    >
      <h2 className="mb-10 text-center text-3xl font-semibold leading-[1.2] tracking-tighter text-balance text-foreground md:text-4xl lg:text-5xl">
        Featured on YouTube
      </h2>

      <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:auto-rows-[300px] md:grid-cols-6 md:gap-6 lg:auto-rows-[320px]">
        {videos.map((video, index) => {
          const videoId = extractVideoId(video.embedUrl);
          const thumbnailSrc = videoId
            ? `${YOUTUBE_THUMBNAIL_BASE_URL}/${videoId}/hqdefault.jpg`
            : "";
          const isActive = activeIndex === index;
          const columnClasses =
            index === 0
              ? "md:col-span-4 md:row-span-2"
              : index === 1 || index === 2
                ? "md:col-span-2 md:row-span-1"
                : "md:col-span-3 md:row-span-1";

          return (
            <motion.button
              key={video.embedUrl}
              type="button"
              aria-label={`Play ${video.title}`}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left shadow-xs outline-none transition-[border-color,transform] duration-200 ease-in-out hover:border-border/80 focus-visible:ring-[3px] focus-visible:ring-ring/50 ${columnClasses}`}
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {!isActive && (
                <>
                  {thumbnailSrc ? (
                    <img
                      src={thumbnailSrc}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02] group-hover:blur-[2px]"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
                      Video preview unavailable
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent opacity-85" />
                  <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-black/85 text-white shadow-sm backdrop-blur-sm transition-transform duration-200 ease-out group-hover:scale-105 md:size-16">
                      <Play className="ml-0.5 size-6 fill-current md:size-7" />
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 text-white md:p-5">
                    <span className="line-clamp-2 text-base font-semibold leading-6 tracking-tight md:text-lg">
                      {video.title}
                    </span>
                    <span className="text-sm text-white/70">{video.channel}</span>
                  </span>
                </>
              )}

              {isActive && (
                <iframe
                  src={buildEmbedSrc(video.embedUrl, true)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
