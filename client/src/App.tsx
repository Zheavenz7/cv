import { useState, useCallback, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/components/NavBar";
import InteractiveBackground from "@/components/InteractiveBackground";
import SearchCommand from "@/components/SearchCommand";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import CV from "@/pages/CV";
import Services from "@/pages/Services";
import NotFound from "@/pages/not-found";

// CV Pages
import CVPage from "@/pages/cv/index";
import CVITPage from "@/pages/cv/cv-it/index";
import CVSalesPage from "@/pages/cv/cv-sales/index";
import CVHorecaPage from "@/pages/cv/cv-horeca/index";
import CVCybersecurityPage from "@/pages/cv/cv-cybersecurity/index";
import CVGeneralPage from "@/pages/cv/cv-general/index";

// Services Pages
import ServicesPage from "@/pages/services/index";
import ServicesWebsitesPage from "@/pages/services/services-websites/index";
import ServicesAppsPage from "@/pages/services/services-apps/index";
import ServicesCloudPage from "@/pages/services/services-cloud/index";
import ServicesMiningPage from "@/pages/services/services-mining/index";
import ServicesRemotePage from "@/pages/services/services-remote/index";
import ServicesVideoPage from "@/pages/services/services-video/index";
import ServicesMusicPage from "@/pages/services/services-music/index";
import ServicesAIPage from "@/pages/services/services-ai/index";
import ServicesSalesPage from "@/pages/services/services-sales/index";
import ServicesMarketingPage from "@/pages/services/services-marketing/index";
import ServicesFullStackPage from "@/pages/services/services-fullstack/index";
import Services3DPage from "@/pages/services/services-3d/index";
import ServicesLegalPage from "@/pages/services/services-legal/index";
import ServicesMassagePage from "@/pages/services/services-massage/index";
import ServicesCateringPage from "@/pages/services/services-catering/index";

// Portfolio Pages
import PortfolioPage from "@/pages/portfolio/index";
import PortfolioWebAppsPage from "@/pages/portfolio/portfolio-webapps/index";
import PortfolioAppsPage from "@/pages/portfolio/portfolio-apps/index";
import PortfolioAIPage from "@/pages/portfolio/portfolio-ai/index";
import PortfolioVideosPage from "@/pages/portfolio/portfolio-videos/index";
import PortfolioBusinessPlansPage from "@/pages/portfolio/portfolio-business-plans/index";
import PortfolioMarketingPlansPage from "@/pages/portfolio/portfolio-marketing-plans/index";
import PortfolioFinancePlansPage from "@/pages/portfolio/portfolio-finance-plans/index";
import PortfolioInternshipReportsPage from "@/pages/portfolio/portfolio-internship-reports/index";
import PortfolioResearchPage from "@/pages/portfolio/portfolio-research/index";

// About Pages
import AboutOverviewPage from "@/pages/about/index";
import AboutSkillsPage from "@/pages/about/about-skills/index";
import AboutCareerPage from "@/pages/about/about-career/index";
import AboutDiplomasPage from "@/pages/about/about-diplomas/index";

// Music Pages
import MusicPage from "@/pages/music/index";
import MusicProductionPage from "@/pages/music/music-production/index";
import MusicVocalPage from "@/pages/music/music-vocal/index";
import MusicCollaborationsPage from "@/pages/music/music-collaborations/index";

// Products Pages
import ProductsPage from "@/pages/products/index";
import ProductBooksPage from "@/pages/products/product-books/index";
import ProductHuascaBarkitPage from "@/pages/products/product-huascabarkit/index";
import ProductMiningPCPage from "@/pages/products/product-mining-pc/index";
import ProductSpecialTeaPage from "@/pages/products/product-special-tea/index";

// Login Pages
import LoginPage from "@/pages/login/index";
import LoginAccountsPage from "@/pages/login/login-accounts/index";
import LoginBanksPage from "@/pages/login/login-banks/index";
import LoginBNPLPage from "@/pages/login/login-bnpl/index";
import LoginCompanyPage from "@/pages/login/login-company/index";
import LoginFactoringPage from "@/pages/login/login-factoring/index";
import LoginFlexWorkPage from "@/pages/login/login-flexwork/index";
import LoginIssuingPage from "@/pages/login/login-issuing/index";
import LoginLoansPage from "@/pages/login/login-loans/index";
import LoginPaymentsPage from "@/pages/login/login-payments/index";
import LoginReferralPage from "@/pages/login/login-referral/index";
import LoginStreamingPage from "@/pages/login/login-streaming/index";
function Layout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [toggleSearch]);

  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <InteractiveBackground />
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <NavBar onSearchOpen={toggleSearch} />
        </div>
        <main className="relative pointer-events-auto">{children}</main>
      </div>
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/"><Layout><Home /></Layout></Route>
      <Route path="/contact"><Layout><Contact /></Layout></Route>
      <Route path="/projects"><Layout><Projects /></Layout></Route>
      
      {/* CV Routes */}
      <Route path="/cv"><Layout><CVPage /></Layout></Route>
      <Route path="/cv/it"><Layout><CVITPage /></Layout></Route>
      <Route path="/cv/sales"><Layout><CVSalesPage /></Layout></Route>
      <Route path="/cv/horeca"><Layout><CVHorecaPage /></Layout></Route>
      <Route path="/cv/cybersecurity"><Layout><CVCybersecurityPage /></Layout></Route>
      <Route path="/cv/general"><Layout><CVGeneralPage /></Layout></Route>
      
      {/* Services Routes */}
      <Route path="/services"><Layout><ServicesPage /></Layout></Route>
      <Route path="/services/websites"><Layout><ServicesWebsitesPage /></Layout></Route>
      <Route path="/services/applications"><Layout><ServicesAppsPage /></Layout></Route>
      <Route path="/services/cloud"><Layout><ServicesCloudPage /></Layout></Route>
      <Route path="/services/mining"><Layout><ServicesMiningPage /></Layout></Route>
      <Route path="/services/remote-computing"><Layout><ServicesRemotePage /></Layout></Route>
      <Route path="/services/video-edit"><Layout><ServicesVideoPage /></Layout></Route>
      <Route path="/services/music-production"><Layout><ServicesMusicPage /></Layout></Route>
      <Route path="/services/ai-agents"><Layout><ServicesAIPage /></Layout></Route>
      <Route path="/services/sales"><Layout><ServicesSalesPage /></Layout></Route>
      <Route path="/services/marketing"><Layout><ServicesMarketingPage /></Layout></Route>
      <Route path="/services/fullstack"><Layout><ServicesFullStackPage /></Layout></Route>
      <Route path="/services/3d"><Layout><Services3DPage /></Layout></Route>
      <Route path="/services/legal"><Layout><ServicesLegalPage /></Layout></Route>
      <Route path="/services/massage"><Layout><ServicesMassagePage /></Layout></Route>
      <Route path="/services/catering"><Layout><ServicesCateringPage /></Layout></Route>
      
      {/* Portfolio Routes */}
      <Route path="/portfolio"><Layout><PortfolioPage /></Layout></Route>
      <Route path="/portfolio/webapps"><Layout><PortfolioWebAppsPage /></Layout></Route>
      <Route path="/portfolio/apps"><Layout><PortfolioAppsPage /></Layout></Route>
      <Route path="/portfolio/ai-agents"><Layout><PortfolioAIPage /></Layout></Route>
      <Route path="/portfolio/videos"><Layout><PortfolioVideosPage /></Layout></Route>
      <Route path="/portfolio/business-plans"><Layout><PortfolioBusinessPlansPage /></Layout></Route>
      <Route path="/portfolio/marketing-plans"><Layout><PortfolioMarketingPlansPage /></Layout></Route>
      <Route path="/portfolio/finance-plans"><Layout><PortfolioFinancePlansPage /></Layout></Route>
      <Route path="/portfolio/internship-reports"><Layout><PortfolioInternshipReportsPage /></Layout></Route>
      <Route path="/portfolio/research"><Layout><PortfolioResearchPage /></Layout></Route>
      
      {/* About Routes */}
      <Route path="/about"><Layout><About /></Layout></Route>
      <Route path="/about/overview"><Layout><AboutOverviewPage /></Layout></Route>
      <Route path="/about/skills"><Layout><AboutSkillsPage /></Layout></Route>
      <Route path="/about/career"><Layout><AboutCareerPage /></Layout></Route>
      <Route path="/about/diplomas"><Layout><AboutDiplomasPage /></Layout></Route>
      
      {/* Music Routes */}
      <Route path="/music"><Layout><MusicPage /></Layout></Route>
      <Route path="/music/production"><Layout><MusicProductionPage /></Layout></Route>
      <Route path="/music/vocal"><Layout><MusicVocalPage /></Layout></Route>
      <Route path="/music/collaborations"><Layout><MusicCollaborationsPage /></Layout></Route>
      
      {/* Products Routes */}
      <Route path="/products"><Layout><ProductsPage /></Layout></Route>
      <Route path="/products/books"><Layout><ProductBooksPage /></Layout></Route>
      <Route path="/products/huascabarkit"><Layout><ProductHuascaBarkitPage /></Layout></Route>
      <Route path="/products/mining-pc"><Layout><ProductMiningPCPage /></Layout></Route>
      <Route path="/products/special-tea"><Layout><ProductSpecialTeaPage /></Layout></Route>
      
      {/* Login Routes */}
      <Route path="/login"><Layout><LoginPage /></Layout></Route>
      <Route path="/login/accounts"><Layout><LoginAccountsPage /></Layout></Route>
      <Route path="/login/banks"><Layout><LoginBanksPage /></Layout></Route>
      <Route path="/login/bnpl"><Layout><LoginBNPLPage /></Layout></Route>
      <Route path="/login/company"><Layout><LoginCompanyPage /></Layout></Route>
      <Route path="/login/factoring"><Layout><LoginFactoringPage /></Layout></Route>
      <Route path="/login/flexwork"><Layout><LoginFlexWorkPage /></Layout></Route>
      <Route path="/login/issuing"><Layout><LoginIssuingPage /></Layout></Route>
      <Route path="/login/loans"><Layout><LoginLoansPage /></Layout></Route>
      <Route path="/login/payments"><Layout><LoginPaymentsPage /></Layout></Route>
      <Route path="/login/referral"><Layout><LoginReferralPage /></Layout></Route>
      <Route path="/login/streaming"><Layout><LoginStreamingPage /></Layout></Route>
      
      {/* 404 */}
      <Route><Layout><NotFound /></Layout></Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
