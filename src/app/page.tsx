
import HomeSection from "@/components/HomeSection/home";
import SkillsSection from "@/components/SkillsSection/skills";
import AboutSection from "@/components/AboutSection/about";
import ProjectsSection from "@/components/ProjectsSection/projects";
import ContactSection from "@/components/ContactSection/contact";



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
