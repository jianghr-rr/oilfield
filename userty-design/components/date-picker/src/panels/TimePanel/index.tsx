import * as React from 'react';
import classNames from 'classnames';
import type { BodyOperationRef } from './TimeBody';
import TimeBody from './TimeBody';
import type { PanelSharedProps, DisabledTimes } from '../../interface';

export type SharedTimeProps<DateType> = {
    format?: string;
    showNow?: boolean;
    showHour?: boolean;
    showMinute?: boolean;
    showSecond?: boolean;
    use12Hours?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    hideDisabledOptions?: boolean;
    defaultValue?: DateType;
} & DisabledTimes;

export type TimePanelProps<DateType> = {
    format?: string;
    active?: boolean;
} & PanelSharedProps<DateType> & SharedTimeProps<DateType>;

function TimePanel<DateType>(props: TimePanelProps<DateType>) {
    const {
        // format = 'HH:mm:ss',
        prefixCls,
        active,
    } = props;
    const panelPrefixCls = `${prefixCls}-time-panel`;
    const bodyOperationRef = React.useRef<BodyOperationRef>();

    // ======================= Keyboard =======================
    // @ts-ignore
    const [activeColumnIndex, setActiveColumnIndex] = React.useState(-1);

    return (
        <div
            className={classNames(panelPrefixCls, {
                [`${panelPrefixCls}-active`]: active,
            })}
        >
            <TimeBody
                {...props}
                prefixCls={prefixCls}
                activeColumnIndex={activeColumnIndex}
                operationRef={bodyOperationRef}
            />
        </div>
    );
}

export default TimePanel;
