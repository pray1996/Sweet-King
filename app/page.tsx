import { Hero } from "@/sections/hero";
import { Showcase } from "@/sections/showcase";
import { Testimonials } from "@/sections/testimonials";
import { VideoTestimonials } from "@/sections/video-testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Showcase />
      <Testimonials />
      <VideoTestimonials />
    </main>
  );
}
