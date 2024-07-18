/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#E9E9EC',
        'background': '#2C2C31',
        'primary': '#eeb287',
        'selectionbg': '#b8b2a6',
        'selectiontxt': '#000',
        'darkgrey': '#222222',
        'required': '#FF3F15',
        'label': '#CECECE',
        'tailwindbg': '#0b1120',
        'tailwindcolor': '#38bdf8',
        'reactbg': '#23272f',
        'reactcolor': '#58c4dc',
        'bootstrapbg': '#553d7b',
        'bootstrapcolor': '#ffffff',
        'nodejsbg': '#ffffff',
        'nodejscolor': '#66a266',
        'jsbg': '#f7e018',
        'jscolor': '#000000',
        'cssbg': '#264de4',
        'csscolor': '#ffffff',
        'htmlbg': '#e44d26',
        'htmlcolor': '#ffffff',
        'githubcolor': '#ffffff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'position': 'left, right',
      }
    },
  },
  plugins: [],
}