import { Hero } from "@/sections/hero";
import { Showcase } from "@/sections/showcase";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Showcase />
      <Testimonials />
    </main>
  );
}
