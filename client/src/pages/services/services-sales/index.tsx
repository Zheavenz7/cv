import { PageContent } from '@/components/layout/PageContent';

export default function SalesPage() {
  return (
    <PageContent 
      title="Sales"
      description="Explore Sales - Sales information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Sales?</h2>
        <p>
          Welcome to the Sales section. Here you'll find comprehensive information about sales, 
          including my experience, projects, and services related to this area.
        </p>
        
      </div>
    </PageContent>
  );
}