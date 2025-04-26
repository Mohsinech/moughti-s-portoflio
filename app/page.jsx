import GalaxyBackground from "@/components/effects/GalaxyBackground";
import SectionDivider from "@/components/effects/SectionDivider";
import { About, Hero, Project, Skills ,Contact} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionDivider text="ACCESSIBLE • RESPONSIVE • DYNAMIC • SCALABLE • SEARCH OPTIMIZED • INTERACTIVE • SECURE • RELIABLE" />
      <Skills />
      <Project />
      <Contact/>
    </>
  );
}
