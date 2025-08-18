import { Button } from "@/components/ui/button";
import { workExperiences } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import ProjectCard from "./project-card";

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
          <ProjectCard {...exp} key={index} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
