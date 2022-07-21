---
order: 2
title: 跳转
---
快速跳转到某一页。


```jsx
import { Pagination } from 'skd';

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

function showTotal(total) {
    return `共 ${total} 条`;
}

ReactDOM.render(
    <>
        <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            showTotal={showTotal}
        />
        <br />
        <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            disabled
            showTotal={showTotal}
        />
    </>,
    mountNode
);
```
