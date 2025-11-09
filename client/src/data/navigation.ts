export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'cv',
    label: 'CV',
    href: '/cv',
    children: [
      { id: 'cv-it', label: 'IT', href: '/cv/it' },
      { id: 'cv-sales', label: 'Sales', href: '/cv/sales' },
      { id: 'cv-horeca', label: 'Horeca', href: '/cv/horeca' },
      { id: 'cv-cybersecurity', label: 'Cybersecurity', href: '/cv/cybersecurity' },
      { id: 'cv-general', label: 'General', href: '/cv/general' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    children: [
      { id: 'services-websites', label: 'Websites', href: '/services/websites' },
      { id: 'services-apps', label: 'Applicaties', href: '/services/applications' },
      { id: 'services-cloud', label: 'Private Cloud / Server', href: '/services/cloud' },
      { id: 'services-mining', label: 'Mining', href: '/services/mining' },
      { id: 'services-remote', label: 'Remote Computing', href: '/services/remote-computing' },
      { id: 'services-video', label: 'Video Edit', href: '/services/video-edit' },
      { id: 'services-music', label: 'Music Production', href: '/services/music-production' },
      { id: 'services-ai', label: 'AI Agents', href: '/services/ai-agents' },
      { id: 'services-sales', label: 'Sales', href: '/services/sales' },
      { id: 'services-marketing', label: 'Marketing', href: '/services/marketing' },
      { id: 'services-fullstack', label: 'Full Stack Dev', href: '/services/fullstack' },
      { id: 'services-3d', label: '3D', href: '/services/3d' },
      { id: 'services-legal', label: 'Juridisch Advies', href: '/services/legal' },
      { id: 'services-massage', label: 'Massage', href: '/services/massage' },
      { id: 'services-catering', label: 'Catering', href: '/services/catering' },
    ],
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { id: 'portfolio-webapps', label: 'Webapps', href: '/portfolio/webapps' },
      { id: 'portfolio-apps', label: 'Apps', href: '/portfolio/apps' },
      { id: 'portfolio-ai', label: 'AI Agents', href: '/portfolio/ai-agents' },
      { id: 'portfolio-videos', label: 'Video\'s', href: '/portfolio/videos' },
      { id: 'portfolio-business-plans', label: 'Business Plans', href: '/portfolio/business-plans' },
      { id: 'portfolio-marketing-plans', label: 'Marketing Plans', href: '/portfolio/marketing-plans' },
      { id: 'portfolio-finance-plans', label: 'Finance Plans', href: '/portfolio/finance-plans' },
      { id: 'portfolio-internship-reports', label: 'Stage Verslagen', href: '/portfolio/internship-reports' },
      { id: 'portfolio-research', label: 'Researches', href: '/portfolio/research' },
    ],
  },
  {
    id: 'projects',
    label: 'Projecten',
    href: '/projects',
    children: [
      { id: 'project-investbotiq', label: 'Investbotiq', href: '/projects/investbotiq' },
      { id: 'project-after-student-housing', label: 'After Student Housing', href: '/projects/after-student-housing' },
      { id: 'project-vvc', label: 'Verdienende Vrienden Club', href: '/projects/vvc' },
      { id: 'project-djobba', label: 'DJOBBA', href: '/projects/djobba' },
      { id: 'project-boastplug', label: 'BoastPlug', href: '/projects/boastplug' },
      { id: 'project-huascabar', label: 'Huascabar', href: '/projects/huascabar' },
      { id: 'project-sabi-bank', label: 'Sabi Bank', href: '/projects/sabi-bank' },
      { id: 'project-anon-bank', label: 'Anon Bank', href: '/projects/anon-bank' },
      { id: 'project-rjp', label: 'RJP', href: '/projects/rjp' },
    ],
  },
  {
    id: 'music',
    label: 'Music',
    href: '/music',
    children: [
      { id: 'music-production', label: 'Production', href: '/music/production' },
      { id: 'music-vocal', label: 'Vocal', href: '/music/vocal' },
      { id: 'music-collaborations', label: 'Collaborations', href: '/music/collaborations' },
    ],
  },
  {
    id: 'about',
    label: 'About Me',
    href: '/about',
    children: [
      { id: 'about-skills', label: 'Skills', href: '/about/skills' },
      { id: 'about-diplomas', label: 'Diploma\'s', href: '/about/diplomas' },
      { id: 'about-career', label: 'Career Path', href: '/about/career' },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    children: [
      { id: 'product-mining-pc', label: 'Mining Computer', href: '/products/mining-computer' },
      { id: 'product-huascabarkit', label: 'HuascaBarKit', href: '/products/huascabarkit' },
      { id: 'product-special-tea', label: 'Special Tea', href: '/products/special-tea' },
      { id: 'product-books', label: 'Books', href: '/products/books' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
  {
    id: 'login',
    label: 'Inloggen',
    href: '/login',
    children: [
      { id: 'login-accounts', label: 'Accounts', href: '/login/accounts' },
      { id: 'login-banks', label: 'Banken', href: '/login/banks' },
      { id: 'login-company', label: 'Company Formation', href: '/login/company-formation' },
      { id: 'login-streaming', label: 'Streaming Platformen', href: '/login/streaming' },
      { id: 'login-factoring', label: 'Factoring', href: '/login/factoring' },
      { id: 'login-issuing', label: 'Issuing', href: '/login/issuing' },
      { id: 'login-payments', label: 'Payment Solutions', href: '/login/payments' },
      { id: 'login-bnpl', label: 'BNPL', href: '/login/bnpl' },
      { id: 'login-flexwork', label: 'Flexwerk Platformen', href: '/login/flexwork' },
      { id: 'login-loans', label: 'Loans', href: '/login/loans' },
      { id: 'login-referral', label: 'Referral', href: '/login/referral' },
    ],
  },
];
