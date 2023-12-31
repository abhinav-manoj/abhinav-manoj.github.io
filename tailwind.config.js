/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      background: '#061F0B',
      white: '#ffffff',
      black: '#000000',
      title: '#60D688',
      button: '#3B8950',
      aboutme: '#3B8950',
      aboutme2: '#1E2A24',
      projects: '#9E283D',
      projects2: '#260C11',
      contactme: '#663AC2',
      contactme2: '#1C1627',
      titlePrimary: '#E7E7E7',
      lightGray: '#D3D3D3',
      darkGray: '#A9A9A9',
      footer: '#080317',
      contactbg: '#140B2F',
      projectbg: '#2B1216',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
