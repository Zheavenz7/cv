import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Hand, Heart, Sparkles, Star } from 'lucide-react';

export default function MassagePage() {
  const features = [
    { icon: Hand, title: 'Professioneel', description: 'Vaardige technieken voor optimale ontspanning' },
    { icon: Heart, title: 'Welzijn', description: 'Focus op fysiek en mentaal welzijn' },
    { icon: Sparkles, title: 'Kwaliteit', description: 'Hoogwaardige service en aandacht voor detail' },
    { icon: Star, title: 'Klanttevredenheid', description: 'Persoonlijke benadering en professionele uitvoering' },
  ];

  return (
    <PageContent 
      title="Massage Services"
      description="Professionele massagediensten met focus op welzijn en klanttevredenheid."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Massage Services
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Specialistische diensten op het gebied van massage combineren praktische vaardigheden met professionele service. Klanttevredenheid en kwaliteit staan centraal in elke uitvoering.
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
              <feature.icon className="w-10 h-10 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}