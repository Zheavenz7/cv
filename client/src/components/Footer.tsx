import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/[0.04] text-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/in/jamaldrenthe/", icon: "fab fa-linkedin", label: "LinkedIn" },
              { href: "https://github.com/jamaldrenthe", icon: "fab fa-github", label: "GitHub" },
              { href: "mailto:info@jamaldrenthe.com", icon: "fas fa-envelope", label: "Contact" }
            ].map((social, i) => (
              <motion.a 
                key={social.label}
                href={social.href} 
                aria-label={social.label} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/20 hover:bg-primary/[0.05] transition-all duration-200"
                whileHover={{ scale: 1.2, y: -3, rotate: i % 2 === 0 ? 6 : -6 }}
                whileTap={{ scale: 0.85 }}
              >
                <i className={`${social.icon} text-xs`}></i>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs text-gray-600">
            <p>&copy; {currentYear} Jamal Drenthe</p>
            <span className="hidden md:block">·</span>
            <p>{t('footer.rights')}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
