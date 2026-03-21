import { HeroSection } from "@/components/sections/HeroSection";
import { FieldsOfStudy } from "@/components/sections/FieldsOfStudy";
import { SystemDiagnostics } from "@/components/sections/SystemDiagnostics";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FieldsOfStudy />
      <SystemDiagnostics />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
