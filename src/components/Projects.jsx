import React from 'react';
import { projects } from './Project/projectsData.js';
import ProjectCard from './Project/ProjectCard.jsx';

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center mt-64 md:mt-80 xl:mt-96 pt-4 bg-background text-content text-center text-[2rem]"
    >
      <h2 className="mb-16 text-3xl md:text-5xl">Mis Proyectos</h2>
      <div className="flex flex-col max-w-5xl text-base gap-14">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
