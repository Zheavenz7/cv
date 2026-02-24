import { useState, useCallback, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/components/NavBar";
import InteractiveBackground from "@/components/InteractiveBackground";
import SearchCommand from "@/components/SearchCommand";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import CV from "@/pages/CV";
import NotFound from "@/pages/not-found";

// Layout component that includes the Navbar  
function Layout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [toggleSearch]);

  return (
    <div className="min-h-screen bg-darkBg text-white relative">
      <InteractiveBackground />
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <NavBar onSearchOpen={toggleSearch} />
        </div>
        <main className="relative pointer-events-auto">{children}</main>
      </div>
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>
      <Route path="/projects">
        <Layout>
          <Projects />
        </Layout>
      </Route>
      <Route path="/services">
        <Layout>
          <Services />
        </Layout>
      </Route>
      <Route path="/contact">
        <Layout>
          <Contact />
        </Layout>
      </Route>
      <Route path="/cv">
        <Layout>
          <CV />
        </Layout>
      </Route>
      <Route>
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
