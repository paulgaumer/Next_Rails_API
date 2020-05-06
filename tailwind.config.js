module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sansLanding: 'Montserrat',
        titleLanding: 'Roboto',
      },
      fontSize: {
        '7xl': '5rem',
      },
      gap: {
        '28': '7rem',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    // require('@tailwindcss/ui')({
    //   layout: 'sidebar',
    // }),
  ],
};
