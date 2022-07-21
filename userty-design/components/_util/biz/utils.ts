/**
 * 判断数组是否为空
 * @param {*} data
 * @author liuzhipeng03
 */
function isArrayNull(data) {
    return !Array.isArray(data) || (Array.isArray(data) && !data.length);
}

export {isArrayNull};