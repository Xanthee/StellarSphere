/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          twinkle: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        },
        animation: {
          twinkle: 'twinkle 2s ease предприятие-out infinite',
        },
        fontFamily: {
          orbitron: ['"Orbitron"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }