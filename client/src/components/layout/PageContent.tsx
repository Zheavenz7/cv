import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface PageContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function PageContent({
  title,
  description,
  children,
  className = '',
}: PageContentProps) {
  const pageTitle = `${title} | Jamal Drenthe`;
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className={`container mx-auto px-4 py-12 ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
}

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="mb-12 text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p 
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}

export function Section({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mb-16 ${className}`}>
      <motion.h2 
        className="text-2xl md:text-3xl font-semibold mb-6 text-white"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

export function CTA({
  title,
  description,
  buttonText,
  buttonHref,
  className = '',
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}) {
  return (
    <motion.div 
      className={`bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <a
          href={buttonHref}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </motion.div>
  );
}
