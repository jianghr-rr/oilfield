import * as React from 'react';
import classNames from 'classnames';
import {ConfigContext} from '../config-provider';

export interface CheckableTagProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * It is an absolute controlled component and has no uncontrolled mode.
   *
   * .zh-cn 该组件为完全受控组件，不支持非受控用法。
   */
  checked: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const CheckableTag: React.FC<CheckableTagProps> = ({
    prefixCls: customizePrefixCls,
    className,
    checked,
    onChange,
    onClick,
    ...restProps
}) => {
    const {getPrefixCls} = React.useContext(ConfigContext);

    const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        onChange?.(!checked);
        onClick?.(e);
    };

    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const cls = classNames(
        prefixCls,
        {
            [`${prefixCls}-checkable`]: true,
            [`${prefixCls}-checkable-checked`]: checked
        },
        className,
    );

    return <span {...restProps} className={cls} onClick={handleClick} />;
};

export default CheckableTag;
