/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EFEB',
          300: '#EBDED2',
          400: '#DCC8B6',
          500: '#C7AC95',
        },
        cherry: {
          50: '#FFF0F3',
          100: '#FFE0E6',
          200: '#FFCCD5',
          300: '#FF8FA3',
          400: '#FF4D6D',
          500: '#E01E5A',
          600: '#C9184A',
          700: '#B7094C',
          800: '#A4161A',
          900: '#800F2F',
        },
        burgundy: {
          50: '#FAF0F2',
          100: '#F3DEE3',
          200: '#E6BDC7',
          300: '#D494A3',
          400: '#B85E74',
          500: '#942B46',
          600: '#7B1832',
          700: '#641026',
          800: '#520B1D',
          900: '#3D0715',
          950: '#23030B',
        },
        gold: {
          50: '#FBF8EF',
          100: '#F5EECB',
          200: '#EBDD97',
          300: '#E1CB63',
          400: '#D4AF37',
          500: '#C59B27',
          600: '#A37C1C',
          700: '#805D15',
          800: '#614411',
          900: '#47310D',
        },
        champagne: {
          100: '#FBF5E8',
          200: '#F4E5C7',
          300: '#E8CD97',
          400: '#D8AF62',
          500: '#C79339',
          600: '#A47326',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(89, 13, 34, 0.05), 0 1px 4px -1px rgba(89, 13, 34, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(89, 13, 34, 0.08), 0 4px 12px -2px rgba(89, 13, 34, 0.04)',
        'warm-lg': '0 16px 40px -8px rgba(89, 13, 34, 0.12), 0 8px 16px -4px rgba(89, 13, 34, 0.05)',
        'warm-xl': '0 24px 60px -12px rgba(89, 13, 34, 0.16)',
        'cherry-glow': '0 8px 25px -4px rgba(201, 24, 74, 0.35)',
      }
    },
  },
  plugins: [],
}
