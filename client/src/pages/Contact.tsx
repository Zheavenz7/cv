import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Jamal Hiwat Drenthe';
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <NavBar />
      <main className="pt-24 pb-12 px-4 container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary font-montserrat">Contact</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-darkBgAlt p-8 rounded-xl border border-primary/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-primary">Laten we praten</h2>
              <p className="text-gray-300 mb-8">
                Heb je een project in gedachten of wil je gewoon even hoi zeggen? 
                Ik sta altijd open voor nieuwe kansen en interessante gesprekken.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <span>+31 6 164 111 36</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span>js.drenthe@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span>Amsterdam Centrum, Nederland</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-darkBgAlt p-8 rounded-xl border border-primary/20 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Naam</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-darkBg border border-primary/10 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Jouw naam"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-darkBg border border-primary/10 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="jouw@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Onderwerp</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-darkBg border border-primary/10 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Waar gaat het over?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Bericht</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-darkBg border border-primary/10 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Schrijf hier je bericht..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-darkBg font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
