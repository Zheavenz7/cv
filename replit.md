# Jamal Drenthe Portfolio

## Overview

A personal portfolio website for Jamal Hiwat Drenthe, a Full Stack Developer with expertise in IT, Law, and Sales. The site showcases professional experience, skills, projects, and contact information with an interactive particle background animation and modern UI design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state (prepared for future API use)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Development**: tsx for TypeScript execution
- **Build**: esbuild bundles server code for production
- **API Structure**: RESTful endpoints under `/api` prefix
- **Storage**: In-memory storage interface (MemStorage class) with prepared schema for database migration

### Key Design Patterns
- **Component-Based UI**: Reusable React components organized by feature and UI primitives
- **Custom Hooks**: `useOnScreen` for intersection observer, `use-mobile` for responsive detection
- **Data Separation**: Resume/portfolio data centralized in `resumeData.ts` for easy content updates
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

### Interactive Background System
The site features a canvas-based particle animation system that responds to mouse movement. Particles magnetize toward the cursor, connect with hue-shifting lines, and include dust particles for texture. The system supports click explosions and auto-drift behavior.

### Theming
- Default dark theme with blue primary accent colors
- Black-and-white toggle mode available via CSS class switching
- CSS variables enable easy theme customization

## External Dependencies

### UI Framework
- **Radix UI**: Complete primitive component set (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-styled components using Radix primitives
- **Lucide React**: Icon library

### Database (Prepared)
- **Drizzle ORM**: Schema defined in `shared/schema.ts` with PostgreSQL table definitions
- **Drizzle-Zod**: Schema validation integration
- Current storage is in-memory; database can be added by configuring PostgreSQL connection

### Development Tools
- **Vite Plugins**: React plugin, Replit-specific plugins for error overlay and cartographer
- **Cross-env**: Environment variable handling across platforms
- **TypeScript**: Strict mode enabled with bundler module resolution