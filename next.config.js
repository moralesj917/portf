const withSass = require('@zeit/next-sass')
module.exports = withSass()
module.exports = {
  target: 'serverless',
  propert: withSass()
};

// module.exports = withSass(
//   {
//     target: 'serverless'
//   }
// )