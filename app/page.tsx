import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
