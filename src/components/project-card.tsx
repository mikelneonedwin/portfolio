import type { Project } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";

export default function ProjectCard(project: Project) {
  return (
    <div className="md:flex items-start w-full">
      <p className="text-sm text-muted-foreground md:w-1/5">{project.date}</p>
      <div className="md:w-4/5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>

          {/* Project website */}
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

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View source on GitHub"
            >
              <Icon icon="mdi:github" className="w-4 h-4" />
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
