import React from 'react';
import { RiGithubFill, RiLinksFill } from '@remixicon/react';
import TechnologyBadge from './TechnologyBadge';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-5 items-center max-w-[496px] xl:flex-row xl:max-w-[1048px] xl:gap-16 rounded-md p-4">
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          className="max-w-[494px] w-full rounded-md shadow-gradient"
        />
      )}
      <div className="flex flex-col items-center gap-6 xl:items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl xl:text-start">{project.name}</h3>
          <div className="flex justify-center xl:justify-start flex-wrap gap-[6px]">
            {project.technologies.map((technology) => (
              <TechnologyBadge key={technology.name} technology={technology} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 xl:items-start">
          <p className="xl:text-start">{project.description}</p>
          <div className="flex gap-5">
            <ExternalLink
              href={project.codeLink}
              label="Code"
              icon={<RiGithubFill />}
            />
            <ExternalLink
              href={project.demoLink}
              label="Preview"
              icon={<RiLinksFill />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExternalLink = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target={href ? '_blank' : ''}
      rel="noopener noreferrer"
      className="flex p-[10px] rounded-md gap-2 bg-darkgrey text-content hover:opacity-90 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default ProjectCard;