---
order: 3
title: 改变
---
改变每页显示条目数。


```jsx
import { Pagination } from 'skd';

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}

function showTotal(total) {
    return `共 ${total} 条`;
}

ReactDOM.render(
    <>
        <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
            showTotal={showTotal}
        />
        <br />
        <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
            showTotal={showTotal}
            disabled
        />
    </>,
  mountNode,
);
```
