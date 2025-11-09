import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

interface PageContentProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageLayout: FC<{
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}> = ({ children, title, description = '', className = '' }) => {
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
};

export const PageContent: FC<PageContentProps> = ({
  title,
  description = '',
  children,
  className = ''
}) => {
  return (
    <PageLayout title={title} description={description} className={className}>
      <div className={cn('max-w-4xl mx-auto', className)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl"
        >
          {children || (
            <div className="text-center py-12">
              <p className="text-lg text-gray-300">
                This page is currently under construction. Please check back soon for updates!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  );
};

// Generate page components based on navigation items
export function generatePages(navItems: NavItem[]): Record<string, FC> {
  const pages: Record<string, FC> = {};

  const processItem = (item: NavItem, parentPath = '') => {
    const path = parentPath ? `${parentPath}/${item.id}` : `/${item.id}`;
    
    // Skip home as it's handled separately
    if (item.id !== 'home') {
      pages[path] = () => (
        <PageContent 
          title={item.label}
          description={`Explore ${item.label} - ${item.label} information and related content.`}
        >
          <div className="prose prose-invert max-w-none">
            <h2>What is {item.label}?</h2>
            <p>
              Welcome to the {item.label} section. Here you'll find comprehensive information about {item.label.toLowerCase()}, 
              including my experience, projects, and services related to this area.
            </p>
            
            {item.children && item.children.length > 0 && (
              <div className="mt-8">
                <h3>Explore {item.label}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {item.children.map((child) => (
                    <a
                      key={child.id}
                      href={child.href}
                      className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
                    >
                      <h4 className="text-lg font-semibold text-primary">{child.label}</h4>
                      <p className="mt-1 text-sm text-gray-300">
                        Learn more about {child.label.toLowerCase()}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PageContent>
      );
    }

    // Process children recursively
    if (item.children) {
      item.children.forEach((child) => processItem(child, path));
    }
  };

  // Process all navigation items
  navItems.forEach(item => processItem(item));

  return pages;
}

// Helper function to get page component for a given path
export function getPageComponent(
  path: string, 
  navItems: NavItem[], 
  defaultComponent: FC = () => (
    <PageContent title="Page Not Found">
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-gray-300">The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </PageContent>
  )
): FC {
  const pages = generatePages(navItems);
  return pages[path] || defaultComponent;
}
