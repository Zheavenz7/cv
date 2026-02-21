import { useEffect } from 'react';
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Jamal Drenthe';
  }, []);

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="w-2 h-2 rounded-full bg-primary/80" /> Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-montserrat drop-shadow-sm">Laten we schakelen</h1>
            <p className="text-base text-white/70 max-w-3xl mx-auto">Voor projecten, samenwerking of een snelle call. Ik reageer doorgaans binnen 24 uur.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-6">
            <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-6 border border-white/5 shadow-2xl shadow-primary/10">
              <h2 className="text-2xl font-bold text-primary">Laten we praten</h2>
              <p className="text-white/80">
                Heb je een project in gedachten of wil je even sparren? Ik sta open voor nieuwe kansen en interessante gesprekken.
              </p>

              <div className="space-y-4 text-white/85">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <span>+31 6 164 111 36</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span>js.drenthe@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span>Amsterdam Centrum, Nederland</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-9 border border-white/10 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-white/70">Naam</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-white/70">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                      placeholder="jouw@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-white/70">Onderwerp</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                    placeholder="Waar gaat het over?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white/70">Bericht</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/80 outline-none transition-all resize-none"
                    placeholder="Schrijf hier je bericht..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-darkBg font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  <Send size={18} />
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
