export type Experience = {
  date: string;
  title: string;
  company?: string;
  location?: string;
  website?: string;
  github?: string;
  description: string[];
  technologies: string[];
};

export const personalProjects: Experience[] = [
  {
    date: "August 2025",
    title: "Deathmatch Agents",
    github: "https://github.com/mikelneonedwin/deathmatch-agents",
    description: [
      "Prototype project exploring low-level concepts: IPCs, CPU allocation/scheduling, I/O and CPU bursts, signals, and more",
      "Multi-language agent orchestration in a competitive 'deathmatch' environment",
      "Current implementation in TypeScript; other languages will be added",
    ],
    technologies: ["TypeScript"],
  },
  {
    date: "August 2025",
    title: "JZ",
    github: "https://github.com/mikelneonedwin/JZ",
    description: [
      "GUI version of JQuiz built with Java",
      "Uses Swing for the interface and PostgreSQL for persistence",
    ],
    technologies: ["Java", "Swing", "PostgreSQL"],
  },
  {
    date: "May 2025",
    title: "Icebreaker",
    website: "http://ice-break-er.vercel.app/",
    github: "https://github.com/mikelneonedwin/icebreaker",
    description: [
      "List of questions in different categories to keep conversations going with friends",
    ],
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
  },
  {
    date: "March 2025",
    title: "Voysa (Lead Frontend Dev)",
    company: "Team Voysa",
    location: "University of Uyo",
    website: "https://voysa.vercel.app",
    github: "https://github.com/mikelneonedwin/voysa",
    description: [
      "Social platform project, winner of SuiOverflow Hackathon at Uniuyo 2025",
      "Led frontend development and built scalable UI with React and Vite",
    ],
    technologies: ["Vite", "React", "TypeScript", "TailwindCSS"],
  },
  {
    date: "January 2025",
    title: "Rock Paper Scissors Simulator",
    website: "https://rps-sim.vercel.app",
    github: "https://github.com/mikelneonedwin/rps-sim",
    description: [
      "Web-based rock–paper–scissors game",
      "Built as a fun, interactive project",
    ],
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
  },
  {
    date: "October 2024",
    title: "Thrivr Landing Page",
    company: "Thrivr",
    location: "Remote",
    website: "https://ayo-test.vercel.app",
    github: "https://github.com/mikelneonedwin/ayo-test",
    description: [
      "Landing page built from scratch as part of internship application for Thrivr",
      "Focused on clean, responsive UI and performance",
    ],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  },
  {
    date: "2024 – Ongoing",
    title: "Vantage (Team Lead)",
    company: "Team Vantage",
    location: "University of Uyo",
    description: [
      "Educational tool for students providing AI-assisted learning",
      "Winner of GDGOC Uniuyo EduSolutions Hackathon 2024",
      "Goal: leverage AI to enhance studying and personalized learning",
    ],
    technologies: [
      "Next.js",
      "Supabase",
      "Vercel AI SDK",
      "React",
      "TypeScript",
    ],
  },
  {
    date: "October 2023",
    title: "30 V3 Submission Portal",
    company: "30DaysOfCodeWithVickyJay",
    location: "Remote",
    website: "https://v3-bice.vercel.app",
    github: "https://github.com/mikelneonedwin/V3",
    description: [
      "Third version of the submission portal for 30DaysOfCodeWithVickyJay",
      "Built with Nuxt and Vue, improved structure and responsiveness",
    ],
    technologies: ["Nuxt", "Vue", "TypeScript", "TailwindCSS"],
  },
  {
    date: "September 2023",
    title: "30 V2 Submission Portal",
    company: "30DaysOfCodeWithVickyJay",
    location: "Remote",
    website: "https://v2-lac.vercel.app",
    github: "https://github.com/mikelneonedwin/30-V2",
    description: [
      "Second version of the submission portal for 30DaysOfCodeWithVickyJay",
      "Improved UI and performance",
    ],
    technologies: ["Vue", "Vite", "TailwindCSS", "TypeScript", "Nuxt"],
  },
  {
    date: "September 2023",
    title: "JQuiz",
    website: "https://jquiz-gamma.vercel.app",
    github: "https://github.com/mikelneonedwin/jQuiz",
    description: [
      "Online programming quiz application created independently",
      "Built to test and practice programming knowledge interactively",
    ],
    technologies: ["TailwindCSS", "Vue", "Nuxt.js", "TypeScript"],
  },
  {
    date: "September 2023",
    title: "AudHub",
    website: "https://audhub.vercel.app",
    description: [
      "Online streaming platform built as a learning project",
      "Explored streaming, ranking algorithms and database integration",
    ],
    technologies: ["Firebase", "HTML", "CSS", "JavaScript"],
  },
  {
    date: "August 2023",
    title: "30 V1 Submission Portal",
    company: "30DaysOfCodeWithVickyJay",
    location: "Remote",
    website: "https://30-vickyjay.vercel.app/",
    github: "https://github.com/mikelneonedwin/30-vickyjay",
    description: [
      "First version of the submission portal for the 30DaysOfCodeWithVickyJay challenge",
      "Handles project submissions and basic project listing",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    date: "July - August 2025",
    title: "Planora (Team Lead)",
    company: "School Project",
    location: "University of Uyo",
    website: "https://planora-g9.vercel.app",
    github: "https://github.com/Faculty-of-Computing/planora",
    description: [
      "Event management system built as a school project",
      "Led the team in development and coordination",
      "Implemented event scheduling, management, and tracking features",
    ],
    technologies: [
      "TailwindCSS",
      "Flask",
      "PostgreSQL",
      "Python",
      "HTML",
      "JavaScript",
    ],
  },
];

export const workExperiences: Experience[] = [
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
];
