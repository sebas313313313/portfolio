import React from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ 
  title = '', 
  description = '', 
  image = '', 
  demoLink = '#', 
  githubLink = '#', 
  tags = [] 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-center"
        >
          Ver Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 text-sm font-medium text-purple-300 border border-purple-600/50 rounded-lg hover:bg-purple-600/20 transition-colors text-center"
        >
          Ver Código
        </a>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
