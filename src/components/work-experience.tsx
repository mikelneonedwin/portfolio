import { Button } from "@/components/ui/button";
import { workExperiences, type Project } from "@/constants/projects";
import { ExternalLink } from "lucide-react";

function Box(project: Project) {
  return (
    <div className="md:flex items-start w-full">
      <p className="text-sm text-muted-foreground md:w-1/5">{project.date}</p>
      <div className="md:w-4/5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Open project website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
        <ul className="list-disc list-outside ml-5 space-y-2 text-foreground">
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
          {project.technologies.length > 0 && (
            <li className="font-medium">
              Tech: {project.technologies.join(", ")}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function WorkExperience() {
  const previewCount = 3; // show first 3 on homepage

  return (
    <section id="work-experience" className="py-8">
      {/* Header + View All button */}
      <div className="flex items-start">
        <h2 className="text-2xl font-bold leading-tight">Work Experience</h2>
        {workExperiences.length > previewCount && (
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="-translate-y-0.5"
          >
            <a href="/work-experience" title="View all work experience">
              <ExternalLink />
            </a>
          </Button>
        )}
      </div>

      {/* Preview list */}
      <div className="space-y-8">
        {workExperiences.slice(0, previewCount).map((exp, index) => (
          <Box {...exp} key={index} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
