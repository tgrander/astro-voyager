import type { Config } from "tailwindcss";

const periwinkle = {
  "50": "#eeeffd",
  "100": "#c9ccf7",
  "200": "#afb4f4",
  "300": "#8a91ee",
  "400": "#737ceb",
  "500": "#505be6",
  "600": "#4953d1",
  "700": "#3941a3",
  "800": "#2c327f",
  "900": "#222661",
};
const radiant = {
  "50": "#f5e9fd",
  "100": "#e0baf8",
  "200": "#d198f4",
  "300": "#bd69f0",
  "400": "#b04ced",
  "500": "#9c1fe8",
  "600": "#8e1cd3",
  "700": "#6f16a5",
  "800": "#561180",
  "900": "#420d61",
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rift: ["Rift Soft", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // CUSTOM COLORS
        // Palette
        primary: radiant,
        base: periwinkle,
        // Extended Palette
        periwinkle,
        radiant,
        indigo: {
          "50": "#e9e7f5",
          "100": "#bcb5df",
          "200": "#9c92d0",
          "300": "#6e60ba",
          "400": "#5241ad",
          "500": "#271198",
          "600": "#230f8a",
          "700": "#1c0c6c",
          "800": "#150954",
          "900": "#100740",
        },
        midnight: {
          "50": "#e7e8ea",
          "100": "#b6b9bf",
          "200": "#9297a0",
          "300": "#606874",
          "400": "#414a59",
          "500": "#121d30",
          "600": "#101a2c",
          "700": "#0d1522",
          "800": "#0a101a",
          "900": "#080c14",
        },
        sapphire: {
          "50": "#e9edf1",
          "100": "#bac8d4",
          "200": "#99adc0",
          "300": "#6b88a3",
          "400": "#4e7191",
          "500": "#224d75",
          "600": "#1f466a",
          "700": "#183753",
          "800": "#132a40",
          "900": "#0e2031",
        },
        plum: {
          "50": "#ede9f5",
          "100": "#c8bae1",
          "200": "#ae99d2",
          "300": "#896bbe",
          "400": "#724eb1",
          "500": "#4f229e",
          "600": "#481f90",
          "700": "#381870",
          "800": "#2b1357",
          "900": "#210e42",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;
