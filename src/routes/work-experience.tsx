import ProjectCard from "@/components/project-card";
import { workExperiences } from "@/constants/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work-experience")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="work-experience" className="py-8">
      {/* Header + View All button */}
      <div className="flex items-start">
        <h2 className="text-2xl font-bold leading-tight">Work Experience</h2>
      </div>

      {/* Preview list */}
      <div className="space-y-8">
        {workExperiences.map((exp, index) => (
          <ProjectCard {...exp} key={index} />
        ))}
      </div>
    </section>
  );
}
