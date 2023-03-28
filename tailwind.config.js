/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920PX",
        // print: { raw: "print" },
      },
      backgroundImage: {
        banner: "url('./images/shape-1.png')",
        cntBanner: "url('./images/1.jpg')",
        sbanner: "url('./images/sbanner.jpg')",
      },
    },
  },
  plugins: [],
};
