import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',
        accent: '#1e8c4b',
        text: '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
