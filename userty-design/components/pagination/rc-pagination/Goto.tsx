/**
 * @file  pagination/rc-pagination/Goto
 * @author jianghaoran01
 */

import React from 'react';

import Button from '../../button';
import {KEYCODE} from './KeyCode';

export interface GotoProps {
    locale?: {jump_to_confirm?: string, jump_to?: string, page?: string, jump_goto?: string};
    rootPrefixCls?: string;
    disabled?: boolean;
    quickGo?: (page: (number | undefined)) => void;
    goButton?: boolean | React.ReactNode;
    current?: number;
};

const Goto: React.FC<GotoProps> = ({
    locale,
    rootPrefixCls,
    quickGo,
    goButton,
    disabled
}) => {

    const prefixCls = `${rootPrefixCls}-options`;

    const [goInputText, setGoInputText]: [any, (goInputText: any) => void] = React.useState('');

    const getValidValue = React.useMemo(() => {
        // eslint-disable-next-line no-restricted-globals
        return !goInputText || isNaN(goInputText)
            ? undefined
            : Number(goInputText);
    }, [goInputText]);

    const handleChange = React.useCallback(e => setGoInputText(e.target.value), []);

    const handleBlur = React.useCallback(e => {
        if (goButton || goInputText === '') {
            return;
        }

        setGoInputText('');

        if (
            e.relatedTarget
            && (e.relatedTarget.className.indexOf(`${rootPrefixCls}-item-link`) >= 0
            || e.relatedTarget.className.indexOf(`${rootPrefixCls}-item`) >= 0)
        ) {
            return;
        }

        quickGo(getValidValue);
    }, [quickGo, getValidValue, goInputText, rootPrefixCls, goButton]);

    const go = React.useCallback(e => {
        if (goInputText === '') {
            return;
        }
        if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
            setGoInputText('');
            quickGo(getValidValue);
        }
    }, [goInputText, quickGo, getValidValue]);

    const gotoButton = React.useMemo(() => {
        if (goButton) {
            if (typeof goButton === 'boolean') {
                return (
                    <Button
                        type="default"
                        onClick={go}
                        onKeyUp={go}
                        disabled={disabled}
                        className={`${prefixCls}-quick-jumper-button`}
                    >
                        {locale.jump_to_confirm}
                    </Button>
                );
            }
            return (
                <span onClick={go} onKeyUp={go}>
                    {goButton}
                </span>
            );
        }
        return (
            <Button
                type="default"
                onClick={go}
                onKeyUp={go}
                disabled={disabled}
                className={`${prefixCls}-quick-jumper-button`}
            >
                {locale.jump_goto ? locale.jump_goto : 'GO'}
            </Button>
        );
    }, [goButton, locale, go, disabled, prefixCls]);

    const goInput = React.useMemo(() => {
        if (quickGo) {
            return (
                <div className={`${prefixCls}-quick-jumper`}>
                    {locale.jump_to}
                    <input
                        disabled={disabled}
                        type="text"
                        value={goInputText}
                        onChange={handleChange}
                        onKeyUp={go}
                        onBlur={handleBlur}
                    />
                    {locale.page}
                    {gotoButton}
                </div>
            );
        }
        return null;
    }, [gotoButton, quickGo, goInputText, disabled, handleChange, go, handleBlur, locale, prefixCls]);

    if (!quickGo) {
        return null;
    }
    return <li className={`${prefixCls}`}>{goInput}</li>;
};

export default Goto;
