/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      opensans: ["OpenSans", "sans-serif"],
      squartiqa: ["Squartiqa4FStrike", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "hsl(202, 100%, 95%)",
          200: "hsl(204, 100%, 86%)",
          300: "hsl(206, 93%, 73%)",
          400: "hsl(208, 88%, 62%)",
          500: "hsl(210, 83%, 53%)",
          600: "hsl(212, 92%, 43%)",
          700: "hsl(214, 95%, 36%)",
          800: "hsl(215, 96%, 32%)",
          900: "hsl(216, 98%, 25%)",
          1000: "hsl(218, 100%, 17%)",
        },
        neutral: {
          100: "hsl(216, 33%, 97%)",
          200: "hsl(214, 15%, 91%)",
          300: "hsl(210, 16%, 82%)",
          400: "hsl(211, 13%, 65%)",
          500: "hsl(211, 10%, 53%)",
          600: "hsl(211, 12%, 43%)",
          700: "hsl(209, 14%, 37%)",
          800: "hsl(209, 18%, 30%)",
          900: "hsl(209, 20%, 25%)",
          1000: "hsl(210, 24%, 16%)",
        },
        cyan: {
          100: "hsl(171, 82%, 94%)",
          200: "hsl(172, 97%, 88%)",
          300: "hsl(174, 96%, 78%)",
          400: "hsl(176, 87%, 67%)",
          500: "hsl(178, 78%, 57%)",
          600: "hsl(180, 77%, 47%)",
          700: "hsl(182, 85%, 39%)",
          800: "hsl(184, 90%, 34%)",
          900: "hsl(186, 91%, 29%)",
          1000: "hsl(188, 91%, 23%)",
        },
        red: {
          100: "hsl(360, 100%, 95%)",
          200: "hsl(360, 100%, 87%)",
          300: "hsl(360, 100%, 80%)",
          400: "hsl(360, 91%, 69%)",
          500: "hsl(360, 83%, 62%)",
          600: "hsl(356, 75%, 53%)",
          700: "hsl(354, 85%, 44%)",
          800: "hsl(352, 90%, 35%)",
          900: "hsl(350, 94%, 28%)",
          1000: "hsl(348, 94%, 20%)",
        },

        darkPrimary: "#181A1B",
        darkSecondary: "#25282A",
        darkWhite: "#f2f5fa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "photo-spin": "photo-spin 2s 1 linear forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "photo-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        // Custom Screen styles
        "3xl": "2000px",
        xs: "480px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
