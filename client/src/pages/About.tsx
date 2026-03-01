import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'wouter';
import Footer from "@/components/Footer";
import resumeData from "@/data/resumeData";
import profileImg from '@/assets/images/profile.jpg';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const disciplineMeta = [
  { key: 'commercial', icon: 'fa-handshake', accent: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { key: 'mvp', icon: 'fa-code', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { key: 'ai', icon: 'fa-robot', accent: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { key: 'growth', icon: 'fa-rocket', accent: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
  { key: 'architecture', icon: 'fa-chess', accent: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
];

const traitMeta = [
  { key: 'architect', icon: 'fa-bolt', accent: 'text-blue-400', bg: 'bg-blue-500/10' },
  { key: 'revenue', icon: 'fa-chart-line', accent: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { key: 'ai', icon: 'fa-microchip', accent: 'text-violet-400', bg: 'bg-violet-500/10' },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: {} }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  const { personalInfo } = resumeData;
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Over Mij | Jamal Drenthe';
  }, []);

  const disciplines = disciplineMeta.map(d => ({
    ...d,
    label: t(`aboutPage.disciplines.${d.key}.label`),
    desc: t(`aboutPage.disciplines.${d.key}.desc`),
  }));

  const traits = traitMeta.map(tr => ({
    ...tr,
    title: t(`aboutPage.traits.${tr.key}.title`),
    desc: t(`aboutPage.traits.${tr.key}.desc`),
  }));

  const stats = [
    { value: '5+', label: t('aboutPage.stats.years') },
    { value: '6', label: t('aboutPage.stats.platforms') },
    { value: '3', label: t('aboutPage.stats.pillars') },
    { value: '1', label: t('aboutPage.stats.contact') },
  ];

  const focusTags = t('aboutPage.focusTags', { returnObjects: true }) as string[];

  return (
    <div className="text-white">
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ── Hero header ── */}
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> {t('aboutPage.badge')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white font-montserrat drop-shadow-sm"
            >
              {t('aboutPage.heading')}{' '}
              <span className="text-primary">{t('aboutPage.headingHighlight')}</span>{' '}
              {t('aboutPage.heading2')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              {t('aboutPage.tagline')}
            </motion.p>
          </div>

          {/* ── Profile + Bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-strong rounded-3xl p-8 md:p-10 border border-white/[0.07] shadow-2xl shadow-primary/10"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Profile photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl shadow-primary/15">
                    <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-400 border-2 border-black shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-white text-base">{personalInfo.name}</p>
                  <p className="text-xs text-primary/80 mt-0.5">Business IT Developer & MVP Architect</p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-white/50 items-center">
                  <span className="flex items-center gap-1.5">
                    <i className="fas fa-map-marker-alt text-primary/50" /> {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="fas fa-envelope text-primary/50" /> info@jamaldrenthe.com
                  </span>
                </div>
              </div>

              {/* Bio text */}
              <div className="flex-1 space-y-5">
                <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                  {t('aboutPage.bio1')}
                </p>
                <p className="text-white/75 leading-relaxed">
                  {t('aboutPage.bio2')}
                </p>
                <p className="text-white/75 leading-relaxed">
                  {t('aboutPage.bio3')}
                </p>
                {/* Language tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {personalInfo.languages.map((l) => (
                    <span key={l.language} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs text-white/70">
                      <i className="fas fa-globe text-primary/50 text-[9px]" />
                      {l.language} <span className="text-white/40">·</span> {l.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats strip ── */}
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center border border-white/[0.07] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">{s.value}</p>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Core disciplines ── */}
          <AnimatedSection>
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.18em] text-white/60 mb-3">
                  <i className="fas fa-layer-group text-primary/60 text-[9px]" /> {t('aboutPage.disciplinesBadge')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {disciplines.map((d, i) => (
                  <motion.div
                    key={d.label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`glass rounded-2xl p-6 border ${d.border} hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${d.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${d.icon} ${d.accent} text-base`} />
                    </div>
                    <h3 className={`font-semibold text-sm mb-2 ${d.accent}`}>{d.label}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{d.desc}</p>
                  </motion.div>
                ))}

                {/* CTA card */}
                <motion.div
                  custom={disciplines.length}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-6 border border-primary/20 bg-primary/[0.04] hover:bg-primary/[0.08] hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <i className="fas fa-arrow-right text-primary text-base group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <h3 className="font-semibold text-sm text-white mb-2">{t('aboutPage.skillsLink')}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{t('aboutPage.skillsLinkDesc')}</p>
                  </div>
                  <Link href="/cv" className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors font-medium">
                    {t('aboutPage.cvLink')} <i className="fas fa-chevron-right text-[9px]" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Traits ── */}
          <AnimatedSection>
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.18em] text-white/60 mb-3">
                  <i className="fas fa-user text-primary/60 text-[9px]" /> {t('aboutPage.traitsBadge')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {traits.map((t, i) => (
                  <motion.div
                    key={t.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-strong rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${t.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${t.icon} ${t.accent} text-lg`} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-2">{t.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{t.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Focus tags */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 pt-2"
              >
                {focusTags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full glass border border-white/[0.1] text-xs text-white/65 hover:text-white hover:border-primary/30 transition-colors duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ── CTA strip ── */}
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 md:p-10 border border-white/[0.07] shadow-2xl shadow-primary/10 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">{t('aboutPage.ctaTitle')}</h2>
                <p className="text-white/60 text-sm max-w-md">{t('aboutPage.ctaDesc')}</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-glass btn-primary px-7 py-3 text-sm">
                  <i className="fas fa-paper-plane mr-2 text-xs" /> {t('aboutPage.ctaBtn1')}
                </Link>
                <Link href="/cv" className="btn-glass btn-outline px-7 py-3 text-sm">
                  <i className="fas fa-file-alt mr-2 text-xs" /> {t('aboutPage.ctaBtn2')}
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>

        </div>
      </main>
      <Footer />
    </div>
  );
}
