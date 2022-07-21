/**
 * @file  pagination/rc-pagination/Pagination
 * @author jianghaoran01
 */

import React, {cloneElement, isValidElement, useState, useMemo, useCallback, useEffect} from 'react';
import classNames from 'classnames';

import LOCALE from '../locale/zh_CN';
import Pager from './Pager';
import Options from './Options';
import {KEYCODE} from './KeyCode';
import Goto from './Goto';
import {PaginationProps as PaginationConfigProps} from './Interface';
export interface RefNodeProps {
    querySelector?: (attr: string) => QuerySelectorReturnProps
};

export interface QuerySelectorReturnProps {
    blur?: () => void
};

const noop = () => {};

const isInteger = (value: any) => typeof value === 'number' && isFinite(value) && Math.floor(value) === value;

const defaultItemRender = (
    _page: number,
    _type: string,
    element: React.ReactElement<HTMLElement>
): React.ReactNode => element;

const calculatePage = (p: undefined | number, state: {pageSize?: number}, props) => {
    const pageSize = typeof p === 'undefined' ? state.pageSize : p;
    return Math.floor((props.total - 1) / pageSize) + 1;
};

const dataOrAriaAttributeProps = props => Object.keys(props).reduce(
    (prev, key) => {
        if (
            key.substr(0, 5) === 'data-'
            || key.substr(0, 5) === 'aria-'
            || key === 'role'
        ) {
            prev[key] = props[key];
        }
        return prev;
    },
    {}
);

export interface PaginationProps extends PaginationConfigProps {
    Option?: React.FC;
    selectComponentClass?: null | React.FC;
    showPrevNextJumpers?: boolean;
    totalBoundaryShowSizeChanger?: number;
    nextIcon?: React.ReactNode;
    prevIcon?: React.ReactNode;
    jumpPrevIcon?: React.ReactNode;
    jumpNextIcon?: React.ReactNode;
}

const Pagination: React.FC<PaginationProps>  = ({
    ...props
}) => {
    const {
        defaultCurrent = 1,
        total = 0,
        defaultPageSize = 10,
        onChange = noop,
        className = '',
        selectPrefixCls = 'rc-select',
        prefixCls = 'rc-pagination',
        selectComponentClass = null,
        hideOnSinglePage = false,
        showPrevNextJumpers = true,
        showQuickJumper = false,
        showLessItems = false,
        showTitle = true,
        onShowSizeChange = noop,
        locale = LOCALE,
        style = {},
        itemRender = defaultItemRender,
        totalBoundaryShowSizeChanger = 50,
        nextIcon,
        prevIcon,
        showSizeChanger,
        disabled,
        simple,
        jumpPrevIcon,
        jumpNextIcon,
        showTotal,
        pageSizeOptions,
        Option
    } = props;
    const pagerList = [];
    let jumpPrevRender = null;
    let jumpNextRender = null;
    let firstPager = null;
    let lastPager = null;

    const hasCurrent = 'current' in props;
    const hasPageSize = 'pageSize' in props;

    const [current, setCurrent] = useState(defaultCurrent);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [currentInputValue, setCurrentInputValue] = useState(current);
    const [paginationNode, setPaginationNode] = useState();

    const goButton = showQuickJumper && (typeof showQuickJumper !== 'boolean' && showQuickJumper.goButton);
    const pageBufferSize = showLessItems ? 1 : 2;

    const curState = useMemo(() => ({current, currentInputValue, pageSize}), [current, currentInputValue, pageSize]);
    const allPages = useMemo(() => calculatePage(undefined, curState, props), [props, curState]);

    const prevPage = current - 1 > 0 ? current - 1 : 0;
    const nextPage = current + 1 < allPages ? current + 1 : allPages;

    const hasOnChange = useMemo(() => onChange !== noop, [onChange]);

    useEffect(() => {
        if (hasPageSize) {
            setPageSize(props.pageSize);
            if (hasCurrent) {
                const newCurrent = calculatePage(props.pageSize, curState, props);
                const cur = current > newCurrent ? newCurrent : current;
                setCurrent(cur);
                setCurrentInputValue(cur);
            }
        }
    }, [hasPageSize, props.pageSize, hasCurrent, current, curState, props]);

    useEffect(() => {
        if (hasCurrent) {
            const cur = Math.min(props.current, calculatePage(pageSize, undefined, props));
            setCurrent(cur);
            setCurrentInputValue(cur);
        }
    }, [hasCurrent, pageSize, setCurrentInputValue, setCurrent, props]);

    useEffect(() => {
        if (hasCurrent && !hasOnChange) {
            // eslint-disable-next-line no-console
            console.warn(
                'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler.'
                + 'This will render a read-only component.'
            );
        }
    }, [hasCurrent, hasOnChange]);

    useEffect(() => {
        if (paginationNode) {
            const lastCurrentNode = (paginationNode as RefNodeProps).querySelector(
                `.${prefixCls}-item-${current}`
            );
            if (lastCurrentNode && document.activeElement === lastCurrentNode) {
                lastCurrentNode.blur();
            }
        }
    }, [current, paginationNode, prefixCls]);

    const getJumpPrevPage = useCallback(() =>
        Math.max(1, current - (showLessItems ? 3 : 5))
    , [current, showLessItems]);

    const getJumpNextPage = useCallback(() =>
        Math.min(
            calculatePage(undefined, curState, props),
            current + (showLessItems ? 3 : 5)
        )
    , [showLessItems, current, curState, props]);
    /**
     * computed icon node that need to be rendered.
     * @param {React.ReactNode | React.ComponentType<PaginationProps>} icon received icon.
     * @returns {React.ReactNode}
     */
    const getItemIcon = useCallback((icon, label) => {
        let iconNode = icon || (
            <button
                type="button"
                aria-label={label}
                className={`${prefixCls}-item-link`}
            />
        );
        if (typeof icon === 'function') {
            iconNode = React.createElement(icon, {...props});
        }
        return iconNode;
    }, [prefixCls, props]);

    const getValidValue = useCallback(e => {
        const inputValue = e.target.value;
        let value;
        if (inputValue === '') {
            value = inputValue;
        }
        else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
        }
        else if (inputValue >= allPages) {
            value = allPages;
        }
        else {
            value = Number(inputValue);
        }
        return value;
    }, [currentInputValue, allPages]);

    const savePaginationNode = useCallback(node => setPaginationNode(node), []);

    const isValid = useCallback(page => isInteger(page) && page !== current, [current]);

    const shouldDisplayQuickJumper = useMemo(() => {
        if (total <= pageSize) {
            return false;
        }
        return showQuickJumper;
    }, [total, pageSize, showQuickJumper]);

    const handleChange = useCallback(p => {
        let page = p;
        if (isValid(page) && !disabled) {
            const currentPage = calculatePage(
                undefined,
                curState,
                props
            );
            if (page > currentPage) {
                page = currentPage;
            }
            else if (page < 1) {
                page = 1;
            }

            if (!hasCurrent) {
                setCurrent(page);
                setCurrentInputValue(page);
            }

            onChange(page, pageSize);
        }
    }, [disabled, hasCurrent, curState, props, setCurrent, setCurrentInputValue, onChange, isValid, pageSize]);

    const handleKeyDown = useCallback(e => {
        if (e.keyCode === [KEYCODE.ARROW_UP, KEYCODE.ARROW_DOWN].includes(e.keyCode)) {
            e.preventDefault();
        }
    }, []);

    const handleKeyUp = useCallback(e => {
        const value = getValidValue(e);
        if (value !== currentInputValue) {
            setCurrentInputValue(value);
        }
        if (e.keyCode === KEYCODE.ENTER) {
            handleChange(value);
        }
        else if (e.keyCode === KEYCODE.ARROW_UP) {
            handleChange(value - 1);
        }
        else if (e.keyCode === KEYCODE.ARROW_DOWN) {
            handleChange(value + 1);
        }
    }, [currentInputValue, getValidValue, handleChange]);

    const changePageSize = useCallback(size => {
        const newCurrent = calculatePage(size, curState, props);
        let cur = current > newCurrent ? newCurrent : current;
        if (newCurrent === 0) {
            cur = current;
        }

        if (typeof size === 'number') {
            if (!hasPageSize) {
                setPageSize(size);
            }
            if (!hasCurrent) {
                setCurrentInputValue(cur);
                setCurrent(cur);
            }
        }

        onShowSizeChange(cur, size);
        if ('onChange' in props && onChange) {
            onChange(cur, size);
        }
    }, [onShowSizeChange, props, hasPageSize, hasCurrent, curState, onChange, current]);

    const hasPrev = useMemo(() => current > 1, [current]);

    const hasNext = useMemo(() => current < calculatePage(undefined, curState, props), [current, props, curState]);

    const prev = useCallback(() => {
        if (hasPrev) {
            handleChange(current - 1);
        }
    }, [handleChange, current, hasPrev]);

    const next = useCallback(() => {
        if (hasNext) {
            handleChange(current + 1);
        }
    }, [handleChange, current, hasNext]);

    const jumpPrev = useCallback(() => {
        handleChange(getJumpPrevPage());
    }, [handleChange, getJumpPrevPage]);

    const jumpNext = useCallback(() => {
        handleChange(getJumpNextPage());
    }, [getJumpNextPage, handleChange]);

    const getShowSizeChanger = useMemo(() => {
        if (typeof showSizeChanger !== 'undefined') {
            return showSizeChanger;
        }
        return total > totalBoundaryShowSizeChanger;
    }, [total, showSizeChanger, totalBoundaryShowSizeChanger]);

    const runIfEnter = useCallback((event, callback, ...restParams) => {
        if (event.key === 'Enter' || event.charCode === 13) {
            callback(...restParams);
        }
    }, []);

    const runIfEnterPrev = useCallback(e => {
        runIfEnter(e, prev);
    }, [runIfEnter, prev]);

    const runIfEnterNext = useCallback(e => {
        runIfEnter(e, next);
    }, [runIfEnter, next]);

    const runIfEnterJumpPrev = useCallback(e => {
        runIfEnter(e, jumpPrev);
    }, [runIfEnter, jumpPrev]);

    const runIfEnterJumpNext = useCallback(e => {
        runIfEnter(e, jumpNext);
    }, [runIfEnter, jumpNext]);

    const handleGoTO = useCallback(e => {
        if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
            handleChange(currentInputValue);
        }
    }, [handleChange, currentInputValue]);

    const renderPrev = useCallback(prevPage => {
        const prevButton = itemRender(
            prevPage,
            'prev',
            getItemIcon(prevIcon, 'prev page')
        );
        const curDisabled = !hasPrev || disabled;
        return isValidElement(prevButton)
            ? cloneElement(prevButton, {disabled: curDisabled} as any)
            : prevButton;
    }, [prevIcon, itemRender, getItemIcon, hasPrev, disabled]);

    const renderNext = useCallback(nextPage => {
        const nextButton = itemRender(
            nextPage,
            'next',
            getItemIcon(nextIcon, 'next page')
        );
        const curDisabled = !hasNext || disabled;
        return isValidElement(nextButton)
            ? cloneElement(nextButton, {disabled: curDisabled} as any)
            : nextButton;
    }, [itemRender, nextIcon, getItemIcon, hasNext, disabled]);

    const gotoButtonRender = () => {
        if (simple && goButton) {
            return (
                <li
                    title={
                        showTitle
                            ? `${locale.jump_to}${current}/${allPages}`
                            : null
                    }
                    className={classNames(`${prefixCls}-simple-pager`, {[`${prefixCls}-disabled`]: disabled})}
                >
                    {typeof goButton === 'boolean' ? (
                        <button
                            type="button"
                            onClick={handleGoTO}
                            onKeyUp={handleGoTO}
                        >
                            {locale.jump_to_confirm}
                        </button>
                    ) : (
                        <span
                            onClick={handleGoTO}
                            onKeyUp={handleGoTO}
                        >
                            {goButton}
                        </span>
                    )}
                </li>
            );
        }
        return null;
    };

    // When hideOnSinglePage is true and there is only 1 page, hide the pager
    if (hideOnSinglePage === true && total <= pageSize) {
        return null;
    }

    // simple mode
    if (simple) {
        return (
            <ul
                className={classNames(
                    prefixCls,
                    `${prefixCls}-simple`,
                    {[`${prefixCls}-disabled`]: disabled},
                    className
                )}
                style={style}
                ref={savePaginationNode}
                {...dataOrAriaAttributeProps(props)}
            >
                <li
                    title={showTitle ? locale.prev_page : null}
                    onClick={prev}
                    tabIndex={hasPrev ? 0 : null}
                    onKeyPress={runIfEnterPrev}
                    className={classNames(`${prefixCls}-prev`, {
                        [`${prefixCls}-disabled`]: !hasPrev || disabled
                    })}
                    aria-disabled={!hasPrev || disabled}
                >
                    {renderPrev(prevPage)}
                </li>
                <li
                    title={showTitle ? `${current}/${allPages}` : null}
                    className={`${prefixCls}-simple-pager`}
                    aria-disabled={disabled}
                >
                    <input
                        type="text"
                        value={currentInputValue}
                        disabled={disabled}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onChange={handleKeyUp}
                        size={3}
                    />
                    <span className={`${prefixCls}-slash`}>/</span>
                    {allPages}
                </li>
                <li
                    title={showTitle ? locale.next_page : null}
                    onClick={next}
                    tabIndex={hasPrev ? 0 : null}
                    onKeyPress={runIfEnterNext}
                    className={classNames(`${prefixCls}-next`, {
                        [`${prefixCls}-disabled`]: !hasNext || disabled
                    })}
                    aria-disabled={!hasNext || disabled}
                >
                    {renderNext(nextPage)}
                </li>
                {gotoButtonRender()}
            </ul>
        );
    }

    // not simple mode
    if (allPages <= 3 + pageBufferSize * 2) {
        const pagerProps = {
            locale,
            rootPrefixCls: prefixCls,
            onClick: handleChange,
            onKeyPress: runIfEnter,
            showTitle,
            itemRender,
            disabled
        };
        if (!allPages) {
            pagerList.push(
                <Pager
                    {...pagerProps}
                    key="noPager"
                    page={allPages}
                    className={`${prefixCls}-disabled`}
                />
            );
        }
        for (let i = 1; i <= allPages; i += 1) {
            const active = current === i;
            pagerList.push(
                <Pager {...pagerProps} key={i} page={i} active={active} />
            );
        }
    }
    else {
        const prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        const nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
        if (showPrevNextJumpers) {
            jumpPrevRender = (
                <li
                    title={showTitle ? prevItemTitle : null}
                    key="prev"
                    onClick={jumpPrev}
                    tabIndex={0}
                    onKeyPress={runIfEnterJumpPrev}
                    className={classNames(`${prefixCls}-jump-prev`, {
                        [`${prefixCls}-jump-prev-custom-icon`]: !!jumpPrevIcon
                    })}
                    aria-disabled={disabled}
                >
                    {itemRender(
                        getJumpPrevPage(),
                        'jump-prev',
                        getItemIcon(jumpPrevIcon, 'prev page')
                    )}
                </li>
            );
            jumpNextRender = (
                <li
                    title={showTitle ? nextItemTitle : null}
                    key="next"
                    tabIndex={0}
                    onClick={jumpNext}
                    onKeyPress={runIfEnterJumpNext}
                    className={classNames(`${prefixCls}-jump-next`, {
                        [`${prefixCls}-jump-next-custom-icon`]: !!jumpNextIcon
                    })}
                    aria-disabled={disabled}
                >
                    {itemRender(
                        getJumpNextPage(),
                        'jump-next',
                        getItemIcon(jumpNextIcon, 'next page')
                    )}
                </li>
            );
        }
        lastPager = (
            <Pager
                locale={locale}
                last
                rootPrefixCls={prefixCls}
                onClick={handleChange}
                onKeyPress={runIfEnter}
                key={allPages}
                page={allPages}
                active={false}
                showTitle={showTitle}
                itemRender={itemRender}
                disabled={disabled}
            />
        );
        firstPager = (
            <Pager
                locale={locale}
                rootPrefixCls={prefixCls}
                onClick={handleChange}
                onKeyPress={runIfEnter}
                key={1}
                page={1}
                active={false}
                showTitle={showTitle}
                itemRender={itemRender}
                disabled={disabled}
            />
        );

        let left = Math.max(1, current - pageBufferSize);
        let right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
            right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
            left = allPages - pageBufferSize * 2;
        }

        for (let i = left; i <= right; i += 1) {
            const active = current === i;
            pagerList.push(
                <Pager
                    locale={locale}
                    rootPrefixCls={prefixCls}
                    onClick={handleChange}
                    onKeyPress={runIfEnter}
                    key={i}
                    page={i}
                    active={active}
                    showTitle={showTitle}
                    itemRender={itemRender}
                    disabled={disabled}
                />
            );
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
            pagerList[0] = cloneElement(pagerList[0], {
                className: `${prefixCls}-item-after-jump-prev`
            });
            pagerList.unshift(jumpPrevRender);
        }
        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
            pagerList[pagerList.length - 1] = cloneElement(
                pagerList[pagerList.length - 1],
                {
                    className: `${prefixCls}-item-before-jump-next`
                }
            );
            pagerList.push(jumpNextRender);
        }

        if (left !== 1) {
            pagerList.unshift(firstPager);
        }
        if (right !== allPages) {
            pagerList.push(lastPager);
        }
    }

    const renderTotalText = () => {
        if (showTotal) {
            return (
                <li className={`${prefixCls}-total-text`}>
                    {showTotal(total, [
                        total === 0 ? 0 : (current - 1) * pageSize + 1,
                        current * pageSize > total ? total : current * pageSize
                    ])}
                </li>
            );
        }
        return null;
    };

    const prevDisabled = !hasPrev || !allPages;
    const nextDisabled = !hasNext || !allPages;

    return (
        <ul
            className={classNames(prefixCls, className, {
                [`${prefixCls}-disabled`]: disabled
            })}
            style={style}
            unselectable="on"
            ref={savePaginationNode}
            {...dataOrAriaAttributeProps(props)}
        >
            {renderTotalText()}
            <Options
                disabled={disabled}
                locale={locale}
                rootPrefixCls={prefixCls}
                selectComponentClass={selectComponentClass}
                selectPrefixCls={selectPrefixCls}
                changeSize={getShowSizeChanger ? changePageSize : null}
                current={current}
                pageSize={pageSize.toString()}
                pageSizeOptions={pageSizeOptions}
                Option={Option}
            />
            <li
                title={showTitle ? locale.prev_page : null}
                onClick={prev}
                tabIndex={prevDisabled ? null : 0}
                onKeyPress={runIfEnterPrev}
                className={classNames(`${prefixCls}-prev`, {
                    [`${prefixCls}-disabled`]: prevDisabled || disabled
                })}
                aria-disabled={prevDisabled || disabled}
            >
                {renderPrev(prevPage)}
            </li>
            {pagerList}
            <li
                title={showTitle ? locale.next_page : null}
                onClick={next}
                tabIndex={nextDisabled ? null : 0}
                onKeyPress={runIfEnterNext}
                className={classNames(`${prefixCls}-next`, {
                    [`${prefixCls}-disabled`]: nextDisabled || disabled
                })}
                aria-disabled={nextDisabled || disabled}
            >
                {renderNext(nextPage)}
            </li>
            <Goto
                disabled={disabled}
                locale={locale}
                rootPrefixCls={prefixCls}
                current={current}
                quickGo={
                    shouldDisplayQuickJumper
                        ? handleChange
                        : null
                }
                goButton={goButton}
            />
        </ul>
    );
};

export default Pagination;
