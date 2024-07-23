import React from 'react';
import { projects } from './cardData.js';
import { RiGithubFill, RiLinksFill } from '@remixicon/react';

const Portfolio = () => {
  const projectsCards = projects.map(project => (
    <div key={project.id} className='flex flex-col gap-5 items-center max-w-[496px] xl:flex-row xl:max-w-[1048px] xl:gap-16 rounded-md p-4'>
      {project.image && <img src={project.image} alt={project.name} className='max-w-[494px] w-full' />}
      <div className='flex flex-col items-center gap-6 xl:items-start'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl xl:text-start'>{project.name}</h3>
          <div className='flex justify-center xl:justify-start flex-wrap gap-[6px]'>
            {project.technologies.map(technology => (
              <button key={technology.name} style={{backgroundColor: technology.background}} className='flex items-center gap-1 px-2 py-1 rounded-md cursor-auto'>
                <img src={technology.icon} alt={technology.name} />
                <span className='text-sm' style={{color: technology.color}}>{technology.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 xl:items-start'>
          <p className='xl:text-start'>{project.description}</p>
          <div className='flex gap-5'>
            <a href={project.codeLink} target={project.codeLink ? '_blank' : ''} className='flex p-[10px] rounded-md gap-2 bg-darkgrey text-white hover:bg-[#272727]'>
              <RiGithubFill />
              <span>Code</span>
            </a>
            <a href={project.demoLink} target={project.demoLink ? '_blank' : ''} className='flex p-[10px] rounded-md gap-2 bg-darkgrey text-white hover:bg-[#272727] transition-colors'>
              <RiLinksFill />
              <span>Preview</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  
  return (
    <section id='portfolio' className='flex flex-col items-center mt-64 md:mt-80 xl:mt-96 pt-4 bg-background text-white text-center text-[2rem]'>
      <h2 className='mb-8 text-3xl md:text-5xl'>Mis Proyectos</h2>
      <span className='p-2 text-sm italic text-left text-gray-300 max-w-96 mb-14'>
        Nota: Los siguientes proyectos no representan mi nivel actual de habilidad, pero son los únicos disponibles en este momento para presentar en este sitio web. Serán reemplazados por proyectos más avanzados en el futuro.
      </span>
      <div className='flex flex-col max-w-5xl text-base gap-14'>
        {projectsCards}
      </div>
    </section>
  );
};

export default Portfolio;