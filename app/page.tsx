import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Timeline from "@/components/sections/Timeline";
import Languages from "@/components/sections/Languages";
import OutsideLab from "@/components/sections/OutsideLab";
import Footer from "@/components/layout/Footer";
import MouseFollower from "@/components/ui/MouseFollower";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-white selection:bg-accent-cyan/30">
      <MouseFollower />
      <LanguageSwitch />

      <Hero />
      <Mission />
      <Projects />
      <TechStack />
      <Languages />
      <Timeline />
      <OutsideLab />
      <Footer />
    </main>
  );
}
