import { PageContent } from '@/components/layout/PageContent';

export default function BooksPage() {
  return (
    <PageContent 
      title="Books"
      description="Explore Books - Books information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Books?</h2>
        <p>
          Welcome to the Books section. Here you'll find comprehensive information about books, 
          including my experience, projects, and services related to this area.
        </p>
        
      </div>
    </PageContent>
  );
}