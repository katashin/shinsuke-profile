module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '1xl': '1440px',
        'sp': '375px',
      },
      colors: {
        'my_main': {
          '25': '#384359' , //黒のフォント
          '13': '#008c8d',  //緑のフォント
        }
      },
      backgroundImage:{
        'about':"url('/public/bg-about.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
