import React from "react";

const frontend: string[] = [
  "Html5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.Js",
  "Next.Js",
  "TailwindCSS",
];

const backend: string[] = [
  "Node.Js",
  "Express.Js",
  "Next.Js",
  "PostgreSQL",
  "Prisma",
  "NeonDB",
  "Clerk Auth",
  "ThunderClient",
  "Postman",
];

const devops: string[] = ["Git", "Github", "Vercel", "Netlify"];

// TypeScript type for skill category props
type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="flex flex-col items-center glass rounded-2xl glow-border p-2 gap-2 w-full md:w-auto  ">
    <h3 className="text-white font-serif  text-lg  mb-2 relative  ">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-4 py-1.5 rounded-full bg-surface text-md font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in animation-delay-100">
              <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-300 text-secondary-foreground">
              Muhammad Ibtisam Babar,
              <br />
              <span className="font-serif font-normal italic text-white animation-delay-300">
                Next.js Developer.
              </span>
            </h2>

            {/* About Paragraph */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-400">
              <p>
                A full-stack web developer focused on building clean,
                responsive, well-documented code, and user-friendly web
                applications. I’ve been actively developing real projects using
                modern technologies like Next.js, TypeScript, and PostgreSQL to
                strengthen both my fullstack skills.
              </p>
              <p>
                My approach to building a website is structured and methodical.
                I start by laying out the overall design and breaking it down
                into smaller, manageable components so I can focus on building
                each piece with clarity and precision. I develop the frontend
                step by step, ensuring every section is clean, responsive, and
                consistent. At the same time, I plan how the frontend will
                connect with the backend, then move on to building the backend
                logic and APIs. Once everything is in place, I integrate both
                sides, test thoroughly, and refine the details—turning
                individual pieces into a complete, production-ready system.
              </p>
              <p>
                If you’re looking for a developer who combines discipline, fast
                implementation, and a focus on meaningful results, I’d love to
                connect and contribute to your next project. Feel free to get in
                touch—I’d love to connect, discuss ideas, or collaborate on
                meaningful projects.
              </p>
            </div>

            {/* Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-500">
              <p className="text-lg font-medium italic text-foreground">
                I will build applications loved by users, delivering before
                deadline.
              </p>
            </div>
          </div>

          {/* Right Column -- Tech Stack */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <SkillCategory title="Frontend" skills={frontend} />
            <SkillCategory title="Backend" skills={backend} />
            <SkillCategory title="DevOps" skills={devops} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
