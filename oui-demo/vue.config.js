const path = require('path');
const ThemeColorReplacer = require('webpack-theme-color-replacer');
const {getThemeColors, modifyVars} = require('./src/utils/themeUtil');
const {resolveCss} = require('./src/utils/theme-color-replacer-extend');

const isProd = process.env.NODE_ENV === 'production';

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new ThemeColorReplacer({
        fileName: 'css/theme-colors-[contenthash:8].css',
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss
      })
    );
  },
  chainWebpack: config =>{
    config.resolve.alias
      .set('@', resolve('./src'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: modifyVars(),
          javascriptEnabled: true
        }
      }
    }
  }
}