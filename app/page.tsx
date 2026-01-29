import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Timeline from "@/components/sections/Timeline";
import Footer from "@/components/layout/Footer";
import MouseFollower from "@/components/ui/MouseFollower";
import LanguageSwitch from "@/components/ui/LanguageSwitch"; // ← 追加

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-accent-cyan/30 overflow-x-hidden relative">
      <MouseFollower />
      <LanguageSwitch /> {/* ← ここに置く！ */}
      
      <Hero />
      <Projects />
      <TechStack />
      <Timeline />
      <Footer />
    </main>
  );
}