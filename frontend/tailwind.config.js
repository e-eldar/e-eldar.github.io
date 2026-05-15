/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#08080d',
        night: '#0c0c14',
        panel: '#12121d',
        panel2: '#18182a',
        line: 'rgba(255,255,255,0.10)',
        muted: '#9696b8',
        dim: '#5f5f82',
        violet: '#7c6cff',
        aqua: '#38bdf8',
        mint: '#34d399',
        rose: '#fb7185',
      },
      boxShadow: {
        glow: '0 0 80px rgba(124,108,255,0.25)',
        card: '0 30px 90px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(124,108,255,.20), transparent 34%), radial-gradient(circle at 80% 10%, rgba(56,189,248,.14), transparent 28%), radial-gradient(circle at 55% 70%, rgba(52,211,153,.10), transparent 30%)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate3d(4%, -3%, 0) rotate(8deg) scale(1.08)' },
        },
        gridMove: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '80px 80px' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        aurora: 'aurora 12s ease-in-out infinite alternate',
        gridMove: 'gridMove 30s linear infinite',
        shine: 'shine 5s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
