module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'spotify': '#1DB954',
        'spotifyh': '#1ed760'
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
};