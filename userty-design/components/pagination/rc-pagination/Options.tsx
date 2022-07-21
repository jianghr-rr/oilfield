/**
 * @file  pagination/rc-pagination/Options
 * @author jianghaoran01
 */

import React from 'react';

import {SelectProps} from '../../select/src';
import {OptionProps} from '../../select/src/Option';

export interface OptionsProps {
    pageSizeOptions?: string[];
    changeSize?: (pageSize: number) => void;
    rootPrefixCls?: string;
    pageSize?: string;
    selectComponentClass?: null | React.FC<SelectProps>;
    buildOptionText?: (option: string) => string;
    selectPrefixCls?: string;
    disabled?: boolean;
    locale?: object;
    current?: number;
    Option?: React.FC<OptionProps>
};

const Options: React.FC<OptionsProps> = ({
    pageSizeOptions = ['10', '20', '50', '100'],
    changeSize,
    pageSize,
    rootPrefixCls,
    selectComponentClass,
    buildOptionText,
    selectPrefixCls,
    disabled,
    Option
}) => {
    const prefixCls = `${rootPrefixCls}-options`;
    const Select = selectComponentClass;

    const handleBuildOptionText = React.useCallback(value => `${value}`, []);

    const handleChangeSize = React.useCallback(value => {
        changeSize(Number(value));
    }, [changeSize]);

    const curPageSizeOptions = React.useMemo(() => {
        if (
            pageSizeOptions.some(option => option.toString() === pageSize.toString())
        ) {
            return pageSizeOptions;
        }
        return pageSizeOptions.concat([pageSize.toString()]).sort((a, b) => {
            // eslint-disable-next-line no-restricted-globals
            const numberA = isNaN(Number(a)) ? 0 : Number(a);
            // eslint-disable-next-line no-restricted-globals
            const numberB = isNaN(Number(b)) ? 0 : Number(b);
            return numberA - numberB;
        });
    }, [pageSize, pageSizeOptions]);

    const changeSelect = React.useMemo(() => {
        if (changeSize && Select) {
            const options = curPageSizeOptions.map(opt => (
                <Option key={opt.toString()} value={opt.toString()}>
                    {(buildOptionText || handleBuildOptionText)(opt)}
                </Option>
            ));

            return (
                <Select
                    disabled={disabled}
                    prefixCls={selectPrefixCls}
                    showSearch={false}
                    className={`${prefixCls}-size-changer`}
                    optionLabelProp="children"
                    dropdownMatchSelectWidth={false}
                    value={(pageSize || curPageSizeOptions[0]).toString()}
                    onChange={handleChangeSize}
                    getPopupContainer={triggerNode => triggerNode.parentNode}
                >
                    {options}
                </Select>
            );
        }
        return null;
    }, [
        Select,
        buildOptionText,
        changeSize,
        handleChangeSize,
        disabled,
        pageSize,
        curPageSizeOptions,
        handleBuildOptionText,
        prefixCls,
        selectPrefixCls,
        Option
    ]);

    if (!changeSize || !Select) {
        return null;
    }

    return (
        <li className={`${prefixCls}`}>
            <span className={`${prefixCls}-tip`}>每页显示</span>
            {changeSelect}
        </li>
    );
};

export default Options;
