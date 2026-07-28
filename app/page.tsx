import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SkillsSection />
      <Experience />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
