import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.2
    }
  }
};

const modalVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const InfoModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Fondo con efecto de blur y partículas */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            variants={modalVariants}
            onClick={e => e.stopPropagation()}
            className="relative bg-gray-800/90 p-8 rounded-xl max-w-md w-full shadow-2xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Efecto de brillo en las esquinas */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
            
            <motion.div variants={contentVariants} initial="hidden" animate="visible" className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                {project.title}
              </motion.h3>

              <motion.p 
                variants={itemVariants}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Este proyecto se encuentra bajo acuerdos de confidencialidad debido a su naturaleza institucional. 
                Para obtener más información sobre sus características y alcance, por favor contacte al coordinador del proyecto:
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4 text-gray-300">
                <motion.div 
                  className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-3 text-xl">📱</span>
                  <a 
                    href={`tel:${project.privateInfo.phone}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {project.privateInfo.phone}
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-3 text-xl">📧</span>
                  <a 
                    href={`mailto:${project.privateInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {project.privateInfo.email}
                  </a>
                </motion.div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={onClose}
                className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
