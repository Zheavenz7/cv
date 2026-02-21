import { useEffect } from 'react';
import Footer from "@/components/Footer";

export default function About() {
  useEffect(() => {
    document.title = 'Over Mij | Jamal Drenthe';
  }, []);

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="w-2 h-2 rounded-full bg-primary/80" /> Over Mij
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-montserrat drop-shadow-sm">Visie, Structuur, Actie</h1>
            <p className="text-base text-white/70 max-w-3xl mx-auto">Strategisch denken gekoppeld aan pragmatische uitvoering. Ik bouw helderheid, ritme en resultaat.</p>
          </div>

          <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
            <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl shadow-primary/10 border border-white/5">
              <p className="text-lg text-white leading-relaxed">
                Mijn onderscheidend vermogen zit in mijn manier van denken. Ik kijk niet alleen naar wat zichtbaar is, maar analyseer wat eronder ligt. Patronen, structuren, gedragingen en kansen die anderen over het hoofd zien, zijn voor mij het startpunt.
              </p>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Kernwaarden</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[{
                    title: 'Diepgang boven oppervlakkigheid',
                    body: 'Ik stel scherpe vragen en neem geen genoegen met halve antwoorden. Beslissingen moeten gefundeerd zijn, niet impulsief.'
                  }, {
                    title: 'Verantwoordelijkheid boven excuses',
                    body: 'Ik neem eigenaarschap. Resultaat is geen toeval, maar het gevolg van bewuste keuzes en consistent handelen.'
                  }, {
                    title: 'Lange termijn boven snelle winst',
                    body: 'Ik bouw liever iets dat blijft, dan iets dat snel piekt en weer verdwijnt. Duurzame waarde is voor mij leidend.'
                  }].map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-4 border border-white/10 shadow-md shadow-primary/5 h-full">
                      <p className="font-semibold text-white mb-1.5">{item.title}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-white/85 leading-relaxed">
                <p>Wat mij echt onderscheidt, is dat ik zowel het grote plaatje zie als de details beheers. Ik schakel moeiteloos tussen visie en uitvoering. Tussen strategie en actie.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-white/10 shadow-lg">
                <h3 className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">Snelle blik</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary/80" />
                    <div>
                      <p className="font-semibold text-white">Strategisch & pragmatisch</p>
                      <p>Combineert visie met uitvoering en ritme.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary/80" />
                    <div>
                      <p className="font-semibold text-white">Eindverantwoordelijkheid</p>
                      <p>Neemt eigenaarschap en levert voorspelbaar resultaat.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary/80" />
                    <div>
                      <p className="font-semibold text-white">Langetermijnwaarde</p>
                      <p>Bouwt duurzame oplossingen i.p.v. korte pieken.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/10 shadow-lg">
                <h3 className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {["Visie", "Structuur", "Actie", "Eigenaarschap", "Duurzame waarde"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
