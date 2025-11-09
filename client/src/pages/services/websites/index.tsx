import { ServicePageTemplate } from '@/templates/ServicePageTemplate';

export default function WebsitesServicePage() {
  return (
    <ServicePageTemplate
      title="Website Development Services"
      description="Professional website development services to establish your online presence with modern, responsive, and high-performing websites."
      serviceOverview="Transform your online presence with our custom website development services. We create fast, responsive, and visually stunning websites that drive results. Whether you need a simple portfolio site, a business website, or a complex web application, we've got you covered."
      features={[
        {
          title: "Responsive Design",
          description: "Websites that look and work perfectly on all devices, from desktops to smartphones."
        },
        {
          title: "SEO Optimized",
          description: "Built with search engine optimization best practices to help you rank higher in search results."
        },
        {
          title: "Fast Performance",
          description: "Lightning-fast loading times with optimized code and assets for better user experience."
        },
        {
          title: "Custom Development",
          description: "Tailored solutions to meet your specific business needs and requirements."
        },
        {
          title: "Content Management",
          description: "Easy-to-use CMS integration so you can update your content without technical knowledge."
        },
        {
          title: "Security First",
          description: "Robust security measures to protect your website and user data."
        }
      ]}
      processSteps={[
        {
          title: "Discovery & Planning",
          description: "We start by understanding your business goals, target audience, and requirements to create a solid plan."
        },
        {
          title: "Design & Wireframing",
          description: "Our designers create wireframes and mockups to visualize the layout and user experience."
        },
        {
          title: "Development",
          description: "Our developers bring the design to life with clean, efficient, and maintainable code."
        },
        {
          title: "Testing & Refinement",
          description: "Rigorous testing across devices and browsers to ensure everything works perfectly."
        },
        {
          title: "Launch & Support",
          description: "We handle the deployment and provide ongoing support to keep your website running smoothly."
        }
      ]}
      technologies={[
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 
        'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'
      ]}
      ctaTitle="Ready to build your dream website?"
      ctaDescription="Let's discuss your project and create something amazing together."
      ctaButtonText="Get Started"
    />
  );
}
