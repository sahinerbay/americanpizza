module.exports = {
  plugins: {
    'postcss-import': {}, //this has to come before cssnext
    'postcss-cssnext': {}, //it has autoprefixer built-in,
    'lost': {},
    'cssnano': {} //minify the css file
  }
}