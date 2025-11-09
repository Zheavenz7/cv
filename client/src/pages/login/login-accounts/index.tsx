import { PageContent } from '@/components/layout/PageContent';

export default function AccountsPage() {
  return (
    <PageContent 
      title="Accounts"
      description="Explore Accounts - Accounts information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Accounts?</h2>
        <p>
          Welcome to the Accounts section. Here you'll find comprehensive information about accounts, 
          including my experience, projects, and services related to this area.
        </p>
        
      </div>
    </PageContent>
  );
}