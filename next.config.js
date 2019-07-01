const withSass = require('@zeit/next-sass');
module.exports = withSass({
  webpack(config, options) {
    return config
  }, 
  target: 'serverless'
})

// module.exports = withSass(
//   {
//     target: 'serverless'
//   }
// )