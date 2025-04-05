import { fetchProjects, fetchProjectById } from "../../../lib/project";
import ProjectDetail from "../../../components/projects/ProjectDetail";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({ id: project.id.toString() }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await fetchProjectById(params.id);
  return <ProjectDetail project={project} />;
}
