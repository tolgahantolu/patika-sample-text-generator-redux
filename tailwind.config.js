/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-background": "#111211",
        "theme-black": "#1c1d1c",
        "theme-white": "#fafaf9",
      },
    },
  },
  plugins: [],
};
