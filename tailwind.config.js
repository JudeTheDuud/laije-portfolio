/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#c56565',
        secondary: '#e4b0b0',
      },
      animation: {
          dropin: 'dropin 1s ease 200ms backwards',
          
      },
      keyframes: {
        dropin: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translate(0px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
