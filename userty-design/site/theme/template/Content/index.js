/**
 * @file index
 * @author xuemin02
 */

import _ from 'lodash';
import collect from 'bisheng/collect';

import MainContent from './MainContent';

export default collect(async nextProps => {

    const {pathname} = nextProps.location;
    const pageDataPath = pathname.replace('-cn', '').split('/');
    console.log(pageDataPath);
    const pageData = nextProps.utils.get(nextProps.data, pageDataPath);
    console.log(pageData);
    if (!pageData) {
        throw 404;
    }

    const {index, demo} = pageData;

    const promiseFetcher = [];
    const targetData = {
        pageData: index || pageData,
        demos: demo
    };

    if (typeof pageData === 'function') {
        promiseFetcher.push(pageData());
    }
    else if (typeof index === 'function') {
        promiseFetcher.push(index());
    }

    if (demo && typeof demo === 'function') {
        promiseFetcher.push(demo());
    }

    if (promiseFetcher.length > 0) {
        const [pageData, demos] = await Promise.all(promiseFetcher);
        _.extend(targetData, {pageData, demos});
    }

    return targetData;
})(MainContent);
