module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      body: "#f2e8e3",
      bg1: "#A5A58D",
      bg2: "#F2CB8D",
      textPrimary: "#081c15",
      textSecondary: "#1a4231",
      special: "#ff6b7a",
      dbody: "#081c15",
      dbg1: "#062c65",
      dbg2: "#2B121C",
      dtextPrimary: "#f2e8e3",
      dtextSecondary: "#c7bfcf"
    },
    fontFamily: {
      primary: ["Urbanist", "sans-serif"],
      secondary: ["Metrophobic", "sans-serif"]
    },
    fontSize: {
      small: "clamp(16px, 4vw, 20px)",
      medium: "clamp(20px, 4vw, 24px)",
      large: "clamp(24px, 4vw, 32px)",
      xlarge: "clamp(32px, 2vw, 46px)",
      xXL: "clamp(60px, 2vw, 85px)"
    }
  },
  plugins: []
};
