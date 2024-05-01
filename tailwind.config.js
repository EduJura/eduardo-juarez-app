/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        vives: ["Great Vibes", "sans-serif"],
      },
    },
  },
  plugins: [],
};
