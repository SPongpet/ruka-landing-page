import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        ruby: '#A6171C',
        natural: '#D6D0C5',
        sunny: '#F1C045',

        'ruka-deep-red': '#5a0f10',
        'ruka-dark-red': '#54200D',
        'ruka-mid-red': '#A6171C',
        'ruka-text-red': '#4a0404',
        'ruka-beige': '#d2a679',
        'ruka-gold': '#f5a623',

      },
      fontFamily: {
        'georgia': ['Georgia Pro CondRegular', 'serif'],
        'georgia-pro': ['Georgia Pro CondRegular', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
