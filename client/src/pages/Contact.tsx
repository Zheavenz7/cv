import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Jamal Drenthe';
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <section className="container mx-auto py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="bg-darkBg/50 p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-darkBg border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-darkBg border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-darkBg border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-darkBg font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
