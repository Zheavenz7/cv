import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

const services = [
  {
    title: "Sales",
    subtitle: "Van Eerste Contact tot Maximale Klantwaarde",
    description: "Ik bouw geen losse salesacties. Ik ontwikkel winstgevende klantreizen.",
    icon: "fas fa-handshake",
    accent: "from-blue-500/20 to-cyan-400/20",
    borderAccent: "group-hover:border-blue-500/50",
    categories: [
      {
        name: "Lead Activatie & Acquisitie",
        items: [
          "Telefonische acquisitie (koud & warm)",
          "Fysieke verkoop (F2F / D2D)",
          "B2B sales & strategisch relatiebeheer"
        ]
      },
      {
        name: "Conversie & Closing",
        items: [
          "Pre-closing (kwalificatie & positionering)",
          "High-level closing & onderhandeling",
          "Dealstructurering"
        ]
      },
      {
        name: "Maximale Klantwaarde",
        items: [
          "Up-selling & premium positionering",
          "Cross-selling strategieën",
          "Aftersales optimalisatie",
          "Retentie & klantloyaliteitssystemen"
        ]
      }
    ],
    footer: "Resultaat: meer omzet per klant en duurzame groei."
  },
  {
    title: "Marketing",
    subtitle: "Van Zichtbaarheid naar Voorspelbare Groei",
    description: "Marketing is geen kostenpost, maar een groeiversneller — mits goed ingericht.",
    icon: "fas fa-bullhorn",
    accent: "from-purple-500/20 to-pink-400/20",
    borderAccent: "group-hover:border-purple-500/50",
    categories: [
      {
        name: "Strategie & Uitvoering",
        items: [
          "Leadgeneratie funnels",
          "Social media strategie & beheer",
          "SEO (organische vindbaarheid)",
          "Performance advertising (online & offline)",
          "Contentstrategie & creatie (video, copy, visuals)"
        ]
      }
    ],
    footer: "Ik zorg voor meetbare impact en schaalbaarheid."
  },
  {
    title: "IT & Development",
    subtitle: "Digitale Systemen die Schalen",
    description: "Ik ontwikkel digitale infrastructuur die jouw ambities ondersteunt.",
    icon: "fas fa-code",
    accent: "from-emerald-500/20 to-teal-400/20",
    borderAccent: "group-hover:border-emerald-500/50",
    categories: [
      {
        name: "Development",
        items: [
          "High-performance websites",
          "Maatwerk webapps",
          "Native & hybride app development",
          "SaaS-oplossingen",
          "UI/UX design (intuïtief, minimalistisch, conversiegericht)",
          "Slimme maatwerk tools & rekenmodules",
          "E-commerce ontwikkeling",
          "MVP-ontwikkeling",
          "Game development"
        ]
      }
    ],
    footer: "Alles gericht op efficiëntie, schaalbaarheid en gebruikservaring."
  },
  {
    title: "Rechten & Juridisch Advies",
    subtitle: "Strategische Zekerheid",
    description: "Wanneer juridische complexiteit impact heeft op jouw onderneming of situatie, bied ik strategisch advies en begeleiding.",
    icon: "fas fa-scale-balanced",
    accent: "from-amber-500/20 to-orange-400/20",
    borderAccent: "group-hover:border-amber-500/50",
    categories: [
      {
        name: "Expertisegebieden",
        items: [
          "Strafrecht",
          "Bedrijfsrecht",
          "Bestuursrecht"
        ]
      }
    ],
    footer: "Discreet, professioneel en oplossingsgericht."
  },
  {
    title: "Multimedia & Creatie",
    subtitle: "Impactvolle Beleving",
    description: "Sterke merken communiceren visueel én auditief op hoog niveau.",
    icon: "fas fa-photo-video",
    accent: "from-rose-500/20 to-red-400/20",
    borderAccent: "group-hover:border-rose-500/50",
    categories: [
      {
        name: "Video & Visual",
        items: [
          "Video editing & sfeerbeelden",
          "Motion graphics",
          "3D design & animatie",
          "Grafische vormgeving",
          "Infographics"
        ]
      },
      {
        name: "Audio & Muziek",
        items: [
          "Muziekproductie",
          "Songwriting",
          "Vocalen & voice-overs",
          "Mix & master"
        ]
      }
    ],
    footer: "Van concept tot eindproduct: professioneel en onderscheidend."
  },
  {
    title: "Finance",
    subtitle: "Structuur Achter de Groei",
    description: "Sterke resultaten beginnen bij financiële controle.",
    icon: "fas fa-chart-line",
    accent: "from-cyan-500/20 to-blue-400/20",
    borderAccent: "group-hover:border-cyan-500/50",
    categories: [
      {
        name: "Financieel Inzicht",
        items: [
          "Winst op papier betekent niets zonder controle over timing.",
          "Cashflow is de zuurstof van elke onderneming.",
          "TGC (Time Gap Cashflow): strategisch beheren van tijd tussen inkomsten en uitgaven."
        ]
      }
    ],
    footer: "Grip op cijfers betekent grip op groei."
  }
];

export default function Services() {
  useEffect(() => {
    document.title = 'Mijn Diensten | Jamal Drenthe';
  }, []);

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70"
            >
              <span className="w-2 h-2 rounded-full bg-primary" /> Expertise & Aanbod
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white font-montserrat drop-shadow-sm"
            >
              Mijn Diensten
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/70 max-w-2xl mx-auto"
            >
              Van strategie tot executie. Ik lever resultaat op het snijvlak van commercie, techniek en creativiteit.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className={`group relative glass rounded-3xl p-8 border border-white/10 hover:bg-white/[0.03] transition-all duration-300 ${service.borderAccent}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.accent} rounded-3xl blur-xl`} />
                
                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary font-medium tracking-wide uppercase">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <i className={`${service.icon} text-xl`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Categories */}
                  <div className="space-y-6">
                    {service.categories.map((cat, catIdx) => (
                      <div key={catIdx} className="space-y-3">
                        {cat.name && service.categories.length > 1 && (
                          <h3 className="text-sm font-semibold text-white/90 border-b border-white/10 pb-2 inline-block">
                            {cat.name}
                          </h3>
                        )}
                        <ul className="space-y-2">
                          {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm text-white/70">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 mt-auto border-t border-white/5">
                    <p className="text-sm font-medium text-white/90 italic">
                      {service.footer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
