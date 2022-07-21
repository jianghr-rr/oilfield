import * as React from 'react';
import classNames from 'classnames';
import type { DatePanelProps } from '../DatePanel';
import DatePanel from '../DatePanel';
import type { SharedTimeProps } from '../TimePanel';
import TimePanel from '../TimePanel';
import { tuple } from '../../utils/miscUtil';
import { setDateTime as setTime } from '../../utils/timeUtil';
import type { PanelRefProps, DisabledTime } from '../../interface';

export type DatetimePanelProps<DateType> = {
    disabledTime?: DisabledTime<DateType>;
    showTime?: boolean | SharedTimeProps<DateType>;
    defaultValue?: DateType;
} & Omit<
    DatePanelProps<DateType>,
    'disabledHours' | 'disabledMinutes' | 'disabledSeconds'
>;

const ACTIVE_PANEL = tuple('date', 'time');
type ActivePanelType = typeof ACTIVE_PANEL[number];

function DatetimePanel<DateType>(props: DatetimePanelProps<DateType>) {
    const {
        prefixCls,
        generateConfig,
        value,
        defaultValue,
        disabledTime,
        showTime,
        onSelect,
    } = props;
    const panelPrefixCls = `${prefixCls}-datetime-panel`;
    // @ts-ignore
    const [activePanel, setActivePanel] = React.useState<ActivePanelType | null>(
        null,
    );

    const dateOperationRef = React.useRef<PanelRefProps>({});
    const timeOperationRef = React.useRef<PanelRefProps>({});

    const timeProps = typeof showTime === 'object' ? { ...showTime } : {};

    // ======================== Events ========================
    const onInternalSelect = (date: DateType, source: 'date' | 'time') => {
        let selectedDate = date;

        if (source === 'date' && !value && timeProps.defaultValue) {
            // Date with time defaultValue
            selectedDate = generateConfig.setHour(
                selectedDate,
                generateConfig.getHour(timeProps.defaultValue),
            );
            selectedDate = generateConfig.setMinute(
                selectedDate,
                generateConfig.getMinute(timeProps.defaultValue),
            );
            selectedDate = generateConfig.setSecond(
                selectedDate,
                generateConfig.getSecond(timeProps.defaultValue),
            );
        } else if (source === 'time' && !value && defaultValue) {
            selectedDate = generateConfig.setYear(
                selectedDate,
                generateConfig.getYear(defaultValue),
            );
            selectedDate = generateConfig.setMonth(
                selectedDate,
                generateConfig.getMonth(defaultValue),
            );
            selectedDate = generateConfig.setDate(
                selectedDate,
                generateConfig.getDate(defaultValue),
            );
        }

        if (onSelect) {
            onSelect(selectedDate, 'mouse');
        }
    };

    // ======================== Render ========================
    const disabledTimes = disabledTime ? disabledTime(value || null) : {};

    return (
        <div
            className={classNames(panelPrefixCls, {
                [`${panelPrefixCls}-active`]: activePanel,
            })}
        >
            <DatePanel
                {...props}
                operationRef={dateOperationRef}
                active={activePanel === 'date'}
                onSelect={date => {
                    onInternalSelect(
                        setTime(
                            generateConfig,
                            date,
                            showTime && typeof showTime === 'object'
                                ? showTime.defaultValue
                                : null,
                        ),
                        'date',
                    );
                }}
            />
            <TimePanel
                {...props}
                format={undefined}
                {...timeProps}
                {...disabledTimes}
                defaultValue={undefined}
                operationRef={timeOperationRef}
                active={activePanel === 'time'}
                onSelect={date => {
                    onInternalSelect(date, 'time');
                }}
            />
        </div>
    );
}

export default DatetimePanel;
