import { RiCloseLine, RiGitRepositoryLine, RiHomeLine, RiMenu3Line, RiMailLine } from '@remixicon/react'
import React, { useState } from 'react'

const Navbar = ({name, link1, link2, link3}) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <section className='relative flex justify-center p-3 text-primary md:bg-primary md:text-black md:py-6 md:px-14 xl:px-40'>
      <div className='w-full max-w-[1200px] flex justify-between'>
        <h3 className='text-2xl'>{name}</h3>
        <ul className={`flex flex-col gap-8 rounded-br-[80px] px-3 pt-3 pb-10 fixed z-50 top-0 md:rounded-br-0 md:flex-row md:gap-8 md:p-0 md:static bg-primary text-black transition-position ease-in-out duration-300 ${isMenuOpen ? 'left-0' : 'left-[-200%]'}`}>
          <div className='flex gap-32 md:hidden'>
            <h3 className='text-2xl'>{name}</h3>
            <RiCloseLine className='cursor-pointer' onClick={closeMenu}></RiCloseLine>
          </div>
          <li className='flex transition-colors gap-3 md:md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-black md:font-medium'><RiHomeLine className='md:hidden' /> <a href="#info" onClick={closeMenu}>{link1}</a></li>
          <li className='flex transition-colors gap-3 md:md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent hover:border-black md:font-medium'><RiGitRepositoryLine className='md:hidden' /><a href="#portfolio" onClick={closeMenu}>{link2}</a></li>
          <li className='flex transition-colors gap-3 md:md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-black md:font-medium'><RiMailLine className='md:hidden' /><a href="#contactme" onClick={closeMenu}>{link3}</a></li>
        </ul>
        <RiMenu3Line className='cursor-pointer md:hidden' onClick={toggleMenu}></RiMenu3Line>
      </div>
    </section>
  )
} 

export default Navbar