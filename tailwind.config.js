/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0A0E17',
        'cyber-dark': '#1A1E2E',
        'cyber-gray': '#2A3040',
        'cyber-light': '#4A5060',
        'cyber-blue': '#00F0FF',
        'cyber-green': '#39FF14',
        'cyber-purple': '#D100FF',
        'cyber-red': '#FF3366',
        'cyber-yellow': '#FFD60A',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Source Code Pro', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid-size': '20px 20px',
      },
    },
  },
  plugins: [],
};