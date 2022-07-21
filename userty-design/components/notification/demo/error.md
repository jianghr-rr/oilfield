---
order: 1
title: 基本使用
---


```jsx
import {notification, Button} from 'skd';

function handleClick(e) {
    notification.error({
        message: '报错提示',
        description: '操作失败，请重新操作',
        duration: 5,
        onClick: () => {
            console.log('点击取消回调');
        },
        onClose: () => {
            console.log('toast 关闭了');
        }
    });
}

function handleClick2(e) {
    notification.error({
        message: '报错提示',
        // description: '操作失败，请重新操作',
        duration: 5,
        onClick: () => {
            console.log('点击取消回调');
        },
        onClose: () => {
            console.log('toast 关闭了');
        }
    });
}

ReactDOM.render(
    <div>
        <Button
            type="primary"
            onClick={e => handleClick(e)}
        >错误提示</Button>
        <p />
        <Button
            type="primary"
            onClick={e => handleClick2(e)}
        >错误提示无简介</Button>
    </div>,
    mountNode,
);
```

```css
.container {
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
}
.container .acud-dropdown-trigger {
    margin-right: 18px;
    margin-bottom: 12px;
}
```
