import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  nl: {
    translation: {
      nav: {
        home: "Home",
        about: "Over Mij",
        projects: "Projecten",
        contact: "Contact"
      },
      hero: {
        title: "AI-native MVP Engineer / Architect / Developer",
        subtitle: "Ik ontwerp en bouw complete producten van idee tot werkende realiteit.",
        description: "Voor startups en founders vertaal ik concepten naar launch-klare MVP's, schaalbare platformen en geautomatiseerde businesssystemen.",
        cta: "Bekijk Mijn Werk",
        contact: "Neem Contact Op"
      },
      about: {
        title: "Over Mij",
        subtitle: "Van strategie en design tot engineering, AI, data en groei — alles end-to-end.",
        description1: "Geen losse freelancers of overdrachten, maar één architect die het geheel overziet én bouwt.",
        description2: "Door mijn multidisciplinaire aanpak kan ik snel schakelen tussen creatie, technologie en strategie, en zo ideeën in weken omzetten naar echte producten.",
        skillsIntro: "Hieronder vind je de tools, technologieën en systemen waarmee ik dagelijks werk.",
        education: "Opleiding"
      },
      projects: {
        title: "Projecten",
        active: "Actief",
        exploration: "Exploratie"
      },
      contact: {
        title: "Contact",
        subtitle: "Laten we praten",
        description: "Heb je een project in gedachten of wil je gewoon even hoi zeggen? Ik sta altijd open voor nieuwe kansen en interessante gesprekken.",
        form: {
          name: "Naam",
          email: "Email",
          subject: "Onderwerp",
          message: "Bericht",
          send: "Verstuur Bericht",
          placeholders: {
            name: "Jouw naam",
            email: "jouw@email.com",
            subject: "Waar gaat het over?",
            message: "Schrijf hier je bericht..."
          }
        }
      },
      footer: {
        rights: "Alle rechten voorbehouden",
        description: "AI-native MVP Engineer / Architect / Developer"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        title: "AI-native MVP Engineer / Architect / Developer",
        subtitle: "I design and build complete products from idea to working reality.",
        description: "For startups and founders, I translate concepts into launch-ready MVPs, scalable platforms, and automated business systems.",
        cta: "View My Work",
        contact: "Get In Touch"
      },
      about: {
        title: "About Me",
        subtitle: "From strategy and design to engineering, AI, data, and growth — everything end-to-end.",
        description1: "No loose freelancers or handoffs, but one architect who oversees and builds the whole thing.",
        description2: "Through my multidisciplinary approach, I can quickly switch between creation, technology, and strategy, turning ideas into real products in weeks.",
        skillsIntro: "Below you'll find the tools, technologies, and systems I work with daily.",
        education: "Education"
      },
      projects: {
        title: "Projects",
        active: "Active",
        exploration: "Exploration"
      },
      contact: {
        title: "Contact",
        subtitle: "Let's talk",
        description: "Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
          placeholders: {
            name: "Your name",
            email: "your@email.com",
            subject: "What is it about?",
            message: "Write your message here..."
          }
        }
      },
      footer: {
        rights: "All rights reserved",
        description: "AI-native MVP Engineer / Architect / Developer"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
