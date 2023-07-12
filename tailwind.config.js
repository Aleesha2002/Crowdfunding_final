/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgbs(255,255,255,0.7)",
        dimBlue: "rgbs(9,151,124,0.1)",
        primary1: "#050816",
        secondary1: "#aaa6c3",
        tertiary1: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-sarif"],
      },
      boxShadow: {
        secondary: "10px 10px 20px rgba(2, 2, 2,0.25)",
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xs1: "450px",
    },
    
  },
  plugins: [],
};
