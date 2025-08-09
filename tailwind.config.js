/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'wan-yellow': '#FFD700',
        'wan-dark': '#1a1a1a',
        'wan-gray': '#2d2d2d',
        'wan-light-gray': '#f5f5f5',
        'wan-green': '#10B981',
        'wan-red': '#EF4444',
        'custom-gray': '#262626',
        'table-text': '#6E7191',
        'custom-light-gray': '#F3F3F3',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 