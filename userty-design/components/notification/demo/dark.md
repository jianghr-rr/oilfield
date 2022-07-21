---
order: 1
title: 基本使用
---


```jsx
import {notification, Button} from 'skd';

function handleClick(e) {
    notification.success({
        message: '成功提示',
        description: '提示成功的文案',
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
    notification.success({
        message: '成功提示',
        // description: '提示成功的文案',
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
        >成功提示</Button>
        <p />
        <Button
            type="primary"
            onClick={e => handleClick2(e)}
        >成功提示无简介</Button>
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
