import { useEffect } from 'react';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Sales — Van Eerste Contact tot Maximale Klantwaarde',
    intro: 'Ik bouw geen losse salesacties. Ik ontwikkel winstgevende klantreizen.',
    groups: [
      {
        heading: 'Lead Activatie & Acquisitie',
        items: [
          'Telefonische acquisitie (koud & warm)',
          'Fysieke verkoop (F2F / D2D)',
          'B2B sales & strategisch relatiebeheer',
        ],
      },
      {
        heading: 'Conversie & Closing',
        items: [
          'Pre-closing (kwalificatie & positionering)',
          'High-level closing & onderhandeling',
          'Dealstructurering',
        ],
      },
      {
        heading: 'Maximale Klantwaarde',
        items: [
          'Up-selling & premium positionering',
          'Cross-selling strategieën',
          'Aftersales optimalisatie',
          'Retentie & klantloyaliteitssystemen',
        ],
      },
    ],
    outro: 'Resultaat: meer omzet per klant en duurzame groei.',
  },
  {
    title: 'Marketing — Van Zichtbaarheid naar Voorspelbare Groei',
    intro: 'Marketing is geen kostenpost, maar een groeiversneller — mits goed ingericht.',
    groups: [
      {
        heading: 'Strategieën & Kanalen',
        items: [
          'Leadgeneratie funnels',
          'Social media strategie & beheer',
          'SEO (organische vindbaarheid)',
          'Performance advertising (online & offline)',
          'Contentstrategie & creatie (video, copy, visuals)',
        ],
      },
    ],
    outro: 'Ik zorg voor meetbare impact en schaalbaarheid.',
  },
  {
    title: 'IT & Development — Digitale Systemen die Schalen',
    intro: 'Ik ontwikkel digitale infrastructuur die jouw ambities ondersteunt.',
    groups: [
      {
        heading: 'Product & Engineering',
        items: [
          'High-performance websites',
          'Maatwerk webapps',
          'Native & hybride app development',
          'SaaS-oplossingen',
          'UI/UX design (intuïtief, minimalistisch, conversiegericht)',
          'Slimme maatwerk tools & rekenmodules',
          'E-commerce ontwikkeling',
          'MVP-ontwikkeling',
          'Game development',
        ],
      },
    ],
    outro: 'Alles gericht op efficiëntie, schaalbaarheid en gebruikservaring.',
  },
  {
    title: 'Rechten & Juridisch Advies — Strategische Zekerheid',
    intro: 'Wanneer juridische complexiteit impact heeft op jouw onderneming of situatie, bied ik strategisch advies en begeleiding.',
    groups: [
      {
        heading: 'Domeinen',
        items: ['Strafrecht', 'Bedrijfsrecht', 'Bestuursrecht'],
      },
    ],
    outro: 'Discreet, professioneel en oplossingsgericht.',
  },
  {
    title: 'Multimedia & Creatie — Impactvolle Beleving',
    intro: 'Sterke merken communiceren visueel én auditief op hoog niveau.',
    groups: [
      {
        heading: 'Video & Visual',
        items: [
          'Video editing & sfeerbeelden',
          'Motion graphics',
          '3D design & animatie',
          'Grafische vormgeving',
          'Infographics',
        ],
      },
      {
        heading: 'Audio & Muziek',
        items: [
          'Muziekproductie',
          'Songwriting',
          'Vocalen & voice-overs',
          'Mix & master',
        ],
      },
    ],
    outro: 'Van concept tot eindproduct: professioneel en onderscheidend.',
  },
  {
    title: 'Finance — Structuur Achter de Groei',
    intro: 'Sterke resultaten beginnen bij financiële controle.',
    groups: [
      {
        heading: 'Cashflow & Controle',
        items: [
          'Winst op papier betekent niets zonder controle over timing.',
          'Cashflow is de zuurstof van elke onderneming.',
          'TGC (Time Gap Cashflow): strategisch beheer van timing tussen inkomsten en uitgaven.',
          'Geld laten werken vóór jou, niet andersom.',
        ],
      },
    ],
    outro: 'Grip op cijfers betekent grip op groei.',
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Jamal Drenthe';
  }, []);

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[11px] uppercase tracking-[0.2em] text-white/80 shadow-lg shadow-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" /> Services
+            </p>
+            <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat drop-shadow-sm">Mijn Services</h1>
+            <p className="text-base text-white/75 max-w-3xl mx-auto">
+              Van strategie tot uitvoering: geïntegreerde diensten die sales, marketing, tech, legal, creatie en finance verbinden tot meetbaar resultaat.
+            </p>
+          </div>
+
+          <div className="space-y-6">
+            {sections.map((section) => (
+              <section
+                key={section.title}
+                className="glass-strong rounded-3xl border border-white/10 shadow-2xl shadow-primary/10 overflow-hidden backdrop-blur-2xl"
+              >
+                <div className="relative p-8 md:p-10 space-y-6 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-black/40">
+                  <div className="flex flex-col gap-3">
+                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-semibold">
+                      <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
+                      Service Domein
+                    </div>
+                    <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat drop-shadow-sm">{section.title}</h2>
+                    <p className="text-white/80 text-base leading-relaxed">{section.intro}</p>
+                  </div>
+
+                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
+                    {section.groups.map((group) => (
+                      <div
+                        key={group.heading}
+                        className="relative rounded-2xl border border-white/10 bg-black/35 p-5 space-y-3 shadow-lg shadow-black/20 backdrop-blur-xl"
+                      >
+                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
+                          <i className="fas fa-bolt text-primary"></i>
+                          {group.heading}
+                        </div>
+                        <ul className="space-y-2 text-white/80 text-sm leading-relaxed list-none">
+                          {group.items.map((item) => (
+                            <li key={item} className="flex items-start gap-2">
+                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
+                              <span>{item}</span>
+                            </li>
+                          ))}
+                        </ul>
+                      </div>
+                    ))}
+                  </div>
+
+                  {section.outro && (
+                    <div className="flex items-center gap-2 text-sm text-white/85 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3">
+                      <i className="fas fa-check-circle text-primary"></i>
+                      <span>{section.outro}</span>
+                    </div>
+                  )}
+                </div>
+              </section>
+            ))}
+          </div>
+        </div>
+      </main>
+      <Footer />
+    </div>
+  );
+}
