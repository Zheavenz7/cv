import fs from 'fs';
import path from 'path';
import { navigationItems } from '../client/src/data/navigation';

// Ensure the pages directory exists
const pagesDir = path.join(process.cwd(), 'client', 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Template for page components
const pageTemplate = (title: string, description: string, children: string = '') => `
import { PageContent } from '@/components/layout/PageContent';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <PageContent 
      title="${title}"
      description="${description}"
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is ${title}?</h2>
        <p>
          Welcome to the ${title} section. Here you'll find comprehensive information about ${title.toLowerCase()}, 
          including my experience, projects, and services related to this area.
        </p>
        ${children}
      </div>
    </PageContent>
  );
}
`;

// Generate pages for each navigation item
function generatePages(items: any[], parentPath = '') {
  items.forEach(item => {
    // Skip home as it's handled separately
    if (item.id === 'home') return;

    const pagePath = path.join(pagesDir, ...parentPath.split('/'), item.id);
    const indexPath = path.join(pagePath, 'index.tsx');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(pagePath)) {
      fs.mkdirSync(pagePath, { recursive: true });
    }

    // Generate children links if they exist
    let childrenContent = '';
    if (item.children && item.children.length > 0) {
      childrenContent = `
        <div className="mt-8">
          <h3>Explore ${item.label}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            ${item.children.map((child: any) => `
              <a
                key="${child.id}"
                href="${child.href}"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">${child.label}</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about ${child.label.toLowerCase()}
                </p>
              </a>
            `).join('\n')}
          </div>
        </div>
      `;
    }

    // Generate the page content
    const pageContent = pageTemplate(
      item.label,
      `Explore ${item.label} - ${item.label} information and related content.`,
      childrenContent
    );

    // Write the file
    fs.writeFileSync(indexPath, pageContent.trim());
    console.log(`Generated: ${indexPath}`);

    // Process children recursively
    if (item.children) {
      generatePages(item.children, path.join(parentPath, item.id));
    }
  });
}

// Start generation
console.log('Generating pages...');
generatePages(navigationItems);
console.log('Page generation complete!');
