/**
 * @file  pagination/rc-pagination/Pager
 * @author jianghaoran01
 */

import React from 'react';
import classNames from 'classnames';

export interface PagerProps {
    onClick?: (page: number) => void;
    page?: number;
    rootPrefixCls?: string;
    active?: boolean;
    className?: string;
    onKeyPress?: (event, onClick: (page: number) => void, page?: number) => void;
    showTitle?: boolean;
    disabled?: boolean;
    locale?: object;
    last?: boolean;
    key?: any;
    itemRender?: (
        page: number,
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
        originalElement: React.ReactElement<HTMLElement>
    ) => React.ReactNode;
};

const Pager: React.FC<PagerProps> = ({
    onClick, page, rootPrefixCls, active, className, onKeyPress, showTitle, disabled, itemRender
}) => {

    const prefixCls = `${rootPrefixCls}-item`;
    const cls = classNames(prefixCls, `${prefixCls}-${page}`, {
        [`${prefixCls}-active`]: active,
        [className]: !!className,
        [`${prefixCls}-disabled`]: !page
    });

    const handleClick = React.useCallback(() => {
        onClick(page);
    }, [onClick, page]);

    const handleKeyPress = React.useCallback(e => {
        onKeyPress(e, onClick, page);
    }, [onKeyPress, onClick, page]);

    return (
        <li
            title={showTitle ? page.toString() : ''}
            className={cls}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            tabIndex={0}
            // @ts-ignore
            disabled={disabled}
        >
            {itemRender(page, 'page', <a rel="nofollow">{page}</a>)}
        </li>
    );
};

export default Pager;
