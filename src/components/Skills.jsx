import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { RiBootstrapFill, RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavascriptFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from '@remixicon/react';

const Skills = () => {
  const [iconSize, setIconSize] = useState(64);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(94);
      } else if (window.innerWidth >= 768) {
        setIconSize(84); 
      } else {
        setIconSize(64);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className='flex flex-col px-4 text-white items-center w-full gap-8'>
      <h2 className='mb-8 text-2xl md:text-4xl text-center'>Tecnologías</h2>
      <Marquee pauseOnHover={true} gradient={true} gradientColor='#29292e' gradientWidth={150} speed={90} className='rounded-md bg-background max-w-[1176px] md:w-11/12'>
        <div className='flex py-4'>
          <RiHtml5Fill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-htmlbg'/>
          <RiCss3Fill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-cssbg'/>
          <RiJavascriptFill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-jsbg'/>
          <RiGithubFill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-githubcolor'/>
          <RiReactjsFill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-reactcolor'/>
          <RiTailwindCssFill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-tailwindcolor'/>
          <RiBootstrapFill size={iconSize} className='mx-6 md:mx-6 xl:mx-8 text-bootstrapbg'/>
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
