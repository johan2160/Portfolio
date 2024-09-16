/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        content: "hsl(var(--content))",
        content2: "hsl(var(--content2))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        selectionbg: "hsl(var(--selectionbg))",
        selectiontxt: "hsl(var(--selectiontxt))",
        darkgrey: "hsl(var(--darkgrey))",
        linkhover: "hsl(var(--linkhover))",
        required: "hsl(var(--required))",
        label: "hsl(var(--label))",
        tailwindbg: "hsl(var(--tailwindbg))",
        tailwindcolor: "hsl(var(--tailwindcolor))",
        reactbg: "hsl(var(--reactbg))",
        reactcolor: "hsl(var(--reactcolor))",
        bootstrapbg: "hsl(var(--bootstrapbg))",
        bootstrapcolor: "hsl(var(--bootstrapcolor))",
        nodejsbg: "hsl(var(--nodejsbg))",
        nodejscolor: "hsl(var(--nodejscolor))",
        jsbg: "hsl(var(--jsbg))",
        jscolor: "hsl(var(--jscolor))",
        cssbg: "hsl(var(--cssbg))",
        csscolor: "hsl(var(--csscolor))",
        htmlbg: "hsl(var(--htmlbg))",
        htmlcolor: "hsl(var(--htmlcolor))",
        githubcolor: "hsl(var(--githubcolor))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        position: "left, right, top, bottom",
      },
    },
  },
  plugins: [],
};
