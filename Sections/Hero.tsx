import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, X } from "lucide-react";
import Button from "../components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import Link from "next/link";

const skills = [
  "React.Js",
  "Next.Js",
  "JavaScript",
  "TypeScript",
  "Node.Js",
  "Express.Js",
  "PostgreSQL",
  "Prisma",
  "Clerk Auth",
  "Neon Db",
  "TailwindCSS",
  "GSAP Animation",
  "CSS3",
  "Html5",
  "Git",
  "Github",
  "Vercel",
  "Postman",
  "ThunderClient",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen   flex items-center justify-center overflow-hidden">
      {/* Background of the page */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background image of web-page"
          fill
          className="object-cover h-full w-full opacity-40 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full  opacity-60 "
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite `,
              animationDelay: `${Math.random() * 5}s `,
            }}
          />
        ))}
      </div>
      {/*  content */}
      <div className="container mx-auto px-6 pt-32 pb-20 z-10 relative ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Fullstack Website Developer • React Next.Js Specialist
              </span>
            </div>

            {/* Headline Section */}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:7-xl font-bold leading-tight animate-fade-in animation-delay-200">
                Crafting
                <span className="text-primary glow-text"> Digital</span>
                <br />
                Experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision
                </span>
              </h1>

              {/* About me / a paragraph about me. */}
              <p className="text-lg text-muted-foreground max-w-full animate-fade-in animation-delay-300">
                Hi, I am Muhammad Ibtisam Babar - a fullstack website developer
                specializing in React.Js, Next.Js, TypeScript, PostgreSQL,
                Prisma & Express.Js . I build scalable, clean coded & performant
                web applications that users love & developers admire.
              </p>
            </div>

            {/* Call to actions / CTAs  */}

            <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-500">
              <Button size="lg">
                Contact Me <ArrowRight className="h-5 w-5" />
              </Button>

              <AnimatedBorderButton>
                <span className="relative justify-center items-center z-10 gap-2 flex">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
              <span>Follow me :</span>

              {[
                { icon: Github, href: "https://www.github.com" },
                { icon: Linkedin, href: "https://www.linkedin.com" },
                { icon: X, href: "https://www.github.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Section */}

          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0  rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl  animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image
                  src="/pfp.jpg"
                  height={300}
                  width={450}
                  alt="the image of the developer Muhammad Ibtisam Babarc"
                  className="object-cover aspect-4/5 rounded-2xl "
                />

                {/* Floating badge */}

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="gap-3 flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm  font-medium">
                      Available For work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="text-xl font-bold text-primary">
                    FullStack
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Next.js, Postgresql, Prisma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section  */}

        <div className="mt-20 animate-fade-in animation-delay-700">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies i work with</p>
          <div className="relative overflow-hidden">
            <div className="flex  animate-marquee">
              {[...skills, ...skills].map((skill,index)=>(
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors active:text-muted-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
