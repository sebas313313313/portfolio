import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from '../ui/card-spotlight';
import SpotlightCard from '../cards/SpotlightCard';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('about.title')}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpotlightCard className="p-8" spotlightColor="rgba(139, 92, 246, 0.2)">
                <h3 className="text-2xl font-bold mb-4">{t('about.name')}</h3>
                <p className="text-gray-400 mb-4">{t('about.role')}</p>
                <p className="text-gray-400 mb-6">
                  {t('about.description1')}
                </p>
                <p className="text-gray-400 mb-6">
                  {t('about.description2')}
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Right Column - Stats & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatsCard
                  icon="🎯"
                  number={t('about.stats.commitment.number')}
                  label={t('about.stats.commitment.label')}
                  description={t('about.stats.commitment.description')}
                />
                <StatsCard
                  icon="⚡"
                  number={t('about.stats.availability.number')}
                  label={t('about.stats.availability.label')}
                  description={t('about.stats.availability.description')}
                />
                <StatsCard
                  icon="📚"
                  number={t('about.stats.certifications.number')}
                  label={t('about.stats.certifications.label')}
                  description={t('about.stats.certifications.description')}
                />
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">{t('about.achievements.security.title')}</h4>
                  <p className="text-gray-400">
                    {t('about.achievements.security.description')}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">{t('about.achievements.fullstack.title')}</h4>
                  <p className="text-gray-400">
                    {t('about.achievements.fullstack.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <SpotlightCard className="p-8" spotlightColor="rgba(59, 130, 246, 0.2)">
              <h3 className="text-2xl font-bold mb-6">{t('about.skills.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.skills.interface.title')}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React.js', 'HTML5', 'CSS3', 'JavaScript'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.skills.tools.title')}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Postman', 'npm'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.skills.backend.title')}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Node.js', 'Express', 'MongoDB', 'MySQL'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.skills.others.title')}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['API RESTful', 'Python', 'Java', 'C++'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <SpotlightCard className="p-8" spotlightColor="rgba(236, 72, 153, 0.2)">
              <h3 className="text-2xl font-bold mb-6">{t('about.education.title')}</h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                <div className="border-l-2 border-pink-500/20 pl-4 hover:border-pink-500/40 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.education.software.title')}</h4>
                  <p className="text-gray-400">{t('about.education.software.institution')}</p>
                  <p className="text-sm text-gray-500">{t('about.education.software.duration')}</p>
                </div>
                <div className="border-l-2 border-pink-500/20 pl-4 hover:border-pink-500/40 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.education.security.title')}</h4>
                  <p className="text-gray-400">{t('about.education.security.institution')}</p>
                  <p className="text-sm text-gray-500">{t('about.education.security.duration')}</p>
                </div>
                <div className="border-l-2 border-pink-500/20 pl-4 hover:border-pink-500/40 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.education.iso.title')}</h4>
                  <p className="text-gray-400">{t('about.education.iso.institution')}</p>
                  <p className="text-sm text-gray-500">{t('about.education.iso.duration')}</p>
                </div>
                <div className="border-l-2 border-pink-500/20 pl-4 hover:border-pink-500/40 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.education.excel.title')}</h4>
                  <p className="text-gray-400">{t('about.education.excel.institution')}</p>
                  <p className="text-sm text-gray-500">{t('about.education.excel.duration')}</p>
                </div>
                <div className="border-l-2 border-pink-500/20 pl-4 hover:border-pink-500/40 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-200">{t('about.education.ethical.title')}</h4>
                  <p className="text-gray-400">{t('about.education.ethical.institution')}</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon, number, label, description }) => (
  <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-2xl font-bold text-white mb-1">{number}</div>
    <div className="text-purple-400 font-medium mb-2">{label}</div>
    <div className="text-gray-400 text-sm">{description}</div>
  </div>
);

export default About;
