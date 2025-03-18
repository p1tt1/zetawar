/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{cljs,cljc,clj}",
    "./assets/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors to match the existing design
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
  },
  plugins: [],
}
