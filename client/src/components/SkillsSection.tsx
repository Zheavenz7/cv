import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { useTranslation } from 'react-i18next';

const categoryThemes = [
  { accent: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/25', glow: 'shadow-blue-500/10', text: 'text-blue-400', bg: 'bg-blue-500', tagBorder: 'hover:border-blue-400/30', dot: 'bg-blue-400' },
  { accent: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/25', glow: 'shadow-purple-500/10', text: 'text-purple-400', bg: 'bg-purple-500', tagBorder: 'hover:border-purple-400/30', dot: 'bg-purple-400' },
  { accent: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/25', glow: 'shadow-emerald-500/10', text: 'text-emerald-400', bg: 'bg-emerald-500', tagBorder: 'hover:border-emerald-400/30', dot: 'bg-emerald-400' },
  { accent: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/25', glow: 'shadow-amber-500/10', text: 'text-amber-400', bg: 'bg-amber-500', tagBorder: 'hover:border-amber-400/30', dot: 'bg-amber-400' },
  { accent: 'from-rose-500/20 to-red-500/20', border: 'border-rose-500/25', glow: 'shadow-rose-500/10', text: 'text-rose-400', bg: 'bg-rose-500', tagBorder: 'hover:border-rose-400/30', dot: 'bg-rose-400' },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const { detailedSkillCategories } = resumeData;

  const toggleCategory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Vaardigheden & Tech Stack
          <span className="section-heading-line" />
        </h2>
        <p className="text-center text-white/70 mb-14 max-w-xl mx-auto text-sm">
          {t('about.skillsIntro')}
        </p>
        
        <div 
          ref={sectionRef}
          className="section-content space-y-3 max-w-4xl mx-auto"
        >
          {detailedSkillCategories.map((category, categoryIndex) => {
            const theme = categoryThemes[categoryIndex % categoryThemes.length];
            const isExpanded = expandedIndex === categoryIndex;
            const totalItems = category.skills.length + category.toolGroups.reduce((acc, g) => acc + g.items.split('·').length, 0);

            return (
              <motion.div 
                key={categoryIndex}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isExpanded 
                    ? `glass-strong ${theme.border} shadow-2xl ${theme.glow}` 
                    : 'glass glass-hover'
                }`}
                initial={{ y: 24, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Gradient accent line at top when expanded */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.accent}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />

                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isExpanded 
                        ? `bg-gradient-to-br ${theme.accent}` 
                        : 'bg-white/[0.06] group-hover:bg-white/[0.1]'
                    }`}>
                      <i className={`fas ${category.icon} text-sm transition-colors duration-300 ${
                        isExpanded ? theme.text : 'text-white/60 group-hover:text-white'
                      }`}></i>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base md:text-lg font-semibold text-white truncate">
                          {category.title}
                        </h3>
                        <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors duration-300 ${
                          isExpanded 
                            ? `${theme.text} bg-white/[0.06]` 
                            : 'text-white/50 bg-white/[0.03]'
                        }`}>
                          {totalItems} items
                        </span>
                      </div>
                      <p className="text-xs text-white mt-0.5 line-clamp-1">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'bg-white/[0.08] rotate-180' : 'bg-white/[0.04] group-hover:bg-white/[0.08]'
                    }`}>
                      <i className="fas fa-chevron-down text-white/50 text-[10px]"></i>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 space-y-6 border-t border-white/[0.06] pt-5">
                        {/* Skills */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-1 h-4 rounded-full ${theme.dot}`} />
                            <h4 className={`text-[11px] font-bold uppercase tracking-[0.15em] ${theme.text}`}>Skills</h4>
                            <span className="text-[10px] text-white/50">({category.skills.length})</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.span 
                                key={skillIndex} 
                                className={`px-3 py-1.5 rounded-lg text-[13px] bg-white/[0.04] text-white border border-white/[0.08] ${theme.tagBorder} hover:bg-white/[0.12] hover:text-white transition-all duration-200 cursor-default`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25, delay: skillIndex * 0.02 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Tools / Platforms */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className={`w-1 h-4 rounded-full ${theme.dot}`} />
                            <h4 className={`text-[11px] font-bold uppercase tracking-[0.15em] ${theme.text}`}>Tools & Platforms</h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.toolGroups.map((group, groupIndex) => (
                              <motion.div 
                                key={groupIndex}
                                className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-3.5 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-200"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 + groupIndex * 0.04 }}
                              >
                                <span className={`text-[10px] font-semibold uppercase tracking-wider text-white`}>
                                  {group.category}
                                </span>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {group.items.split(' · ').map((tool, toolIndex) => (
                                    <span 
                                      key={toolIndex} 
                                      className="px-2 py-0.5 text-[11px] text-white bg-white/[0.07] rounded-md border border-white/[0.12] hover:text-white hover:border-white/[0.16] transition-colors duration-150"
                                    >
                                      {tool.trim()}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
