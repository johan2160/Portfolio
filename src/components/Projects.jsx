import { projects } from "./Project/projectsData.js";
import ProjectCard from "./Project/ProjectCard.jsx";
import { motion } from "motion/react";

const Portfolio = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center mt-64 md:mt-80 xl:mt-96 pt-4 bg-background text-content text-center text-[2rem]"
    >
      <h2 className="mb-16 text-3xl md:text-5xl">Mis Proyectos</h2>
      <div className="flex flex-col max-w-5xl text-base gap-14">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={revealVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
