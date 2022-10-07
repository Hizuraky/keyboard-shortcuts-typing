module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      10: "10deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      keyframes: {},
      animation: {
        animation: "ping 0.4s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
    screens: {
      lg: "950px",
    },
  },
  plugins: [],
}
