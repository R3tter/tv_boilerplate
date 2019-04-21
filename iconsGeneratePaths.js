const fs = require('fs');
const { icons } = require('./config/paths').aliases;
const iconsFolder = icons;
const dirbuf = Buffer.from(iconsFolder);

let files = fs.readdirSync(dirbuf, (err, files) => files);
let filteredFiles = files.concat().filter(file => file.slice(-4) === '.svg');
let emulatedFilesPath = filteredFiles.map(file => `./${file}`);
let fileNames = filteredFiles.map(file => file.split('.svg')[0]);

const iconsObject = {
  paths: filteredFiles,
  map: {}
};

filteredFiles.forEach(
  (file, i) => (iconsObject.map[fileNames[i]] = emulatedFilesPath[i])
);

fs.writeFile(
  './src/features/Common/components/Icon/iconsJson.json',
  JSON.stringify(iconsObject),
  'utf8',
  () => null
);
