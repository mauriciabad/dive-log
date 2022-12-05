/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    gridTemplateColumns: (theme) => {
      const spacing = theme("spacing");

      return Object.keys(spacing).reduce((accumulator, spacingKey) => {
        return {
          ...accumulator,
          [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
        };
      }, {});
    },
  },
};
