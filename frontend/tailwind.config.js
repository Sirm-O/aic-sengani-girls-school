/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'school-primary': '#8B4513',     // Saddle Brown (dark brown)
        'school-secondary': '#D2691E',   // Chocolate (warm brown)
        'school-accent': '#DEB887',      // Burlywood (cream/gold)
        'school-background': '#F5F5DC',  // Beige (light cream)
        'school-text': '#3E2723'         // Dark brown
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
