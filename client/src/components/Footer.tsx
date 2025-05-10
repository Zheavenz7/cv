import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-darkBg text-center text-gray-400">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {currentYear} Jamal Drenthe. All rights reserved.
        </motion.p>
        <motion.p 
          className="mt-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer | Web & Mobile | UI/UX | 3D & Audio Integrations
        </motion.p>
      </div>
    </footer>
  );
}
