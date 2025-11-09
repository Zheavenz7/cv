import { PageContent, PageHeader, Section, CTA } from '@/components/layout/PageContent';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ServicePageTemplate({
  title,
  description,
  serviceOverview,
  features = [],
  processSteps = [],
  technologies = [],
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaHref = '/contact',
  children,
}: {
  title: string;
  description: string;
  serviceOverview: string;
  features?: Array<{ title: string; description: string }>;
  processSteps?: Array<{ title: string; description: string }>;
  technologies?: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaHref?: string;
  children?: React.ReactNode;
}) {
  return (
    <PageContent title={title} description={description}>
      <PageHeader 
        title={title}
        description={description}
      />
      
      <Section title="Service Overview">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg">{serviceOverview}</p>
        </div>
      </Section>

      {features.length > 0 && (
        <Section title="What's Included">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {processSteps.length > 0 && (
        <Section title="How It Works">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {technologies.length > 0 && (
        <Section title="Technologies We Use">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </Section>
      )}

      {children}

      <CTA
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        buttonHref={ctaHref}
        className="mt-16"
      />
    </PageContent>
  );
}
