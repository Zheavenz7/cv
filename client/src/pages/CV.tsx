import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData, { type Experience } from '@/data/resumeData';
import { useTranslation } from 'react-i18next';

type RoleKey =
  | 'business'
  | 'engineering'
  | 'architect'
  | 'salesEngineer'
  | 'fullstack'
  | 'aiAutomation'
  | 'growthHacker'
  | 'growthEngineer'
  | 'freelanceBuilder'
  | 'nocode'
  | 'creativeTech';

interface RoleConfig {
  label: string;
  title: string;
  icon: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  summary: string;
  coreSkills: string[];
  relevantExperienceFilter: (exp: Experience) => boolean;
  relevantSkillCategories: number[];
  relevantProjects: string[];
  highlights: string[];
}

const isHorecaExperience = (exp: Experience) => {
  const haystack = `${exp.title} ${exp.company}`.toLowerCase();
  return /horeca|bar|barman|barkeeper|café|cafe|restaurant/.test(haystack);
};

const hasTech = (exp: Experience, needles: string[]) => {
  const techs = (exp.technologies as readonly string[]).map(String);
  return needles.some((n) => techs.includes(n));
};

const techBlobIncludes = (exp: Experience, needles: string[]) => {
  const blob = (exp.technologies as readonly string[]).map((t) => t.toLowerCase()).join(' ');
  return needles.some((n) => blob.includes(n.toLowerCase()));
};

const roles: Record<RoleKey, RoleConfig> = {
  business: {
    label: 'Business Developer',
    title: 'Business Developer',
    icon: 'fa-handshake',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/25',
    summary: '5 jaar B2B sales als consistent top performer en teamleider. Van koude acquisitie en deur-tot-deur tot enterprise closing en compliance management. Commerciële executie op hoog tempo, gericht op omzetgeneratie en duurzame klantwaarde.',
    coreSkills: [
      'Business Development', 'Account Management', 'Sales Strategy', 'Go-to-Market',
      'Stakeholder Management', 'Consultancy', 'Growth Hacking', 'KPI & OKR Setup',
      'Revenue Design', 'Client Relations', 'Negotiation', 'Market Analysis',
      'Product-Market Fit', 'Partnership Development'
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, [
        'Sales', 'Consultancy', 'Business Development', 'Account Management', 'Direct Sales',
        'Leadership', 'Sales Management', 'Leiderschap', 'Management', 'Communication',
        'Freelance', 'Strategie', 'Compliance', 'Quality Control', 'Kwaliteitscontrole',
      ]) ||
      ['Senior Consultant', 'Consultant', 'Topverkoper', 'Teamleider', 'Barmanager',
       'Compliance Manager', 'Kwaliteitsspecialist', 'Duurzaamheidsconsulent',
       'Telemarketing KPN, Vodafone', 'Teamleider, Supersaler'
      ].includes(exp.title),
    relevantSkillCategories: [0],
    relevantProjects: ['VVC', 'Investbotiq', 'Angels Mediate'],
    highlights: [
      'Topverkoper bij Essent, 2 jaar consistent boven target',
      'Senior Consultant bij Pearson & Partners',
      'Consultant bij VodafoneZiggo & Eneco',
      'Teamleider en Compliance Manager ervaring',
      'Oprichter VVC: zakelijke dienstverlening & consultancy platform'
    ]
  },
  salesEngineer: {
    label: 'Sales Engineer',
    title: 'Sales Engineer',
    icon: 'fa-briefcase',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
    summary:
      'Technisch-commerciële bruggenbouwer die complexe oplossingen vertaalt naar duidelijke waardeproposities. Combineert presales, demos, POCs en solution design met sterke stakeholdercommunicatie.',
    coreSkills: [
      'Presales & Discovery',
      'Solution Design',
      'POC/Prototype Delivery',
      'API Integraties',
      'Technical Writing',
      'Value-Based Selling',
      'Workshops & Demos',
      'Security & Compliance Basics',
      'RFP/RFI beantwoording',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['Sales', 'Consultancy', 'API', 'Solution', 'POC']) ||
      ['Senior Consultant', 'Consultant', 'Topverkoper', 'Compliance Manager'].includes(exp.title),
    relevantSkillCategories: [0, 2],
    relevantProjects: ['VVC', 'Investbotiq'],
    highlights: [
      'Presales & demos voor multi-stakeholder trajecten',
      'Sterk in discovery: van probleem naar voorstel in dagen',
      'Proof-of-Concepts met API-koppelingen en dashboards',
      'Compliance-achtergrond voor vertrouwen bij enterprise klanten',
    ],
  },
  fullstack: {
    label: 'Full Stack Developer',
    title: 'Full Stack Developer',
    icon: 'fa-code-branch',
    accent: 'text-indigo-400',
    accentBg: 'bg-indigo-500/10',
    accentBorder: 'border-indigo-500/25',
    summary:
      'End-to-end bouwer van webplatformen en apps met focus op kwaliteit, schaalbaarheid en snelheid. Ervaren met React/Node, CI/CD, cloud en data-gedreven features.',
    coreSkills: [
      'React & TypeScript',
      'Node.js & API Design',
      'Database Design (SQL/NoSQL)',
      'Auth & Security',
      'Testing & QA',
      'CI/CD & DevOps',
      'Cloud Deployments',
      'Performance Tuning',
      'System Design',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['React', 'Node.js', 'TypeScript', 'Fullstack', 'API', 'PostgreSQL', 'Docker']) ||
      ['Full Stack Developer', 'Freelancer', 'IT-stagiair'].includes(exp.title),
    relevantSkillCategories: [2, 3],
    relevantProjects: ['Spontiva', 'DJOBBA', 'WoningVry', 'Investbotiq'],
    highlights: [
      'End-to-end features: frontend, backend, infra en monitoring',
      'CI/CD pipelines opgezet voor snelle releases',
      'API-first aanpak met duidelijke contracten en tests',
      'Cloud ervaring met AWS/GCP en container orchestration',
    ],
  },
  aiAutomation: {
    label: 'AI/Automation Engineer',
    title: 'AI/Automation Engineer',
    icon: 'fa-robot',
    accent: 'text-fuchsia-400',
    accentBg: 'bg-fuchsia-500/10',
    accentBorder: 'border-fuchsia-500/25',
    summary:
      'Bouwt AI-native workflows, agents en automatiseringen. Combineert LLM-integraties, RPA, data pipelines en cloud om repetitieve processen te versnellen.',
    coreSkills: [
      'LLM Integraties (OpenAI, LangChain)',
      'Workflow & RPA Automation',
      'Data Pipelines & ETL',
      'API Orchestration',
      'Vector Stores & Retrieval',
      'Monitoring & Observability',
      'Prompt Engineering',
      'Python/TypeScript Automation',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['Automation', 'AI', 'Python', 'Node.js', 'ETL', 'LLM']) ||
      ['Tech Lead', 'Full Stack Developer', 'Freelancer', 'Senior Consultant'].includes(exp.title),
    relevantSkillCategories: [3, 2, 4],
    relevantProjects: ['VVC', 'Spontiva', 'DJOBBA'],
    highlights: [
      'AI-workflows met OpenAI + LangChain + vector search',
      'RPA-achtige automatiseringen voor data processing',
      'Integraties met Zapier/n8n/Make + custom scripts',
      'Monitoring op kwaliteit, latency en kosten',
    ],
  },
  growthHacker: {
    label: 'Growth Hacker',
    title: 'Growth Hacker',
    icon: 'fa-rocket',
    accent: 'text-rose-400',
    accentBg: 'bg-rose-500/10',
    accentBorder: 'border-rose-500/25',
    summary:
      'Datagedreven marketeer/technoloog die experiments, funnels en automations bouwt om groei te versnellen. Combineert tooling met eigen code en scrapers.',
    coreSkills: [
      'Experiment Design (A/B)',
      'Funnel & CRM Automations',
      'Web Scraping & Enrichment',
      'Email & Sequencing',
      'Analytics & Dashboards',
      'Landing Pages & CRO',
      'Growth Hacking Stacks',
      'SEO/SEA basics',
    ],
    relevantExperienceFilter: (exp) =>
      techBlobIncludes(exp, ['growth', 'marketing', 'automation', 'scraping', 'analytics']) ||
      ['Consultant', 'Senior Consultant'].includes(exp.title),
    relevantSkillCategories: [0, 4, 2],
    relevantProjects: ['VVC', 'Investbotiq'],
    highlights: [
      'Growth experiments opgezet met snelle iteraties',
      'Automations voor lead capture, enrich & outreach',
      'Dashboards en KPI-tracking voor besluitvorming',
      'Landing pages gebouwd en getest met CRO mindset',
    ],
  },
  growthEngineer: {
    label: 'Growth Engineer',
    title: 'Growth Engineer',
    icon: 'fa-chart-line',
    accent: 'text-lime-400',
    accentBg: 'bg-lime-500/10',
    accentBorder: 'border-lime-500/25',
    summary:
      'Technische growth specialist die feature-experiments, tracking en automations bouwt. Koppelt product en marketing via data en code.',
    coreSkills: [
      'Feature Experimentation',
      'Instrumentation & Analytics',
      'Event Tracking (GA4/Segment)',
      'A/B Testing',
      'Data Modeling',
      'Marketing APIs & Webhooks',
      'Growth Automation',
      'Performance Monitoring',
    ],
    relevantExperienceFilter: (exp) =>
      techBlobIncludes(exp, ['analytics', 'tracking', 'experiment', 'API', 'automation']) ||
      ['Tech Lead', 'Full Stack Developer', 'Consultant'].includes(exp.title),
    relevantSkillCategories: [2, 4, 0],
    relevantProjects: ['Spontiva', 'Investbotiq'],
    highlights: [
      'Event-tracking en dashboards opgezet voor productteams',
      'Growth-features shippen met snelle iteraties',
      'A/B tests en cohort-analyses ingericht',
      'Automations tussen product, CRM en analytics',
    ],
  },
  freelanceBuilder: {
    label: 'Freelance Platform Builder',
    title: 'Freelance Platform Builder',
    icon: 'fa-hammer',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/25',
    summary:
      'Freelance bouwer die snel complete platformen oplevert: van discovery tot livegang. Combineert ontwerp, development en infra in één hands-on rol.',
    coreSkills: [
      'Rapid MVP Delivery',
      'Full-Stack Development',
      'Cloud & DevOps',
      'API & Integraties',
      'Auth & Payments',
      'Testing & QA',
      'Client Communication',
      'Maintenance & Support',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['Freelance', 'Fullstack', 'React', 'Node.js', 'CI/CD', 'Cloud']) ||
      ['Tech Lead', 'Freelancer', 'Full Stack Developer'].includes(exp.title),
    relevantSkillCategories: [2, 3, 0],
    relevantProjects: ['Spontiva', 'DJOBBA', 'WoningVry', 'Investbotiq', 'VVC'],
    highlights: [
      '5+ platformen als freelancer gebouwd en onderhouden',
      'Snelle oplevering met CI/CD en infra-automation',
      'Heldere communicatie met stakeholders en eindgebruikers',
      'Mix van custom code en bestaande services voor snelheid',
    ],
  },
  nocode: {
    label: 'No-Code/Low-Code Consultant',
    title: 'No-Code / Low-Code Consultant',
    icon: 'fa-bolt',
    accent: 'text-yellow-400',
    accentBg: 'bg-yellow-500/10',
    accentBorder: 'border-yellow-500/25',
    summary:
      'Bouwt snel business-apps en automatiseringen met no/low-code (Webflow, Framer, Make, Zapier) en vult aan met maatwerk waar nodig.',
    coreSkills: [
      'Webflow / Framer',
      'Make / Zapier / n8n',
      'Data & Integraties',
      'E-commerce & Memberships',
      'Automation Design',
      'Lightweight Backend',
      'CMS & Content Ops',
      'Landing Pages & CRO',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['Automation', 'Webflow', 'Zapier', 'n8n', 'Make', 'CMS']) ||
      ['Freelancer', 'Consultant'].includes(exp.title),
    relevantSkillCategories: [2, 0],
    relevantProjects: ['VVC', 'Angels Mediate'],
    highlights: [
      'Webflow/Framer sites + Zapier/Make automations live gezet',
      'Snel itereren met low-code + maatwerk extensies',
      'Integraties met payments, CRM en analytics',
      'CRO-aanpak voor landingspagina’s en funnels',
    ],
  },
  creativeTech: {
    label: 'Creative Technologist',
    title: 'Creative Technologist',
    icon: 'fa-lightbulb',
    accent: 'text-cyan-300',
    accentBg: 'bg-cyan-400/10',
    accentBorder: 'border-cyan-400/25',
    summary:
      'Combineert code, design en media om experimentele experiences te bouwen. Werkt met web, 3D, audio en AI om concepten tot leven te brengen.',
    coreSkills: [
      'Creative Coding',
      'WebGL / 3D / Motion',
      'Audio/Video Processing',
      'Prototyping',
      'UX/UI Experimentation',
      'Generative AI & Media',
      'Interactive Installations',
      'Story-driven Experiences',
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, ['Design', 'Audio', 'Video', 'Creative', 'React']) ||
      ['Tech Lead', 'Freelancer', 'Full Stack Developer'].includes(exp.title),
    relevantSkillCategories: [1, 2, 3],
    relevantProjects: ['Spontiva', 'Angels Mediate'],
    highlights: [
      'Interactive prototypes met motion/3D en AI',
      'Audio/video pipelines met Python & JS tooling',
      'Branding + tech gecombineerd in live demos',
      'Experimentele UI/UX concepten gevalideerd met users',
    ],
  },
  engineering: {
    label: 'Head of Engineering',
    title: 'Head of Engineering',
    icon: 'fa-microchip',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/25',
    summary: 'Hands-on technisch leider met brede full-stack expertise en ervaring in het opzetten van development workflows, CI/CD pipelines, cloud architectuur en team-aansturing. Bouwt schaalbare platformen en stuurt technische teams aan met een focus op kwaliteit, snelheid en autonomie.',
    coreSkills: [
      'Full-Stack Development', 'Cloud Architecture (AWS, GCP, Azure)', 'CI/CD & DevOps',
      'Team Leadership', 'System Design', 'API Design & Integration', 'Microservices',
      'Database Design', 'Code Review & QA', 'Git Workflows',
      'Infrastructure Automation', 'Performance Optimization', 'Technical Roadmapping'
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, [
        'React', 'Node.js', 'TypeScript', 'Fullstack', 'IT Support', 'Systeembeheer',
        'Platform Management', 'Procesmanagement', 'Quality Assurance',
      ]) ||
      ['Tech Lead', 'Full Stack Developer', 'IT-stagiair', 'Kwaliteitsspecialist', 'Freelancer'
      ].includes(exp.title),
    relevantSkillCategories: [2, 3],
    relevantProjects: ['Spontiva', 'DJOBBA', 'WoningVry', 'Investbotiq'],
    highlights: [
      'Tech Lead bij Spontiva LTD: architectuur, delivery en teamaansturing',
      '6+ platformen gebouwd van concept tot productie',
      'Tech stack: React, Node.js, Python, TypeScript, PostgreSQL, Docker',
      'Cloud ervaring met AWS, GCP, Azure, Oracle Cloud',
      'AI/ML integratie met OpenAI, LangChain, HuggingFace'
    ]
  },
  architect: {
    label: 'MVP Architect',
    title: 'MVP Architect',
    icon: 'fa-drafting-compass',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
    summary: 'AI-native Business IT Developer die sales, bouwen en systeemdenken combineert in één profiel. Geen traditionele verkoper en geen pure developer: van strategie tot closing, van architectuur tot live product. Ik bouw het systeem én doe de deal.',
    coreSkills: [
      'Product Discovery', 'Rapid Prototyping', 'MVP Development', 'Design Thinking',
      'Product-Market Fit', 'UX/UI Prototyping', 'Full-Stack Development',
      'AI Integration', 'Lean Canvas / BMC', 'Technical Architecture',
      'Startup Consulting', 'Go-to-Market Strategy', 'Growth Hacking',
      'Automation & Workflows'
    ],
    relevantExperienceFilter: (exp) =>
      hasTech(exp, [
        'React', 'Node.js', 'TypeScript', 'Fullstack', 'Consultancy', 'Strategie',
        'Business Development', 'Platform Management', 'E-commerce',
      ]) ||
      ['Tech Lead', 'Full Stack Developer', 'Senior Consultant', 'Freelancer'
      ].includes(exp.title),
    relevantSkillCategories: [0, 2, 3],
    relevantProjects: ['VVC', 'Spontiva', 'DJOBBA', 'WoningVry', 'Investbotiq', 'Angels Mediate'],
    highlights: [
      '6 platformen ontworpen, gebouwd en gelanceerd',
      'Van idee naar live product in 2-4 weken per project',
      'AI-native workflows met OpenAI, LangChain, Copilot',
      'Bewezen track record in startup-omgevingen',
      'Full-stack: React, Node.js, Python, Supabase, Firebase'
    ]
  }
};

const roleOrder: RoleKey[] = [
  'business',
  'architect',
  'engineering',
  'salesEngineer',
  'fullstack',
  'aiAutomation',
  'growthHacker',
  'growthEngineer',
  'freelanceBuilder',
  'nocode',
  'creativeTech',
];

const education = [
  { degree: 'HBO-Law', school: 'Hogeschool Utrecht', period: '2014 – 2016' },
  { degree: 'Business Marketing & Communication', school: 'Regio College', period: '2012 – 2014' },
  { degree: 'Business Finance', school: 'TRIAS', period: '2010 – 2012' },
  { degree: 'Business Economy', school: 'Berlage Lyceum', period: '2007 – 2010' },
];

export default function CV() {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleKey>('architect');

  useEffect(() => {
    document.title = 'CV | Jamal Drenthe';
  }, []);

  const role = roles[activeRole];
  const translatedSummary = t(`cv.roleData.${activeRole}.summary`);
  const translatedHighlights = t(`cv.roleData.${activeRole}.highlights`, { returnObjects: true }) as string[];
  const { personalInfo, experiences: rawExperiences, projects, detailedSkillCategories } = resumeData;
  const experiences = rawExperiences as Experience[];

  // Exclude horeca/bar gerelateerde ervaring voor alle (tech) rollen
  const relevantExperiences = experiences.filter(
    (exp) => role.relevantExperienceFilter(exp) && !isHorecaExperience(exp)
  );
  const relevantProjects = projects.filter(p => role.relevantProjects.includes(p.title));
  const relevantSkillCats = role.relevantSkillCategories.map(i => detailedSkillCategories[i]);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px,1fr] gap-6 items-start">

        {/* Role Sidebar */}
        <aside className="glass-strong rounded-2xl p-4 md:sticky md:top-24 space-y-3 print-avoid-break">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
            <i className="fas fa-layer-group text-white/60" /> {t('cv.roles')}
          </div>
          <div className="flex flex-wrap md:flex-col gap-2">
            {roleOrder.map((key) => {
              const r = roles[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveRole(key)}
                  className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 w-full ${
                    activeRole === key
                      ? `glass-strong ${r.accentBorder} shadow-md ${r.accent}`
                      : 'glass text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <i className={`fas ${r.icon} text-xs`}></i>
                    <span className="truncate">{r.label}</span>
                  </span>
                  {activeRole === key && <span className={`text-[10px] ${r.accent}`}>{t('cv.active')}</span>}
                </button>
              );
            })}
          </div>
        </aside>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
            {/* Header */}
            <div className={`glass-strong rounded-3xl p-8 md:p-10 mb-6 ${role.accentBorder} print-avoid-break`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl ${role.accentBg} flex items-center justify-center flex-shrink-0`}>
                  <i className={`fas ${role.icon} text-xl ${role.accent}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {personalInfo.name}
                  </h1>
                  <p className={`text-lg font-medium ${role.accent} mb-4`}>{role.title}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">{translatedSummary}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-map-marker-alt"></i> {personalInfo.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-envelope"></i> {personalInfo.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-globe"></i> {t('cv.languagesValue')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="glass rounded-2xl p-6 md:p-8 mb-6 print-avoid-break">
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.highlights')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {translatedHighlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <i className={`fas fa-check-circle mt-0.5 text-xs ${role.accent} opacity-70`}></i>
                    <span className="text-sm text-white/85">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="glass rounded-2xl p-6 md:p-8 mb-6 print-avoid-break">
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.coreSkills')}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {role.coreSkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-3 py-1.5 rounded-lg text-[13px] bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.12] hover:text-white transition-all duration-200`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass rounded-2xl p-6 md:p-8 mb-6 print-avoid-break">
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.techStack')}</h2>
              </div>
              <div className="space-y-5">
                {relevantSkillCats.map((cat, ci) => (
                  <div key={ci} className="print-avoid-break">
                    <div className="flex items-center gap-2 mb-3">
                      <i className={`fas ${cat.icon} text-xs text-white`}></i>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">{cat.title}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cat.toolGroups.map((group, gi) => (
                        <div key={gi} className="rounded-xl bg-white/[0.04] border border-white/[0.1] p-3">
                          <span className="text-[10px] font-semibold text-white uppercase tracking-wider">{group.category}</span>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {group.items.split(' · ').map((tool, ti) => (
                              <span key={ti} className="px-2 py-0.5 text-[11px] text-white bg-white/[0.07] rounded-md border border-white/[0.12]">
                                {tool.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            {relevantProjects.length > 0 && (
              <div className="glass rounded-2xl p-6 md:p-8 mb-6 print-avoid-break">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                  <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.projects')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {relevantProjects.map((proj, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 print-avoid-break"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-white">{proj.title}</h3>
                        {proj.demoLink && (
                          <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className={`text-xs ${role.accent} hover:underline`} aria-label={`Visit ${proj.title}`}>
                            <i className="fas fa-external-link-alt text-[10px]"></i>
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-white/75 mb-2.5 leading-relaxed">{proj.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((tech, ti) => (
                          <span key={ti} className="px-1.5 py-0.5 text-[10px] text-white/75 bg-white/[0.06] rounded border border-white/[0.08]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Education & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Education */}
              <div className="glass rounded-2xl p-6 print-avoid-break">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                  <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.education')}</h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-5">
                      <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${role.accent.replace('text-', 'bg-')} opacity-40`} />
                      <p className="text-sm font-medium text-white">{edu.degree}</p>
                      <p className="text-xs text-white/70">{edu.school}</p>
                      <p className="text-[11px] text-white/65 font-mono">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills & Languages */}
              <div className="glass rounded-2xl p-6 print-avoid-break">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-1.5 h-5 rounded-full ${role.accent.replace('text-', 'bg-')}`} />
                  <h2 className={`text-sm font-bold uppercase tracking-[0.15em] ${role.accent}`}>{t('cv.profile')}</h2>
                </div>

                <div className="mb-5">
                  <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">{t('cv.languages')}</span>
                  <div className="flex gap-3 mt-2">
                    {personalInfo.languages.map((lang, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-sm text-white">{lang.language}</span>
                        <span className="text-[10px] text-white/70 px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">{t('cv.softSkills')}</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {personalInfo.softSkills.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs text-white/75 bg-white/[0.05] rounded-lg border border-white/[0.08]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Print / Download hint */}
            <div className="text-center">
              <button
                onClick={() => window.print()}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass text-sm font-medium ${role.accent} hover:bg-white/[0.06] transition-all duration-200`}
              >
                <i className="fas fa-print text-xs"></i>
                {t('cv.print')}
              </button>
            </div>

          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
