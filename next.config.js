const withSass = require('@zeit/next-sass')
const sass = withSass()

module.exports = Object.assign({}, sass, {
  pageExtensions: ['jsx', 'js']
})
