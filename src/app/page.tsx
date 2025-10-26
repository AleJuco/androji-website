
import HomeSection from "@/app/HomePage/HomeSection/home";
import SkillsSection from "@/app/HomePage/SkillsSection/skills";
import AboutSection from "@/app/HomePage/AboutSection/about";
import ProjectsSection from "@/app/HomePage/ProjectsSection/projects";
import ContactSection from "@/app/HomePage/ContactSection/contact";



export default function HomePage() {
  return (
    <main className="scroll-smooth">

      <section id="home" className="h-screen bg-gray-200">
        <HomeSection/>
      </section>

      <section id="about" className="h-screen bg-gray-400">
        <AboutSection/>
      </section>

      <section id="skills" className="h-screen bg-gray-300">
        <SkillsSection/>
      </section>

      <section id="projects" className="h-screen bg-gray-300">
        <ProjectsSection/>
      </section>

      <section id="contact" className="h-screen bg-gray-400">
        <ContactSection/>
      </section>
    </main>
  );
}
