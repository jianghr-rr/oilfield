import _ from 'lodash';

export const getModuleName = pathname => {
    const moduleName = pathname
        .split('/')
        .filter(item => item)
        .slice(0, 1);
    return moduleName;
};

export const getComponentName = pathname => {
    return pathname.split('/').filter(item => item)[1];
};

export const getMenuData = props => {
    const {picked, location: {pathname}} = props;
    const moduleName = getModuleName(pathname);
    const moduleData = picked[moduleName];
    const menuData = _.map(moduleData, moduleItem => moduleItem.meta); // todo 按组分类
    return menuData.sort((a, b) => {
        const compNameA = a.title || getComponentName(a.key);
        const compNameB = b.title || getComponentName(b.key);
        return compNameA.localeCompare(compNameB);
    });
};
