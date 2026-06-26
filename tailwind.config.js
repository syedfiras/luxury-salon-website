/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        secondary: '#151515',
        surface: '#1C1C1C',
        'text-primary': '#F5F4F0',
        'text-muted': '#9E9E9E',
        accent: '#B8925C',
        'accent-light': '#D4AD7A',
        border: 'rgba(255,255,255,0.08)',
        // Keeping fallback/compat names if any
        luxury: {
          black: '#0B0B0B',
          dark: '#151515',
          gold: '#B8925C',
          goldLight: '#D4AD7A',
          beige: '#FAF7F2',
          cream: '#FAF7F2',
          gray: '#1C1C1C',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0B0B0B 0%, #151515 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(184, 146, 92, 0.4)' },
          '100%': { textShadow: '0 0 20px rgba(184, 146, 92, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}