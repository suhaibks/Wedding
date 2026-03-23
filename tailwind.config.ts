import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f0e7',
        ivory: '#fdf8f1',
        beige: '#eadcc9',
        gold: '#b08b57',
        charcoal: '#2c241f',
        mist: '#f1e8db'
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        invitation: '0 24px 80px rgba(62, 45, 30, 0.14)',
        soft: '0 18px 50px rgba(62, 45, 30, 0.08)'
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(255,255,255,0.7), rgba(255,255,255,0))',
        paper: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,239,227,0.92))'
      }
    }
  },
  plugins: []
};

export default config;
