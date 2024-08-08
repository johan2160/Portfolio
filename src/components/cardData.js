import jsIcon from "../../public/assets/icons/javascript.svg";
import htmlIcon from "../../public/assets/icons/html.svg";
import cssIcon from "../../public/assets/icons/css.svg";
import bootstrapIcon from "../../public/assets/icons/bootstrap.svg";
import adminDashboard from "../../public/assets/images/admin-dashboard.png"
import etchASketch from "../../public/assets/images/etch-a-sketch.png"
import eva2FrontEnd from "../../public/assets/images/eva2-frontend.png"

export const projects = [
  {
    id: 0, 
    name: "Admin Dashboard",
    image: adminDashboard,
    technologies: [
      {
        name: "HTML",
        icon: htmlIcon,
        background: "#e44d26",
        color: "#ffffff"
      },
      {
        name: "CSS",
        icon: cssIcon,
        background: "#264de4",
        color: "#ffffff"
      },
    ],
    description: "Diseño de una página de panel de administración, la página incluye una navegación lateral y una sección de proyectos, presentando un estilo moderno y profesional. Creado con HTML y CSS.",
    codeLink: "https://github.com/johan2160/Admin-Dashboard",
    demoLink: "https://johan2160.github.io/Admin-Dashboard/",
  },
  {
    id: 1, 
    name: "Etch-a-Sketch",
    image: etchASketch,
    technologies: [
      {
        name: "JavaScript",
        icon: jsIcon,
        background: "#f7e018",
        color: "#000"
      },
      {
        name: "HTML",
        icon: htmlIcon,
        background: "#e44d26",
        color: "#ffffff"
      },
      {
        name: "CSS",
        icon: cssIcon,
        background: "#264de4",
        color: "#ffffff"
      }
    ],
    description: "Etch-a-Sketch es un proyecto interactivo siguiendo las instrucciones de The Odin Project. Permite a los usuarios dibujar en una cuadrícula, simulando el clásico juguete Etch-a-Sketch. Creado con JavaScript, HTML y CSS.",
    codeLink: 'https://github.com/johan2160/Etch-a-Sketch',
    demoLink: 'https://johan2160.github.io/Etch-a-Sketch/',
  },
  {
    id: 2, 
    name: "ES2 Front End",
    image: eva2FrontEnd,
    technologies: [
      {
        name: "HTML",
        icon: htmlIcon,
        background: "#e44d26",
        color: "#ffffff"
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
        background: "#553d7b",
        color: "#ffffff"
      }
    ],
    description: "Evaluación N°2 de Front End es un proyecto desarrollado con HTML y Bootstrap. La temática de la evaluación fue una tienda de gasfitería, para la cual se diseñó una interfaz intuitiva y responsiva. Creado con HTML y Bootstrap.",
    codeLink: 'https://github.com/johan2160/EVA2-Frontend',
    demoLink: 'https://johan2160.github.io/EVA2-Frontend/',
  },
];