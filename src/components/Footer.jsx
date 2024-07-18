import React from 'react'
import { RiFacebookBoxFill, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';


const Footer = ({name, link1, link2, link3}) => {
  return (
    <footer className='flex flex-col gap-4 items-center px-4 py-5 mt-64 md:mt-80 xl:mt-96 xl:py-10 bg-primary text-black text-center'>
      <div className='w-full flex flex-col gap-6 md:gap-8 items-center xl:flex-row xl:justify-between max-w-[1200px]'>
        <h3 className='text-2xl'>{name}</h3>
        <ul className='flex items-center gap-8'>
          <li className='font-medium xl:transition-colors xl:gap-3 xl:py-1.5 xl:px-6 xl:border-2 xl:rounded-md xl:border-transparent xl:hover:border-black xl:font-medium'>
            <a href="#info">{link1}</a>
          </li>
          <li className='font-medium xl:transition-colors xl:gap-3 xl:py-1.5 xl:px-6 xl:border-2 xl:rounded-md xl:border-transparent xl:hover:border-black xl:font-medium'>
            <a href="#portfolio">{link2}</a>
          </li>
          <li className='font-medium xl:transition-colors xl:gap-3 xl:py-1.5 xl:px-6 xl:border-2 xl:rounded-md xl:border-transparent xl:hover:border-black xl:font-medium'>
            <a href="#contactme">{link3}</a>
          </li>
        </ul>
        <ul className='flex gap-6'>
            <a href='https://github.com/johan2160' target='_blank'><RiGithubFill className='transition-colors text-black hover:text-slate-800' /></a>
            <a href='https://www.linkedin.com/in/johan-carrasco-493a85319' target='_blank'><RiLinkedinBoxFill className='transition-colors text-black hover:text-slate-800' /></a>
            <a href='https://www.facebook.com/' target='_blank'><RiFacebookBoxFill className='transition-colors text-black hover:text-slate-800' /></a>
          </ul>
      </div>
    </footer>
  )
}

export default Footer