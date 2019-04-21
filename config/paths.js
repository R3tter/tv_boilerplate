const path = require('path');

const main = {
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
  icons: path.resolve(__dirname, '../src/images/icons/')
};

const aliases = {
  core: path.resolve(__dirname, '../src/core/'),
  config: path.resolve(__dirname, ''),
  icons: path.resolve(__dirname, '../src/images/icons/'),
  images: path.resolve(__dirname, '../src/images/'),
  store: path.resolve(__dirname, '../src/store/'),
  // features
  App: path.resolve(__dirname, '../src/features/App/'),
  Common: path.resolve(__dirname, '../src/features/Common/'),
  FormComponents: path.resolve(__dirname, '../src/features/FormComponents/'),
  Modal: path.resolve(__dirname, '../src/features/Modal/')
};

module.exports = {
  main,
  aliases
};
