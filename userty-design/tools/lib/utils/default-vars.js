const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', '..', '..', 'components', 'style');
const colorLess = fs.readFileSync(path.join(stylePath, 'themes', 'default', 'colors.less'), 'utf8');
const defaultLess = fs.readFileSync(path.join(stylePath, 'themes', 'default', 'index.less'), 'utf8');

const defaultPaletteLess = lessToJs(`${colorLess}${defaultLess}`, {
    stripPrefix: true,
    resolveVariables: false
});

module.exports = defaultPaletteLess;
