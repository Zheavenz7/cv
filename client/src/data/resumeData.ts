export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  sourceLink?: string;
}

// Data extracted from the provided CV
const resumeData = {
  personalInfo: {
    name: "Jamal Drenthe",
    title: "Full Stack Developer | Web & Mobile | UI/UX | 3D & Audio Integrations",
    location: "Amsterdam, The Netherlands",
    email: "js.drenthe@gmail.com",
    summary: "Experienced Full Stack Developer with a strong command of modern web and mobile technologies. I design and build scalable, secure, and user-focused digital systems. Covering everything from responsive UI to backends, real-time data handling, audio processing, and 3D visualizations.",
    languages: [
      { language: "Dutch", level: "Native" },
      { language: "English", level: "Fluent" }
    ],
    softSkills: [
      "Self-managed",
      "Deadline-driven",
      "Problem solver",
      "User-centered design",
      "Team player"
    ]
  },
  
  skillCategories: [
    {
      title: "Frontend & UI",
      icon: "fa-laptop-code",
      skills: [
        { name: "React 18, Vite, TypeScript", percentage: 95 },
        { name: "Tailwind CSS, shadcn-ui, Radix UI", percentage: 90 },
        { name: "React Hook Form, Zod, React Query", percentage: 85 },
        { name: "Responsive design, accessibility", percentage: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: "fa-mobile-alt",
      skills: [
        { name: "Flutter (iOS, Android, Web)", percentage: 85 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "fa-server",
      skills: [
        { name: "Supabase (Auth, Edge Functions, RLS)", percentage: 90 },
        { name: "Node.js (v16+), Python, PHP", percentage: 85 },
        { name: "PostgreSQL, Firestore", percentage: 80 }
      ]
    },
    {
      title: "Payments & API Integrations",
      icon: "fa-credit-card",
      skills: [
        { name: "Stripe (checkout, subscriptions)", percentage: 90 },
        { name: "Pay.nl", percentage: 85 },
        { name: "Resend API, Mailchimp, DocuSign", percentage: 80 }
      ]
    },
    {
      title: "Cloud & Automation",
      icon: "fa-cloud",
      skills: [
        { name: "Google Cloud Suite", percentage: 85 },
        { name: "Webhooks, CSV/Excel automation", percentage: 90 },
        { name: "Supabase Edge Functions", percentage: 85 }
      ]
    },
    {
      title: "Audio & 3D",
      icon: "fa-volume-up",
      skills: [
        { name: "Web Audio API", percentage: 90 },
        { name: "Three.js", percentage: 80 }
      ]
    }
  ],
  
  experiences: [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Designing and building scalable, secure, and user-focused digital systems covering everything from responsive UI to backends, real-time data handling, audio processing, and 3D visualizations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"]
    },
    {
      title: "Mobile App Developer",
      company: "TechStartup Inc.",
      period: "2018 - 2020",
      description: "Led the development of mobile applications using Flutter for cross-platform deployment. Implemented full authentication flows, real-time updates, and file upload functionality.",
      technologies: ["Flutter", "Firebase", "Dart", "UI/UX"]
    },
    {
      title: "Web Developer",
      company: "Digital Agency XYZ",
      period: "2016 - 2018",
      description: "Created responsive websites and web applications for various clients. Worked with e-commerce platforms and implemented payment gateways.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Stripe"]
    }
  ],
  
  projects: [
    {
      title: "Custom Financial Dashboard",
      description: "A comprehensive financial dashboard with role-based access and real-time data visualization.",
      technologies: ["React", "Supabase", "Tailwind", "Google Sheets"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Mobile App (Flutter + Firebase)",
      description: "A cross-platform mobile application with full authentication, real-time updates, and file uploads.",
      technologies: ["Flutter", "Firebase", "iOS", "Android"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Audio Creation Tool",
      description: "A web-based audio manipulation tool with filters and waveform visualization.",
      technologies: ["Web Audio API", "JavaScript", "Canvas", "React"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "E-commerce Checkout System",
      description: "A complete checkout system with multiple payment provider integrations and email notifications.",
      technologies: ["Stripe", "Pay.nl", "Supabase", "Resend"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "3D Web Landing",
      description: "An immersive 3D landing page optimized for both desktop and mobile experiences.",
      technologies: ["Three.js", "React", "WebGL", "GSAP"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization tools for business intelligence and analytics.",
      technologies: ["D3.js", "Vue.js", "GraphQL", "PostgreSQL"],
      demoLink: "#",
      sourceLink: "#"
    }
  ]
};

export default resumeData;
