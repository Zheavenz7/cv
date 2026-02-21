import { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import type { ExperienceType } from '@/data/resumeData';

const filters: { label: string; value: ExperienceType | 'all'; icon: string }[] = [
  { label: 'Alles', value: 'all', icon: 'fa-layer-group' },
  { label: 'Fulltime', value: 'fulltime', icon: 'fa-building' },
  { label: 'Freelance', value: 'freelance', icon: 'fa-laptop' },
  { label: 'Opleidingen', value: 'opleiding', icon: 'fa-graduation-cap' },
  { label: 'Vrijwilligers', value: 'vrijwilliger', icon: 'fa-heart' },
];

const typeLabels: Record<ExperienceType, string> = {
  fulltime: 'Fulltime',
  freelance: 'Freelance',
  opleiding: 'Stage',
  vrijwilliger: 'Vrijwilliger',
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const [activeFilter, setActiveFilter] = useState<ExperienceType | 'all'>('all');
  
  const { experiences } = resumeData;

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return experiences;
    return experiences.filter(exp => exp.type === activeFilter);
  }, [experiences, activeFilter]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          Track Record
          <span className="section-heading-line" />
        </motion.h2>

        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mt-8 mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-primary/[0.12] text-primary border border-primary/20 shadow-lg shadow-primary/10'
                  : 'bg-white/[0.03] text-gray-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <span className="flex items-center gap-1.5">
                <i className={`fas ${filter.icon} text-[10px]`}></i>
                {filter.label}
                <span className={`text-[10px] ${
                  activeFilter === filter.value ? 'text-primary/60' : 'text-gray-600'
                }`}>
                  {filter.value === 'all' 
                    ? experiences.length 
                    : experiences.filter(e => e.type === filter.value).length}
                </span>
              </span>
              {activeFilter === filter.value && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/30"
                  layoutId="activeFilterBorder"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        <div 
          ref={sectionRef}
          className="section-content max-w-3xl mx-auto"
        >
          <div className="relative pl-8 border-l border-white/[0.08]">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((exp, index) => (
                  <motion.div 
                    key={`${exp.company}-${exp.title}`}
                    className="mb-5 relative group"
                    initial={{ y: 20, opacity: 0, scale: 0.97 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -15, opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.5), ease: [0.25, 0.46, 0.45, 0.94] }}
                    layout
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute -left-8 top-5 w-[11px] h-[11px] rounded-full bg-white/[0.1] border-2 border-primary/40 -translate-x-1/2 group-hover:bg-primary/50 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                      whileHover={{ scale: 1.8 }}
                    />
                    
                    <motion.div 
                      className="glass rounded-2xl p-5 hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                      whileHover={{ x: 6, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                          <p className="text-sm text-gray-400">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded-md">
                            {typeLabels[exp.type]}
                          </span>
                          <span className="text-xs text-primary/70 bg-primary/[0.08] px-2.5 py-1 rounded-lg whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex} 
                            className="px-2 py-0.5 bg-white/[0.03] text-gray-500 rounded-md text-[10px] border border-white/[0.05] hover:border-primary/20 hover:text-gray-300 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                            whileHover={{ scale: 1.1, y: -1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.p 
                  className="text-center text-gray-500 py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Geen resultaten voor dit filter.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
