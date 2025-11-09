import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Coffee, Calendar, Users, Clock } from 'lucide-react';

export default function HorecaPage() {
  const skills = [
    { icon: Coffee, title: 'Operationeel', items: ['Servicekwaliteit', 'Procesbeheer', 'Kwaliteitscontrole'] },
    { icon: Calendar, title: 'Evenementen', items: ['Event coördinatie', 'Catering organisatie', 'Planning & logistiek'] },
    { icon: Users, title: 'Teamleiding', items: ['Team management', 'Training & coaching', 'Werkplanning'] },
    { icon: Clock, title: 'Efficiency', items: ['Drukke periodes', 'Multitasking', 'Prioritering'] },
  ];

  return (
    <PageContent 
      title="Horeca Journey"
      description="Dynamische ervaring in de horeca met focus op leiderschap, organisatie en klantgerichtheid."
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Horeca Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Dynamische omgevingen in de horeca hebben leiderschapsvaardigheden, organisatorisch inzicht en klantgerichtheid verder ontwikkeld. Van drukke diensten tot het coördineren van evenementen en catering, processen worden geoptimaliseerd en teams efficiënt aangestuurd.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
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
              <skill.icon className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Competencies Section */}
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
            Kerncompetenties
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              <span className="text-amber-400 font-semibold">Besluitvorming onder druk</span>, <span className="text-amber-400 font-semibold">prioriteiten stellen</span> en <span className="text-amber-400 font-semibold">klanttevredenheid waarborgen</span> zijn competenties die uit deze ervaring voortkomen en in andere professionele domeinen toepasbaar zijn.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              De dynamiek van de horeca heeft geleerd om onder hoge druk te presteren, teams effectief aan te sturen en tegelijkertijd een uitstekende klantbeleving te garanderen - vaardigheden die essentieel zijn in elk professioneel domein.
            </p>
          </div>
        </motion.div>
      </div>
    </PageContent>
  );
}