
import { File, User, Code, Globe, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
  href: string;
  tooltip: string;
}

const NavItem = ({ icon, active, href, tooltip }: NavItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-lg transition-all",
        active ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/50 hover:text-primary"
      )}
    >
      {icon}
      <span className="absolute left-14 z-50 w-auto min-w-max origin-left scale-0 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-primary opacity-0 shadow transition-all group-hover:scale-100 group-hover:opacity-100">
        {tooltip}
      </span>
    </a>
  );
};

export const Sidebar = () => {
  // Track active section for navigation highlighting
  const [activeSection, setActiveSection] = useState("about");
  
  // Update active section based on scroll position
  const handleScroll = () => {
    const sections = ["about", "skills", "projects", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-40 flex h-full w-16 flex-col items-center border-r border-border bg-card py-8">
      <div className="flex flex-col items-center gap-4">
        <NavItem
          icon={<User size={20} />}
          active={activeSection === "about"}
          href="#about"
          tooltip="About"
        />
        <NavItem
          icon={<Code size={20} />}
          active={activeSection === "skills"}
          href="#skills"
          tooltip="Skills"
        />
        <NavItem
          icon={<File size={20} />}
          active={activeSection === "projects"}
          href="#projects"
          tooltip="Projects"
        />
        <NavItem
          icon={<Mail size={20} />}
          active={activeSection === "contact"}
          href="#contact"
          tooltip="Contact"
        />
      </div>
    </div>
  );
};
