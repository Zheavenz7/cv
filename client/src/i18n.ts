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
        title: "Senior Consultant | Full Stack Developer | Recht & Business Strategie",
        cta: "Bekijk Mijn Werk",
        contact: "Neem Contact Op"
      },
      about: {
        title: "Over Mij",
        subtitle: "Ster in IT en Recht!",
        description1: "Gediplomeerd in Communicatie, Marketing, Business & Sales.",
        description2: "Ik ben een gepassioneerde Full Stack Developer met een unieke achtergrond in Recht en Marketing. Mijn aanpak combineert technische precisie met een diep begrip van zakelijke behoeften en juridische kaders.",
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
        description: "Senior Consultant | Full Stack Developer | Recht & Strategie"
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
        title: "Senior Consultant | Full Stack Developer | Legal & Business Strategy",
        cta: "View My Work",
        contact: "Get In Touch"
      },
      about: {
        title: "About Me",
        subtitle: "Star in IT and Law!",
        description1: "Degree in Communication, Marketing, Business & Sales.",
        description2: "I am a passionate Full Stack Developer with a unique background in Law and Marketing. My approach combines technical precision with a deep understanding of business needs and legal frameworks.",
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
        description: "Senior Consultant | Full Stack Developer | Legal & Strategy"
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
