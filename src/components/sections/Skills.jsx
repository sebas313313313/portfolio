import React from 'react';
import SpotlightCard from '../cards/SpotlightCard';

const skills = [
  {
    category: "Desarrollo Frontend",
    items: ["React", "Vue", "Bootstrap"],
    icon: "🎨"
  },
  {
    category: "Desarrollo Backend",
    items: ["Node.js", "Express.js", "Laravel (PHP)"],
    icon: "⚙️"
  },
  {
    category: "Lenguajes",
    items: ["JavaScript", "Python", "PHP"],
    icon: "💻"
  },
  {
    category: "Herramientas y Metodologías",
    items: ["Git", "Agile", "SCRUM"],
    icon: "🛠️"
  },
  {
    category: "Seguridad",
    items: ["OWASP ZAP", "Pruebas de software", "Ciberseguridad"],
    icon: "🔒"
  },
  {
    category: "Competencias",
    items: ["Análisis y resolución de problemas", "Trabajo en equipo", "Comunicación", "Aprendizaje continuo"],
    icon: "🎯"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SpotlightCard 
              key={index}
              className="p-6" 
              spotlightColor="rgba(99, 102, 241, 0.15)"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
