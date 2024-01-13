/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
    "./src/view/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["12px", { lineHeight: "20px", letterSpacing: "0em " }],
        base: ["14px", { lineHeight: "22px", letterSpacing: "0em" }],
        lg: ["16px", { lineHeight: "22px", letterSpacing: "0em" }],
        "lg-2": ["18px", { lineHeight: "22px", letterSpacing: "0em " }],
        xl: ["24px", { lineHeight: "32px", letterSpacing: "-0.015em" }],
        "xl-2": ["30px", { lineHeight: "32px", letterSpacing: "-0.015em" }],
        "xl-3": ["32px", { lineHeight: "38px", letterSpacing: "-0.015em" }],
        xxl: ["64px", { lineHeight: "84px", letterSpacing: "-0.02em" }],
        "xxl-2": ["72px", { lineHeight: "84px", letterSpacing: "-0.02em" }],
        "xxl-3": ["128px", { lineHeight: "84px", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
}