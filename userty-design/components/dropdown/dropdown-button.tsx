import React, {useCallback, useState} from 'react';
import classNames from 'classnames';
import OutlinedDown from '@ant-design/icons/lib/icons/DownOutlined';
import Button from '../button';
import {ButtonHTMLType} from '../button/button';
import {ButtonGroupProps} from '../button/button-group';
import {ConfigContext} from '../config-provider';
import Dropdown, {DropDownProps} from './dropdown';

const ButtonGroup = Button.Group;

type DropdownButtonType = 'primary' | 'ghost' | 'dashed';

export interface DropdownButtonProps extends ButtonGroupProps, DropDownProps {
  type?: DropdownButtonType;
  htmlType?: ButtonHTMLType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  title?: string;
  buttonsRender?: (buttons: React.ReactNode[]) => React.ReactNode[];
}

interface DropdownButtonInterface extends React.FC<DropdownButtonProps> {
  __ANT_BUTTON: boolean;
}

const DropdownButton: DropdownButtonInterface = props => {
    const {
        getPopupContainer: getContextPopupContainer,
        getPrefixCls,
        direction
    } = React.useContext(ConfigContext);

    const {
        prefixCls: customizePrefixCls,
        type,
        disabled,
        onClick,
        htmlType,
        children,
        className,
        overlay,
        trigger,
        align,
        visible,
        onVisibleChange,
        placement,
        getPopupContainer,
        href,
        icon = <OutlinedDown />,
        title,
        buttonsRender,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        ...restProps
    } = props;

    const prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
    const dropdownProps = {
        align,
        overlay,
        disabled,
        trigger: disabled ? [] : trigger,
        onVisibleChange,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle
    } as DropDownProps;

    if ('visible' in props) {
        dropdownProps.visible = visible;
    }

    if ('placement' in props) {
        dropdownProps.placement = placement;
    }
    else {
        dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
    }

    const leftButton = (
        <Button
            type={type}
            disabled={disabled}
            onClick={onClick}
            htmlType={htmlType}
            href={href}
            title={title}
        >
            {children}
        </Button>
    );

    // 菜单可见，需要将ICON旋转
    const [popupVisible, setPopupVisible] = useState(!!visible);
    const handleVisibleChange = useCallback((visible: boolean) => {
        if (!('visible' in props)) {
            setPopupVisible(visible);
        }
        onVisibleChange?.(visible);
    }, []);

    const arrowCls = classNames({
        ['antd-btn-group-expand']: popupVisible
    });

    const rightButton = <Button type={type} icon={icon} className={arrowCls} />;

    const [leftButtonToRender, rightButtonToRender] = buttonsRender!([leftButton, rightButton]);

    return (
        <ButtonGroup {...restProps} className={classNames(prefixCls, className)}>
            {leftButtonToRender}
            <Dropdown
                {...dropdownProps}
                onVisibleChange={handleVisibleChange}
            >{rightButtonToRender}</Dropdown>
        </ButtonGroup>
    );
};

DropdownButton.__ANT_BUTTON = true;

DropdownButton.defaultProps = {
    type: 'default' as DropdownButtonType,
    buttonsRender: (buttons: React.ReactNode[]) => buttons
};

export default DropdownButton;
