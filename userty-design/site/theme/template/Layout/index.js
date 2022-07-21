/**
 * @file index
 * @author xuemin02
 */

import React from 'react';

import './index.less';

export default props => {
    const {children, location: {pathname}, router} = props;
    if (pathname === '/') {
        // 重定向到第一个组件（暂时是Button）
        router.push('/components/button');
    }
    return (
        <div className="page-wrapper">
            {children}
        </div>
    );
};
