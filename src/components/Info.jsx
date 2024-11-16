import React from 'react'
import profileImg from '/assets/images/profile-image.jpeg';
import cv from '/assets/cv-johancarrasco.pdf'
import { RiFacebookBoxFill, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import Button from './Button';

const Info = ({name, profession, btnText}) => {
  return (
    <section id='info' className='flex flex-col items-center justify-center gap-8 px-3 pt-20 text-center text-content xl:pt-0 xl:h-screen md:px-0 bg-background'>
      <div className="flex flex-col items-center max-w-md gap-8 mb-24 wrapper xl:flex-row xl:max-w-7xl xl:gap-24 ">
        <img src={profileImg} className='w-full max-w-md rounded-md shadow-gradient' alt="Profile picture" /> 
        <div className="flex flex-col items-center gap-4 xl:items-start personal-info xl:max-w-lg">
          <h1 className='text-3xl md:text-5xl'>{name}</h1>
          <h3 className='text-xl md:text-2xl text-primary'>{profession}</h3>
          <p className='text-base xl:text-left'>
          Desarrollador Full Stack autodidacta con conocimientos sólidos en Django, React, Tailwind, HTML, CSS, JavaScript y MySQL. Apasionado por el aprendizaje continuo y la creación de aplicaciones web modernas y funcionales. Me especializo en resolver problemas con soluciones escalables y centradas en el usuario, buscando mi primera oportunidad laboral para aplicar y expandir mis habilidades técnicas en proyectos desafiantes.
          </p>
          <Button text={<a href={cv} download="">{btnText}</a>}></Button>
        </div>
        <ul className='flex gap-6 xl:flex-col'>
          <a href='https://github.com/johan2160' target='_blank'><RiGithubFill className='transition-colors text-primary hover:opacity-85' /></a>
          <a href='https://www.linkedin.com/in/johan-carrasco-493a85319' target='_blank'><RiLinkedinBoxFill className='transition-colors text-primary hover:opacity-85' /></a>
          <a href='https://www.facebook.com/' target='_blank'><RiFacebookBoxFill className='transition-colors text-primary hover:opacity-85' /></a>
        </ul>
      </div>
    </section>
  )
}

export default Info