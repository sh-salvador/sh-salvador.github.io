/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shalom-blue': 'var(--color-shalom-blue)',
        'shalom-orange': 'var(--color-shalom-orange)',
        'warm-cream': 'var(--color-warm-cream)',
        'deep-dark': 'var(--color-deep-dark)',
        'white': 'var(--color-white)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Sunborn"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
