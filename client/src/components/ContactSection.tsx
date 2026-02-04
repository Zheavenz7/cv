import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const { toast } = useToast();
  
  const { location, email } = resumeData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Bericht Verzonden!",
      description: "Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-16 bg-darkBgAlt/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            Contact
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Heeft u een project in gedachten of wilt u gewoon even gedag zeggen? Neem gerust contact met me op. 
            Ik sta altijd open voor nieuwe kansen en interessante samenwerkingen.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="md:col-span-2 space-y-8"
              initial={{ x: -50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-darkBg/60 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-3"></i>Locatie
                </h3>
                <p>{location}</p>
                <p className="mt-2">Beschikbaar voor werk op afstand</p>
              </div>
              
              <div className="bg-darkBg/60 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-envelope text-primary mr-3"></i>Email
                </h3>
                <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
              </div>
              
              <div className="bg-darkBg/60 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <i className="fas fa-share-alt text-primary mr-3"></i>Sociale Media
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/jamaldrenthe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          
            <motion.div 
              className="md:col-span-3"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-darkBg/60 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Stuur me een bericht</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-darkBg/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                      placeholder="Jouw naam" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-darkBg/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                      placeholder="jouw.email@voorbeeld.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Onderwerp</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-darkBg/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                      placeholder="Waar gaat dit over?" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Bericht</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-darkBg/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300" 
                      placeholder="Jouw bericht hier..." 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  >
                    Bericht Verzenden
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
