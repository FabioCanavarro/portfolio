import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        code: ['"Fira Code"', 'monospace'], 
      },
      colors: {
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
            "p": {
              lineHeight: '1.75',
            },
            // This is the correct way to style the note
            "blockquote": {
              fontStyle: 'italic',
              color: theme('colors.subtext0'),
              borderLeftWidth: '0.25rem', // Always use this over borderLeft
              borderLeftColor: theme('colors.mauve'),
              backgroundColor: theme('colors.crust / 0.7'),
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              borderRadius: '0.5rem',
            },
            // This removes the default quote marks from the blockquote
            "blockquote p:first-of-type::before": {
              content: 'none',
            },
            "blockquote p:last-of-type::after": {
              content: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;