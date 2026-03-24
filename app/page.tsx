import Navbar from "@/Layout/Navbar";
import About from "@/Sections/About";
import Contact from "@/Sections/Contact";
import Experience from "@/Sections/Experience";
import Hero from "@/Sections/Hero";
import Projects from "@/Sections/Projects";
import Testimonials from "@/Sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
