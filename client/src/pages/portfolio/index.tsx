import { PageContent } from '@/components/layout/PageContent';

export default function PortfolioPage() {
  return (
    <PageContent 
      title="Portfolio"
      description="Explore Portfolio - Portfolio information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Portfolio?</h2>
        <p>
          Welcome to the Portfolio section. Here you'll find comprehensive information about portfolio, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="portfolio-webapps"
                href="/portfolio/webapps"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Webapps</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about webapps
                </p>
              </a>
            

              <a
                key="portfolio-apps"
                href="/portfolio/apps"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Apps</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about apps
                </p>
              </a>
            

              <a
                key="portfolio-ai"
                href="/portfolio/ai-agents"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">AI Agents</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about ai agents
                </p>
              </a>
            

              <a
                key="portfolio-videos"
                href="/portfolio/videos"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Video's</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about video's
                </p>
              </a>
            

              <a
                key="portfolio-business-plans"
                href="/portfolio/business-plans"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Business Plans</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about business plans
                </p>
              </a>
            

              <a
                key="portfolio-marketing-plans"
                href="/portfolio/marketing-plans"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Marketing Plans</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about marketing plans
                </p>
              </a>
            

              <a
                key="portfolio-finance-plans"
                href="/portfolio/finance-plans"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Finance Plans</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about finance plans
                </p>
              </a>
            

              <a
                key="portfolio-internship-reports"
                href="/portfolio/internship-reports"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Stage Verslagen</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about stage verslagen
                </p>
              </a>
            

              <a
                key="portfolio-research"
                href="/portfolio/research"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Researches</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about researches
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}