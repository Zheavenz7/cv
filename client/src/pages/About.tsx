import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageContent } from '@/data/pageContent';

export default function About() {
  const content = pageContent['about'];
  
  useEffect(() => {
    document.title = content.seo.title;
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <section className="container mx-auto py-12 max-w-6xl space-y-12">
        {/* Blurb Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {content.blurb}
          </p>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Full Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none rounded-3xl p-8 md:p-10"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {content.fullPage}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
