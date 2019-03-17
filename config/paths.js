const path = require('path');

export const main = {
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
}

export const aliases = {
  config: path.resolve(__dirname, ''),
}