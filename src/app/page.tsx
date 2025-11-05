import HomeSection from "@/app/HomePage/TopSection/top";
import AboutSection from "./HomePage/AboutSection/about";
import TopSection from "@/app/HomePage/TopSection/top";

export default function HomePage() {
  return (
    <main className="scroll-smooth bg-bg1">

      <section id="top" className="h-screen">
        <TopSection/>
      </section>

      <section id="about" className="h-screen">
        <AboutSection/>
      </section>

    </main>
  );
}


