import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { pageContent } from '@/data/pageContent';

export default function CVPage() {
  const content = pageContent['cv-overview'];
  
  return (
    <PageContent 
      title={content.seo.title}
      description={content.seo.description}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Blurb Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Professional Journeys
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {content.blurb}
          </p>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Full Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none rounded-3xl p-8 md:p-10"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {content.fullPage}
          </div>
        </motion.div>

        {/* Journey Cards */}
        <div className="mt-8">
          <h3>Explore CV</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="cv-it"
                href="/cv/it"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">IT</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about it
                </p>
              </a>
            

              <a
                key="cv-sales"
                href="/cv/sales"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Sales</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about sales
                </p>
              </a>
            

              <a
                key="cv-horeca"
                href="/cv/horeca"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Horeca</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about horeca
                </p>
              </a>
            

              <a
                key="cv-cybersecurity"
                href="/cv/cybersecurity"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Cybersecurity</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about cybersecurity
                </p>
              </a>
            

              <a
                key="cv-general"
                href="/cv/general"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">General</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about general
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}