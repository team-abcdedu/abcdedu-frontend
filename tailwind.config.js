/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-400': '#000080', // color-primary-default
        'primary-300': '#1f3c9c',
        'primary-300/8': 'rgba(31, 60, 156, 0.08)',
        'primary-200': '#465ba0',
        'primary-100': '#6674a1',
        'primary-75': '#868ea5',
        'primary-50': '#e9ebf5',
        'neutral-600': '#02081b', // text-default
        'neutral-500': '#7a7c82',
        'neutral-400': '#808080',
        'neutral-300': '#a7a7a7',
        'neutral-200': '#e0e0e0',
        'neutral-100': '#f5f5f5',
      },
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
        'max-800': { max: '800px' },
        'max-900': { max: '900px' },
      },
      boxShadow: {
        lg: '2px 2px 4px 0px rgb(170, 170, 170)',
        'btn-primary': '0px 7px 30px -10px #1f3c9c',
      },
    },
  },
  plugins: [],
};
