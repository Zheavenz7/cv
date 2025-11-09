// Centrale content voor alle pagina's met drie uitvoeringen
// Blurb (50-80 woorden), Full Page (600-1.200 woorden), SEO Meta

export interface PageContentData {
  blurb: string;
  fullPage: string;
  seo: {
    title: string; // 50-60 tekens
    description: string; // 120-160 tekens
  };
}

export const pageContent: Record<string, PageContentData> = {
  // CV Overview
  'cv-overview': {
    blurb: 'Professionele expertise verdeeld over vijf kerntrajecten: IT-ontwikkeling met moderne technologieën, sales en klantrelatiebeheer, horeca-leiderschap, cybersecurity en digitale veiligheid, plus brede educatieve achtergrond. Elk traject biedt unieke competenties die samen een multidisciplinaire professional vormen met praktijkervaring en theoretische kennis.',
    fullPage: `Een professioneel parcours dat zich ontwikkeld heeft over meerdere domeinen, elk met specifieke expertise en vaardigheden. De combinatie van technische kennis, commercieel inzicht, operationeel leiderschap en strategisch denken vormt een unieke basis voor uitdagende projecten en samenwerkingen.

**IT Journey** - De technologische reis begon vanuit nieuwsgierigheid en ontwikkelde zich tot diepgaande expertise in modern softwareontwikkeling. React, Vite en FlutterFlow vormen het front-end arsenaal, terwijl Node.js, Firebase en Supabase robuuste back-end oplossingen mogelijk maken. Deze technische stack wordt dagelijks ingezet voor het bouwen van schaalbare applicaties die zowel functioneel als visueel uitblinken. Analytisch denken en probleemoplossend vermogen worden gecombineerd met een scherp oog voor gebruikerservaring, resulterend in digitale producten die intuïtief aanvoelen en efficiënt presteren.

**Sales Journey** - Commerciële ervaring strekt zich uit over strategische leadgeneratie, pipeline management en duurzaam klantrelatiebeheer. Data-analyse en communicatiestrategieën worden ingezet om meetbare resultaten te behalen. Het sluiten van deals is slechts een onderdeel; begrip van klantbehoeften en het opbouwen van langetermijnpartnerships vormen de kern van deze expertise. Empathie en overtuigingskracht creëren een balans tussen menselijke connectie en analytische besluitvorming, resulterend in commerciële groei die duurzaam en strategisch is.

**Horeca Journey** - Dynamische omgevingen in de horeca hebben leiderschapsvaardigheden, organisatorisch inzicht en klantgerichtheid verder ontwikkeld. Van drukke diensten tot grootschalige evenementen en catering, processen worden geoptimaliseerd en teams efficiënt aangestuurd. Besluitvorming onder druk, prioritering en klanttevredenheid zijn competenties die hier zijn verfijnd en direct toepasbaar zijn in andere professionele contexten. De horeca leert wat het betekent om onder intense druk te presteren terwijl kwaliteit gewaarborgd blijft.

**Cybersecurity Journey** - Digitale veiligheid en systeemintegriteit vormen het fundament van deze expertise. Netwerkbeveiliging, penetratietesten en implementatie van robuuste beveiligingsstrategieën zorgen voor proactieve bescherming van infrastructuren. Technische en strategische kennis maakt het mogelijk organisaties te adviseren over risico's en digitale continuïteit. Analytisch inzicht en praktische uitvoering komen samen in een holistische benadering van informatiebeveiliging die zowel preventief als reactief is.

**General/Educational Journey** - Een brede educatieve achtergrond combineert formele opleidingen met zelfgestuurde leertrajecten. Analytische vaardigheden, discipline en kritische denkhouding zijn hier ontwikkeld. Complexe vraagstukken worden geanalyseerd en innovatieve oplossingen ontwikkeld, waarbij theoretische kennis en praktijkervaring elkaar versterken. Deze multidisciplinaire aanpak resulteert in een professional die zowel diepgang als breedte combineert.

Elk trajectory draagt bij aan een compleet profiel: technische vaardigheden voor implementatie, commercieel inzicht voor strategie, operationeel leiderschap voor executie, beveiligingsbewustzijn voor risicobeheersing en educatieve diepgang voor continue ontwikkeling. Deze combinatie maakt complexe projecten mogelijk waarbij verschillende disciplines samenkomen.`,
    seo: {
      title: 'Curriculum Vitae - Professional Journeys | Jamal Drenthe',
      description: 'Ontdek professionele expertise in IT, Sales, Horeca, Cybersecurity en Education. Multidisciplinaire ervaring voor innovatieve oplossingen.'
    }
  },

  // Services Overview
  'services-overview': {
    blurb: 'Uitgebreide dienstverlening over dertien gespecialiseerde domeinen: van web development en applicatieontwikkeling tot cloud management, cryptocurrency mining, video productie, muziekproductie, AI automation, marketing consultancy, full stack development, 3D visualisatie, juridisch advies en specialized services. Elke dienst wordt geleverd met focus op kwaliteit, innovatie en meetbare resultaten.',
    fullPage: `Een compleet servicepakket dat technische expertise combineert met creatieve oplossingen en strategisch advies. Elk service domein is ontwikkeld vanuit jarenlange ervaring en wordt continu verfijnd met de nieuwste technologieën en best practices.

**Web Development** - Websites worden ontworpen en ontwikkeld met perfecte balans tussen visuele aantrekkingskracht en functionaliteit. Van zakelijke portals tot interactieve e-commerceplatforms, elk project wordt op maat gemaakt. React, Tailwind CSS, Shopify en Webflow vormen de technische basis, terwijl gebruikerservaring en conversie-optimalisatie centraal staan. Responsive design, snelle laadtijden en SEO-optimalisatie zijn standaard.

**Applicatieontwikkeling** - Web- en mobiele applicaties worden ontwikkeld met schaalbaarheid, veiligheid en gebruiksvriendelijkheid als uitgangspunt. Analytische dashboards bieden real-time inzichten, automatiseringsapplicaties verbeteren operationele efficiency, en SaaS-platforms creëren nieuwe businessmodellen. Elke applicatie wordt gebouwd met robuuste architectuur en toekomstbestendige technologie.

**Private Cloud & Server Management** - Complete infrastructuurbeheer inclusief configuratie, beveiliging, monitoring en onderhoud. Betrouwbaarheid en performance staan centraal, met 99.9% uptime garanties en proactieve security. Dataveiligheid, compliance en operationele continuïteit worden gewaarborgd door industry-standard protocols en best practices.

**Cryptocurrency Mining** - Mining-infrastructuren worden ontworpen voor maximale efficiëntie en ROI. Hardware-configuraties, software-optimalisatie en strategische poolselectie zorgen voor optimale output. Continue monitoring en aanpassingen garanderen dat systemen presteren op het hoogste niveau.

**Remote Computing** - Veilige en efficiënte remote access oplossingen maken locatie-onafhankelijk werken mogelijk. VPN-configuraties, secure protocols en performance-optimalisatie zorgen dat teams productief kunnen zijn waar ze ook zijn. Gebruiksgemak en beveiliging gaan hand in hand.

**Video Production & Editing** - Van concept tot eindproduct worden video's gecreëerd die impact maken. Professionele editing, color grading, motion graphics en sound design komen samen in producties die zowel informeren als inspireren. Corporate video's, marketing content en creatieve projecten worden geleverd in broadcast-kwaliteit.

**Music Production** - Complete muziekproducties van beatmaking tot mastering. Originele composities, vocale opnames, mixing en finalisatie worden geleverd in release-ready kwaliteit. Technische precisie en creatieve expressie vormen samen producties die professioneel en meeslepend zijn.

**AI Agents & Automation** - Intelligente automatisering van bedrijfsprocessen door middel van AI-agents en workflow-optimalisatie. Data-analyse, chatbots, process automation en machine learning implementaties strekken zich uit over diverse sectoren. Van klantenservice tot operationele efficiency, AI wordt strategisch ingezet voor meetbare voordelen.

**Sales & Marketing Consultancy** - Strategisch advies en hands-on uitvoering voor leadgeneratie, klantsegmentatie en conversie-optimalisatie. Data-driven campagnes, marketing automation en sales funnel optimalisatie resulteren in meetbare groei. Analytische benaderingen worden gecombineerd met creatieve strategieën.

**Full Stack Development** - Complete digitale oplossingen van front-end tot back-end. TypeScript, Node.js, React en Supabase garanderen schaalbare en onderhoudbare systemen. Database design, API development, UI/UX design en deployment worden geïntegreerd geleverd.

**3D Modeling & Visualization** - Fotorealistische 3D-modellen en visualisaties voor productpresentaties, architectuur en interactieve applicaties. Technische nauwkeurigheid en visuele esthetiek gaan hand in hand in renders die overtuigen.

**Legal Advisory** - Juridisch advies voor contracten, compliance en zakelijke rechtsvraagstukken. Risico's worden geïdentificeerd en geminimaliseerd, processen geoptimaliseerd. Praktische advisering zonder onnodige juridische complexiteit, altijd met disclaimer voor formele zaken.

**Specialized Services** - Massage en catering services combineren praktische vaardigheden met professionele uitvoering. Klanttevredenheid en kwaliteit staan centraal bij elke service.

Alle services worden geleverd met focus op kwaliteit, transparantie en meetbare resultaten. Projectmanagement, communicatie en after-care zijn geïntegreerd in elk project.`,
    seo: {
      title: 'Professional Services - Web, Apps, AI & meer | Jamal',
      description: 'Uitgebreide dienstverlening in web development, apps, cloud, AI automation, video/muziekproductie, marketing consultancy en meer.'
    }
  },

  // About
  'about': {
    blurb: 'Full stack developer met multidisciplinaire achtergrond in IT, sales, horeca en cybersecurity. Expertise in React, Node.js, Supabase en moderne web technologieën. Focus op gebruikerservaring, schaalbaarheid en innovatieve oplossingen die technische perfectie combineren met strategisch inzicht.',
    fullPage: `Een professionele reis die technologie, commercie en creativiteit verenigt. Als full stack developer met brede ervaring over meerdere domeinen wordt elke uitdaging benaderd vanuit een unieke multidisciplinaire perspectief.

**Technische Expertise** - Moderne web- en applicatieontwikkeling vormt de kern van de werkzaamheden. React 18, Vite en TypeScript worden dagelijks ingezet voor het bouwen van responsive, performante front-end applicaties. Tailwind CSS, shadcn-ui en Radix UI zorgen voor moderne, toegankelijke interfaces. Back-end systemen worden gebouwd met Node.js, Supabase en PostgreSQL, met focus op schaalbaarheid en beveiliging. Flutter maakt cross-platform mobile development mogelijk.

**User Experience Focus** - Technologie is middel, gebruikerservaring is doel. Elk product wordt ontworpen vanuit de eindgebruiker: intuïtieve interfaces, snelle performance en toegankelijkheid zijn niet optioneel maar essentieel. A/B testing, user research en iteratieve development zorgen voor producten die daadwerkelijk gebruikt worden.

**Commercieel Inzicht** - Jarenlange ervaring in sales en marketing biedt uniek perspectief op productontwikkeling. Features worden niet gebouwd omdat ze technisch interessant zijn, maar omdat ze business value leveren. ROI, conversie en gebruikersretentie worden meegenomen vanaf dag één.

**Operationele Ervaring** - Achtergrond in horeca heeft geleerd wat het betekent om onder druk te presteren, teams aan te sturen en klanten tevreden te houden. Deze vaardigheden transleren direct naar projectmanagement, stakeholder management en deadline-gedreven development.

**Security Mindset** - Cybersecurity expertise zorgt dat beveiliging geen afterthought is maar geïntegreerd in elke fase van development. Secure coding practices, penetration testing en risk assessment zijn standaard onderdeel van elk project.

**Continuous Learning** - Technologie evolueert constant en stilstand is achteruitgang. Continue bijscholing, experimenteren met nieuwe frameworks en volgen van industry trends zorgen dat kennis altijd actueel blijft. Van formal education tot self-directed learning trajecten, ontwikkeling staat nooit stil.

**Project Approach** - Elk project begint met grondige analyse: wat is het probleem, wie is de gebruiker, wat is succes? Agile methodologie met korte sprints en frequente feedback zorgt dat projecten on-track blijven. Transparante communicatie, realistische timelines en pro-actief probleemoplossen vormen de basis van succesvolle samenwerkingen.

**Values** - Kwaliteit boven snelheid, maar met awareness dat time-to-market belangrijk is. Transparantie in communicatie, ook als het nieuws niet positief is. Ownership van projecten en resultaten. Pragmatische oplossingen die werken boven theoretisch perfecte oplossingen die nooit afkomen.

De combinatie van deze elementen - technische expertise, gebruikersfocus, commercieel inzicht, operationele ervaring en security awareness - resulteert in een professional die complexe projecten kan realiseren waarbij verschillende disciplines samenkomen.`,
    seo: {
      title: 'About - Full Stack Developer | Jamal Drenthe',
      description: 'Full stack developer met expertise in React, Node.js, Supabase. Multidisciplinaire achtergrond in IT, sales en cybersecurity voor innovatieve oplossingen.'
    }
  }
};
