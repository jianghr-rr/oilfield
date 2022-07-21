import * as React from 'react';
import KeyCode from 'rc-util/lib/KeyCode';
import pickAttrs from 'rc-util/lib/pickAttrs';
import useMemo from 'rc-util/lib/hooks/useMemo';
import classNames from 'classnames';
import List, {ListRef} from 'rc-virtual-list';
import {RightOutlined, DownOutlined} from '@ant-design/icons';

import {
    OptionsType as SelectOptionsType,
    FlattenOptionData as SelectFlattenOptionData,
    OptionData,
    RenderNode,
    OnActiveValue
} from './interface';
import {RawValueType, FlattenOptionsType} from './interface/generator';
import Checkbox from '../../checkbox';

export interface OptionListProps<OptionsType extends object[]> {
    prefixCls: string;
    id: string;
    options: OptionsType;
    flattenOptions: FlattenOptionsType<OptionsType>;
    height: number;
    itemHeight: number;
    values: Set<RawValueType>;
    multiple: boolean;
    open: boolean;
    defaultActiveFirstOption?: boolean;
    notFoundContent?: React.ReactNode;
    mode?: string;
    menuItemSelectedIcon?: RenderNode;
    childrenAsData: boolean;
    searchValue: string;
    virtual: boolean;
    defaultExpandGroupKey: string[] | string | number[] | number | boolean;

    renderEmpty?: (componentName?: string, des?: string | undefined) => React.ReactNode;
    onSelect: (value: RawValueType, option: {selected: boolean}) => void;
    triggerChange: (newRawValues: RawValueType[]) => void;
    onToggleOpen: (open?: boolean) => void;
    /** Tell Select that some value is now active to make accessibility work */
    onActiveValue: OnActiveValue;
    onScroll: React.UIEventHandler<HTMLDivElement>;

    /** Tell Select that mouse enter the popup to force re-render */
    onMouseEnter?: React.MouseEventHandler;
    setInnerOpen?: (value: boolean) => void;
}

export interface RefOptionListProps {
    onKeyDown: React.KeyboardEventHandler;
    onKeyUp: React.KeyboardEventHandler;
    scrollTo?: (index: number) => void;
}

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
const OptionList: React.RefForwardingComponent<
    RefOptionListProps,
    OptionListProps<SelectOptionsType>
> = (
    {
        prefixCls,
        id,
        flattenOptions,
        childrenAsData,
        values,
        searchValue,
        multiple,
        defaultActiveFirstOption,
        height,
        itemHeight,
        notFoundContent,
        mode,
        open,
        virtual,
        defaultExpandGroupKey = false,
        renderEmpty,
        onSelect,
        onToggleOpen,
        onActiveValue,
        onScroll,
        onMouseEnter,
        triggerChange,
        setInnerOpen
    },
    ref,
) => {
    const itemPrefixCls = `${prefixCls}-item`;

    const memoFlattenOptions = useMemo(
        () => flattenOptions,
        [open, flattenOptions],
        (prev, next) => next[0] && prev[1] !== next[1],
    );

    // =========================== List ===========================
    const listRef = React.useRef<ListRef>(null);

    const onListMouseDown: React.MouseEventHandler<HTMLDivElement> = event => {
        event.preventDefault();
    };

    const scrollIntoView = (index: number) => {
        if (listRef.current) {
            listRef.current.scrollTo({index});
        }
    };

    // ========================== Active ==========================
    const getEnabledActiveIndex = (index: number, offset: number = 1): number => {
        const len = memoFlattenOptions.length;

        for (let i = 0; i < len; i += 1) {
            const current = (index + i * offset + len) % len;

            const {group, data} = memoFlattenOptions[current];
            if (!group && !(data as OptionData).disabled) {
                return current;
            }
        }

        return -1;
    };

    const [activeIndex, setActiveIndex] = React.useState(() => getEnabledActiveIndex(0));
    const setActive = (index: number, fromKeyboard = false) => {
        setActiveIndex(index);

        const info = {source: fromKeyboard ? ('keyboard' as const) : ('mouse' as const)};

        // Trigger active event
        const flattenItem = memoFlattenOptions[index];
        if (!flattenItem) {
            onActiveValue(null, -1, info);
            return;
        }

        onActiveValue((flattenItem.data as OptionData).value, index, info);
    };

    // Auto active first item when list length or searchValue changed
    React.useEffect(() => {
        setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, [memoFlattenOptions.length, searchValue]);

    // Auto scroll to item position in single mode
    React.useEffect(() => {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
        const timeoutId = setTimeout(() => {
            if (!multiple && open && values.size === 1) {
                const value: RawValueType = Array.from(values)[0];
                const index = memoFlattenOptions.findIndex(
                    ({data}) => (data as OptionData).value === value,
                );
                setActive(index);
                scrollIntoView(index);
            }
        });

        // Force trigger scrollbar visible when open
        if (open) {
            listRef.current?.scrollTo(undefined);
        }

        return () => clearTimeout(timeoutId);
    }, [open]);

    // ========================== Values ==========================
    const onSelectValue = (value: RawValueType) => {
        if (value !== undefined) {
            onSelect(value, {selected: !values.has(value)});
        }

        // Single mode should always close by select
        if (!multiple) {
            onToggleOpen(false);
        }
    };

    // ========================= Keyboard =========================
    React.useImperativeHandle(ref, () => ({
        onKeyDown: event => {
            const {which} = event;
            switch (which) {
            // >>> Arrow keys
            case KeyCode.UP:
            case KeyCode.DOWN: {
                let offset = 0;
                if (which === KeyCode.UP) {
                    offset = -1;
                }
                else if (which === KeyCode.DOWN) {
                    offset = 1;
                }

                if (offset !== 0) {
                    const nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                    scrollIntoView(nextActiveIndex);
                    setActive(nextActiveIndex, true);
                }

                break;
            }

            // >>> Select
            case KeyCode.ENTER: {
                // value
                const item = memoFlattenOptions[activeIndex];
                if (item && !(item.data as OptionData).disabled) {
                    onSelectValue((item.data as OptionData).value);
                }
                else {
                    onSelectValue(undefined);
                }

                if (open) {
                    event.preventDefault();
                }

                break;
            }

            // >>> Close
            case KeyCode.ESC: {
                onToggleOpen(false);
                if (open) {
                    event.stopPropagation();
                }
            }
            }
        },
        onKeyUp: () => {},

        scrollTo: index => {
            scrollIntoView(index);
        }
    }));

    // ===================== Empty =====================
    let mergedNotFound: React.ReactNode;
    if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
    }
    else if (mode === 'combobox') {
        mergedNotFound = null;
    }
    else {
        mergedNotFound = renderEmpty('Select', searchValue ? '未查找到任何结果' : undefined);
    }

    function renderItem(index: number) {
        const item = memoFlattenOptions[index];
        if (!item) {
            return null;
        }

        const itemData = (item.data || {}) as OptionData;
        const {value, label, children} = itemData;
        const attrs = pickAttrs(itemData, true);
        const mergedLabel = childrenAsData ? children : label;
        return item ? (
            <div
                aria-label={typeof mergedLabel === 'string' ? mergedLabel : null}
                {...attrs}
                key={index}
                role="option"
                id={`${id}_list_${index}`}
                aria-selected={values.has(value)}
            >
                {value}
            </div>
        ) : null;
    }

    // 是否全选状态
    let selectAllChecked = false;
    // 半选状态
    let indeterminate = false;
    // 所有enable项的值
    let enableAllValues = [];
    // 已选中的disabled项的值
    let disabledValues = [];
    // 已选中的enable项的值
    let enableValues = [];
    // 所有group key
    let groupKeys = [];
    if (multiple) {
        const enableOptions = memoFlattenOptions.filter(option => !option.data.disabled && !option.group);
        const disabledOptions = memoFlattenOptions.filter(option => option.data.disabled);
        enableAllValues = enableOptions.map(option => option.key);

        enableValues = [...values].filter(value => enableOptions.find(option => option.key === value));
        disabledValues = [...values].filter(value => disabledOptions.find(option => option.key === value));

        selectAllChecked = enableValues.length === enableOptions.length;
        indeterminate = !selectAllChecked && !!enableValues.length;

        groupKeys = memoFlattenOptions.filter(option => option.group).map(option => option.key);
    }
    let expandGroupKeys = [];
    if (defaultExpandGroupKey === true) {
        // 默认展开所有折叠项
        expandGroupKeys = groupKeys;
    }
    else if (Array.isArray(defaultExpandGroupKey)) {
        expandGroupKeys = defaultExpandGroupKey;
    }
    else if (typeof defaultExpandGroupKey === 'string' || typeof defaultExpandGroupKey === 'number') {
        expandGroupKeys = [defaultExpandGroupKey];
    }

    const [expandGroupKey, setExpandGroupKey] = React.useState(expandGroupKeys);

    const handleCheckAll = () => {
        if (searchValue === '' || searchValue === undefined) {
            triggerChange(selectAllChecked ? disabledValues : [...enableAllValues, ...disabledValues]);
        }
        else {
            triggerChange(selectAllChecked
                ? [...values].filter(v => !enableAllValues.includes(v))
                : Array.from(new Set([...values, ...enableAllValues]))
            );
        }
        if (!selectAllChecked && setInnerOpen) {
            setInnerOpen(false);
        }
    };

    const getCheckStatus = (groupKey, type) => {
        const groupOptions = memoFlattenOptions.filter(option => option.groupKey === groupKey);
        const groupEnableOptions = groupOptions.filter(option => !option.data.disabled);
        if (type === 'all') {
            return groupEnableOptions.every(option => values.has(option.key));
        }
        else if (type === 'indeterminate') {
            return !groupEnableOptions.every(option => values.has(option.key))
                && groupEnableOptions.some(option => values.has(option.key));
        }
        return false;
    };

    const handleCheckGroup = (e, groupKey) => {
        const groupOptions = memoFlattenOptions.filter(option => !option.disabled && option.groupKey === groupKey);
        const groupEnableOptions = groupOptions.filter(option => !option.data.disabled);
        const allValues = groupEnableOptions.map(option => option.key);
        const checkAll = getCheckStatus(groupKey, 'all');
        if (checkAll) {
            triggerChange([...Array.from(values).filter(value => !allValues.includes(value))]);
        }
        else {
            triggerChange(Array.from(new Set([...values, ...allValues])));
        }
        e.stopPropagation();
    };

    const renderOption = (data, values, groupOption, label, itemIndex, groupKey) => {
        const {
            disabled,
            value,
            title,
            children,
            style,
            className,
            ...otherProps
        } = data as OptionData;

        // Option
        const selected = values.has(value);

        const optionPrefixCls = `${itemPrefixCls}-option`;
        const optionClassName = classNames(itemPrefixCls, optionPrefixCls, className, {
            [`${optionPrefixCls}-grouped`]: groupOption,
            [`${optionPrefixCls}-active`]: activeIndex === itemIndex && !disabled,
            [`${optionPrefixCls}-disabled`]: disabled,
            [`${optionPrefixCls}-selected`]: selected
        });

        const mergedLabel = childrenAsData ? children : label;

        // const iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;

        const content = mergedLabel || value;
        let optionTitle = typeof content === 'string' || typeof content === 'number'
            ? content.toString()
            : undefined;
        if (title !== undefined) {
            optionTitle = title;
        }

        return (
            <div
                {...otherProps}
                aria-selected={selected}
                className={optionClassName}
                title={optionTitle}
                onMouseMove={() => {
                    if (activeIndex === itemIndex || disabled) {
                        return;
                    }
                    setActive(itemIndex);
                }}
                onClick={() => {
                    if (!disabled) {
                        onSelectValue(value);
                    }
                }}
                style={{
                    display: groupOption && !expandGroupKey.includes(groupKey) ? 'none' : '',
                    ...style
                }}
            >
                {multiple && (
                    <Checkbox checked={selected} disabled={disabled} />
                )}
                <div className={`${optionPrefixCls}-content`}>{content}</div>
            </div>
        );
    };

    // ========================== Render ==========================
    if (memoFlattenOptions.length === 0) {
        return (
            <div
                role="listbox"
                id={`${id}_list`}
                className={`${itemPrefixCls}-empty`}
                onMouseDown={onListMouseDown}
            >
                {mergedNotFound}
            </div>
        );
    }

    return (
        <>
            <div role="listbox" id={`${id}_list`} style={{height: 0, width: 0, overflow: 'hidden'}}>
                {renderItem(activeIndex - 1)}
                {renderItem(activeIndex)}
                {renderItem(activeIndex + 1)}
            </div>
            {multiple && (
                <div
                    className={`${itemPrefixCls}-checkall`}
                    onClick={handleCheckAll}
                >
                    <Checkbox
                        indeterminate={indeterminate}
                        checked={selectAllChecked}
                    />
                    <div className={`${itemPrefixCls}-option-content`}>全选</div>
                </div>
            )}
            <List<SelectFlattenOptionData>
                itemKey="key"
                ref={listRef}
                data={memoFlattenOptions}
                height={height}
                itemHeight={itemHeight}
                fullHeight={false}
                onMouseDown={onListMouseDown}
                onScroll={onScroll}
                virtual={virtual}
                onMouseEnter={onMouseEnter}
            >
                {({group, groupOption, data, groupKey}, itemIndex) => {
                    const {label, key} = data;
                    // Group
                    if (group) {
                        return (
                            <div
                                className={classNames(itemPrefixCls, `${itemPrefixCls}-group`)}
                                onClick={() => {
                                    const gIndex = expandGroupKey.indexOf(key);
                                    const newGroupKey = [...expandGroupKey];
                                    gIndex !== -1 ? newGroupKey.splice(gIndex, 1) : newGroupKey.push(key);
                                    setExpandGroupKey(newGroupKey);
                                }}
                            >
                                {
                                    <span
                                        className={`${itemPrefixCls}-group-arrow`}
                                    >
                                        {expandGroupKey.includes(key)
                                            ? <DownOutlined />
                                            : <RightOutlined />}
                                    </span>
                                }
                                {multiple && (
                                    <Checkbox
                                        className={`${itemPrefixCls}-group-checkbox`}
                                        indeterminate={getCheckStatus(key, 'indeterminate')}
                                        checked={getCheckStatus(key, 'all')}
                                        onClick={e => handleCheckGroup(e, key)}
                                    />
                                )}
                                {<span>{label !== undefined ? label : key}</span>}
                            </div>
                        );
                    }
                    return renderOption(data, values, groupOption, label, itemIndex, groupKey);
                }}
            </List>
        </>
    );
};

const RefOptionList = React.forwardRef<RefOptionListProps, OptionListProps<SelectOptionsType>>(
    OptionList,
);
RefOptionList.displayName = 'OptionList';

export default RefOptionList;
