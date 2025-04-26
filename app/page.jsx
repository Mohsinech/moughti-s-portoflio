import { About, Hero, Project, Skills ,Contact} from "@/components/sections";
import SectionDivider from "@/components/effects/marquee/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionDivider />
      <Skills />
      <Project />
      <Contact/>
    </>
  );
}
