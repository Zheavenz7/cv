import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Globe, Palette, Zap, ShoppingCart } from 'lucide-react';

export default function WebsitesPage() {
  const features = [
    { icon: Globe, title: 'Maatwerk', description: 'Elk project wordt op maat ontworpen en ontwikkeld voor optimale impact' },
    { icon: Palette, title: 'Esthetiek', description: 'Perfecte balans tussen visuele aantrekkingskracht en functionaliteit' },
    { icon: Zap, title: 'Technologie', description: 'React, Tailwind CSS, Shopify en Webflow voor optimale resultaten' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Interactieve platforms voor zakelijke groei en conversie' },
  ];

  return (
    <PageContent 
      title="Web Development"
      description="Websites ontwerpen en ontwikkelen met een balans tussen esthetiek en functionaliteit."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Web Development
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Websites worden ontworpen en ontwikkeld met een balans tussen esthetiek en functionaliteit. Digitale ervaringen variëren van zakelijke portals tot interactieve e-commerceplatforms, waarbij elk project maatwerk en impact combineert. Technologieën zoals React, Tailwind CSS, Shopify en Webflow worden efficiënt ingezet om resultaten te optimaliseren.
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
              <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}