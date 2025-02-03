import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../cards/SpotlightCard';
import { SplitText } from '../animations/SplitText';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, GitHubIcon, LinkedInIcon, PhoneIcon, InstagramIcon } from "../ui/Icons";

const SERVICE_ID = 'service_xdi9sf5';
const TEMPLATE_ID = 'template_kg5lr0p';
const PUBLIC_KEY = 'bX36MolOlDhV6QsdG';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'loading', message: 'Enviando...' });

      const formData = new FormData(form.current);
      const templateParams = {};
      for (let [key, value] of formData.entries()) {
        templateParams[key] = value;
      }

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
        });
        form.current.reset();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error detallado:', error);
      
      let errorMessage = 'Hubo un error al enviar el mensaje. ';
      if (error.text && error.text.includes('template ID not found')) {
        errorMessage += 'Error en la configuración del servicio de correo. Por favor, contacta directamente a potoslipig8@gmail.com';
      } else {
        errorMessage += 'Por favor, intenta nuevamente más tarde.';
      }

      setStatus({
        type: 'error',
        message: errorMessage
      });
    }
  };

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:potoslipig8@gmail.com';
  }, []);

  const handlePhoneClick = useCallback(() => {
    window.location.href = 'tel:+573042862082';
  }, []);

  const handleSocialClick = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <SplitText text="Contáctame" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Trabajemos juntos!
              </h3>
              <p className="text-gray-400 mb-6">
                Estoy disponible para proyectos freelance, colaboraciones y
                oportunidades laborales. No dudes en contactarme.
              </p>

              <div className="space-y-3">
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>potoslipig8@gmail.com</span>
                </button>

                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>+57 304 286 2082</span>
                </button>
              </div>

              <div className="mt-6 flex gap-4">
                <button 
                  onClick={() => handleSocialClick('https://github.com/sebas313313313')}
                  className="p-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <GitHubIcon className="w-6 h-6" />
                </button>

                <button 
                  onClick={() => handleSocialClick('https://www.instagram.com/ww.sebass/')}
                  className="p-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <InstagramIcon className="w-6 h-6" />
                </button>

                <button 
                  onClick={() => handleSocialClick('https://www.linkedin.com/in/sebastian-campo-069356303')}
                  className="p-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  required
                />
              </div>
              
              <input type="hidden" name="to_name" value="Sebastian" />
              <input type="hidden" name="to_email" value="potoslipig8@gmail.com" />
              
              <div>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status?.type === 'loading'}
                >
                  {status?.type === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </motion.button>
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-400' : 
                    status.type === 'error' ? 'bg-red-500/20 text-red-400' : 
                    'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
