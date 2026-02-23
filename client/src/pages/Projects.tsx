import { Fragment, useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import resumeData from "@/data/resumeData";

import vvcLogo from '@/assets/logos/vvc.png';
import iqLogo from '@/assets/logos/investbotiq.png';
import spontivaLogo from '@/assets/logos/spontiva.png';
import wvLogo from '@/assets/logos/woningvrij.png';
import djobbaLogo from '@/assets/logos/djobba.png';

const projectLogos: Record<string, string> = {
  VVC: vvcLogo,
  Investbotiq: iqLogo,
  Spontiva: spontivaLogo,
  WoningVrij: wvLogo,
  DJOBBA: djobbaLogo,
};

const copyOverrides: Record<string, string> = {
  VVC: 'Consultancy OS: intake tot facturatie in één flow. Dashboards, dossiers en workflows op maat.',
  Investbotiq:
    'AI-gedreven investeringsplatform: financiële data verzamelen, structureren en analyseren met kwant/AI-modellen, interactieve visualisaties en een realtime API-laag.',
  Spontiva: 'All-in sportmanagement: planning, teams, payments en communicatie in één platform.',
  WoningVrij: 'Woonplatform voor zoeken, beheren en contracteren — gebouwd op snelheid en betrouwbaarheid.',
  DJOBBA: 'Instant staffing: kandidaten matchen, onboarden en betalen met minimale frictie.',
  'Angels Mediate': 'Digitale mediation-omgeving met dossiers, afspraken en veilige communicatie.',
};

const vvcSubProjects = [
  {
    name: 'Website',
    url: 'https://verdienendevrienden.club',
    repo: 'https://github.com/JamalDrenthe/vvc-webapp',
    description: 'Hoofdwebsite voor VVC consultancy platform'
  },
  {
    name: 'Pitch',
    url: 'https://pitch.verdienendevrienden.club',
    repo: 'https://github.com/JamalDrenthe/vvc-pitch-tool',
    description: 'Interactive pitch tool voor cliënten'
  },
  {
    name: 'Onboarding',
    url: 'https://onboarding.verdienendevrienden.club',
    repo: 'https://github.com/JamalDrenthe/vvc-onboarding',
    description: 'Gebruikers onboarding flow'
  },
  {
    name: 'Login',
    url: 'https://login.verdienendevrienden.club',
    repo: 'https://github.com/JamalDrenthe/vvc-login',
    description: 'Authenticatie en login systeem'
  }
];

export default function Projects() {
  const [expandedVVC, setExpandedVVC] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Projecten | Jamal Drenthe';
  }, []);

  const projects = resumeData.projects;

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[11px] uppercase tracking-[0.2em] text-white/80 shadow-lg shadow-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" /> Projecten • Built for scale & flow
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat drop-shadow-sm">Portfolio</h1>
            <p className="text-base text-white/75 max-w-3xl mx-auto">Producten die omzet, efficiëntie en ervaring combineren. Elk project is opgezet als platform: modulair, meetbaar, klaar voor groei.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => {
              const logo = projectLogos[project.title];
              const description = copyOverrides[project.title] ?? project.description;
              const hasDemo = Boolean(project.demoLink);
              const hasSource = Boolean(project.sourceLink);

              return (
                <Fragment key={project.title}>
                  <Card className="glass rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300 overflow-hidden backdrop-blur-2xl bg-black/40">
                  <div className="h-48 relative flex items-center justify-center bg-gradient-to-br from-black/70 via-primary/20 to-black/60">
                    <div className="absolute inset-0 opacity-60 blur-3xl bg-gradient-conic from-primary/25 via-white/10 to-primary/10" />
                    {logo ? (
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/90 flex items-center justify-center p-3 shadow-lg shadow-primary/15 ring-4 ring-white/10">
                        <img src={logo} alt={`${project.title} logo`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-primary/[0.08] text-primary/40 ring-4 ring-white/10">
                        <i className="fas fa-project-diagram text-3xl"></i>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/65 backdrop-blur-sm opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      {project.title === 'VVC' ? (
                        <button
                          onClick={() => setExpandedVVC(expandedVVC === 'vvc-main' ? null : 'vvc-main')}
                          className="w-11 h-11 rounded-xl bg-white/[0.1] border border-white/[0.25] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                          aria-label="VVC subprojects"
                        >
                          <i className="fas fa-th text-sm"></i>
                        </button>
                      ) : (
                        <>
                          {hasDemo && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.1] border border-white/[0.25] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200" aria-label={`Visit ${project.title}`}>
                              <i className="fas fa-external-link-alt text-sm"></i>
                            </a>
                          )}
                          {hasSource && (
                            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.1] border border-white/[0.25] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200" aria-label={`Source code for ${project.title}`}>
                              <i className="fab fa-github text-sm"></i>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <CardHeader className="space-y-3 bg-black/30">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-lg text-white flex items-center gap-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-[11px] uppercase tracking-[0.12em] border-primary/40 text-primary bg-primary/10">Tech Lead</Badge>
                      <Badge variant="outline" className="text-[11px] uppercase tracking-[0.12em] border-white/15 text-white/70">Sinds 2022</Badge>
                    </div>
                    <CardDescription className="text-white/90 leading-relaxed">{description}</CardDescription>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span> Outcome-first: roadmap, metrics en ship cadence afgestemd op business KPI’s.</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span> Product-engineering stack: design systems, observability, release discipline.</li>
                    </ul>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 justify-between items-center bg-black/30">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs text-white/85 border-white/20 bg-white/[0.05]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {(hasDemo || hasSource) && (
                      <div className="flex gap-2">
                        {project.title === 'VVC' ? (
                          <button
                            onClick={() => setExpandedVVC(expandedVVC === 'vvc-main' ? null : 'vvc-main')}
                            className="px-3 py-2 text-xs rounded-lg bg-primary/15 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all"
                          >
                            Subprojects
                          </button>
                        ) : (
                          <>
                            {hasDemo && (
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-xs rounded-lg bg-primary/15 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all">Live</a>
                            )}
                            {hasSource && (
                              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-xs rounded-lg bg-white/[0.06] border border-white/25 text-white hover:bg-white hover:text-black transition-all">Code</a>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {/* VVC Subprojects Overlay */}
                {project.title === 'VVC' && expandedVVC === 'vvc-main' && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setExpandedVVC(null)}>
                    <div className="bg-black/90 rounded-2xl border border-white/10 p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/90 flex items-center justify-center p-2 shadow-lg shadow-primary/15 ring-4 ring-white/10">
                            <img src={vvcLogo} alt="VVC logo" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">VVC Subprojects</h2>
                            <p className="text-white/70">Consultancy OS: intake tot facturatie in één flow</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setExpandedVVC(null)}
                          className="w-10 h-10 rounded-xl bg-white/[0.1] border border-white/[0.25] flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all duration-200"
                          aria-label="Close"
                        >
                          <i className="fas fa-times text-sm"></i>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {vvcSubProjects.map((subProject, idx) => (
                          <div key={idx} className="bg-black/40 rounded-xl border border-white/10 p-4 hover:border-primary/50 transition-all duration-300">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-semibold text-white">{subProject.name}</h3>
                              <Badge variant="outline" className="text-[10px] uppercase tracking-[0.12em] border-primary/40 text-primary bg-primary/10">
                                {subProject.name}
                              </Badge>
                            </div>
                            <p className="text-white/80 text-sm mb-4">{subProject.description}</p>
                            <div className="flex gap-2">
                              <a
                                href={subProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs rounded-lg bg-primary/15 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all flex items-center gap-1"
                              >
                                <i className="fas fa-external-link-alt text-[10px]"></i>
                                Live
                              </a>
                              <a
                                href={subProject.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs rounded-lg bg-white/[0.06] border border-white/25 text-white hover:bg-white hover:text-black transition-all flex items-center gap-1"
                              >
                                <i className="fab fa-github text-[10px]"></i>
                                Code
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
