/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: 16,
    },
    extend: {
      colors: {
        primary: "#25286F",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        pt: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
