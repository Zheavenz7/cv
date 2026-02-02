import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function About() {
  useEffect(() => {
    document.title = 'Over Mij | Jamal Hiwat Drenthe';
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <NavBar />
      <main className="pt-24 pb-12 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary font-montserrat">Over Mij</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Jamal Hiwat Drenthe</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Ster in IT en Recht! Gediplomeerd in Communicatie, Marketing, Business & Sales.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ik ben een gepassioneerde Full Stack Developer met een unieke achtergrond in Recht en Marketing. 
              Mijn aanpak combineert technische precisie met een diep begrip van zakelijke behoeften en juridische kaders.
            </p>
          </div>
          <div className="bg-darkBgAlt p-8 rounded-xl border border-primary/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-primary">Opleiding</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">HBO-Rechten</div>
                <div className="text-sm text-gray-400">Hogeschool Utrecht (2014 - 2018)</div>
              </li>
              <li>
                <div className="font-semibold">MHBO Marketing & Communicatie</div>
                <div className="text-sm text-gray-400">Regio College Zaandam (2012 - 2014)</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-montserrat">Ervaring</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-darkBgAlt p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <div className="text-primary mb-2">Spontiva LTD | 2022 - 2023</div>
              <p className="text-gray-400">End-to-End Developer | Fullstack Specialist</p>
            </div>
            <div className="bg-darkBgAlt p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold">Freelancer</h3>
              <div className="text-primary mb-2">Temper Amsterdam | 2016 - 2024</div>
              <p className="text-gray-400">Uitgebreide ervaring in diverse rollen waaronder Event Manager en Bar Manager bij top-locaties in Amsterdam.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
