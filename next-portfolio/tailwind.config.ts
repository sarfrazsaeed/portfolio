import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#17201d', paper: '#f6f3ec', clay: '#d4552b', moss: '#43684d', mist: '#e6e1d6' },
      fontFamily: { display: ['Cormorant Garamond', 'Georgia', 'serif'], body: ['Manrope', 'Arial', 'sans-serif'] }
    }
  },
  plugins: []
};
export default config;
