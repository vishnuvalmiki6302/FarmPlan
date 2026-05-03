/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006e1c',
          50: '#f0fdf0',
          100: '#dcfce7',
          200: '#bbf7c9',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        surface: {
          DEFAULT: '#f8faf8',
          dim: '#d8dad9',
          bright: '#f8faf8',
          container: {
            DEFAULT: '#eceeec',
            low: '#f2f4f2',
            high: '#e6e9e7',
            lowest: '#ffffff',
            highest: '#e1e3e1',
          }
        },
        'on-surface': '#191c1b',
        'on-surface-variant': '#3f4a3c',
        'outline': '#6f7a6b',
        'outline-variant': '#becab9',
        secondary: {
          DEFAULT: '#1b6d24',
          container: '#a0f399',
        },
        tertiary: {
          DEFAULT: '#286b33',
          container: '#66aa6a',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 40px rgba(34,197,94,0.15)',
        'card': '0 4px 24px rgba(0,110,28,0.08)',
        'card-hover': '0 12px 40px rgba(0,110,28,0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #bbf7c9 100%)',
        'dot-pattern': 'radial-gradient(circle, #becab9 1px, transparent 1px)',
      },
      spacing: {
        '92': '23rem',
        '94': '23.5rem',
        'dot-32': '32px 32px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
