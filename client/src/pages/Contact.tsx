import { useEffect } from 'react';
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Contact | Jamal Drenthe';
  }, []);

  return (
    <div className="text-white">
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="w-2 h-2 rounded-full bg-primary/80" /> {t('contactPage.badge')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-montserrat drop-shadow-sm">{t('contactPage.title')}</h1>
            <p className="text-base text-white/70 max-w-3xl mx-auto">{t('contactPage.description')}</p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-2 border border-white/5 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t('contactPage.location')}</h3>
                  <p className="text-sm text-white/70">{t('contactPage.locationCity')}</p>
                  <p className="text-xs text-white/50 mt-0.5">{t('contactPage.remote')}</p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-2 border border-white/5 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t('contactPage.email')}</h3>
                  <a href="mailto:info@jamaldrenthe.com" className="text-sm text-primary/80 hover:text-primary transition-colors">
                    info@jamaldrenthe.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
