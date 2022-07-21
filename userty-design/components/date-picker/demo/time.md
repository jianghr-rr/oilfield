---
order: 2
title: 时间选择器
---

时间选择器

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
        <DatePicker locale={locale} picker="month" />
        <br />
        <DatePicker locale={locale} showToday={false} />
        <br />
        <DatePicker locale={locale} showTime showNow={false} />
        <br />
    </div>,
    mountNode
);
```

```css
.box >div {
    margin-bottom: 10px;
}
```
