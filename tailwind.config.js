/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'InknutAntiqua': ["inknutantiqua"],
        'DancingScript': ["DancingScript"],
      },
      gap: {
        '72': "18rem",
        '80': "40rem",
        '96': "24rem",
      }
    },
  },
  plugins: [],
}

