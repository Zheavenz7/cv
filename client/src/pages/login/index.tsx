import { PageContent } from '@/components/layout/PageContent';

export default function InloggenPage() {
  return (
    <PageContent 
      title="Inloggen"
      description="Explore Inloggen - Inloggen information and related content."
    >
      <div className="prose prose-invert max-w-none">
        <h2>What is Inloggen?</h2>
        <p>
          Welcome to the Inloggen section. Here you'll find comprehensive information about inloggen, 
          including my experience, projects, and services related to this area.
        </p>
        
        <div className="mt-8">
          <h3>Explore Inloggen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <a
                key="login-accounts"
                href="/login/accounts"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Accounts</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about accounts
                </p>
              </a>
            

              <a
                key="login-banks"
                href="/login/banks"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Banken</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about banken
                </p>
              </a>
            

              <a
                key="login-company"
                href="/login/company-formation"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Company Formation</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about company formation
                </p>
              </a>
            

              <a
                key="login-streaming"
                href="/login/streaming"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Streaming Platformen</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about streaming platformen
                </p>
              </a>
            

              <a
                key="login-factoring"
                href="/login/factoring"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Factoring</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about factoring
                </p>
              </a>
            

              <a
                key="login-issuing"
                href="/login/issuing"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Issuing</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about issuing
                </p>
              </a>
            

              <a
                key="login-payments"
                href="/login/payments"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Payment Solutions</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about payment solutions
                </p>
              </a>
            

              <a
                key="login-bnpl"
                href="/login/bnpl"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">BNPL</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about bnpl
                </p>
              </a>
            

              <a
                key="login-flexwork"
                href="/login/flexwork"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Flexwerk Platformen</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about flexwerk platformen
                </p>
              </a>
            

              <a
                key="login-loans"
                href="/login/loans"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Loans</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about loans
                </p>
              </a>
            

              <a
                key="login-referral"
                href="/login/referral"
                className="block p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors hover:bg-white/5"
              >
                <h4 className="text-lg font-semibold text-primary">Referral</h4>
                <p className="mt-1 text-sm text-gray-300">
                  Learn more about referral
                </p>
              </a>
            
          </div>
        </div>
      
      </div>
    </PageContent>
  );
}