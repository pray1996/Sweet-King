import { Hero } from "@/sections/hero";
import { Showcase } from "@/sections/showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Showcase />
    </main>
  );
}
