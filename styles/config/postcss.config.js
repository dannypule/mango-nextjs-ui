module.exports = {
  // parser: 'postcss-scss',
  plugins: [
    require('postcss-easy-import'),
    // require('postcss-scss'),
    require('autoprefixer'),
    require('cssnano'),
  ],
}
