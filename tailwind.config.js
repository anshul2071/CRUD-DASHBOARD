module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        '4xl': "2rem",
      },
    },
  },
  plugins: [],
};
