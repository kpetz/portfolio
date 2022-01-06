module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        nightPurple:{
          DEFAULT: '#330867',
        },
        nightBlue:{
          DEFAULT: '#30cfd0',
        }
      },
    },
  },
  plugins: [],
}
