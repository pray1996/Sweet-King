const projects = [
  {
    title: "TeCES",
    description:
      "Collaborative Geometric Knowledge Representation Framework under Evolving Fact Snapshots.",
    image: "/assets/images/projects/teces-cover.png",
    tags: ["Temporal KG", "Snapshot Decomposition", "Geo-KG"],
    paperUrl: "https://openreview.net/forum?id=TqziuTzpOe",
  },
  {
    title: "AI Markdown Tool",
    description:
      "AI-powered Markdown workspace for seamless writing and collaboration.",
    image: "/assets/images/projects/ai-markdown-cover.png",
    tags: ["AI", "Markdown", "Productivity"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-balance md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Research-driven systems and tools across knowledge graphs, AI
            workflows, and visual interfaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-5">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.paperUrl ? (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Read paper
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
