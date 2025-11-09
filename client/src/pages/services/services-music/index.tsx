import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Music, Mic, Sliders, Headphones } from 'lucide-react';

export default function MusicProductionPage() {
  const features = [
    { icon: Music, title: 'Beatmaking', description: 'Creatieve productie van originele beats en instrumentals' },
    { icon: Mic, title: 'Vocale Opnames', description: 'Professionele opnames met hoogwaardige kwaliteit' },
    { icon: Sliders, title: 'Mixing', description: 'Balans en helderheid in elke track' },
    { icon: Headphones, title: 'Mastering', description: 'Finalisatie voor professionele release-kwaliteit' },
  ];

  return (
    <PageContent 
      title="Music Production"
      description="Muziekproducties die technische precisie combineren met creatieve expressie."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Music Production
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Muziekproducties combineren technische precisie met creatieve expressie. Beats, vocale opnames, mixing en mastering worden geïntegreerd in hoogwaardige producties die professioneel en meeslepend zijn.
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
              <feature.icon className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}