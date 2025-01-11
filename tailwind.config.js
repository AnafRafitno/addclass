/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan file TypeScript termasuk

  ],
   darkMode: "class", // Mengaktifkan mode "class" untuk dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}

