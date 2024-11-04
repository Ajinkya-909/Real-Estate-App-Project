/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gold: "rgb(255, 204, 24)",
        Light_Gold: "rgb(240, 206, 96)",
        Grey: "rgb(195, 195, 195)",
      },
    },
  },
  plugins: [],
};
