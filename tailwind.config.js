/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00a89a",
          "secondary": "#009b00",
          "accent": "#006900",
          "neutral": "#2a2e33",
          "base-100": "#2d2c20",
          "info": "#61d5ff",
          "success": "#00e5ba",
          "warning": "#ff7400",
          "error": "#ff2154",
        },
      },
    ],
  },
}

