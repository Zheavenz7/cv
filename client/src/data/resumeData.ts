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
    title: "Senior Consultant | Full Stack Developer | Recht & Business Strategie",
    location: "Amsterdam, Nederland",
    email: "js.drenthe@gmail.com",
    summary: "Veelzijdige professional met een sterke achtergrond in IT, Recht en Sales. Gediplomeerd in Communicatie, Marketing, Business & Sales. Ik ontwerp en bouw schaalbare, veilige en gebruikersgerichte digitale systemen, variërend van volledig functionele apps tot strategisch bedrijfsadvies.",
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
      title: "Consultancy & Strategie",
      icon: "fa-handshake",
      skills: [
        { name: "Strategisch Bedrijfsadvies", percentage: 95 },
        { name: "Business Development", percentage: 90 },
        { name: "Partnership Management", percentage: 90 },
        { name: "Procesoptimalisatie", percentage: 85 }
      ]
    },
    {
      title: "Sales & Marketing",
      icon: "fa-chart-line",
      skills: [
        { name: "Acquisitie & Sales", percentage: 95 },
        { name: "Marketingstrategie", percentage: 85 },
        { name: "Klantrelatiebeheer", percentage: 90 },
        { name: "Telemarketing & Outbound", percentage: 95 }
      ]
    },
    {
      title: "IT & Development",
      icon: "fa-laptop-code",
      skills: [
        { name: "React, Vite, TypeScript", percentage: 95 },
        { name: "Tailwind CSS, shadcn-ui", percentage: 90 },
        { name: "Supabase & Backend", percentage: 85 },
        { name: "Full Stack Development", percentage: 90 }
      ]
    },
    {
      title: "Recht & Compliance",
      icon: "fa-gavel",
      skills: [
        { name: "Juridisch Advies", percentage: 85 },
        { name: "Compliance Management", percentage: 90 },
        { name: "Contractmanagement", percentage: 85 }
      ]
    }
  ],
  
  experiences: [
    {
      title: "Senior Consultant",
      company: "Pearson & Partners",
      period: "jan. 2026 - heden",
      description: "Focus op strategisch advies en het bouwen van duurzame partnerschappen binnen de zakelijke dienstverlening.",
      technologies: ["Consultancy", "Strategie", "Business Development"]
    },
    {
      title: "Consultant",
      company: "VodafoneZiggo",
      period: "okt. 2025 - heden",
      description: "Freelance Consultant gericht op klantadvies en verkoopstrategieën. Voorheen actief als D2D Onderaannemer.",
      technologies: ["Sales", "Freelance", "Direct Sales"]
    },
    {
      title: "Kwaliteitsspecialist",
      company: "Samsung Electronics",
      period: "nov. 2025 - jan. 2026",
      description: "Verantwoordelijk voor kwaliteitscontrole, procesoptimalisatie en het waarborgen van servicestandaarden.",
      technologies: ["Quality Assurance", "Samsung Ecosystem", "Procesmanagement"]
    },
    {
      title: "Consultant",
      company: "Eneco",
      period: "sep. 2025 - jan. 2026",
      description: "Freelance Consultant op afstand. Advies over energieoplossingen en duurzaamheidsprojecten.",
      technologies: ["Energie", "Consultancy", "Duurzaamheid"]
    },
    {
      title: "Duurzaamheidsconsulent",
      company: "Belnino",
      period: "sep. 2025 - nov. 2025",
      description: "Verantwoordelijk voor het adviseren van potentiële klanten over duurzame energieoplossingen via outbound acquisitie.",
      technologies: ["Salesdock", "Duurzaamheid", "Telemarketing"]
    },
    {
      title: "Freelancer",
      company: "Vinted",
      period: "okt. 2023 - jun. 2025",
      description: "Hybride Fulltime rol binnen de e-commerce sector.",
      technologies: ["E-commerce", "Platform Management"]
    },
    {
      title: "Full Stack Developer",
      company: "Spontiva LTD",
      period: "2022 - 2023",
      description: "End-to-End Developer | Fullstack Specialist",
      technologies: ["React", "Node.js", "TypeScript", "Fullstack"]
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
      title: "Barman",
      company: "W Hotel Management & Services",
      period: "okt. 2016 - jun. 2019",
      description: "Freelance barwerkzaamheden in Amsterdam.",
      technologies: ["Gastvrijheid", "Mixologie"]
    },
    {
      title: "Barmanager",
      company: "Tours & Tickets | Amsterdam",
      period: "aug. 2017 - aug. 2018",
      description: "Verantwoordelijk voor barmanagement en teamleiding.",
      technologies: ["Leiderschap", "Management"]
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
    },
    {
      title: "Kwaliteitsspecialist",
      company: "Pepperminds",
      period: "sep. 2013 - apr. 2014",
      description: "Parttime kwaliteitsbewaking in Haarlem.",
      technologies: ["Kwaliteitscontrole"]
    },
    {
      title: "Teamleider, Supersaler",
      company: "Streetwise",
      period: "aug. 2011 - jul. 2013",
      description: "Leidinggevende sales rol in Amsterdam.",
      technologies: ["Leiderschap", "Sales"]
    },
    {
      title: "Stagiair Verzekeringen & Taxaties",
      company: "KakesWaal bv",
      period: "sep. 2011 - jul. 2012",
      description: "Stage gericht op verzekeringswezen en taxaties.",
      technologies: ["Verzekeringen", "Taxatie"]
    },
    {
      title: "Stagiair Financiën",
      company: "Forbo Flooring Systems",
      period: "sep. 2010 - jul. 2011",
      description: "Stage op de financiële afdeling.",
      technologies: ["Financiële Rapporten", "Boekhouding"]
    },
    {
      title: "IT-stagiair",
      company: "Hogeschool van Amsterdam",
      period: "sep. 2007 - jul. 2008",
      description: "Eerste IT-ervaring tijdens een stageproject.",
      technologies: ["IT Support", "Systeembeheer"]
    }
  ],
  
  projects: [
    {
      title: "Custom Financial Dashboard",
      description: "Een uitgebreid financieel dashboard met rolgebaseerde toegang en realtime datavisualisatie, gekoppeld aan Google Sheets.",
      technologies: ["React", "Supabase", "Tailwind", "Google Sheets"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Mobiele App (Flutter + Firebase)",
      description: "Een cross-platform mobiele applicatie met volledige authenticatie, realtime updates en bestandsuploads.",
      technologies: ["Flutter", "Firebase", "iOS", "Android"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Audio Creatie Tool",
      description: "Een webgebaseerde tool voor audiomanipulatie met filters en golfvormvisualisatie.",
      technologies: ["Web Audio API", "JavaScript", "Canvas", "React"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "E-commerce Checkout Systeem",
      description: "Een compleet afrekensysteem met integraties van meerdere betalingsproviders en e-mailnotificaties.",
      technologies: ["Stripe", "Pay.nl", "Supabase", "Resend"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "3D Web Landing Page",
      description: "Een meeslepende 3D-landingspagina geoptimaliseerd voor zowel desktop als mobiele ervaringen.",
      technologies: ["Three.js", "React", "WebGL", "GSAP"],
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Data Visualisatie Dashboard",
      description: "Interactieve datavisualisatie tools voor business intelligence en analytics.",
      technologies: ["D3.js", "Vue.js", "GraphQL", "PostgreSQL"],
      demoLink: "#",
      sourceLink: "#"
    }
  ]
};

export default resumeData;
