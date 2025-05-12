/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'galaxy-deep': '#0D1117',        // Extremely Dark Background
        'galaxy-surface': '#161B22',     // Slightly Lighter Dark Surface
        'galaxy-primary': '#38BDAE',     // Alien Teal
        'galaxy-secondary': '#2C3E50',   // Dark Blue-Gray
        'galaxy-accent': '#10B981',      // Emerald Green
        'galaxy-text': '#E6E6E6',        // Soft White
        'galaxy-highlight': '#22D3EE'    // Bright Cyan
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
