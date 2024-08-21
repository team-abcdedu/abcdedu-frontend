/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // TODO: color, font ...
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_300,
      minHeight: px0_300,
      spacing: px0_300,
      keyframes: {
        'drop-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        dropdown: 'drop-down 0.5s ease-out',
      },
      zIndex: {
        backdrop: 100,
        modal: 101,
      },
      screens: {
        xs: { min: '480px' },
        'max-xs': { max: '480px' },
        'min-400': { min: '400px' },
        'max-400': { max: '400px' },
        'max-md': { max: '768px' },
      },
    },
  },
  plugins: [],
};
