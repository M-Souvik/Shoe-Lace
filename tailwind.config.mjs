import daisyui from 'daisyui';

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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF6B35",
          "secondary": "#1A1A1A",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF", // Default background color
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light", // Ensure the light theme is available
    ],
    darkTheme: "dark", // Optionally specify the dark theme
  },
};
