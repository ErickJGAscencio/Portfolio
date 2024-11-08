/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_header: '#94b43c',
        color_body: '#c4d49c',
        color_footer: '#383434',
      },
    },
  },
  plugins: [],
}