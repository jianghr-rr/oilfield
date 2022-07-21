/*
 * @file acud 入口文件
 *
 */

const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach(mod => {
    let v = req(mod);
    if (v && v.default) {
        v = v.default;
    }
});

module.exports = require('./components');
