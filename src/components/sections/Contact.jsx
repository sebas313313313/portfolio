import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SplitText } from "../animations/SplitText";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from "../ui/Icons";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando...' });

    try {
      const result = await emailjs.send(
        'service_7inu4sb',
        'template_kg5ir0p',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_name: 'Sebastian',
          to_email: 'potoslipig8@gmail.com'
        },
        'bX36MolOlDhV6QsdG'
      );

      console.log('SUCCESS!', result.text);
      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito!'
      });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
      });
    }
  };

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
              <p className="text-gray-400">
                Estoy disponible para proyectos freelance, colaboraciones y
                oportunidades laborales. No dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:potoslipig8@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>potoslipig8@gmail.com</span>
              </a>
              <a
                href="https://github.com/sebas313313313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu mensaje aquí..."
                />
              </div>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 transition-all duration-200"
              >
                {status.type === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {status.message && (
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
