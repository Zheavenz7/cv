import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Megaphone } from 'lucide-react';

export default function MarketingPage() {
  const features = [
    { icon: Target, title: 'Leadgeneratie', description: 'Strategische acquisitie en klantsegmentatie' },
    { icon: Megaphone, title: 'Campagnes', description: 'Data-gedreven marketingcampagnes voor bereik' },
    { icon: TrendingUp, title: 'Conversie', description: 'Optimalisatie voor meetbare groei en ROI' },
    { icon: Users, title: 'Advies', description: 'Strategisch advies voor duurzame groei' },
  ];

  return (
    <PageContent 
      title="Sales & Marketing Consultancy"
      description="Strategisch advies en uitvoering voor leadgeneratie, marketing en conversie-optimalisatie."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Sales & Marketing Consultancy
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Strategisch advies en uitvoering op het gebied van sales en marketing richten zich op leadgeneratie, klantsegmentatie, marketingcampagnes en conversieoptimalisatie. Analytische benaderingen worden gecombineerd met creatieve strategieën om duurzame groei te realiseren.
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
              <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}