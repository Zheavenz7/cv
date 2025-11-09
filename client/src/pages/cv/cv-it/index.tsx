import { PageContent } from '@/components/layout/PageContent';
import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Users } from 'lucide-react';

export default function ITPage() {
  const skills = [
    { icon: Code2, title: 'Frameworks', items: ['React', 'Vite', 'FlutterFlow'] },
    { icon: Layers, title: 'Back-end', items: ['Node.js', 'Firebase', 'Supabase'] },
    { icon: Zap, title: 'Expertise', items: ['UX/UI Design', 'Scalable Systems'] },
    { icon: Users, title: 'Focus', items: ['User Experience', 'Innovation'] },
  ];

  return (
    <PageContent 
      title="IT Journey"
      description="Een carrière in informatietechnologie ontwikkeld vanuit nieuwsgierigheid en gegroeid tot expertise in digitale innovatie."
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              IT Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Een carrière in informatietechnologie ontwikkelde zich vanuit nieuwsgierigheid en groeide uit tot een expertise in het ontwerpen van innovatieve digitale oplossingen. Van het bouwen van intuïtieve websites tot het ontwikkelen van complexe applicaties, technische kennis wordt gecombineerd met een scherp oog voor gebruikerservaring.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
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
              <skill.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Expertise Section */}
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
            Expertise & Aanpak
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              Frameworks zoals <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Vite</span> en <span className="text-cyan-400 font-semibold">FlutterFlow</span> worden ingezet, terwijl back-end infrastructuren zoals <span className="text-cyan-400 font-semibold">Node.js</span>, <span className="text-cyan-400 font-semibold">Firebase</span> en <span className="text-cyan-400 font-semibold">Supabase</span> de basis vormen voor schaalbare en efficiënte systemen.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Analytisch denken, probleemoplossend vermogen en aandacht voor UX/UI zorgen voor digitale producten die zowel functioneel als esthetisch zijn.
            </p>
          </div>
        </motion.div>
      </div>
    </PageContent>
  );
}