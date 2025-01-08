import React from "react";
import profileImg from "/assets/images/profile-image.webp";
import cv from "/assets/cv-johancarrasco.pdf";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import Button from "./Button";
import { motion } from "motion/react";

const Info = ({ name, profession, btnText }) => {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <section
      id="info"
      className="flex flex-col items-center justify-center gap-8 px-3 pt-20 text-center text-content xl:pt-0 xl:h-screen md:px-0 bg-background"
    >
      <motion.div
        className="flex flex-col items-center max-w-md gap-8 mb-24 wrapper xl:flex-row xl:max-w-7xl xl:gap-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
      >
        <motion.img
          src={profileImg}
          className="w-full max-w-md rounded-md shadow-gradient"
          alt="Profile picture"
          custom={0}
          loading="lazy"
          decoding="async"
        />
        <motion.div
          className="flex flex-col items-center gap-4 xl:items-start personal-info xl:max-w-lg"
          custom={1}
        >
          <h1 className="text-3xl md:text-5xl">{name}</h1>
          <h3 className="text-xl md:text-2xl text-primary">{profession}</h3>
          <p className="text-base xl:text-left">
            Desarrollador Full Stack autodidacta con conocimientos sólidos en
            Django, React, Tailwind, HTML, CSS, JavaScript y MySQL. Apasionado
            por el aprendizaje continuo y la creación de aplicaciones web
            modernas y funcionales. Me especializo en resolver problemas con
            soluciones escalables y centradas en el usuario, buscando mi primera
            oportunidad laboral para aplicar y expandir mis habilidades técnicas
            en proyectos desafiantes.
          </p>
          <Button
            text={
              <a href={cv} download="">
                {btnText}
              </a>
            }
          ></Button>
        </motion.div>
        <motion.ul className="flex gap-6 xl:flex-col" custom={2}>
          <a href="https://github.com/johan2160" target="_blank">
            <RiGithubFill className="transition-colors text-primary hover:opacity-85" />
          </a>
          <a
            href="https://www.linkedin.com/in/johan-carrasco-493a85319"
            target="_blank"
          >
            <RiLinkedinBoxFill className="transition-colors text-primary hover:opacity-85" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <RiFacebookBoxFill className="transition-colors text-primary hover:opacity-85" />
          </a>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Info;
