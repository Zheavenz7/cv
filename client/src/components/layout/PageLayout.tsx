import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function PageLayout({ 
  children, 
  title, 
  description = "Welcome to my personal portfolio and professional hub. Explore my work, services, and more.",
  className = ''
}: PageLayoutProps) {
  const router = useRouter();
  const fullTitle = `${title} | Jamal Drenthe`;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-darkBg to-darkBgDarker text-white">
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://jamaldrenthe.com${router.pathname}`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      
      <motion.main 
        className={cn("flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}
