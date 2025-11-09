import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users2, BarChart3 } from 'lucide-react';

export default function SalesPage() {
  const competencies = [
    { icon: Target, title: 'Leadgeneratie', items: ['Strategische prospectie', 'Data-analyse', 'Pipeline management'] },
    { icon: TrendingUp, title: 'Groei', items: ['Meetbare resultaten', 'KPI-optimalisatie', 'Conversie-strategieën'] },
    { icon: Users2, title: 'Relatiebeheer', items: ['Klantrelaties', 'Langetermijnpartnerships', 'Account management'] },
    { icon: BarChart3, title: 'Analytisch', items: ['Data-gedreven beslissingen', 'Performance tracking', 'ROI-optimalisatie'] },
  ];

  return (
    <PageContent 
      title="Sales Journey"
      description="Ervaring in sales die verder gaat dan deals sluiten - gefocust op klantbehoeften en duurzame relaties."
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Sales Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ervaring binnen sales draait om meer dan het sluiten van deals; het vereist inzicht in klantbehoeften en het opbouwen van duurzame relaties. Strategische leadgeneratie, pipeline management en klantrelatiebeheer worden gecombineerd met data-analyse en effectieve communicatiestrategieën.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
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
              <competency.icon className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{competency.title}</h3>
              <ul className="space-y-2">
                {competency.items.map((item) => (
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
            Aanpak & Filosofie
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              Resultaatgerichte aanpakken zorgen voor <span className="text-emerald-400 font-semibold">meetbare commerciële groei</span>, terwijl empathie en overtuigingskracht een balans vormen tussen menselijke connectie en analytische besluitvorming.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Door <span className="text-emerald-400 font-semibold">strategische leadgeneratie</span>, effectief <span className="text-emerald-400 font-semibold">pipeline management</span> en doordacht <span className="text-emerald-400 font-semibold">klantrelatiebeheer</span> worden duurzame partnerships opgebouwd die waarde creëren voor alle betrokken partijen.
            </p>
          </div>
        </motion.div>
      </div>
    </PageContent>
  );
}