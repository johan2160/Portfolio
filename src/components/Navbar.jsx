import {
  RiCloseCircleLine,
  RiMenu3Line,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ name, link1, link2, link3 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="relative flex justify-center p-3 text-primary md:bg-primary md:text-content2 md:py-6 md:px-14 xl:px-40">
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        <h3 className="text-2xl">{name}</h3>
        <ul
          className={`flex flex-col justify-between gap-8 rounded-b-md px-3 pt-3 pb-10 fixed z-50 left-0 right-0 transition-position ease-in-out duration-300 ${
            isMenuOpen ? "top-0" : "-top-full"
          } md:rounded-br-0 md:flex-row md:gap-8 md:p-0 md:static md:bg-transparent md:opacity-100 bg-primary opacity-90 text-content2`}
        >
          <div className="flex justify-end md:hidden">
            <RiCloseCircleLine
              className="cursor-pointer"
              size={28}
              onClick={closeMenu}
            />
          </div>
          <li>
            <a
              href="#info"
              className="flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-content2 md:font-medium uppercase md:capitalize"
              onClick={closeMenu}
            >
              {link1}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-content2 md:font-medium uppercase md:capitalize"
              onClick={closeMenu}
            >
              {link2}
            </a>
          </li>
          <li>
            <a
              href="#contactme"
              className="flex justify-center transition-colors md:py-1.5 md:px-6 md:border-2 md:rounded-md md:border-transparent md:hover:border-content2 md:font-medium uppercase md:capitalize"
              onClick={closeMenu}
            >
              {link3}
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            {theme === "light" ? (
              <>
                <p
                  className="uppercase cursor-pointer md:hidden"
                  onClick={() => changeTheme("dark")}
                >
                  Modo oscuro
                </p>
                <RiMoonLine
                  className="cursor-pointer"
                  onClick={() => changeTheme("dark")}
                />
              </>
            ) : (
              <>
                <p
                  className="uppercase cursor-pointer md:hidden"
                  onClick={() => changeTheme("light")}
                >
                  Modo claro
                </p>
                <RiSunLine
                  className="cursor-pointer"
                  onClick={() => changeTheme("light")}
                />
              </>
            )}
          </li>
        </ul>
        <RiMenu3Line
          className="cursor-pointer md:hidden"
          size={28}
          onClick={toggleMenu}
        />
      </div>
    </section>
  );
};

export default Navbar;
