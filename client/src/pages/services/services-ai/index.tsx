import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart, Zap } from 'lucide-react';

export default function AIAgentsPage() {
  const features = [
    { icon: Bot, title: 'AI Agents', description: 'Intelligente agents voor geautomatiseerde processen' },
    { icon: Workflow, title: 'Workflow Optimalisatie', description: 'Automatisering van repetitieve taken en workflows' },
    { icon: BarChart, title: 'Data-analyse', description: 'Geavanceerde analyse voor strategische beslissingen' },
    { icon: Zap, title: 'Integratie', description: 'Naadloze implementatie in diverse sectoren' },
  ];

  return (
    <PageContent 
      title="AI Agents & Automation"
      description="AI-agents ontwikkelen voor procesautomatisering, data-analyse en workflow-optimalisatie."
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Agents & Automation
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            AI-agents worden ontwikkeld om operationele processen te automatiseren, data-analyse uit te voeren en workflows te optimaliseren. Implementaties strekken zich uit over uiteenlopende sectoren, van klantenservice tot strategische bedrijfsoptimalisatie.
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