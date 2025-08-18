export type Project = {
  date: string;
  title: string;
  company: string;
  location: string;
  website: string;
  description: string[];
  technologies: string[];
};

export const workExperiences: Project[] = [
  {
    date: "Jul 2025 - Now",
    title: "Frontend Developer at Applift",
    company: "Applift Technologies Limited",
    location: "Uyo, Nigeria",
    website: "https://www.applift.xyz/",
    description: [
      "Develop high-performing, responsive frontends for ERPs, MVPs, and mobility apps",
      "Support UX audits and internal research tools to inform product strategy across African markets",
      "Optimize UI/UX for scalability and cross-device performance",
    ],
    technologies: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    date: "Jan 2025 - Now",
    title: "Lead Frontend Developer at LawdAm",
    company: "LawdAm",
    location: "Uyo, Nigeria",
    website: "https://lawdam.xyz",
    description: [
      "Architect and ship features like anonymous group chats, DMs, and identity switching",
      "Design seamless, secure, and scalable user experiences using modern web technologies",
      "Collaborate with product and design teams to innovate new social interaction models",
    ],
    technologies: ["React", "TypeScript", "Firebase", "TailwindCSS", "Shadcn"],
  },
  {
    date: "Apr 2024 - Now",
    title: "Lead Frontend Developer at Acadeva",
    company: "Acadeva",
    location: "Uyo, Nigeria",
    website: "https://acadeva.xyz",
    description: [
      "Build and maintain intuitive, collaborative interfaces for students to access notes, timetables, and study materials",
      "Enable AI-enhanced learning, personalized study journeys, and interactive content",
      "Optimize accessibility and efficiency across devices, including mobile and PC/web versions",
      "Develop tools for exam preparation, performance tracking, and feedback, supporting thousands of students",
    ],
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    date: "Oct 2024 - Nov 2024",
    title: "Frontend Developer Intern at Thrivr",
    company: "Thrivr",
    location: "Remote",
    website: "https://thrivr-app-mu.vercel.app/",
    description: [
      "Developed specific frontend features, focusing on the dashboard, inventory page, and initial landing page",
      "Ensured responsive layouts, usability, and performance improvements",
      "Worked under guidance from a senior developer rather than as part of the core team",
    ],
    technologies: ["React", "Next.js", "TailwindCSS"],
  },
  {
    date: "Jul 2023 - Now",
    title:
      "Frontend Developer & Community Moderator at 30DaysOfCodeWithVickyjay",
    company: "30DaysOfCodeWithVickyjay",
    location: "Remote",
    website: "https://code30.vercel.app",
    description: [
      "Develop and maintain frontend features for the 30 Days of Code platform",
      "Ensure smooth project submissions and a seamless user experience",
      "Moderate the community to foster collaboration, feedback, and peer learning",
    ],
    technologies: ["React", "Next.js", "TailwindCSS", "Firebase", "Postgres"],
  },
  {
    date: "Sep 2023 - Oct 2023",
    title: "Frontend Developer Intern at Vistapay",
    company: "Vistapay",
    location: "Remote",
    website: "https://vistapayhq.com/",
    description: [
      "Built and optimized select components for VTU and payment management features",
      "Improved responsiveness and performance across key payment interfaces",
      "Contributions made under guidance from a senior developer rather than as part of the core team",
    ],
    technologies: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    date: "Sep 2023 - Oct 2023",
    title: "Frontend Developer Intern at TekArt",
    company: "TekArt",
    location: "Remote",
    website: "https://teknart.vercel.app/",
    description: [
      "Implemented frontend features for the Vendor and Runway sections of the festival platform",
      "Focused on responsive design, component-level implementation, and UI polish",
      "Collaborated via a senior developer rather than as a full team member",
    ],
    technologies: ["React", "TailwindCSS", "TypeScript"],
  },
];
