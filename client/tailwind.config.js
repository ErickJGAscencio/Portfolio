/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_header': '#90b43a',
        'color_body': '#c4d49c',
        'color_border': '#5d7d15',
        'color_footer': '#383434',
      }
    },
  },
  plugins: [],
}