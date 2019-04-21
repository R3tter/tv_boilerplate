const precss = require('precss');
const postCssNested = require('postcss-nested');
const postCssSimpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [precss, postCssNested, postCssSimpleVars]
};
