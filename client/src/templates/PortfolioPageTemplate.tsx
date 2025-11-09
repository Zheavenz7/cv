import { PageContent, PageHeader, Section, CTA } from '@/components/layout/PageContent';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function PortfolioPageTemplate({
  title,
  description,
  projects = [],
  ctaTitle,
  ctaDescription,
  ctaButtonText = 'Get in Touch',
  ctaHref = '/contact',
  children,
}: {
  title: string;
  description: string;
  projects?: Array<{
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    link?: string;
    github?: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}) {
  return (
    <PageContent title={title} description={description}>
      <PageHeader 
        title={title}
        description={description}
      />
      
      <Section title="Featured Work">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              {project.image && (
                <div className="h-48 bg-gray-800 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.link && (
                  <Button asChild size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

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
