import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ArrowUpRight, Download, Github } from "lucide-react";
import Image from "next/image";

interface projectProp {
  title: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/project2.png",
    tags: ["React", "TailwindCSS", "Javascript", "Jsx"],
    link: "https://saa-s-landing-page-e7iu.vercel.app/",
    github: "https://github.com/muhammadibtisamspace/SaaS-Landing-Page/tree/main",
  },
  {
    title: "Memory Game",
    image: "/gameProject.png",
    tags: ["React", "TailwindCSS"],
    link: "https://memory-game-seven-silk.vercel.app/",
    github: "https://github.com/muhammadibtisamspace/memory-game/tree/main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5  rounded-full blur-3xl"></div>
      <div className="rounded-full blur-3xl bg-highlight/5 h-64 w-64 left-0 bottom-1/4 absolute"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground  text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300">
            project that
            <span className="font-serif italic font-normal text-white">
              &nbsp;make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-400">
            A selection of my recent work, from basic web applications to
            complex and innovating applications that solves real world problem.
          </p>
        </div>

        {/* Projects cards section */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass group rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}

              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view All Cta */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500 ">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
}
