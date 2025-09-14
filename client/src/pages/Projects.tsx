import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Jamal Drenthe';
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="bg-darkBg/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>Project description goes here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
