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
        'color_background':'#38343c',
        'color_card':'#3d3e42',
        'color_hover_card':'#f0bf6c',
      },
      boxShadow: {
        'blur-lg': '0 4px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}