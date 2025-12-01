import AboutSection from "./HomePage/AboutSection/about";
import TopSection from "@/app/HomePage/TopSection/top";
import ProjectsSection from "./HomePage/ProjectsSection/projects";
import SkillsandAchievementsSection from "./HomePage/SkillsandAchievementsSection/skillsandachievements";
import ContactSection from "./HomePage/ContactSection/contacts";

export default function HomePage() {
  return (
    <main className="scroll-smooth">

      <section id="top" className="h-screen">
        <TopSection/>
      </section>

      <section id="about" className="h-screen">
        <AboutSection/>
      </section>

      <section id="projects" className="h-screen">
        <ProjectsSection/>
      </section>

      <section id="skills and achievements" className="h-screen">
        <SkillsandAchievementsSection/>
      </section>

      <section id="contact" className="h-screen">
        <ContactSection/>
      </section>

    </main>
  );
}


