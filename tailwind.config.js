/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'courier': ['Courier Prime', 'monospace'],
      },
      colors: {
        primary: {
          '900': '#0A0C10', // Very dark blue-gray
          '800': '#1B1F2A', // Dark blue-gray
          '700': '#2C3241', // Medium-dark blue-gray
        },
        paper: {
          light: '#F8F5F0', // Lighter for better contrast
          DEFAULT: '#EFE9E1', // Adjusted for better contrast
          dark: '#D3CAB9',
        },
        ink: {
          light: '#2C2C2C',
          DEFAULT: '#121212', // Darker for better contrast
          dark: '#080808',
        },
        accent: {
          blue: '#0066CC', // Adjusted for better contrast
          orange: '#E65000', // Adjusted for better contrast
        },
        text: {
          light: '#F8F9FA', // High contrast light text
          muted: '#94A3B8', // Accessible muted text
          dark: '#121212', // High contrast dark text
        }
      },
      animation: {
        'cursor': 'cursor .8s step-start infinite',
        'paper-slide': 'paper-slide 0.5s ease-out',
      },
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'paper-slide': {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
};