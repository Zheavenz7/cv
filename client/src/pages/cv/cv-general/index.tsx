import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb, Award } from 'lucide-react';

export default function GeneralPage() {
  const competencies = [
    { icon: GraduationCap, title: 'Educatie', items: ['Formele opleidingen', 'Certificeringen', 'Academische basis'] },
    { icon: BookOpen, title: 'Zelfstudie', items: ['Zelfgestuurde leertrajecten', 'Continuous learning', 'Kennisverdieping'] },
    { icon: Lightbulb, title: 'Analytisch', items: ['Kritisch denken', 'Probleemanalyse', 'Innovatieve oplossingen'] },
    { icon: Award, title: 'Expertise', items: ['Multidisciplinair', 'Praktijkervaring', 'Theorie & praktijk'] },
  ];

  return (
    <PageContent 
      title="General / Educational Journey"
      description="Brede educatieve achtergrond met formele opleidingen en zelfgestuurde leertrajecten."
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              General / Educational Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Een brede educatieve achtergrond combineert formele opleidingen met zelfgestuurde leertrajecten, wat resulteert in analytische vaardigheden, discipline en kritische denkhouding.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
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
              <competency.icon className="w-8 h-8 text-violet-400 mb-4" />
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
            Leertraject & Ontwikkeling
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              Complexe vraagstukken worden geanalyseerd en <span className="text-violet-400 font-semibold">innovatieve oplossingen</span> ontwikkeld, waarbij theoretische kennis en praktijkervaring elkaar versterken en leiden tot een multidisciplinaire expertise.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Door een combinatie van <span className="text-violet-400 font-semibold">formele opleidingen</span> en <span className="text-violet-400 font-semibold">zelfgestuurde leertrajecten</span> is een brede kennisbasis ontstaan die <span className="text-violet-400 font-semibold">analytische vaardigheden</span>, <span className="text-violet-400 font-semibold">discipline</span> en een <span className="text-violet-400 font-semibold">kritische denkhouding</span> omvat.
            </p>
          </div>
        </motion.div>
      </div>
    </PageContent>
  );
}