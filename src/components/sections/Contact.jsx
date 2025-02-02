import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SplitText } from "../animations/SplitText";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from "../ui/Icons";

const Contact = () => {
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
      await emailjs.send(
        'service_7inu4sb',
        'template_kg5ir0p',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sebastian',
          to_email: 'potoslipig8@gmail.com'
        },
        'bX36MolOlDhV6QsdG'
      );

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            text="Contáctame"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4"
          />
          <SplitText
            text="¿Tienes un proyecto en mente? ¡Hablemos!"
            className="text-xl text-gray-400"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                ¡Trabajemos juntos!
              </h3>
              <p className="text-gray-400">
                Estoy disponible para proyectos freelance, colaboraciones y
                oportunidades laborales. No dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:potosliping8@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>potosliping8@gmail.com</span>
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
                href="https://www.linkedin.com/in/sebastian-campo-069356303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient
              containerClassName="w-full"
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500"
            >
              <form
                onSubmit={handleSubmit}
                className="relative bg-black/90 backdrop-blur-xl p-8 rounded-xl space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
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
