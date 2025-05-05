
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-10">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card overflow-hidden border-white/10">
            {project.imageUrl && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-white">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
