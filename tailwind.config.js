/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the `src` directory
  ],
  theme: {
    extend: {}, // Use this to customize the default Tailwind theme
  },
  plugins: [], // Add Tailwind plugins here if needed
};
