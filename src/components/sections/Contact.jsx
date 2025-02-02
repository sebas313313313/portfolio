import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SplitText } from "../animations/SplitText";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from "../ui/Icons";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando...' });

    try {
      const result = await emailjs.sendForm(
        'service_7inu4sb',
        'template_kg5ir0p',
        formRef.current,
        'bX36MolOlDhV6QsdG'
      );

      console.log('SUCCESS!', result.text);
      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito!'
      });
      setFormData({ name: '', email: '', message: '' });
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
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
      <div className="container">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <SplitText text="Contáctame" />
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <BackgroundGradient className="p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:potoslipig8@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>potoslipig8@gmail.com</span>
                </a>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/sebas313313313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <LinkedInIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundGradient className="p-8 rounded-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tu mensaje aquí..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
                >
                  {status.type === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center p-3 rounded-lg ${
                      status.type === 'success' ? 'bg-green-600/20 text-green-400' : 
                      status.type === 'error' ? 'bg-red-600/20 text-red-400' : 
                      'bg-gray-600/20 text-gray-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
