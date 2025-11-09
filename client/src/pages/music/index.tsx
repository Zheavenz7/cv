import { PageContent } from '@/components/layout/PageContent';

export default function MusicPage() {
  return (
    <PageContent 
      title="Music"
      description="Explore Music - Music information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Music?</h2>
        <p>
          Welcome to the Music section. Here you'll find comprehensive information about music, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore Music</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="music-production"
                href="/music/production"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Production</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about production
                </p>
              </a>
            

              <a
                key="music-vocal"
                href="/music/vocal"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Vocal</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about vocal
                </p>
              </a>
            

              <a
                key="music-collaborations"
                href="/music/collaborations"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Collaborations</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about collaborations
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}