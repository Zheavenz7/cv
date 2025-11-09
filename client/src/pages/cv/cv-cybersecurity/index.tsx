import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Shield, Network, Lock, Search } from 'lucide-react';

export default function CybersecurityPage() {
  const expertise = [
    { icon: Shield, title: 'Beveiliging', items: ['Netwerkbeveiliging', 'Systeem hardening', 'Security protocols'] },
    { icon: Search, title: 'Testing', items: ['Penetratietesten', 'Vulnerability scans', 'Security audits'] },
    { icon: Lock, title: 'Implementatie', items: ['Security policies', 'Access control', 'Encryption'] },
    { icon: Network, title: 'Advies', items: ['Risico-analyse', 'Compliance', 'Best practices'] },
  ];

  return (
    <PageContent 
      title="Cybersecurity Journey"
      description="Expertise in digitale veiligheid, systeemintegriteit en proactieve bescherming van infrastructuren."
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
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
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
              Cybersecurity Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Digitale veiligheid en systeemintegriteit vormen het fundament van deze expertise. Netwerkbeveiliging, penetratietesten en implementatie van robuuste beveiligingsstrategieën zorgen voor een proactieve bescherming van infrastructuren.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <skill.icon className="w-8 h-8 text-rose-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Strategische Aanpak
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              Technische en strategische kennis maakt het mogelijk organisaties te adviseren over <span className="text-rose-400 font-semibold">risico's</span> en <span className="text-rose-400 font-semibold">digitale continuïteit</span>, waarbij analytisch inzicht en praktische uitvoering samenkomen in een holistische benadering.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Door proactieve <span className="text-rose-400 font-semibold">netwerkbeveiliging</span>, grondige <span className="text-rose-400 font-semibold">penetratietesten</span> en robuuste <span className="text-rose-400 font-semibold">beveiligingsstrategieën</span> worden systemen beschermd tegen digitale dreigingen en blijft de operationele integriteit gewaarborgd.
            </p>
          </div>
        </motion.div>
      </div>
    </PageContent>
  );
}