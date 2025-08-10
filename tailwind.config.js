const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          "0%,100%": { boxShadow: "0 12px 30px rgba(255,82,82,.25)" },
          "50%": { boxShadow: "0 22px 55px rgba(255,82,82,.45)" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(10px,-12px) scale(1.05)" },
          "66%": { transform: "translate(-12px,8px) scale(0.97)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
      },
      animation: {
        breathe: "breathe 3s ease-in-out infinite",
        slideUp: "slideUp .28s ease-out forwards",
        blob: "blob 8s ease-in-out infinite",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
export default config;
