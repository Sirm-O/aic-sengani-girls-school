/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'school-primary': '#2C3E50',    // Dark Blue-Gray (professional)
        'school-secondary': '#34495E',  // Lighter Blue-Gray
        'school-accent': '#3498DB',     // Bright Blue (for highlights)
        'school-background': '#FFFFFF', // Pure White
        'school-text': '#2C3E50',       // Dark Blue-Gray
        'school-light-text': '#34495E', // Slightly lighter text
        'school-muted': '#7F8C8D'       // Soft Gray for less important text
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif']
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(21, 158, 149, 0.2)',
        'hover': '0 15px 30px -5px rgba(21, 158, 149, 0.3)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
