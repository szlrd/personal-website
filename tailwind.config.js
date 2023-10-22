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
          50: "#f1f1ff",
          100: "#e8e5ff",
          200: "#d2ceff",
          300: "#b1a7ff",
          400: "#8c76ff",
          500: "#683fff",
          600: "#5618ff",
          700: "#4807fa",
          800: "#3c05d2",
          900: "#3206ac",
          950: "#180069",
          1000: "#07001f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
