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
    name: "Jamal Hiwat Drenthe",
    title: "Senior Consultant | Full Stack Developer | Recht & Business Strategie",
    location: "Amsterdam, Nederland",
    email: "js.drenthe@gmail.com",
    summary: "Veelzijdige professional met een sterke achtergrond in IT, Recht en Sales. Gediplomeerd in Communicatie, Marketing, Business & Sales. Ik ontwerp en bouw schaalbare, veilige en gebruikersgerichte digitale systemen, variërend van responsive UI tot complexe backends en strategisch bedrijfsadvies.",
    languages: [
      { language: "Nederlands", level: "Moedertaal" },
      { language: "Engels", level: "Vloeiend" }
    ],
    softSkills: [
      "Zelfsturend",
      "Deadline-gericht",
      "Probleemoplosser",
      "Gebruikersgericht ontwerp",
      "Teamspeler"
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
      title: "Senior Consultant",
      company: "Pearson & Partners",
      period: "jan. 2026 - heden",
      description: "Een professional is meer dan alleen werkervaring of een online presentatie. Focus op strategisch advies en partnerschappen.",
      technologies: ["Consultancy", "Strategie", "Business Development"]
    },
    {
      title: "Consultant",
      company: "VodafoneZiggo",
      period: "okt. 2025 - heden",
      description: "Freelance Consultant. Voorheen D2D Onderaannemer @Salesmates. Hybride rol gericht op klantadvies en verkoopstrategieën.",
      technologies: ["Sales", "Freelance", "Direct Sales"]
    },
    {
      title: "Kwaliteitsspecialist",
      company: "Samsung Electronics",
      period: "nov. 2025 - jan. 2026",
      description: "Freelance Kwaliteitsspecialist op afstand. Verantwoordelijk voor kwaliteitscontrole en procesoptimalisatie.",
      technologies: ["Quality Assurance", "Samsung Ecosystem", "Remote Work"]
    },
    {
      title: "Consultant",
      company: "Eneco",
      period: "sep. 2025 - jan. 2026",
      description: "Freelance Consultant op afstand. Advies over energieoplossingen en duurzaamheid.",
      technologies: ["Energy", "Consulting", "Sustainability"]
    },
    {
      title: "Duurzaamheidsconsulent",
      company: "Belnino",
      period: "sep. 2025 - nov. 2025",
      description: "Verantwoordelijk voor het adviseren en proactief benaderen van potentiële nieuwe klanten via outbound, koude acquisitieactiviteiten. Gericht op cross-sell van diverse energieoplossingen.",
      technologies: ["Telemarketing", "Salesdock", "Duurzaamheid"]
    },
    {
      title: "Freelancer",
      company: "Vinted",
      period: "okt. 2023 - jun. 2025",
      description: "Hybride Fulltime rol binnen de e-commerce sector.",
      technologies: ["E-commerce", "Platform Management"]
    },
    {
      title: "Freelancer",
      company: "YoungOnes",
      period: "apr. 2022 - apr. 2023",
      description: "Freelance opdrachten op locatie door heel Nederland.",
      technologies: ["Hospitality", "Logistics", "Freelance"]
    },
    {
      title: "Vrijwilliger",
      company: "DOCK",
      period: "apr. 2020 - feb. 2022",
      description: "Vrijwilligerswerk in Amsterdam, Noord-Holland.",
      technologies: ["Community Support", "Social Work"]
    },
    {
      title: "Freelancer",
      company: "Temper",
      period: "okt. 2016 - feb. 2020",
      description: "Uitgebreide horeca en event ervaring bij top-locaties in Amsterdam waaronder: De Foodhallen, W Hotel Lounge, Conservatorium Hotel, en meer.",
      technologies: ["Horeca", "Event Management", "Hospitality"]
    },
    {
      title: "Topverkoper",
      company: "Essent",
      period: "okt. 2014 - okt. 2016",
      description: "Gefocust op acquisitie en klantrelaties in de energiesector.",
      technologies: ["Sales", "Account Management"]
    },
    {
      title: "Telemarketing KPN, Vodafone",
      company: "2Contact",
      period: "aug. 2013 - sep. 2014",
      description: "Parttime telemarketing in Haarlem.",
      technologies: ["Sales", "Communication"]
    },
    {
      title: "Teamleider",
      company: "Hot Networkz BV",
      period: "aug. 2013 - aug. 2014",
      description: "Fulltime leidinggevende rol gefocust op sales teams.",
      technologies: ["Leadership", "Sales Management"]
    },
    {
      title: "Compliance Manager",
      company: "Hot Networkz BV",
      period: "jul. 2013 - jul. 2014",
      description: "Parttime rol gericht op compliance en kwaliteitsbewaking.",
      technologies: ["Compliance", "Quality Control"]
    },
    {
      title: "Stagiair Filiaalmanager",
      company: "Hot Networkz BV",
      period: "sep. 2012 - jul. 2013",
      description: "Stagetraject voor filiaalmanagement.",
      technologies: ["Management Trainee"]
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
