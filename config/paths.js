const path = require('path');

const main = {
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
}

const aliases = {
  config: path.resolve(__dirname, ''),
  App: path.resolve(__dirname, '../src/features/App/components'),
}

module.exports = {
  main,
  aliases
};