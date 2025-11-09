import { PageContent } from '@/components/layout/PageContent';

export default function ProjectenPage() {
  return (
    <PageContent 
      title="Projecten"
      description="Explore Projecten - Projecten information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Projecten?</h2>
        <p>
          Welcome to the Projecten section. Here you'll find comprehensive information about projecten, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore Projecten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="project-investbotiq"
                href="/projects/investbotiq"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Investbotiq</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about investbotiq
                </p>
              </a>
            

              <a
                key="project-after-student-housing"
                href="/projects/after-student-housing"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">After Student Housing</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about after student housing
                </p>
              </a>
            

              <a
                key="project-vvc"
                href="/projects/vvc"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Verdienende Vrienden Club</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about verdienende vrienden club
                </p>
              </a>
            

              <a
                key="project-djobba"
                href="/projects/djobba"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">DJOBBA</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about djobba
                </p>
              </a>
            

              <a
                key="project-boastplug"
                href="/projects/boastplug"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">BoastPlug</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about boastplug
                </p>
              </a>
            

              <a
                key="project-huascabar"
                href="/projects/huascabar"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Huascabar</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about huascabar
                </p>
              </a>
            

              <a
                key="project-sabi-bank"
                href="/projects/sabi-bank"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Sabi Bank</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about sabi bank
                </p>
              </a>
            

              <a
                key="project-anon-bank"
                href="/projects/anon-bank"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Anon Bank</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about anon bank
                </p>
              </a>
            

              <a
                key="project-rjp"
                href="/projects/rjp"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">RJP</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about rjp
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}