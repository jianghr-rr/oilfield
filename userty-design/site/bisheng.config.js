/**
 * @file bisheng.config.js
 * @author xuemin02
 */
const path = require('path');
const lodash = require('lodash');

const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production';
const isPages = isPro && process.env.NODE_ENV_PRO === 'pages';

// 发布到pages时需要加上/org/repo的前缀
/* const base = (() => {
    if (isPages) {
        return '/bce-console/react-ui/';
    }
    if (isPro) {
        return '/react-ui/';
    }
    return '/';
})(); */
const base = (() => {
    if (isPages) {
        return '/bce-console/react-ui/';
    }
    if (isPro) {
        return '/';
    }
    return '/';
})();

function alertBabelConfig(rules) {
    lodash.each(rules, rule => {
        if (rule.loader && rule.loader.indexOf('babel-loader') > -1) {
            rule.options.plugins.push(['import', {libraryName: 'skd', style: true}]);
            return false;
        }
        else if (rule.use) {
            alertBabelConfig(rule.use);
        }
    });
}

module.exports = {
    port: 8000,
    hash: true,
    source: {
        components: './components'
    },
    root: base,
    output: './_site',
    theme: './site/theme',
    htmlTemplate: './site/theme/static/template.html',
    themeConfig: {
        title: 'acud'
    },
    doraConfig: {
        verbose: true,
    },
    lessConfig: {
        javascriptEnabled: true
    },
    webpackConfig(config) {
        config.output.publicPath = base;
        config.resolve.alias = {
            // '@baidu/acud/lib': path.join(process.cwd(), 'components'),
            // '@baidu/acud/es': path.join(process.cwd(), 'components'),
            // '@baidu/acud': path.join(process.cwd(), 'index'),
            'skd/lib': path.join(process.cwd(), 'components'),
            'skd/es': path.join(process.cwd(), 'components'),
            'skd': path.join(process.cwd(), 'index'),
            site: path.join(process.cwd(), 'site'),
            'react/jsx-runtime': require.resolve('react/jsx-runtime'),
            'react-router': 'react-router/umd/ReactRouter'
        };
        if (isDev) {
            config.devtool = 'source-map';
            config.resolve.alias = {
                ...config.resolve.alias,
                react: require.resolve('react')
            };
        }
        // 配置acud按需加载
        // alertBabelConfig(config.module.rules);
        delete config.module.noParse;
        return config;
    }
};
