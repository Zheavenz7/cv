import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

export default function FullStackDevPage() {
  const features = [
    { icon: Layout, title: 'Front-end', description: 'Moderne UI/UX met React en TypeScript' },
    { icon: Server, title: 'Back-end', description: 'Robuuste server-side architectuur met Node.js' },
    { icon: Database, title: 'Databases', description: 'Efficiënte data-opslag met Supabase en PostgreSQL' },
    { icon: Code2, title: 'Integratie', description: 'Volledige integratie van front tot backend' },
  ];

  return (
    <PageContent 
      title="Full Stack Development"
      description="Digitale oplossingen volledig ontwikkelen van front-end design tot back-end integratie."
    >
      <div className="max-w-6xl mx-auto space-y-12">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Full Stack Development
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Digitale oplossingen worden volledig ontwikkeld, van front-end design tot back-end integratie. Technologieën zoals TypeScript, Node.js, React en Supabase garanderen schaalbare, robuuste en onderhoudbare systemen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}