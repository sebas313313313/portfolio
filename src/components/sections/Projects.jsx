import React from 'react';
import SpotlightCard from '../cards/SpotlightCard';
import { SplitText } from "../animations/SplitText";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1. Tecnologías utilizadas y detalles importantes.",
    image: "https://placehold.co/800x600/1a1a1a/646464",
    demoLink: "#",
    githubLink: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2. Tecnologías utilizadas y detalles importantes.",
    image: "https://placehold.co/800x600/1a1a1a/646464",
    demoLink: "#",
    githubLink: "#",
    tags: ["Next.js", "Tailwind", "Firebase"]
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3. Tecnologías utilizadas y detalles importantes.",
    image: "https://placehold.co/800x600/1a1a1a/646464",
    demoLink: "#",
    githubLink: "#",
    tags: ["React Native", "Express", "PostgreSQL"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          <SplitText text="Mis Proyectos" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <SpotlightCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
