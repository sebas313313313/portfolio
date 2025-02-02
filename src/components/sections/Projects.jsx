import React from 'react';
import SpotlightCard from '../cards/SpotlightCard';
import { SplitText } from "../animations/SplitText";

// Esta estructura se actualizará con tus proyectos reales
const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1. Tecnologías utilizadas y detalles importantes.",
    image: "https://via.placeholder.com/400x300",
    demoLink: "#",
    githubLink: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2. Tecnologías utilizadas y detalles importantes.",
    image: "https://via.placeholder.com/400x300",
    demoLink: "#",
    githubLink: "#",
    tags: ["Next.js", "Tailwind", "Firebase"]
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3. Tecnologías utilizadas y detalles importantes.",
    image: "https://via.placeholder.com/400x300",
    demoLink: "#",
    githubLink: "#",
    tags: ["React Native", "Express", "PostgreSQL"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard 
              key={index}
              className="p-6 h-[400px]" 
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="relative h-full flex flex-col">
                {project.image && (
                  <div className="relative h-48 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      Demo en vivo
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
