/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: '#182747',
        dash: "#FFD369",
        // primary: '#7BD3EA',
        hero: "#D8D8D8",
        // hero: "#FFB319",
        hero_p: "#9DB2BF",
        // hero_p: "#FFE194",
        btn: '#4C3BCF'
      },
      boxShadow: {
        spotlight: "50px 50px 20px rgba(180, 251, 147, 0.2)",
      },
      backgroundImage: {
        'dynamic-radial': `radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(0, 10%, 100% / 1.5), transparent 150px)`,
      },
      fontFamily: {
        lilita: ["Lilita One", "cursive"],
        prompt: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
