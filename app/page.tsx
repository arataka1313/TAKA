import DepthGauge from "@/components/dive/DepthGauge";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Currents from "@/components/sections/Currents";
import Equipment from "@/components/sections/Equipment";
import Field from "@/components/sections/Field";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Records from "@/components/sections/Records";
import Research from "@/components/sections/Research";
import Vision from "@/components/sections/Vision";

// The page is a single descent: surface → sunlit → shallows →
// twilight → midnight → abyss → open ocean → seabed.
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <DepthGauge />
      <main id="main" className="relative mx-auto max-w-7xl">
        <Hero />
        <Vision />
        <Field />
        <Research />
        <Records />
        <Equipment />
        <Journey />
        <Currents />
        <Footer />
      </main>
    </>
  );
}
