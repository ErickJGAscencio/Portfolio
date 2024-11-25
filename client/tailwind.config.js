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
        'color_background':'#3e3f49',
        'color_card':'#5e5f69',
        'color_hover_card': '#f0bf6c',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)'
      },
      boxShadow: {
        'blur-lg': '0 4px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}