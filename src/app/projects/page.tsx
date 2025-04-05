import { fetchProjects } from "../../lib/project";
import ProjectGrid from "../../components/projects/ProjectGrid";
import ProjectHero from "../../components/projects/ProjectHero";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <>
      {/* Always display the ProjectHero component */}
      <ProjectHero />

      {/* Conditional rendering for projects or no-projects message */}
      {!projects || projects.length === 0 ? (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p className="text-xl text-gray-600">
            No projects available at this time.
          </p>
        </div>
      ) : (
        <ProjectGrid initialProjects={projects} />
      )}
    </>
  );
}
