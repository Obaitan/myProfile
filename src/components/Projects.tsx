interface Projects {
  image: string;
  projectName: string;
  description: string;
  date: string;
  url: string;
  type: "Freelance" | "Work" | "Sample";
  technologies: string[];
}

export const projects: Projects[] = [
  {
    image: "/projects/lender.png",
    projectName: "Lender Backoffice",
    description: "Sample admin dashboard for lending platform.",
    date: "Aug 2025",
    url: "https://lender-backoffice.vercel.app/dashboard",
    type: "Sample",
    technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
  },
  {
    image: "/projects/m30.png",
    projectName: "m30 Website",
    description: "Referral & affiliate marketing platform website.",
    date: "Jan 2025",
    url: "https://m30.io/",
    type: "Work",
    technologies: ["Astro JS", "TypeScript", "Tailwind CSS"],
  },
  {
    image: "/projects/paylaterhub.png",
    projectName: "Paylaterhub Website",
    description: "Payroll lending company website.",
    date: "July 2024",
    url: "https://paylaterhub.co/",
    type: "Work",
    technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
  },
  {
    image: "/projects/m30-saas.png",
    projectName: "m30 SaaS Platform",
    description: "Referral & affiliate marketing SaaS platform.",
    date: "May 2024",
    url: "https://business.m30.io/",
    type: "Work",
    technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
  },
  {
    image: "/projects/indicina.png",
    projectName: "Indicina Website",
    description: "African Fintech / credit infrastructure company website.",
    date: "Nov 2023",
    url: "https://indicina.co/",
    type: "Freelance",
    technologies: ["PHP", "WordPress", "Elementor"],
  },
  {
    image: "/projects/lumos.png",
    projectName: "IT Solutions Agency Website",
    description: "Sample website for an IT solutions provider.",
    date: "Sep 2019",
    url: "https://obaitan.github.io/lumos-studio/",
    type: "Sample",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
