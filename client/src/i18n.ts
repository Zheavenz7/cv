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
        description2: "Ik ben een analytisch ingestelde professional met ervaring op het snijvlak van technologie, strategie en communicatie. Ik werk systematisch, denk risico-bewust en ben sterk in het vertalen van complexe informatie naar duidelijke, toepasbare oplossingen. Door mijn achtergrond in IT, cybersecurity, sales en marketing begrijp ik zowel de technische als de commerciële belangen binnen een organisatie. Ik werk nauwkeurig, ben onderzoekend ingesteld en kan snel schakelen tussen inhoud, proces en uitvoering. Mijn focus ligt op betrouwbaarheid, structuur en het creëren van duurzame waarde in elke omgeving waarin ik werk.",
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
        description2: "I am an analytically-minded professional with experience at the intersection of technology, strategy, and communication. I work systematically, think risk-consciously, and excel at translating complex information into clear, applicable solutions. With my background in IT, cybersecurity, sales, and marketing, I understand both the technical and commercial interests within an organization. I work accurately, have an investigative mindset, and can quickly switch between content, process, and execution. My focus is on reliability, structure, and creating sustainable value in every environment in which I work.",
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
