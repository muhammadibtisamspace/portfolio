import Navbar from "@/Layout/Navbar";
import Contact from "@/Sections/Contact";
import Experience from "@/Sections/Experience";
import Hero from "@/Sections/Hero";
import Projects from "@/Sections/Projects";
import Testimonials from "@/Sections/Testimonials";

export default function Home() {
  return <div className="min-h-screen overflow-x-hidden ">
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />

    </main>
  </div>;
}
