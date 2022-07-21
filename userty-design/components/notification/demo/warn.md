---
order: 1
title: 基本使用
---


```jsx
import {notification, Button} from 'skd';

function handleClick(e) {
    notification.warning({
        message: '警告提示',
        description: '通知警告的信息',
        duration: 5,
        onClick: () => {
            console.log('点击取消回调');
        }
    });
}

function handleClick2(e) {
    notification.warning({
        message: '警告提示',
        // description: '通知警告的信息',
        duration: 5,
        onClick: () => {
            console.log('点击取消回调');
        }
    });
}

ReactDOM.render(
    <div>
        <Button
            type="primary"
            onClick={e => handleClick(e)}
        >警告提示</Button>
        <p />
        <Button
            type="primary"
            onClick={e => handleClick2(e)}
        >警告提示无简介</Button>
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
