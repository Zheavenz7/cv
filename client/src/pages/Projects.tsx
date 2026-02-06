import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  useEffect(() => {
    document.title = 'Projecten | Jamal Drenthe';
  }, []);

  const mainProjects = [
    { title: "Red Je Pakketjes", description: "Innovatie in pakketbezorging" },
    { title: "Sabi Bank", description: "Fintech oplossingen" },
    { title: "Investbotiq", description: "Investeringsautomatisering" },
    { title: "Boastplug", description: "Marketing tools" },
    { title: "Verdienende Vrienden Club", description: "Community platform" },
    { title: "DJOBBA", description: "Job matching platform" },
    { title: "IMP", description: "Impact management platform" }
  ];

  const sideProjects = [
    { title: "Lucmassage", description: "Wellness booking platform" },
    { title: "UpTown Kitchen", description: "Cloud kitchen concept" }
  ];

  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <NavBar />
      <main className="pt-24 pb-12 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary font-montserrat">Mijn Projecten</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Ik ben continu bezig met het ontwikkelen van innovatieve concepten en het bouwen van de bedrijven van morgen. 
          Mijn portfolio is verdeeld in twee gebieden: actieve hoofdprojecten en verkennende side projects.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Hoofdprojecten: Innovatie in de Praktijk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProjects.map((project, idx) => (
              <Card key={idx} className="bg-darkBgAlt border-primary/10 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs text-primary border-primary/30">Actief</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-gray-500 rounded-full"></span>
            Side Projects: Verkenningen & Toekomstige Groei
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project, idx) => (
              <Card key={idx} className="bg-darkBgAlt/50 border-gray-700 hover:border-gray-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs text-gray-500 border-gray-700">Exploratie</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
