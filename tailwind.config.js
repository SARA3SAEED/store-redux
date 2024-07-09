/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {
      
      "primary": "#FDC830",
      "secondary": "#F37335",
      "accent": "#3d566b",
      "neutral": "#5a0717",
      "base-100": "#F2F2F2",
      "info": "#0000ff",
      "success": "#00ff00",
      "warning": "#fff003",
      "error": "#ff0000",
    },
    },
  ],
  },
  plugins: [
    require('daisyui'),
  ],
}

