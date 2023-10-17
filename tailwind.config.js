/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "blue-violet": {
          50: "#ecf1ff",
          100: "#dde5ff",
          200: "#c2cfff",
          300: "#9daeff",
          400: "#7682ff",
          500: "#5659fe",
          600: "#5348f4",
          700: "#392bd7",
          800: "#2f26ad",
          900: "#2b2788",
          950: "#1a174f",
        },
      },
    },
  },
  plugins: [],
};
