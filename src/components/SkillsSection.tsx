
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
}

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  
  const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Others"
  };

  return (
    <section id="skills" className="py-10">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="glass-card p-4">
            <h3 className="text-lg font-medium text-white mb-3">
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <Badge key={skill.name} variant="secondary">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
