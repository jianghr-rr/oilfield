/**
 * @file index
 * @author xuemin02
 */

const path = require('path');

const pickerGenerator = modulePath => {
    const reg = new RegExp(`^${modulePath}`);
    return markdownData => {
        const {filename} = markdownData.meta;
        if (!reg.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
            return null;
        }
        // 由filename计算出与路由匹配的key
        const key = filename
            .replace(/\.md$/, '')
            .split('/')
            .filter(item => item)
            .slice(0, 2)
            .join('/');

        return {
            meta: {...markdownData.meta, key}
        };
    };
};

module.exports = {
    lazyLoad(nodePath, nodeValue) {
        if (typeof nodeValue === 'string') {
            return true;
        }
        return nodePath.endsWith('/demo');
    },
    pick: {
        components: pickerGenerator('components')
    },
    plugins: [
        'bisheng-plugin-description',
        'bisheng-plugin-toc?maxDepth=2&keepElem',
        '@ant-design/bisheng-plugin?injectProvider',
        'bisheng-plugin-react?lang=__react'
    ],
    routes: {
        path: '/',
        component: './template/Layout',
        childRoutes: [
            {
                path: 'components/:children',
                component: './template/Content'
            },
            {
                path: 'theme/:children',
                component: './template/DesignPage'
            },
            {
                path: 'docs/:children',
                component: './template/Content'
            }
        ]
    }
};
