import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData from '@/data/resumeData';

interface SearchResult {
  type: 'skill' | 'tool' | 'project' | 'experience';
  title: string;
  subtitle: string;
  category: string;
  icon: string;
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Index skills & tools from detailedSkillCategories
  for (const cat of resumeData.detailedSkillCategories) {
    for (const skill of cat.skills) {
      results.push({
        type: 'skill',
        title: skill,
        subtitle: cat.title,
        category: 'Skills',
        icon: cat.icon,
      });
    }
    for (const group of cat.toolGroups) {
      const tools = group.items.split(' · ');
      for (const tool of tools) {
        results.push({
          type: 'tool',
          title: tool.trim(),
          subtitle: `${cat.title} → ${group.category}`,
          category: 'Tools',
          icon: 'fa-wrench',
        });
      }
    }
  }

  // Index projects
  for (const project of resumeData.projects) {
    results.push({
      type: 'project',
      title: project.title,
      subtitle: project.technologies.join(' · '),
      category: 'Projecten',
      icon: 'fa-rocket',
    });
  }

  // Index experiences
  for (const exp of resumeData.experiences) {
    results.push({
      type: 'experience',
      title: `${exp.title} bij ${exp.company}`,
      subtitle: `${exp.period} · ${exp.technologies.join(', ')}`,
      category: 'Track Record',
      icon: 'fa-briefcase',
    });
  }

  return results;
}

function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  // Simple fuzzy: all query chars appear in order
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++;
  }
  return qi === q.length;
}

export default function SearchCommand({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return index
      .filter(item => 
        fuzzyMatch(query, item.title) || 
        fuzzyMatch(query, item.subtitle) ||
        fuzzyMatch(query, item.category)
      )
      .slice(0, 20);
  }, [query, index]);

  // Group results by category
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const r of results) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    }
    return groups;
  }, [results]);

  const flatResults = useMemo(() => results, [results]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, flatResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [flatResults.length, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let flatIndex = 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="fixed top-[15%] inset-x-0 mx-auto w-[90%] max-w-xl z-[101]"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
                <i className="fas fa-search text-gray-500 text-sm"></i>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Typ om te zoeken in skills en ervaring"
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm"
                  autoComplete="off"
                  spellCheck={false}
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.1] text-[10px] text-gray-500 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[50vh] overflow-y-auto overscroll-contain">
                {query.trim() === '' ? (
                  <div className="px-5 py-8 text-center text-gray-600 text-sm">
                    <i className="fas fa-lightbulb text-primary/30 text-lg mb-2 block"></i>
                    Typ om te zoeken in skills, tools, projecten en ervaringen
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-5 py-8 text-center text-gray-500 text-sm">
                    Geen resultaten voor "<span className="text-white">{query}</span>"
                  </div>
                ) : (
                  <div className="py-2">
                    {Object.entries(grouped).map(([category, items]) => (
                      <div key={category}>
                        <div className="px-5 pt-3 pb-1.5">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                            {category}
                          </span>
                        </div>
                        {items.map((item) => {
                          const currentIndex = flatIndex++;
                          const isSelected = currentIndex === selectedIndex;
                          return (
                            <div
                              key={`${item.type}-${item.title}-${currentIndex}`}
                              data-index={currentIndex}
                              className={`flex items-center gap-3 px-5 py-2.5 cursor-default transition-colors duration-100 ${
                                isSelected
                                  ? 'bg-primary/[0.08]'
                                  : 'hover:bg-white/[0.03]'
                              }`}
                              onMouseEnter={() => setSelectedIndex(currentIndex)}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-primary/[0.15] text-primary' : 'bg-white/[0.04] text-gray-500'
                              }`}>
                                <i className={`fas ${item.icon} text-[10px]`}></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                                  {highlightMatch(item.title, query)}
                                </p>
                                <p className="text-[11px] text-gray-600 truncate">{item.subtitle}</p>
                              </div>
                              <span className={`text-[10px] px-2 py-0.5 rounded-md flex-shrink-0 ${
                                isSelected 
                                  ? 'bg-primary/[0.1] text-primary/70' 
                                  : 'bg-white/[0.03] text-gray-600'
                              }`}>
                                {item.type === 'skill' ? 'Skill' : 
                                 item.type === 'tool' ? 'Tool' : 
                                 item.type === 'project' ? 'Project' : 'Ervaring'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {results.length > 0 && (
                <div className="px-5 py-2.5 border-t border-white/[0.06] flex items-center gap-4 text-[10px] text-gray-600">
                  <span><kbd className="font-mono bg-white/[0.04] px-1 rounded">↑↓</kbd> navigeer</span>
                  <span><kbd className="font-mono bg-white/[0.04] px-1 rounded">esc</kbd> sluiten</span>
                  <span className="ml-auto">{results.length} resultaten</span>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-primary font-medium">{text.slice(idx, idx + query.length)}</span>
      {text.slice(idx + query.length)}
    </>
  );
}
