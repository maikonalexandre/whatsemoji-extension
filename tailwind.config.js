/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#222E36",
        container: "#0B141A",
        input: "#38424A",
      },
    },
  },
  plugins: [],
};
