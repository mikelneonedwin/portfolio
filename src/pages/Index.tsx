
import { Sidebar } from "@/components/Sidebar";
import { ProfileSection } from "@/components/ProfileSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollArea } from "@/components/ui/scroll-area";

// Sample data for the portfolio
const portfolioData = {
  profile: {
    name: "Winner Edwin",
    title: "Fullstack Web Developer in Uyo",
    pronouns: "He/Him"
  },
  about: {
    bio: "I am a Fullstack web developer with a solid foundation in frontend technologies such as React, Next.js, and TailwindCSS. I leverage Firebase for backend services, including databases, authentication, and storage. My backend expertise includes Node.js and Express.js, and I am proficient in building RESTful APIs and managing databases. I am passionate about creating responsive, user-friendly web applications that solve real-world problems."
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Figma", category: "tools" },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, cart, and checkout functionality",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-example.com",
      githubUrl: "https://github.com/username/ecommerce",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["Next.js", "Firebase", "TailwindCSS"],
      liveUrl: "https://taskapp-example.com",
      githubUrl: "https://github.com/username/taskapp",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Personal Blog",
      description: "A markdown-based blog with categories and search functionality",
      technologies: ["React", "GraphQL", "Styled Components"],
      liveUrl: "https://blog-example.com",
      githubUrl: "https://github.com/username/blog",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with location-based forecasts",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveUrl: "https://weather-example.com",
      githubUrl: "https://github.com/username/weather",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ]
};

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-16">
        <main className="container mx-auto p-8 max-w-5xl">
          <ProfileSection {...portfolioData.profile} />
          
          <div className="space-y-12">
            <AboutSection bio={portfolioData.about.bio} />
            <SkillsSection skills={portfolioData.skills} />
            <ProjectsSection projects={portfolioData.projects} />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
