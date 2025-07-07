import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Extend your theme here if needed in the future
      colors: {
        // You can import your Catppuccin colors here for re-use
        base: "#24273a",
        crust: "#1e2030",
        surface0: "#363a4f",
        surface2: "#575b71",
        text: "#cad3f5",
        subtext0: "#a5adce",
        subtext1: "#939ab7",
        mauve: "#cba6f7",
        rosewater: "#f5e0dc",
        flamingo: "#f2cdcd",
        blue: "#89b4fa",
        green: "#a6e3a1",
        sapphire: "#74c7ec",
        red: "#f38ba8",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            // Here is where you customize the line spacing for paragraphs
            "p": {
              lineHeight: '1.9rem', // Or use '1.8rem', '180%', etc.
            },
            // You can customize other elements too
            "h2, h3, h4": {
              marginTop: '2em',
              marginBottom: '1em',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;