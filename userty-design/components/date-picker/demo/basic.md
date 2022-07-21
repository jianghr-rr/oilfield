---
order: 0
title: 范围选择器
---

范围选择器
通过`disabled`控制是否禁用

通过`defaultValue`设置默认日期

通过`ranges`预设常用的日期范围以提高用户体验

```jsx
import {DatePicker} from "skd";
import moment from 'moment';
import locale from 'skd/es/date-picker/locale/zh_CN';

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
ReactDOM.render(
    <div className="box">
        <RangePicker locale={locale} picker="month" />
        <br />
        <RangePicker locale={locale} />
        <br />
        <RangePicker
            defaultValue={[moment('2021-05-06', dateFormat), moment('2021-06-20', dateFormat)]}
            locale={locale}
        />
        <br />
        <RangePicker disabled />
        <br />
        <RangePicker
            locale={locale}
            ranges={{
                今天: [moment(), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')],
            }}
        />
        <br />
        <RangePicker locale={locale} showTime />
    </div>,
    mountNode
);
```

```css
.box >div {
    margin-bottom: 10px;
}
```
