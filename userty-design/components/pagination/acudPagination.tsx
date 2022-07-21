/**
 * @file Pagination
 * @author jianghaoran01
 */
import * as React from 'react';

import {
    LeftOutlined,
    RightOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
    EllipsisOutlined
} from '@ant-design/icons';
import classNames from 'classnames';
import {ConfigContext} from '../config-provider';
import './style/index.less';
// import LOCALE from './locale/zh_CN';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
// import enUS from '../locale/en_US';
import RcPagination from './rc-pagination';
import Select from '../select';
// import {PaginationProps} from './rc-pagination/Interface';
export type PaginationPosition = 'top' | 'bottom' | 'both';

export interface PaginationProps {
    total?: number;
    defaultCurrent?: number;
    disabled?: boolean;
    current?: number;
    defaultPageSize?: number;
    pageSize?: number;
    onChange?: (page: number, pageSize?: number) => void;
    hideOnSinglePage?: boolean;
    showSizeChanger?: boolean;
    pageSizeOptions?: string[];
    onShowSizeChange?: (current: number, size: number) => void;
    showQuickJumper?: boolean | { goButton?: React.ReactNode };
    showTitle?: boolean;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    size?: 'default' | 'small';
    responsive?: boolean;
    simple?: boolean;
    style?: React.CSSProperties;
    locale?: Object;
    className?: string;
    prefixCls?: string;
    selectPrefixCls?: string;
    itemRender?: (
        page: number,
        type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
        originalElement: React.ReactElement<HTMLElement>
    ) => React.ReactNode;
    role?: string;
    showLessItems?: boolean;
}
export interface PaginationConfig extends PaginationProps {
    position?: PaginationPosition;
}

export type PaginationLocale = any;

export const Option = Select.Option;

const Pagination: React.FC<PaginationProps> = ({
    prefixCls: customizePrefixCls,
    selectPrefixCls: customizeSelectPrefixCls,
    className,
    size,
    showQuickJumper,
    showSizeChanger,
    locale: customLocale,
    ...restProps
}) => {
    const {getPrefixCls, direction} = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('pagination', customizePrefixCls);

    const getIconsProps = () => {
        const ellipsis = (
            <span className={`${prefixCls}-item-ellipsis`}>
                <EllipsisOutlined />
            </span>
        );
        let prevIcon = (
            <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
                <LeftOutlined />
            </button>
        );
        let nextIcon = (
            <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
                <RightOutlined />
            </button>
        );
        let jumpPrevIcon = (
            <a className={`${prefixCls}-item-link`}>
                <div className={`${prefixCls}-item-container`}>
                    <DoubleLeftOutlined className={`${prefixCls}-item-link-icon`} />
                    {ellipsis}
                </div>
            </a>
        );
        let jumpNextIcon = (
            <a className={`${prefixCls}-item-link`}>
                <div className={`${prefixCls}-item-container`}>
                    <DoubleRightOutlined className={`${prefixCls}-item-link-icon`} />
                    {ellipsis}
                </div>
            </a>
        );
        return {
            prevIcon,
            nextIcon,
            jumpPrevIcon,
            jumpNextIcon
        };
    };

    // const renderQuickJumper = () => <Button type='default'>GO</Button>;

    const renderPagination = (contextLocale: PaginationLocale) => {
        const locale = {...contextLocale, ...customLocale};
        const isSmall = size === 'small' || !!(!size && restProps.responsive);
        const selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
        const extendedClassName = classNames(
            {
                mini: isSmall,
                ['rtl']: direction === 'rtl'
            },
            className
        );
        return (
            <RcPagination
                showSizeChanger={showSizeChanger}
                {...restProps}
                prefixCls={prefixCls}
                selectPrefixCls={selectPrefixCls}
                {...getIconsProps()}
                className={extendedClassName}
                selectComponentClass={showSizeChanger ? Select : undefined}
                Option={Option}
                showQuickJumper={showQuickJumper}
                locale={locale}
            />
        );
    };
    return (
        <LocaleReceiver componentName="Pagination" defaultLocale={defaultLocale.Pagination}>
            {renderPagination}
        </LocaleReceiver>
    );

    // return renderPagination();
};

export default Pagination;
