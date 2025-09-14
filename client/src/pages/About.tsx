import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About Me | Jamal Drenthe';
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="max-w-3xl mx-auto bg-darkBg/50 p-8 rounded-lg">
          {/* Add your about content here */}
          <p className="text-lg mb-4">
            I'm a passionate developer with experience in building modern web applications.
          </p>
        </div>
      </section>
    </div>
  );
}
