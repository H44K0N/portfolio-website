module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272640',      // bakgrunn
        card: '#3E1F47',         // bokser / cards
        highlight: '#FF9F1C',    // aksentfarge (valgfri)
        surface: '#1A192C',      // evt. mørk base
        onPrimary: '#FFFFFF',    // tekst på primary
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
