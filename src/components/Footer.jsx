import React from 'react'
import { RiFacebookBoxFill, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';


const Footer = ({name}) => {
  return (
    <footer className='flex flex-col items-center gap-4 px-4 py-5 mt-64 text-center text-content2 md:mt-80 xl:mt-96 xl:py-10 bg-primary'>
      <div className='w-full flex flex-col gap-6 md:gap-8 items-center xl:flex-row xl:justify-between max-w-[1200px]'>
        <h3 className='text-2xl'>{name}</h3>
        <p>Thanks for taking the time of navigating my Portfolio 🎊</p>
        <ul className='flex gap-6'>
            <a href='https://github.com/johan2160' target='_blank'><RiGithubFill className='transition-colors text-content2 hover:text-selectionbg' /></a>
            <a href='https://www.linkedin.com/in/johan-carrasco-493a85319' target='_blank'><RiLinkedinBoxFill className='transition-colors text-content2 hover:text-selectionbg' /></a>
            <a href='https://www.facebook.com/' target='_blank'><RiFacebookBoxFill className='transition-colors text-content2 hover:text-selectionbg' /></a>
          </ul>
      </div>
    </footer>
  )
}

export default Footer