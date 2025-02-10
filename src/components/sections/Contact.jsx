import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../cards/SpotlightCard';
import { SplitText } from '../animations/SplitText';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, GitHubIcon, LinkedInIcon, PhoneIcon, InstagramIcon } from "../ui/Icons";
import { useTranslation } from 'react-i18next';

const SERVICE_ID = 'service_xdi9sf5';
const TEMPLATE_ID = 'template_kg5lr0p';
const PUBLIC_KEY = 'bX36MolOlDhV6QsdG';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'loading', message: t('contact.status.sending') });

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
          message: t('contact.status.success')
        });
        form.current.reset();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error detallado:', error);
      
      let errorMessage = t('contact.status.error.base');
      if (error.text && error.text.includes('template ID not found')) {
        errorMessage += t('contact.status.error.template');
      } else {
        errorMessage += t('contact.status.error.generic');
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
            <SplitText text={t('contact.title')} />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('contact.cta')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('contact.availability')}
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
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {t('contact.social.title')}
              </h4>
              <div className="flex gap-4">
                <button
                  onClick={() => handleSocialClick('https://github.com/sebas313313313')}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <GitHubIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('https://www.linkedin.com/in/sebastian-campo-potosi-a3a6b9267/')}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSocialClick('https://www.instagram.com/sebas_campo_/')}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <SpotlightCard className="p-8" spotlightColor="rgba(59, 130, 246, 0.2)">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900/50 text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-900/50 text-red-300'
                      : 'bg-blue-900/50 text-blue-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status?.type === 'loading'}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status?.type === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
