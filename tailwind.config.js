/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        faber: {
          blue: {
            DEFAULT: '#2142AB',
            dark: '#1A338A',
            denim: '#2448BC',
            royal: '#4366DB',
            electric: '#4F75FF',
            glow: '#3B66F5',
            light: '#EBF1FF',
          },
          gold: {
            DEFAULT: '#DEBD54',
            light: '#F3D372',
            dark: '#B09337',
          },
          charcoal: {
            DEFAULT: '#434343',
            light: '#6B6B6B',
          },
          lotion: '#FAFAFA',
          bg: {
            base: '#060B1A',
            surface: '#0B1226',
            card: '#0F1A36',
            hover: '#162347',
            subtle: '#1C2B57',
            border: '#1E2D58',
            borderLight: '#2D3F75',
          }
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
