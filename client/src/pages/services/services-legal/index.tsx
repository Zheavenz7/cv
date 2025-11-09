import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, CheckCircle } from 'lucide-react';

export default function JuridischAdviesPage() {
  const features = [
    { icon: FileText, title: 'Contracten', description: 'Opstellen en beoordeling van zakelijke contracten' },
    { icon: Shield, title: 'Compliance', description: 'Naleving van wet- en regelgeving' },
    { icon: Scale, title: 'Risicobeheer', description: 'Identificatie en minimalisatie van juridische risico\'s' },
    { icon: CheckCircle, title: 'Optimalisatie', description: 'Procesoptimalisatie voor effectieve operaties' },
  ];

  return (
    <PageContent 
      title="Legal Advisory"
      description="Juridisch advies op het gebied van contracten, compliance en zakelijke rechtsvraagstukken."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Legal Advisory
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Juridisch advies wordt geboden op het gebied van contracten, compliance en zakelijke rechtsvraagstukken. Risico's worden geminimaliseerd en processen geoptimaliseerd, zodat organisaties effectief en veilig opereren.
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
              <feature.icon className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContent>
  );
}