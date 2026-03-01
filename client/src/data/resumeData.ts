export interface Skill {
  name: string;
  percentage: number;
}

export interface ToolGroup {
  category: string;
  items: string;
}

export interface DetailedSkillCategory {
  title: string;
  icon: string;
  emoji: string;
  subtitle: string;
  skills: string[];
  toolGroups: ToolGroup[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export type ExperienceType = 'fulltime' | 'freelance' | 'opleiding' | 'vrijwilliger';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: ExperienceType;
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
    title: "AI-Native Business IT Developer & MVP Architect",
    location: "Amsterdam, Nederland",
    email: "info@jamaldrenthe.com",
    summary: "Ik combineer sales, bouwen en systeemdenken in één profiel. Geen traditionele verkoper en geen pure developer: ik sluit deals, bouw platforms en automatiseer bedrijfssystemen van A tot Z.",
    languages: [
      { language: "Nederlands", level: "Moedertaal" },
      { language: "Engels", level: "Vloeiend" }
    ],
    softSkills: [
      "Zelfsturend",
      "Deadline-gericht",
      "Probleemoplosser",
      "Teamspeler"
    ]
  },
  
  detailedSkillCategories: [
    {
      title: "Architectuur & Strategie",
      icon: "fa-chess",
      emoji: "1️⃣",
      subtitle: "Conceptontwikkeling, businessstructuren, product- en platformplanning, groeistrategie.",
      skills: [
        "product discovery", "product-market fit", "business model & revenue design (Lean Canvas / BMC)",
        "go-to-market", "growth hacking", "KPI & OKR setup", "stakeholder management",
        "legal & compliance (IP / contracts / GDPR)", "design thinking"
      ],
      toolGroups: [
        { category: "Tools / Platforms", items: "Notion · Coda · Miro · Lucidchart · FigJam · Whimsical · Trello · Jira · Slack · Productboard" }
      ]
    },
    {
      title: "Content, Design & Media",
      icon: "fa-palette",
      emoji: "2️⃣",
      subtitle: "Video, motion, 3D-design, muziek, branding, visuele communicatie én programmatische audio-verwerking.",
      skills: [
        "UX/UI prototyping", "branding & visual identity", "motion graphics & animatie",
        "3D-modellering (product/interieur/architectuur)", "sound design", "color grading",
        "AR/VR asset creatie", "audio-analyse & -synthese (Python)"
      ],
      toolGroups: [
        { category: "Video / Motion", items: "DaVinci Resolve · Adobe Premiere Pro · After Effects · Premiere Rush · Adobe Express · Canva" },
        { category: "Design / UI/UX", items: "Figma · Adobe Photoshop · Illustrator · InDesign · XD" },
        { category: "3D / AR/VR", items: "Blender · Cinema 4D" },
        { category: "Audio / Muziek (DAW)", items: "FL Studio · Logic Pro · Ableton Live · Melodyne · Antares Auto-Tune · Waves · iZotope" },
        { category: "Audio Programming (Python)", items: "sounddevice · PyAudio · librosa · pyo · pedalboard · mido · demucs · torchaudio · essentia · scipy.signal" }
      ]
    },
    {
      title: "Development & Engineering",
      icon: "fa-code",
      emoji: "3️⃣",
      subtitle: "Websites, apps, platformen, API-integraties, automatiseringen, games, AR/VR, data-engineering én infrastructure automation.",
      skills: [
        "full-stack web & mobile development", "API design & integratie", "microservices & serverless",
        "cloud architectuur", "CI/CD & DevOps", "testing & QA", "Git workflows",
        "low-code / no-code", "game & AR/VR development", "shell scripting & automatisering",
        "web scraping", "database design & ORM", "infrastructure automation",
        "configuratiebeheer", "multi-node orchestration", "remote deployment & monitoring"
      ],
      toolGroups: [
        { category: "Editors", items: "VS Code · PyCharm" },
        { category: "Talen", items: "Python · JavaScript · TypeScript · Node.js · Ruby · PHP · Dart · HTML · CSS" },
        { category: "Scripting / Shell", items: "Bash · PowerShell" },
        { category: "Frontend", items: "React · Next.js · Vue.js · Nuxt.js · Vite · TailwindCSS · Bootstrap · Material UI · Redux · Zustand · MobX" },
        { category: "Backend (Python)", items: "Django · FastAPI · Flask" },
        { category: "Backend (Node.js)", items: "Express" },
        { category: "Backend (Ruby)", items: "Ruby on Rails" },
        { category: "Backend (PHP)", items: "Laravel" },
        { category: "API & Real-time", items: "GraphQL (Apollo) · REST · WebSockets" },
        { category: "Mobile", items: "React Native · Flutter (Dart)" },
        { category: "Game / AR/VR", items: "Unity · Unreal Engine" },
        { category: "Low-code / No-code", items: "Webflow · Framer · FlutterFlow · Shopify · WordPress · BigCartel · Magento" },
        { category: "Databases & ORM", items: "PostgreSQL · MySQL · SQLite · Supabase · Firebase · SQLAlchemy · Prisma · Serverless Framework" },
        { category: "Web Scraping & Automation", items: "Requests · BeautifulSoup · PyAutoGUI · APScheduler" },
        { category: "Infra & Automation Engineering", items: "Ansible · Terraform · Bash · SSH · Linux (Ubuntu) · macOS · WSL · Git · CLI tooling" },
        { category: "Cloud & DevOps", items: "AWS · GCP · Azure · Oracle Cloud · Docker · Kubernetes · Terraform · Airflow · MLOps" },
        { category: "Version control / CI", items: "GitHub · GitLab" },
        { category: "Testing / API", items: "Postman · pytest" },
        { category: "Automation (no-code)", items: "Zapier · n8n · Make" }
      ]
    },
    {
      title: "AI & Automation",
      icon: "fa-robot",
      emoji: "4️⃣",
      subtitle: "AI-native MVP's, generatieve AI, intelligente workflows, RPA, computer vision en audio-AI.",
      skills: [
        "prompt engineering", "fine-tuning LLMs", "generative AI pipelines",
        "custom model training (PyTorch / TensorFlow)", "automation / RPA",
        "smart dashboards", "computer vision", "audio deep learning"
      ],
      toolGroups: [
        { category: "LLM / Generative AI", items: "OpenAI API & SDK · ChatGPT · GitHub Copilot · LangChain · LlamaIndex · HuggingFace Transformers · Anthropic Claude" },
        { category: "ML / Deep Learning", items: "TensorFlow · PyTorch · Scikit-learn" },
        { category: "Computer Vision", items: "OpenCV" },
        { category: "Audio AI", items: "torchaudio · demucs · essentia · librosa" },
        { category: "Image / Video AI", items: "MidJourney · Runway · Stable Diffusion · DALL·E" },
        { category: "Automation", items: "Zapier · Make · n8n · PyAutoGUI · APScheduler" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "fa-chart-bar",
      emoji: "5️⃣",
      subtitle: "Dashboards, financiële modellen, inzichten en datagedreven groei.",
      skills: [
        "ETL pipelines", "predictive analytics & machine learning basics",
        "business & financial modelling", "KPI tracking", "A/B testing",
        "data visualisatie", "tijdsreeksanalyse", "quantitative finance"
      ],
      toolGroups: [
        { category: "BI & Dashboards", items: "Power BI · Tableau · Looker Studio · Google Analytics · Plotly / Dash" },
        { category: "Spreadsheets", items: "Excel (advanced, Power Query, VBA) · Google Sheets" },
        { category: "Databases & Querying", items: "SQL (PostgreSQL, MySQL, SQLite)" },
        { category: "Python Data Stack", items: "Pandas · NumPy · PySpark · SciPy (incl. signal) · Matplotlib · Seaborn · Scikit-learn" },
        { category: "Finance & Trading", items: "TA-Lib · QuantLib" },
        { category: "Data Acquisitie", items: "Requests · BeautifulSoup" }
      ]
    }
  ],
  
  experiences: [
    {
      title: "Senior Consultant",
      company: "Pearson & Partners",
      period: "jan. 2026 - heden",
      description: "Focus op strategisch advies en het bouwen van duurzame partnerschappen binnen de zakelijke dienstverlening.",
      technologies: ["Consultancy", "Strategie", "Business Development"],
      type: "fulltime"
    },
    {
      title: "Consultant",
      company: "VodafoneZiggo",
      period: "okt. 2025 - heden",
      description: "Freelance Consultant gericht op klantadvies en verkoopstrategieën. Voorheen actief als D2D Onderaannemer.",
      technologies: ["Sales", "Freelance", "Direct Sales"],
      type: "freelance"
    },
    {
      title: "Kwaliteitsspecialist",
      company: "Samsung Electronics",
      period: "nov. 2025 - jan. 2026",
      description: "Verantwoordelijk voor kwaliteitscontrole, procesoptimalisatie en het waarborgen van servicestandaarden.",
      technologies: ["Quality Assurance", "Samsung Ecosystem", "Procesmanagement"],
      type: "freelance"
    },
    {
      title: "Consultant",
      company: "Eneco",
      period: "sep. 2025 - jan. 2026",
      description: "Freelance Consultant op afstand. Advies over energieoplossingen en duurzaamheidsprojecten.",
      technologies: ["Energie", "Consultancy", "Duurzaamheid"],
      type: "freelance"
    },
    {
      title: "Duurzaamheidsconsulent",
      company: "Belnino",
      period: "sep. 2025 - nov. 2025",
      description: "Verantwoordelijk voor het adviseren van potentiële klanten over duurzame energieoplossingen via outbound acquisitie.",
      technologies: ["Salesdock", "Duurzaamheid", "Telemarketing"],
      type: "fulltime"
    },
    {
      title: "Freelancer",
      company: "Vinted",
      period: "okt. 2023 - jun. 2025",
      description: "Hybride Fulltime rol binnen de e-commerce sector.",
      technologies: ["E-commerce", "Platform Management"],
      type: "fulltime"
    },
    {
      title: "Tech Lead",
      company: "Referral Clique LTD (Spontiva)",
      period: "2022 - heden",
      description: "Tech Lead verantwoordelijk voor architectuur, delivery en teamaansturing",
      technologies: ["React", "Node.js", "TypeScript", "Fullstack"],
      type: "fulltime"
    },
    {
      title: "Freelancer",
      company: "YoungOnes",
      period: "apr. 2022 - apr. 2023",
      description: "Freelance opdrachten op locatie door heel Nederland.",
      technologies: ["Hospitality", "Logistics", "Freelance"],
      type: "freelance"
    },
    {
      title: "Vrijwilliger",
      company: "DOCK",
      period: "apr. 2020 - feb. 2022",
      description: "Vrijwilligerswerk in Amsterdam, Noord-Holland.",
      technologies: ["Community Support", "Social Work"],
      type: "vrijwilliger"
    },
    {
      title: "Freelancer",
      company: "Temper",
      period: "okt. 2016 - feb. 2020",
      description: "Uitgebreide horeca en event ervaring bij top-locaties in Amsterdam waaronder: De Foodhallen, W Hotel Lounge, Conservatorium Hotel, en meer.",
      technologies: ["Horeca", "Event Management", "Hospitality"],
      type: "freelance"
    },
    {
      title: "Barman",
      company: "W Hotel Management & Services",
      period: "okt. 2016 - jun. 2019",
      description: "Freelance barwerkzaamheden in Amsterdam.",
      technologies: ["Gastvrijheid", "Mixologie"],
      type: "freelance"
    },
    {
      title: "Barmanager",
      company: "Tours & Tickets | Amsterdam",
      period: "aug. 2017 - aug. 2018",
      description: "Verantwoordelijk voor barmanagement en teamleiding.",
      technologies: ["Leiderschap", "Management"],
      type: "fulltime"
    },
    {
      title: "Topverkoper",
      company: "Essent",
      period: "okt. 2014 - okt. 2016",
      description: "Gefocust op acquisitie en klantrelaties in de energiesector.",
      technologies: ["Sales", "Account Management"],
      type: "fulltime"
    },
    {
      title: "Telemarketing KPN, Vodafone",
      company: "2Contact",
      period: "aug. 2013 - sep. 2014",
      description: "Parttime telemarketing in Haarlem.",
      technologies: ["Sales", "Communication"],
      type: "fulltime"
    },
    {
      title: "Teamleider",
      company: "Hot Networkz BV",
      period: "aug. 2013 - aug. 2014",
      description: "Fulltime leidinggevende rol gefocust op sales teams.",
      technologies: ["Leadership", "Sales Management"],
      type: "fulltime"
    },
    {
      title: "Compliance Manager",
      company: "Hot Networkz BV",
      period: "jul. 2013 - jul. 2014",
      description: "Parttime rol gericht op compliance en kwaliteitsbewaking.",
      technologies: ["Compliance", "Quality Control"],
      type: "fulltime"
    },
    {
      title: "Stagiair Filiaalmanager",
      company: "Hot Networkz BV",
      period: "sep. 2012 - jul. 2013",
      description: "Stagetraject voor filiaalmanagement.",
      technologies: ["Management Trainee"],
      type: "opleiding"
    },
    {
      title: "Kwaliteitsspecialist",
      company: "Pepperminds",
      period: "sep. 2013 - apr. 2014",
      description: "Parttime kwaliteitsbewaking in Haarlem.",
      technologies: ["Kwaliteitscontrole"],
      type: "fulltime"
    },
    {
      title: "Teamleider, Supersaler",
      company: "Streetwise",
      period: "aug. 2011 - jul. 2013",
      description: "Leidinggevende sales rol in Amsterdam.",
      technologies: ["Leiderschap", "Sales"],
      type: "fulltime"
    },
    {
      title: "Stagiair Verzekeringen & Taxaties",
      company: "KakesWaal bv",
      period: "sep. 2011 - jul. 2012",
      description: "Stage gericht op verzekeringswezen en taxaties.",
      technologies: ["Verzekeringen", "Taxatie"],
      type: "opleiding"
    },
    {
      title: "Stagiair Financiën",
      company: "Forbo Flooring Systems",
      period: "sep. 2010 - jul. 2011",
      description: "Stage op de financiële afdeling.",
      technologies: ["Financiële Rapporten", "Boekhouding"],
      type: "opleiding"
    },
    {
      title: "IT-stagiair",
      company: "Hogeschool van Amsterdam",
      period: "sep. 2007 - jul. 2008",
      description: "Eerste IT-ervaring tijdens een stageproject.",
      technologies: [],
      type: "opleiding"
    },
    {
      title: "HBO-Law",
      company: "Hogeschool Utrecht",
      period: "2014 - 2016",
      description: "HBO-opleiding Rechten.",
      technologies: ["Rechten", "Juridisch Advies", "Bestuursrecht", "Bedrijfsrecht"],
      type: "opleiding"
    },
    {
      title: "Business Marketing & Communication",
      company: "Regio College",
      period: "2012 - 2014",
      description: "Business Marketing & Communication Studies.",
      technologies: ["Marketing", "Communicatie", "Business"],
      type: "opleiding"
    },
    {
      title: "Business Finance",
      company: "TRIAS",
      period: "2010 - 2012",
      description: "MBO-opleiding Business Finance.",
      technologies: ["Finance", "Bedrijfsadministratie", "Management"],
      type: "opleiding"
    },
    {
      title: "Business Economy",
      company: "Berlage Lyceum",
      period: "2007 - 2010",
      description: "HAVO Business Economy.",
      technologies: ["Economie", "Business", "Wiskunde"],
      type: "opleiding"
    }
  ],
  
  projects: [
    {
      title: "VVC",
      description: "Innovatief platform voor zakelijke dienstverlening en consultancy.",
      technologies: ["React", "TypeScript", "Tailwind"],
      demoLink: "https://verdienendevrienden.club",
      sourceLink: "https://github.com/JamalDrenthe/vvc-webapp"
    },
    {
      title: "Investbotiq",
      description: "Een intelligent platform voor vermogensbeheer en investeringsstrategieën.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Cloud Run"
      ],
      demoLink: "https://app.investbotiq.com",
      sourceLink: "https://github.com/JamalDrenthe/investbotiq"
    },
    {
      title: "Spontiva",
      description: "Platform gericht op Time Gap Cashflow analyse en uitvoering voor bedrijven.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      demoLink: "https://spontiva.nl",
      sourceLink: "https://github.com/JamalDrenthe/spontiva"
    },
    {
      title: "WoningVry",
      description: "Vastgoedplatform voor het vinden en beheren van woonruimte.",
      technologies: ["React", "Vite", "Firebase"],
      demoLink: "https://woningvrij.nl",
      sourceLink: "https://github.com/JamalDrenthe/WoningVry"
    },
    {
      title: "DJOBBA",
      description: "Platform voor flexibele arbeidsbemiddeling en personeelsmatching.",
      technologies: ["React", "Tailwind", "Express"],
      demoLink: "https://djobba.nl"
    },
    {
      title: "Angels Mediate",
      description: "Platform voor mediation en conflictoplossing.",
      technologies: ["React", "TypeScript", "Tailwind"],
      demoLink: "https://angelsmediate.com"
    },
    {
      title: "Reken Tools",
      description: "Slimme rekenmodules voor financiële en zakelijke berekeningen.",
      technologies: ["React", "TypeScript", "Tailwind"],
      demoLink: "#"
    },
    {
      title: "Chat Tools",
      description: "AI-gestuurde chatinterfaces en gespreksassistenten op maat.",
      technologies: ["React", "OpenAI", "Node.js", "TypeScript"],
      demoLink: "#"
    },
    {
      title: "Video Gen Tool",
      description: "AI-gedreven videogeneratietool voor content en marketing.",
      technologies: ["React", "Python", "FAL.ai", "Node.js"],
      demoLink: "#"
    },
    {
      title: "Music DJ Tool",
      description: "Browser-based DJ- en muziekmixapplicatie.",
      technologies: ["React", "Web Audio API", "Tone.js", "TypeScript"],
      demoLink: "#"
    },
    {
      title: "Spraak Tools",
      description: "Spraakherkenning en tekst-naar-spraak tooling voor zakelijke toepassingen.",
      technologies: ["React", "Web Speech API", "Whisper", "Python"],
      demoLink: "#"
    },
    {
      title: "Dashboards",
      description: "Modulaire business-dashboards voor KPI-monitoring en datavisualisatie.",
      technologies: ["React", "Recharts", "D3.js", "Supabase"],
      demoLink: "#"
    },
    {
      title: "Content",
      description: "AI-native contentcreatie en -beheerplatform voor marketing en groei.",
      technologies: ["React", "OpenAI", "Node.js", "TypeScript"],
      demoLink: "#"
    }
  ],
} as const;

export default resumeData;
