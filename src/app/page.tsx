import { HeroSection } from "@/components/sections/HeroSection";
import { FieldsOfStudy } from "@/components/sections/FieldsOfStudy";
import { SystemDiagnostics } from "@/components/sections/SystemDiagnostics";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FieldsOfStudy />
      <SystemDiagnostics />
      <ProjectsSection />
      <TimelineSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
