import { PageContent } from '@/components/layout/PageContent';

export default function ProductsPage() {
  return (
    <PageContent 
      title="Products"
      description="Explore Products - Products information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Products?</h2>
        <p>
          Welcome to the Products section. Here you'll find comprehensive information about products, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="product-mining-pc"
                href="/products/mining-computer"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Mining Computer</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about mining computer
                </p>
              </a>
            

              <a
                key="product-huascabarkit"
                href="/products/huascabarkit"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">HuascaBarKit</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about huascabarkit
                </p>
              </a>
            

              <a
                key="product-special-tea"
                href="/products/special-tea"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Special Tea</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about special tea
                </p>
              </a>
            

              <a
                key="product-books"
                href="/products/books"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Books</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about books
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}