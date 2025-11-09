import { PageContent } from '@/components/layout/PageContent';

export default function AboutMePage() {
  return (
    <PageContent 
      title="About Me"
      description="Explore About Me - About Me information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is About Me?</h2>
        <p>
          Welcome to the About Me section. Here you'll find comprehensive information about about me, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="about-skills"
                href="/about/skills"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Skills</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about skills
                </p>
              </a>
            

              <a
                key="about-diplomas"
                href="/about/diplomas"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Diploma's</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about diploma's
                </p>
              </a>
            

              <a
                key="about-career"
                href="/about/career"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Career Path</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about career path
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}