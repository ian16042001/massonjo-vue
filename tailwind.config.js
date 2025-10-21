/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#F26440', // teal accent to echo original site
        accent: '#2F6F74',  // coral accent to echo original site
        // dark: '#1E1E1E',    // dark mode background
        // light: '#F5F5F5',   // light mode background
      }
    },
  },
  plugins: [],
}
