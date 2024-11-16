import { RiCloseCircleLine, RiMenu3Line, RiMoonLine, RiSunLine } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

const Navbar = ({ name, link1, link2, link3 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system'); 

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', mode);
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const detectSystemTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    setTheme(systemTheme);
    applyTheme(systemTheme);
  };

  useEffect(() => {
    if (theme === 'system') {
      detectSystemTheme();
    } else {
      applyTheme(theme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => detectSystemTheme();

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className='relative flex justify-center p-3 text-primary md:bg-primary md:text-content2 md:py-6 md:px-14 xl:px-40'>
      <div className='w-full max-w-[1200px] flex justify-between'>
        <h3 className='text-2xl'>{name}</h3>
        <ul className={`flex flex-col justify-between left-0 right-0 gap-8 rounded-b-md px-3 pt-3 pb-10 fixed z-50 top-0 md:rounded-br-0 md:flex-row md:gap-8 md:p-0 md:static bg-primary opacity-90 text-content2 transition-position ease-in-out duration-300 ${isMenuOpen ? 'top-0' : 'top-[-600px]'}`}>
          <div className='flex justify-end md:hidden'>
            <RiCloseCircleLine className='cursor-pointer' size={28} onClick={closeMenu} />
          </div>
          <li>
            <a href="#info" className='flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-content2 md:font-medium uppercase md:capitalize' onClick={closeMenu}>
              {link1}
            </a>
          </li>
          <li>
            <a href="#portfolio" className='flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent hover:border-content2 md:font-medium uppercase md:capitalize' onClick={closeMenu}>
              {link2}
            </a>
          </li>
          <li>
            <a href="#contactme" className='flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-content2 md:font-medium uppercase md:capitalize' onClick={closeMenu}>
              {link3}
            </a>
          </li>
          
          {theme !== 'light' && (
            <li className='flex items-center justify-center gap-2'>
              <p className='uppercase cursor-pointer md:hidden' onClick={() => changeTheme('light')}>Modo claro</p>
              <RiSunLine className='cursor-pointer' onClick={() => changeTheme('light')}/>
            </li>
          )}

          {theme !== 'dark' && (
            <li className='flex items-center justify-center gap-2'>
              <p className='uppercase cursor-pointer md:hidden' onClick={() => changeTheme('dark')}>Modo oscuro</p>
              <RiMoonLine className='cursor-pointer' onClick={() => changeTheme('dark')}/>
            </li>
          )}
        </ul>
        <RiMenu3Line className='cursor-pointer md:hidden' onClick={toggleMenu} />
      </div>
    </section>
  );
};

export default Navbar;
