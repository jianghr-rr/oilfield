import * as React from 'react';
import InputNumber from '../../../../input-number';
import type { GenerateConfig } from '../../generate';
import type { Locale, OnSelect } from '../../interface';
import type { SharedTimeProps } from '.';
import { setTime as utilSetTime } from '../../utils/timeUtil';

export type BodyOperationRef = {
    onUpDown: (diff: number) => void;
};

export type TimeBodyProps<DateType> = {
    prefixCls: string;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    value?: DateType | null;
    onSelect: OnSelect<DateType>;
    activeColumnIndex: number;
    operationRef: React.MutableRefObject<BodyOperationRef | undefined>;
} & SharedTimeProps<DateType>;

function TimeBody<DateType>(props: TimeBodyProps<DateType>) {
    const {
        generateConfig,
        prefixCls,
        value,
        onSelect,
    } = props;

    const contentPrefixCls = `${prefixCls}-content`;

    const time = React.useMemo(() => {
        const originHour = value ? generateConfig.getHour(value) : 0;
        let hour = originHour;
        const minute = value ? generateConfig.getMinute(value) : 0;
        const second = value ? generateConfig.getSecond(value) : 0;
        return [hour, minute, second];
    }, [value]);

    const setTime = (
        newHour: number,
        newMinute: number,
        newSecond: number,
    ) => {
        let newDate = value || generateConfig.getNow();

        const mergedHour = Math.max(0, newHour);
        const mergedMinute = Math.max(0, newMinute);
        const mergedSecond = Math.max(0, newSecond);

        newDate = utilSetTime(
            generateConfig,
            newDate,
            mergedHour,
            mergedMinute,
            mergedSecond,
        );

        return newDate;
    };

    return (
        <div className={contentPrefixCls}>
            <InputNumber
                key="hour"
                defaultValue={time[0]}
                value={time[0]}
                min={0}
                max={23}
                onChange={num => {
                    onSelect(setTime((num as number), time[1], time[2]), 'mouse');
                }}
            />
            <InputNumber
                key="minute"
                defaultValue={time[1]}
                value={time[1]}
                min={0}
                max={59}
                onChange={num => {
                    onSelect(setTime(time[0], (num as number), time[2]), 'mouse');
                }}
            />
            <InputNumber
                key="second"
                defaultValue={time[2]}
                value={time[2]}
                min={0}
                max={59}
                onChange={num => {
                    onSelect(setTime(time[0], time[1], (num as number)), 'mouse');
                }}
            />
        </div>
    );
}

export default TimeBody;
