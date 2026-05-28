import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} // VANGUARD_OPS`,
    description: project.description,
    openGraph: {
      title: `${project.title} // Deep Dive`,
      description: project.missionBrief,
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
