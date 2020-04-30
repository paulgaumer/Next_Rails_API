module.exports = {
  theme: {
    extend: {
      screens: {
        altsm: '640px',
        // => @media (min-width: 640px) { ... }

        altmd: '768px',
        // => @media (min-width: 768px) { ... }

        altlg: '1024px',
        // => @media (min-width: 1024px) { ... }

        altxl: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // require('@tailwindcss/ui')({
    //   layout: 'sidebar',
    // }),
  ],
};
