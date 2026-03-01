import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  nl: {
    translation: {
      nav: {
        home: "Home",
        about: "Over Mij",
        services: "Diensten",
        projects: "Projecten",
        contact: "Contact",
        search: "Zoeken"
      },
      hero: {
        title: "AI-Native Business IT Developer & MVP Architect",
        subtitle: "Ik combineer bouwen, closing en systeemdenken in één profiel.",
        description: "Van eerste gesprek tot live systeem. Ik pak de closing, bouw het platform en automatiseer wat anderen uitbesteden.",
        cta: "Bekijk Mijn Werk",
        contact: "Neem Contact Op"
      },
      about: {
        title: "Over Mij",
        subtitle: "Van strategie en design tot engineering, AI, data en groei: alles end-to-end.",
        description1: "Geen losse freelancers of overdrachten, maar één architect die het geheel overziet én bouwt.",
        description2: "Door mijn multidisciplinaire aanpak kan ik snel schakelen tussen creatie, technologie en strategie, en zo ideeën in weken omzetten naar echte producten.",
        skillsIntro: "Hieronder vind je de tools, technologieën en systemen waarmee ik dagelijks werk.",
        education: "Opleiding"
      },
      aboutSection: {
        summary: "Professionele Samenvatting",
        languages: "Talen",
        location: "Locatie",
        remote: "Op afstand beschikbaar"
      },
      aboutPage: {
        badge: "Over Mij",
        heading: "Visie.",
        headingHighlight: "Structuur.",
        heading2: "Actie.",
        tagline: "Strategisch denken gekoppeld aan pragmatische uitvoering. Ik bouw helderheid, ritme en resultaat.",
        bio1: "Ik ben geen traditionele verkoper en geen pure developer.",
        bio2: "Ik combineer closing met bouwen en systeemdenken. Vijf jaar B2B sales als consistent top performer, aangevuld met de capaciteit om zelfstandig MVP's te bouwen, platformarchitecturen te ontwerpen en AI-native workflows te automatiseren.",
        bio3: "Het resultaat: één profiel dat van strategie tot executie reikt. Geen losse specialisten, geen overdrachten. Ik bouw het systeem én doe de closing.",
        disciplinesBadge: "Disciplines",
        traitsBadge: "Snelle blik",
        focusTitle: "Focus",
        ctaTitle: "Klaar om te schakelen?",
        ctaDesc: "Ik ben beschikbaar voor nieuwe projecten, samenwerkingen en kansen.",
        ctaBtn1: "Neem contact op",
        ctaBtn2: "Bekijk CV",
        stats: {
          years: "Jaar B2B sales",
          platforms: "Platforms gebouwd",
          pillars: "Kernpijlers",
          contact: "Aanspreekpunt"
        },
        disciplines: {
          commercial: { label: "Commerciële Executie", desc: "5 jaar B2B sales. Koude acquisitie, enterprise closing, teamleiding en duurzame klantrelaties." },
          mvp: { label: "MVP & Platform Bouw", desc: "Full-stack web, mobile, AI-integraties, automatiseringen en cloud-infra van A tot Z." },
          ai: { label: "AI & Systeemautomatisering", desc: "AI-native workflows, LLM-integraties, RPA en geautomatiseerde leadflows en funnels." },
          growth: { label: "Growth & Contentproductie", desc: "Experiment design, funnels, content en data-gedreven groeisystemen bouwen en lanceren." },
          architecture: { label: "Architectuur & Strategie", desc: "Van concept naar businessmodel, go-to-market, platformarchitectuur en revenue design." }
        },
        traits: {
          architect: { title: "Architect + Closer", desc: "Ik bouw het systeem én doe de closing. Geen overdracht, geen tussenlagen." },
          revenue: { title: "Revenue-georiënteerd", desc: "Ik optimaliseer op omzetgeneratie en systeemvorming." },
          ai: { title: "AI-native executie", desc: "Ik automatiseer leadflows, funnels en bedrijfsprocessen met AI vanaf dag 1." }
        },
        focusTags: ["Architect + Closer", "Business IT Developer", "AI-Native", "B2B Sales", "Systeemvorming", "Eigenaarschap", "Execution-driven", "End-to-end"],
        cvLink: "Bekijk volledig CV",
        skillsLink: "Alle skills & tools",
        skillsLinkDesc: "Bekijk alle tools, talen en frameworks per discipline op de CV-pagina."
      },
      experience: {
        title: "Track Record",
        present: "heden",
        filter: {
          all: "Alles",
          fulltime: "Fulltime",
          freelance: "Freelance",
          education: "Opleidingen",
          volunteer: "Vrijwilligers"
        },
        type: {
          fulltime: "Fulltime",
          freelance: "Freelance",
          opleiding: "Opleiding",
          vrijwilliger: "Vrijwilliger"
        },
        noResults: "Geen resultaten voor dit filter."
      },
      projectsSection: {
        clickToView: "Klik om portfolio te bekijken",
        viewCase: "Bekijk de volledige case op de Portfolio-pagina.",
        moreInfo: "Meer info"
      },
      contactSection: {
        location: "Locatie",
        locationCity: "Amsterdam, Nederland",
        remote: "Ook beschikbaar voor werk op afstand",
        email: "Email"
      },
      contactPage: {
        badge: "Contact",
        title: "Laten we schakelen",
        description: "Voor projecten, samenwerking of een snelle call. Ik reageer doorgaans binnen 24 uur.",
        location: "Locatie",
        locationCity: "Amsterdam, Nederland",
        remote: "Ook beschikbaar voor werk op afstand",
        email: "Email"
      },
      projects: {
        title: "Projecten",
        active: "Actief",
        exploration: "Exploratie",
        badge: "Projecten • Built for scale & flow",
        heading: "Portfolio",
        description: "Producten die omzet, efficiëntie en ervaring combineren. Elk project is opgezet als platform: modulair, meetbaar, klaar voor groei.",
        viewLive: "Live bekijken",
        viewSource: "Source code"
      },
      cv: {
        roles: "Rollen",
        active: "Actief",
        highlights: "Highlights",
        coreSkills: "Kernvaardigheden",
        techStack: "Tech Stack & Tools",
        projects: "Projecten",
        education: "Opleiding",
        profile: "Profiel",
        languages: "Talen",
        softSkills: "Soft Skills",
        print: "Print / Download als PDF",
        badge: "CV",
        title: "Curriculum Vitae",
        description: "Mijn volledige profiel: rollen, skills, projecten en opleiding.",
        languagesValue: "Nederlands (Moedertaal) · Engels (Vloeiend)",
        roleData: {
          business: {
            summary: "5 jaar B2B sales als consistent top performer en teamleider. Van koude acquisitie en deur-tot-deur tot enterprise closing en compliance management. Commerciële executie op hoog tempo, gericht op omzetgeneratie en duurzame klantwaarde.",
            highlights: ["Topverkoper bij Essent, 2 jaar consistent boven target", "Senior Consultant bij Pearson & Partners", "Consultant bij VodafoneZiggo & Eneco", "Teamleider en Compliance Manager ervaring", "Oprichter VVC: zakelijke dienstverlening & consultancy platform"]
          },
          salesEngineer: {
            summary: "Technisch-commerciële bruggenbouwer die complexe oplossingen vertaalt naar duidelijke waardeproposities. Combineert presales, demos, POCs en solution design met sterke stakeholdercommunicatie.",
            highlights: ["Presales & demos voor multi-stakeholder trajecten", "Sterk in discovery: van probleem naar voorstel in dagen", "Proof-of-Concepts met API-koppelingen en dashboards", "Compliance-achtergrond voor vertrouwen bij enterprise klanten"]
          },
          fullstack: {
            summary: "End-to-end bouwer van webplatformen en apps met focus op kwaliteit, schaalbaarheid en snelheid. Ervaren met React/Node, CI/CD, cloud en data-gedreven features.",
            highlights: ["End-to-end features: frontend, backend, infra en monitoring", "CI/CD pipelines opgezet voor snelle releases", "API-first aanpak met duidelijke contracten en tests", "Cloud ervaring met AWS/GCP en container orchestration"]
          },
          aiAutomation: {
            summary: "Bouwt AI-native workflows, agents en automatiseringen. Combineert LLM-integraties, RPA, data pipelines en cloud om repetitieve processen te versnellen.",
            highlights: ["AI-workflows met OpenAI + LangChain + vector search", "RPA-achtige automatiseringen voor data processing", "Integraties met Zapier/n8n/Make + custom scripts", "Monitoring op kwaliteit, latency en kosten"]
          },
          growthHacker: {
            summary: "Datagedreven marketeer/technoloog die experiments, funnels en automations bouwt om groei te versnellen. Combineert tooling met eigen code en scrapers.",
            highlights: ["Growth experiments opgezet met snelle iteraties", "Automations voor lead capture, enrich & outreach", "Dashboards en KPI-tracking voor besluitvorming", "Landing pages gebouwd en getest met CRO mindset"]
          },
          growthEngineer: {
            summary: "Technische growth specialist die feature-experiments, tracking en automations bouwt. Koppelt product en marketing via data en code.",
            highlights: ["Event-tracking en dashboards opgezet voor productteams", "Growth-features shippen met snelle iteraties", "A/B tests en cohort-analyses ingericht", "Automations tussen product, CRM en analytics"]
          },
          freelanceBuilder: {
            summary: "Freelance bouwer die snel complete platformen oplevert: van discovery tot livegang. Combineert ontwerp, development en infra in één hands-on rol.",
            highlights: ["5+ platformen als freelancer gebouwd en onderhouden", "Snelle oplevering met CI/CD en infra-automation", "Heldere communicatie met stakeholders en eindgebruikers", "Mix van custom code en bestaande services voor snelheid"]
          },
          nocode: {
            summary: "Bouwt snel business-apps en automatiseringen met no/low-code (Webflow, Framer, Make, Zapier) en vult aan met maatwerk waar nodig.",
            highlights: ["Webflow/Framer sites + Zapier/Make automations live gezet", "Snel itereren met low-code + maatwerk extensies", "Integraties met payments, CRM en analytics", "CRO-aanpak voor landingspagina's en funnels"]
          },
          creativeTech: {
            summary: "Combineert code, design en media om experimentele experiences te bouwen. Werkt met web, 3D, audio en AI om concepten tot leven te brengen.",
            highlights: ["Interactive prototypes met motion/3D en AI", "Audio/video pipelines met Python & JS tooling", "Branding + tech gecombineerd in live demos", "Experimentele UI/UX concepten gevalideerd met users"]
          },
          engineering: {
            summary: "Hands-on technisch leider met brede full-stack expertise en ervaring in het opzetten van development workflows, CI/CD pipelines, cloud architectuur en team-aansturing. Bouwt schaalbare platformen en stuurt technische teams aan met een focus op kwaliteit, snelheid en autonomie.",
            highlights: ["Tech Lead bij Spontiva LTD: architectuur, delivery en teamaansturing", "6+ platformen gebouwd van concept tot productie", "Tech stack: React, Node.js, Python, TypeScript, PostgreSQL, Docker", "Cloud ervaring met AWS, GCP, Azure, Oracle Cloud", "AI/ML integratie met OpenAI, LangChain, HuggingFace"]
          },
          architect: {
            summary: "AI-native Business IT Developer die sales, bouwen en systeemdenken combineert in één profiel. Geen traditionele verkoper en geen pure developer: van strategie tot closing, van architectuur tot live product. Ik bouw het systeem én doe de deal.",
            highlights: ["6 platformen ontworpen, gebouwd en gelanceerd", "Van idee naar live product in 2-4 weken per project", "AI-native workflows met OpenAI, LangChain, Copilot", "Bewezen track record in startup-omgevingen", "Full-stack: React, Node.js, Python, Supabase, Firebase"]
          }
        }
      },
      servicesPage: {
        badge: "Expertise & Aanbod",
        title: "Mijn Diensten",
        description: "Van strategie tot executie. Ik lever resultaat op het snijvlak van commercie, techniek en creativiteit.",
        services: {
          it: {
            title: "IT & Development",
            subtitle: "Digitale Systemen die Schalen",
            description: "Ik ontwikkel digitale infrastructuur die jouw ambities ondersteunt.",
            footer: "Alles gericht op efficiëntie, schaalbaarheid en gebruikservaring.",
            catDev: "Development",
            items: ["High-performance websites", "Maatwerk webapps", "Native & hybride app development", "SaaS-oplossingen", "UI/UX design (intuïtief, minimalistisch, conversiegericht)", "Slimme maatwerk tools & rekenmodules", "E-commerce ontwikkeling", "MVP-ontwikkeling", "Game development"]
          },
          marketing: {
            title: "Marketing",
            subtitle: "Van Zichtbaarheid naar Voorspelbare Groei",
            description: "Marketing is geen kostenpost, maar een groeiversneller, mits goed ingericht.",
            footer: "Ik zorg voor meetbare impact en schaalbaarheid.",
            catStrategy: "Strategie & Uitvoering",
            items: ["Leadgeneratie funnels", "Social media strategie & beheer", "SEO (organische vindbaarheid)", "Performance advertising (online & offline)", "Contentstrategie & creatie (video, copy, visuals)"]
          },
          sales: {
            title: "Sales",
            subtitle: "Van Eerste Contact tot Maximale Klantwaarde",
            description: "Ik bouw geen losse salesacties. Ik ontwikkel winstgevende klantreizen.",
            footer: "Resultaat: meer omzet per klant en duurzame groei.",
            catAcq: "Lead Activatie & Acquisitie",
            itemsAcq: ["Telefonische acquisitie (koud & warm)", "Fysieke verkoop (F2F / D2D)", "B2B sales & strategisch relatiebeheer"],
            catConv: "Conversie & Closing",
            itemsConv: ["Pre-closing (kwalificatie & positionering)", "High-level closing & onderhandeling", "Dealstructurering"],
            catValue: "Maximale Klantwaarde",
            itemsValue: ["Up-selling & premium positionering", "Cross-selling strategieën", "Aftersales optimalisatie", "Retentie & Klantloyaliteitssystemen"]
          },
          multimedia: {
            title: "Multimedia & Creatie",
            subtitle: "Impactvolle Beleving",
            description: "Sterke merken communiceren visueel én auditief op hoog niveau.",
            footer: "Van concept tot eindproduct: professioneel en onderscheidend.",
            catVideo: "Video & Visual",
            itemsVideo: ["Video editing & sfeerbeelden", "Motion graphics", "3D design & animatie", "Grafische vormgeving", "Infographics"],
            catAudio: "Audio & Muziek",
            itemsAudio: ["Muziekproductie", "Songwriting", "Vocalen & voice-overs", "Mix & master"]
          },
          legal: {
            title: "Rechten & Juridisch Advies",
            subtitle: "Strategische Zekerheid",
            description: "Wanneer juridische complexiteit impact heeft op jouw onderneming of situatie, bied ik strategisch advies en begeleiding.",
            footer: "Discreet, professioneel en oplossingsgericht.",
            catExpertise: "Expertisegebieden",
            items: ["Strafrecht", "Bedrijfsrecht", "Bestuursrecht"]
          },
          finance: {
            title: "Finance",
            subtitle: "Structuur Achter de Groei",
            description: "Sterke resultaten beginnen bij financiële controle.",
            footer: "Grip op cijfers betekent grip op groei.",
            catInsight: "Financieel Inzicht",
            items: ["Winst op papier betekent niets zonder controle over timing.", "Cashflow is de zuurstof van elke onderneming.", "TGC (Time Gap Cashflow): strategisch beheren van tijd tussen inkomsten en uitgaven."]
          }
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Laten we praten",
        description: "Heb je een project in gedachten of wil je gewoon even hoi zeggen? Ik sta altijd open voor nieuwe kansen en interessante gesprekken.",
        form: {
          name: "Naam",
          email: "Email",
          subject: "Onderwerp",
          message: "Bericht",
          send: "Verstuur Bericht",
          placeholders: {
            name: "Jouw naam",
            email: "jouw@email.com",
            subject: "Waar gaat het over?",
            message: "Schrijf hier je bericht..."
          }
        }
      },
      footer: {
        rights: "Alle rechten voorbehouden",
        description: "AI-Native Business IT Developer & MVP Architect"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Me",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        search: "Search"
      },
      hero: {
        title: "AI-Native Business IT Developer & MVP Architect",
        subtitle: "I combine building, closing and systems thinking in one profile.",
        description: "From first conversation to live system. I handle the closing, build the platform and automate what others outsource.",
        cta: "View My Work",
        contact: "Get In Touch"
      },
      about: {
        title: "About Me",
        subtitle: "From strategy and design to engineering, AI, data, and growth: everything end-to-end.",
        description1: "No loose freelancers or handoffs, but one architect who oversees and builds the whole thing.",
        description2: "Through my multidisciplinary approach, I can quickly switch between creation, technology, and strategy, turning ideas into real products in weeks.",
        skillsIntro: "Below you'll find the tools, technologies, and systems I work with daily.",
        education: "Education"
      },
      aboutSection: {
        summary: "Professional Summary",
        languages: "Languages",
        location: "Location",
        remote: "Available remotely"
      },
      aboutPage: {
        badge: "About Me",
        heading: "Vision.",
        headingHighlight: "Structure.",
        heading2: "Action.",
        tagline: "Strategic thinking coupled with pragmatic execution. I build clarity, rhythm and results.",
        bio1: "I am not a traditional salesperson and not a pure developer.",
        bio2: "I combine closing with building and systems thinking. Five years of B2B sales as a consistent top performer, combined with the ability to independently build MVPs, design platform architectures and automate AI-native workflows.",
        bio3: "The result: one profile that spans from strategy to execution. No loose specialists, no handoffs. I build the system and close the deal.",
        disciplinesBadge: "Disciplines",
        traitsBadge: "Quick look",
        focusTitle: "Focus",
        ctaTitle: "Ready to connect?",
        ctaDesc: "I'm available for new projects, collaborations and opportunities.",
        ctaBtn1: "Get in touch",
        ctaBtn2: "View CV",
        stats: {
          years: "Years B2B sales",
          platforms: "Platforms built",
          pillars: "Core pillars",
          contact: "Point of contact"
        },
        disciplines: {
          commercial: { label: "Commercial Execution", desc: "5 years B2B sales. Cold acquisition, enterprise closing, team leadership and lasting client relationships." },
          mvp: { label: "MVP & Platform Building", desc: "Full-stack web, mobile, AI integrations, automation and cloud infrastructure from A to Z." },
          ai: { label: "AI & System Automation", desc: "AI-native workflows, LLM integrations, RPA and automated lead flows and funnels." },
          growth: { label: "Growth & Content Production", desc: "Experiment design, funnels, content and data-driven growth systems built and launched." },
          architecture: { label: "Architecture & Strategy", desc: "From concept to business model, go-to-market, platform architecture and revenue design." }
        },
        traits: {
          architect: { title: "Architect + Closer", desc: "I build the system and close the deal. No handoffs, no intermediaries." },
          revenue: { title: "Revenue-oriented", desc: "I optimize for revenue generation and system building." },
          ai: { title: "AI-native execution", desc: "I automate lead flows, funnels and business processes with AI from day 1." }
        },
        focusTags: ["Architect + Closer", "Business IT Developer", "AI-Native", "B2B Sales", "Systems Thinking", "Ownership", "Execution-driven", "End-to-end"],
        cvLink: "View full CV",
        skillsLink: "All skills & tools",
        skillsLinkDesc: "View all tools, languages and frameworks per discipline on the CV page."
      },
      experience: {
        title: "Track Record",
        present: "present",
        filter: {
          all: "All",
          fulltime: "Full-time",
          freelance: "Freelance",
          education: "Education",
          volunteer: "Volunteers"
        },
        type: {
          fulltime: "Full-time",
          freelance: "Freelance",
          opleiding: "Education",
          vrijwilliger: "Volunteer"
        },
        noResults: "No results for this filter."
      },
      projectsSection: {
        clickToView: "Click to view portfolio",
        viewCase: "View the full case on the Portfolio page.",
        moreInfo: "More info"
      },
      contactSection: {
        location: "Location",
        locationCity: "Amsterdam, Netherlands",
        remote: "Also available for remote work",
        email: "Email"
      },
      contactPage: {
        badge: "Contact",
        title: "Let's connect",
        description: "For projects, collaboration or a quick call. I typically respond within 24 hours.",
        location: "Location",
        locationCity: "Amsterdam, Netherlands",
        remote: "Also available for remote work",
        email: "Email"
      },
      projects: {
        title: "Projects",
        active: "Active",
        exploration: "Exploration",
        badge: "Projects • Built for scale & flow",
        heading: "Portfolio",
        description: "Products combining revenue, efficiency and experience. Each project is set up as a platform: modular, measurable, ready for growth.",
        viewLive: "View live",
        viewSource: "Source code"
      },
      cv: {
        roles: "Roles",
        active: "Active",
        highlights: "Highlights",
        coreSkills: "Core Skills",
        techStack: "Tech Stack & Tools",
        projects: "Projects",
        education: "Education",
        profile: "Profile",
        languages: "Languages",
        softSkills: "Soft Skills",
        print: "Print / Download as PDF",
        badge: "CV",
        title: "Curriculum Vitae",
        description: "My full profile: roles, skills, projects and education.",
        languagesValue: "Dutch (Native) · English (Fluent)",
        roleData: {
          business: {
            summary: "5 years of B2B sales as a consistent top performer and team leader. From cold acquisition and door-to-door to enterprise closing and compliance management. Commercial execution at high tempo, focused on revenue generation and lasting customer value.",
            highlights: ["Top salesperson at Essent, 2 years consistently above target", "Senior Consultant at Pearson & Partners", "Consultant at VodafoneZiggo & Eneco", "Team leader and Compliance Manager experience", "Founder of VVC: business services & consultancy platform"]
          },
          salesEngineer: {
            summary: "Technical-commercial bridge builder who translates complex solutions into clear value propositions. Combines presales, demos, POCs and solution design with strong stakeholder communication.",
            highlights: ["Presales & demos for multi-stakeholder trajectories", "Strong in discovery: from problem to proposal in days", "Proof-of-Concepts with API integrations and dashboards", "Compliance background for trust with enterprise clients"]
          },
          fullstack: {
            summary: "End-to-end builder of web platforms and apps with a focus on quality, scalability and speed. Experienced with React/Node, CI/CD, cloud and data-driven features.",
            highlights: ["End-to-end features: frontend, backend, infra and monitoring", "CI/CD pipelines set up for rapid releases", "API-first approach with clear contracts and tests", "Cloud experience with AWS/GCP and container orchestration"]
          },
          aiAutomation: {
            summary: "Builds AI-native workflows, agents and automations. Combines LLM integrations, RPA, data pipelines and cloud to accelerate repetitive processes.",
            highlights: ["AI workflows with OpenAI + LangChain + vector search", "RPA-like automations for data processing", "Integrations with Zapier/n8n/Make + custom scripts", "Monitoring on quality, latency and costs"]
          },
          growthHacker: {
            summary: "Data-driven marketer/technologist who builds experiments, funnels and automations to accelerate growth. Combines tooling with custom code and scrapers.",
            highlights: ["Growth experiments set up with rapid iterations", "Automations for lead capture, enrichment & outreach", "Dashboards and KPI tracking for decision-making", "Landing pages built and tested with CRO mindset"]
          },
          growthEngineer: {
            summary: "Technical growth specialist who builds feature experiments, tracking and automations. Connects product and marketing via data and code.",
            highlights: ["Event tracking and dashboards set up for product teams", "Growth features shipped with rapid iterations", "A/B tests and cohort analyses configured", "Automations between product, CRM and analytics"]
          },
          freelanceBuilder: {
            summary: "Freelance builder who quickly delivers complete platforms: from discovery to go-live. Combines design, development and infrastructure in one hands-on role.",
            highlights: ["5+ platforms built and maintained as a freelancer", "Fast delivery with CI/CD and infrastructure automation", "Clear communication with stakeholders and end users", "Mix of custom code and existing services for speed"]
          },
          nocode: {
            summary: "Quickly builds business apps and automations with no/low-code (Webflow, Framer, Make, Zapier) and supplements with custom code where needed.",
            highlights: ["Webflow/Framer sites + Zapier/Make automations launched", "Rapid iteration with low-code + custom extensions", "Integrations with payments, CRM and analytics", "CRO approach for landing pages and funnels"]
          },
          creativeTech: {
            summary: "Combines code, design and media to build experimental experiences. Works with web, 3D, audio and AI to bring concepts to life.",
            highlights: ["Interactive prototypes with motion/3D and AI", "Audio/video pipelines with Python & JS tooling", "Branding + tech combined in live demos", "Experimental UI/UX concepts validated with users"]
          },
          engineering: {
            summary: "Hands-on technical leader with broad full-stack expertise and experience in setting up development workflows, CI/CD pipelines, cloud architecture and team management. Builds scalable platforms and leads technical teams with a focus on quality, speed and autonomy.",
            highlights: ["Tech Lead at Spontiva LTD: architecture, delivery and team management", "6+ platforms built from concept to production", "Tech stack: React, Node.js, Python, TypeScript, PostgreSQL, Docker", "Cloud experience with AWS, GCP, Azure, Oracle Cloud", "AI/ML integration with OpenAI, LangChain, HuggingFace"]
          },
          architect: {
            summary: "AI-native Business IT Developer combining sales, building and systems thinking in one profile. Not a traditional salesperson and not a pure developer: from strategy to closing, from architecture to live product. I build the system and close the deal.",
            highlights: ["6 platforms designed, built and launched", "From idea to live product in 2–4 weeks per project", "AI-native workflows with OpenAI, LangChain, Copilot", "Proven track record in startup environments", "Full-stack: React, Node.js, Python, Supabase, Firebase"]
          }
        }
      },
      servicesPage: {
        badge: "Expertise & Offering",
        title: "My Services",
        description: "From strategy to execution. I deliver results at the intersection of commerce, technology and creativity.",
        services: {
          it: {
            title: "IT & Development",
            subtitle: "Digital Systems that Scale",
            description: "I develop digital infrastructure that supports your ambitions.",
            footer: "All focused on efficiency, scalability and user experience.",
            catDev: "Development",
            items: ["High-performance websites", "Custom web apps", "Native & hybrid app development", "SaaS solutions", "UI/UX design (intuitive, minimalist, conversion-focused)", "Smart custom tools & calculation modules", "E-commerce development", "MVP development", "Game development"]
          },
          marketing: {
            title: "Marketing",
            subtitle: "From Visibility to Predictable Growth",
            description: "Marketing is not a cost, but a growth accelerator, when properly structured.",
            footer: "I deliver measurable impact and scalability.",
            catStrategy: "Strategy & Execution",
            items: ["Lead generation funnels", "Social media strategy & management", "SEO (organic visibility)", "Performance advertising (online & offline)", "Content strategy & creation (video, copy, visuals)"]
          },
          sales: {
            title: "Sales",
            subtitle: "From First Contact to Maximum Customer Value",
            description: "I don't build loose sales actions. I develop profitable customer journeys.",
            footer: "Result: more revenue per client and sustainable growth.",
            catAcq: "Lead Activation & Acquisition",
            itemsAcq: ["Phone acquisition (cold & warm)", "Physical sales (F2F / D2D)", "B2B sales & strategic account management"],
            catConv: "Conversion & Closing",
            itemsConv: ["Pre-closing (qualification & positioning)", "High-level closing & negotiation", "Deal structuring"],
            catValue: "Maximum Customer Value",
            itemsValue: ["Up-selling & premium positioning", "Cross-selling strategies", "After-sales optimization", "Retention & customer loyalty systems"]
          },
          multimedia: {
            title: "Multimedia & Creation",
            subtitle: "Impactful Experience",
            description: "Strong brands communicate visually and audibly at a high level.",
            footer: "From concept to final product: professional and distinctive.",
            catVideo: "Video & Visual",
            itemsVideo: ["Video editing & atmosphere visuals", "Motion graphics", "3D design & animation", "Graphic design", "Infographics"],
            catAudio: "Audio & Music",
            itemsAudio: ["Music production", "Songwriting", "Vocals & voice-overs", "Mix & master"]
          },
          legal: {
            title: "Law & Legal Advice",
            subtitle: "Strategic Certainty",
            description: "When legal complexity impacts your business or situation, I provide strategic advice and guidance.",
            footer: "Discreet, professional and solution-oriented.",
            catExpertise: "Areas of Expertise",
            items: ["Criminal law", "Business law", "Administrative law"]
          },
          finance: {
            title: "Finance",
            subtitle: "Structure Behind Growth",
            description: "Strong results start with financial control.",
            footer: "Control over numbers means control over growth.",
            catInsight: "Financial Insight",
            items: ["Profit on paper means nothing without control over timing.", "Cash flow is the oxygen of every business.", "TGC (Time Gap Cashflow): strategically managing time between revenue and expenses."]
          }
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Let's talk",
        description: "Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
          placeholders: {
            name: "Your name",
            email: "your@email.com",
            subject: "What is it about?",
            message: "Write your message here..."
          }
        }
      },
      footer: {
        rights: "All rights reserved",
        description: "AI-Native Business IT Developer & MVP Architect"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
