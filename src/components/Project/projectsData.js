import jsIcon from "/assets/icons/javascript.svg";
import htmlIcon from "/assets/icons/html.svg";
import cssIcon from "/assets/icons/css.svg";
import djangoIcon from "/assets/icons/django.svg";
import tailwindIcon from "/assets/icons/tailwind.svg";
import sistemaDeForos from "/assets/images/forovox.png";
import etchASketch from "/assets/images/etch-a-sketch.png";
import libraryProject from "/assets/images/library-project.png";

export const projects = [
  {
    id: 0,
    name: "Forovox",
    image: sistemaDeForos,
    technologies: [
      {
        name: "Django",
        icon: djangoIcon,
        background: "#092e20",
        color: "#ffffff",
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
        background: "#0b1120",
        color: "#ffffff",
      },
    ],
    description:
      "Sistema de Foros para gestionar foros temáticos con seguridad. Incluye registro de usuarios, perfiles, publicaciones, comentarios y filtrado de vocabulario inapropiado. Para explorar la aplicación, puedes usar el usuario demo: RUT: 999-9 Contraseña: 9999",
    codeLink: "https://github.com/johan2160/Foros",
    demoLink: "https://johandev21.pythonanywhere.com/",
  },
  {
    id: 1,
    name: "Library",
    image: libraryProject,
    technologies: [
      {
        name: "JavaScript",
        icon: jsIcon,
        background: "#f7e018",
        color: "#000",
      },
      {
        name: "HTML",
        icon: htmlIcon,
        background: "#e44d26",
        color: "#ffffff",
      },
      {
        name: "CSS",
        icon: cssIcon,
        background: "#264de4",
        color: "#ffffff",
      },
    ],
    description:
      "Permite a los usuarios gestionar su colección de libros añadiendo títulos, autores, páginas y estado de lectura. La interfaz intuitiva facilita la organización y seguimiento. Creado con HTML, CSS y JavaScript.",
    codeLink: "https://github.com/johan2160/Library",
    demoLink: "https://johan2160.github.io/Library/",
  },
  {
    id: 2,
    name: "Etch-a-Sketch",
    image: etchASketch,
    technologies: [
      {
        name: "JavaScript",
        icon: jsIcon,
        background: "#f7e018",
        color: "#000",
      },
      {
        name: "HTML",
        icon: htmlIcon,
        background: "#e44d26",
        color: "#ffffff",
      },
      {
        name: "CSS",
        icon: cssIcon,
        background: "#264de4",
        color: "#ffffff",
      },
    ],
    description:
      "Etch-a-Sketch es un proyecto interactivo siguiendo las instrucciones de The Odin Project. Permite a los usuarios dibujar en una cuadrícula, simulando el clásico juguete Etch-a-Sketch. Creado con JavaScript, HTML y CSS.",
    codeLink: "https://github.com/johan2160/Etch-a-Sketch",
    demoLink: "https://johan2160.github.io/Etch-a-Sketch/",
  },
];
