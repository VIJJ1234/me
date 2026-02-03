/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mix-gradient": "radial-gradient(circle, #3b82f6 20%, #c026d3 80%)",
      },
      boxShadow: {
        "mix-shadow": "0 5px 10px rgba(59, 120, 246, 0.5), 0 6px 50px rgba(192, 38, 211, 0.5)",
      },
    },
  },
  plugins: [],
};
